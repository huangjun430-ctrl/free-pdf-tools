(function (global) {
  "use strict";

  const MAX_FILE_BYTES = 50 * 1024 * 1024; // 50 MB recommended browser limit
  const PDFJS_WORKER_URL = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

  function t(key, params) {
    return global.PDFToolsI18n ? global.PDFToolsI18n.t(key, params) : key;
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes < 0) return "0 B";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }

  function yieldToUI() {
    return new Promise((resolve) => setTimeout(resolve, 0));
  }

  function readFileAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error || new Error("Failed to read file"));
      reader.readAsArrayBuffer(file);
    });
  }

  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error || new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  }

  function triggerDownload(data, filename, mimeType) {
    const blob = data instanceof Blob ? data : new Blob([data], { type: mimeType || "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1500);
    return blob;
  }

  function stripExtension(filename) {
    return String(filename || "document").replace(/\.[^/.]+$/, "");
  }

  function configurePdfJs() {
    if (!global.pdfjsLib) return false;
    if (!global.pdfjsLib.GlobalWorkerOptions.workerSrc) {
      global.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL;
    }
    return true;
  }

  async function loadPdfJsDocument(arrayBuffer) {
    if (!configurePdfJs()) {
      throw new Error(t("errLibMissing"));
    }
    // Pass a copy so pdf.js transferring buffer to worker never detaches caller's ArrayBuffer
    const copy = new Uint8Array(arrayBuffer.slice(0));
    const task = global.pdfjsLib.getDocument({ data: copy });
    return task.promise;
  }

  function isPdfFile(file) {
    if (!file) return false;
    const name = (file.name || "").toLowerCase();
    return file.type === "application/pdf" || name.endsWith(".pdf");
  }

  function isImageFile(file) {
    if (!file) return false;
    const name = (file.name || "").toLowerCase();
    return (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp" ||
      /\.(jpe?g|png|webp)$/.test(name)
    );
  }

  function validateFiles(files, mode) {
    const valid = [];
    for (const file of files) {
      if (mode === "pdf" && !isPdfFile(file)) {
        return { error: t("errInvalidPdf") };
      }
      if (mode === "image" && !isImageFile(file)) {
        return { error: t("errInvalidImage") };
      }
      if (file.size === 0) {
        return { error: t("errEmptyFile", { name: file.name }) };
      }
      if (file.size > MAX_FILE_BYTES) {
        return { error: t("errTooLarge", { name: file.name }) };
      }
      valid.push(file);
    }
    return { valid };
  }

  function setupDropzone(opts) {
    const {
      dropzone,
      input,
      browseBtn,
      multiple = false,
      acceptType = "pdf",
      onFiles,
      onError
    } = opts;

    function handleList(fileList) {
      const files = Array.from(fileList || []);
      if (!files.length) return;
      const picked = multiple ? files : [files[0]];
      const check = validateFiles(picked, acceptType);
      if (check.error) {
        if (onError) onError(check.error);
        return;
      }
      if (onFiles) onFiles(check.valid);
    }

    if (browseBtn) {
      browseBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        input.click();
      });
    }

    dropzone.addEventListener("click", () => {
      input.click();
    });

    dropzone.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        input.click();
      }
    });

    input.addEventListener("change", () => {
      handleList(input.files);
      input.value = "";
    });

    ["dragenter", "dragover"].forEach((evt) => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add("dragover");
      });
    });

    ["dragleave", "drop"].forEach((evt) => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove("dragover");
      });
    });

    dropzone.addEventListener("drop", (e) => {
      if (e.dataTransfer && e.dataTransfer.files) {
        handleList(e.dataTransfer.files);
      }
    });
  }

  function createProgressUI(wrapEl, fillEl, textEl, pctEl) {
    return {
      show(pct, text) {
        wrapEl.classList.remove("hidden");
        const clamped = Math.max(0, Math.min(100, Math.round(pct)));
        fillEl.style.width = clamped + "%";
        if (textEl && text !== undefined) textEl.textContent = text;
        if (pctEl) pctEl.textContent = clamped + "%";
      },
      hide() {
        wrapEl.classList.add("hidden");
        fillEl.style.width = "0%";
      }
    };
  }

  function showAlert(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("hidden");
  }

  function hideEl(el) {
    if (el) el.classList.add("hidden");
  }

  function showEl(el) {
    if (el) el.classList.remove("hidden");
  }

  function classifyPdfError(err, filename) {
    const msg = String((err && (err.message || err.name)) || err || "");
    if (/password|encrypt/i.test(msg)) {
      return t("errEncryptedPdf", { name: filename || "" });
    }
    if (/invalid pdf|format|parse|header|corrupt/i.test(msg)) {
      return t("errReadPdf", { name: filename || "" });
    }
    return t("errGeneric", { msg });
  }

  function attachDragReorder(rowEl, index, items, onReorder) {
    let dragSrcIndex = null;
    rowEl.setAttribute("draggable", "true");
    rowEl.dataset.index = String(index);

    rowEl.addEventListener("dragstart", (e) => {
      dragSrcIndex = Number(rowEl.dataset.index);
      rowEl.classList.add("dragging");
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", String(dragSrcIndex));
      }
    });

    rowEl.addEventListener("dragend", () => {
      rowEl.classList.remove("dragging");
    });

    rowEl.addEventListener("dragover", (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
    });

    rowEl.addEventListener("drop", (e) => {
      e.preventDefault();
      const fromIndex = e.dataTransfer ? Number(e.dataTransfer.getData("text/plain")) : dragSrcIndex;
      const toIndex = Number(rowEl.dataset.index);
      if (!Number.isInteger(fromIndex) || !Number.isInteger(toIndex) || fromIndex === toIndex) return;
      const [moved] = items.splice(fromIndex, 1);
      items.splice(toIndex, 0, moved);
      if (onReorder) onReorder();
    });
  }

  function initCommon() {
    if (global.PDFToolsI18n) {
      global.PDFToolsI18n.applyTranslations();
    }
    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn && global.PDFToolsI18n) {
      langBtn.addEventListener("click", () => {
        global.PDFToolsI18n.toggleLang();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", initCommon);

  global.PDFTools = {
    t,
    formatBytes,
    yieldToUI,
    readFileAsArrayBuffer,
    readFileAsDataURL,
    triggerDownload,
    stripExtension,
    configurePdfJs,
    loadPdfJsDocument,
    setupDropzone,
    createProgressUI,
    showAlert,
    hideEl,
    showEl,
    classifyPdfError,
    attachDragReorder,
    MAX_FILE_BYTES
  };
})(window);
