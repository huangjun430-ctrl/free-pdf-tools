(function (global) {
  "use strict";

  const STORAGE_KEY = "free_pdf_tools_lang";

  const TRANSLATIONS = {
    zh: {
      siteName: "免费 PDF 工具",
      langToggle: "English",
      navHome: "首页",
      navPdfToWord: "PDF 转 Word",
      navPdfToExcel: "PDF 转 Excel",
      navMergePdf: "合并 PDF",
      navCompressPdf: "压缩 PDF",
      navSplitPdf: "拆分 PDF",
      navJpgToPdf: "JPG 转 PDF",

      homePageTitle: "免费 PDF 工具 — 纯浏览器本地处理，文件不出电脑",
      homeMetaDesc: "免费在线 PDF 工具箱：PDF 转 Word、PDF 转 Excel、合并、压缩、拆分、JPG 转 PDF。纯浏览器本地处理，不上传服务器，无需注册。",
      heroTitle: "免费、极速的本地 PDF 工具箱",
      heroSubtitle: "6 个常用 PDF 工具，全部在你的浏览器内离线计算完成，无需注册、没有广告弹窗。",
      privacyBadge: "🔒 承诺：文件不出你的电脑，绝不上传服务器",
      openTool: "立即使用 →",

      trustLocalTitle: "100% 本地处理",
      trustLocalDesc: "所有解析与转换均在你的浏览器内存中完成，不发送任何文件到云端。",
      trustFreeTitle: "完全免费无套路",
      trustFreeDesc: "不设注册登录、不限次数、没有“登录后下载”或付费解锁门槛。",
      trustFastTitle: "开源库驱动",
      trustFastDesc: "基于 pdf.js、pdf-lib、SheetJS、jsPDF 等成熟开源技术构建。",

      footerPromise: "🔒 隐私承诺：所有文件均在你的浏览器本地处理，文件不出你的电脑。",
      footerNote: "纯静态开源工具站 · 零上传 · 零追踪",

      backHome: "← 返回所有工具",
      localNotice: "🔒 文件仅在你的浏览器中处理，不会上传到任何服务器。",

      // Common upload & actions
      dropTitleSingle: "拖拽文件到这里，或点击选择文件",
      dropTitleMulti: "拖拽多个文件到这里，或点击选择文件",
      dropHintPdf: "支持 .pdf 文件（建议 50MB 以内，大文件也可本地处理）",
      dropHintImages: "支持 .jpg / .jpeg / .png 图片，可一次选择多张",
      chooseFileBtn: "选择文件",
      chooseFilesBtn: "添加更多文件",
      clearBtn: "清空",
      removeBtn: "移除",
      moveUpBtn: "上移",
      moveDownBtn: "下移",
      rotateBtn: "旋转 90°",
      optionsTitle: "参数设置",
      progressWorking: "正在处理中...",
      progressDone: "处理完成！",
      resultTitle: "处理成功",
      downloadBtn: "下载文件",
      downloadZipBtn: "打包下载全部 (.zip)",
      previewLabel: "内容预览",
      fileInfoPages: "{pages} 页 · {size}",
      dragReorderHint: "提示：可拖动列表项或点击上下箭头调整顺序",

      // Common errors
      errInvalidPdf: "请选择有效的 PDF 文件（.pdf）。",
      errInvalidImage: "请选择有效的图片文件（.jpg / .jpeg / .png）。",
      errEmptyFile: "文件“{name}”为空文件（0 字节），无法处理。",
      errTooLarge: "文件“{name}”超过 50MB，浏览器处理可能导致卡顿，请先拆分或更换较小的文件。",
      errEncryptedPdf: "文件“{name}”已加密或受密码保护，请先解除密码后再试。",
      errReadPdf: "无法读取 PDF 文件“{name}”，文件可能已损坏或格式不受支持。",
      errNoTextScanned: "这个 PDF 是扫描图片，没有可选文字，转换结果会是空文档。",
      errLibMissing: "所需组件未能加载，请检查网络连接后刷新页面重试。",
      errGeneric: "处理失败：{msg}",

      // Tool 1: PDF to Word
      wordPageTitle: "PDF 转 Word (.docx) — 免费 PDF 工具",
      wordMetaDesc: "免费在线将 PDF 转换为可编辑 Word (.docx) 文档，纯浏览器本地提取文本与段落，不上传文件。",
      wordTitle: "PDF 转 Word",
      wordDesc: "提取 PDF 中的文本并生成可编辑的 .docx Word 文档（注：保留文本与基本段落，复杂排版会丢失）。",
      wordOptPageBreak: "在每页 PDF 之间插入分页符",
      wordOptMergeLines: "智能合并同一段落的折行文本",
      wordBtn: "开始转换为 Word",
      wordProgressPage: "正在提取第 {current} / {total} 页文本...",
      wordProgressBuild: "正在生成 .docx 文档...",
      wordResultMeta: "已转换 {pages} 页，共提取 {paragraphs} 个段落（{chars} 字符）。",
      wordDownloadBtn: "下载 Word 文档 (.docx)",

      // Tool 2: PDF to Excel
      excelPageTitle: "PDF 转 Excel (.xlsx) — 免费 PDF 工具",
      excelMetaDesc: "免费在浏览器本地将 PDF 表格与文本提取并导出为 Excel (.xlsx) 文件。",
      excelTitle: "PDF 转 Excel",
      excelDesc: "识别 PDF 页面中的行列文本并导出为 .xlsx Excel 表格（纯文本坐标还原，适合含文字的表格 PDF）。",
      excelOptSheetMode: "工作表模式",
      excelOptPerPage: "每页一个工作表（Sheet1, Sheet2...）",
      excelOptSingleSheet: "全部页面合并到同一个工作表",
      excelOptGapSensitivity: "列分隔灵敏度",
      excelOptAuto: "标准（自动按文字间距分列）",
      excelOptTight: "较细（适合密集表格）",
      excelOptLoose: "较宽（减少误拆分）",
      excelBtn: "开始转换为 Excel",
      excelProgressPage: "正在解析第 {current} / {total} 页表格...",
      excelProgressBuild: "正在生成 .xlsx 文件...",
      excelResultMeta: "已生成 {sheets} 个工作表，共 {rows} 行数据。",
      excelDownloadBtn: "下载 Excel 表格 (.xlsx)",

      // Tool 3: Merge PDF
      mergePageTitle: "合并 PDF — 免费 PDF 工具",
      mergeMetaDesc: "免费将多个 PDF 文件合并为一个 PDF，支持拖拽排序，文件全程留在本地浏览器。",
      mergeTitle: "合并 PDF",
      mergeDesc: "上传多个 PDF 文件，自由拖拽调整合并顺序，一键合成一个完整 PDF。",
      mergeOptFilename: "输出文件名",
      mergeBtn: "开始合并 PDF",
      mergeErrNeedTwo: "请至少添加 2 个 PDF 文件后再合并。",
      mergeProgressFile: "正在合并第 {current} / {total} 个文件...",
      mergeProgressSave: "正在保存合并后的 PDF...",
      mergeResultMeta: "已成功合并 {files} 个文件，共 {pages} 页（输出大小 {size}）。",
      mergeDownloadBtn: "下载合并后的 PDF",

      // Tool 4: Compress PDF
      compressPageTitle: "压缩 PDF — 免费 PDF 工具",
      compressMetaDesc: "在浏览器本地压缩 PDF 文件大小，支持 100KB / 500KB / 1MB 或自定义目标大小。",
      compressTitle: "压缩 PDF",
      compressDesc: "按目标大小本地压缩 PDF（支持 100KB / 500KB / 1MB / 自定义；必要时会通过降采样页面图片达到目标体积）。",
      compressOptTarget: "目标文件大小",
      compressOptCustomLabel: "自定义大小 (KB)",
      compressOptCustomPlaceholder: "例如 300",
      compressOptModeNote: "说明：会先尝试无损结构压缩；若仍大于目标体积，将把页面重绘为压缩图片以尽量达到目标大小。",
      compressBtn: "开始压缩 PDF",
      compressErrInvalidTarget: "请输入有效的目标大小（至少 20 KB）。",
      compressProgressLossless: "正在尝试无损结构压缩...",
      compressProgressRender: "正在压缩第 {current} / {total} 页（{attempt}）...",
      compressProgressPack: "正在打包并检查输出体积...",
      compressResultMeta: "原始大小：{before} → 压缩后：{after}（减小 {percent}%）",
      compressResultBigger: "原始大小：{before} → 处理后：{after}（原文件已高度压缩，已保留更小版本）",
      compressWarnAboveTarget: "注意：在保持基本可读清晰度的前提下，未能压到目标 {target} 以下，已输出当前最小可读版本（{actual}）。",
      compressDownloadBtn: "下载压缩后的 PDF",

      // Tool 5: Split PDF
      splitPageTitle: "拆分 PDF — 免费 PDF 工具",
      splitMetaDesc: "免费本地拆分 PDF：支持按页码范围提取或每 N 页拆分为多个 PDF 文件。",
      splitTitle: "拆分 PDF",
      splitDesc: "支持按指定页码范围提取，或按每 N 页自动拆分成多个独立的 PDF 文件。",
      splitOptMode: "拆分方式",
      splitModeRange: "按页码范围",
      splitModeEveryN: "每 N 页拆一个",
      splitOptRangeLabel: "页码范围（例如 1-3, 5, 7-9）",
      splitOptRangePlaceholder: "例如 1-3, 5",
      splitOptRangeOutput: "范围输出方式",
      splitOptRangePerSegment: "每个范围段生成一个独立 PDF",
      splitOptRangeCombined: "把所选页码合并成一个 PDF",
      splitOptEveryNLabel: "每多少页拆成一个文件 (N)",
      splitBtn: "开始拆分 PDF",
      splitErrBadRange: "页码范围格式无效或超出总页数（当前共 {total} 页）。示例：1-3, 5",
      splitErrBadN: "请输入大于等于 1 的整数页数 N。",
      splitProgressPart: "正在生成第 {current} / {total} 个输出文件...",
      splitResultMeta: "拆分完成，共生成 {count} 个 PDF 文件。",
      splitDownloadSingle: "下载拆分后的 PDF",

      // Tool 6: JPG to PDF
      jpgPageTitle: "JPG 转 PDF — 免费 PDF 工具",
      jpgMetaDesc: "免费将多张 JPG/PNG 图片本地合成为 PDF，支持调整顺序、页面大小与边距。",
      jpgTitle: "JPG 转 PDF",
      jpgDesc: "选择多张 JPG / PNG 图片，自由调整顺序与页面大小，在本地一键生成 PDF。",
      jpgOptPageSize: "页面大小",
      jpgSizeA4: "A4 (210 × 297 mm)",
      jpgSizeLetter: "Letter (215.9 × 279.4 mm)",
      jpgSizeFit: "自适应每张图片尺寸",
      jpgOptOrientation: "页面方向",
      jpgOrientAuto: "自动匹配图片方向",
      jpgOrientPortrait: "纵向 (Portrait)",
      jpgOrientLandscape: "横向 (Landscape)",
      jpgOptMargin: "页边距",
      jpgMarginNone: "无边距 (0 mm)",
      jpgMarginSmall: "小边距 (10 mm)",
      jpgMarginNormal: "标准边距 (20 mm)",
      jpgBtn: "开始生成 PDF",
      jpgErrNoImages: "请至少添加 1 张图片。",
      jpgProgressImg: "正在处理第 {current} / {total} 张图片...",
      jpgProgressSave: "正在生成 PDF 文件...",
      jpgResultMeta: "已将 {count} 张图片合成为 PDF（输出大小 {size}）。",
      jpgDownloadBtn: "下载生成的 PDF"
    },

    en: {
      siteName: "Free PDF Tools",
      langToggle: "中文",
      navHome: "Home",
      navPdfToWord: "PDF to Word",
      navPdfToExcel: "PDF to Excel",
      navMergePdf: "Merge PDF",
      navCompressPdf: "Compress PDF",
      navSplitPdf: "Split PDF",
      navJpgToPdf: "JPG to PDF",

      homePageTitle: "Free PDF Tools — 100% Browser-Based, Files Never Leave Your Device",
      homeMetaDesc: "Free online PDF tools: PDF to Word, PDF to Excel, Merge, Compress, Split, and JPG to PDF. Processed locally in your browser with zero uploads.",
      heroTitle: "Free, Fast, Local PDF Tools",
      heroSubtitle: "6 essential PDF utilities that run entirely in your browser. No uploads, no accounts, no popups.",
      privacyBadge: "🔒 Promise: Your files never leave your computer",
      openTool: "Open Tool →",

      trustLocalTitle: "100% Client-Side",
      trustLocalDesc: "All parsing and conversion happens in your browser memory. Nothing is sent to any server.",
      trustFreeTitle: "Truly Free",
      trustFreeDesc: "No sign-up walls, no daily limits, and no pay-to-download tricks.",
      trustFastTitle: "Open-Source Powered",
      trustFastDesc: "Built with proven browser libraries including pdf.js, pdf-lib, SheetJS, and jsPDF.",

      footerPromise: "🔒 Privacy Promise: All files are processed locally in your browser and never leave your device.",
      footerNote: "Pure static site · Zero uploads · Zero tracking",

      backHome: "← Back to all tools",
      localNotice: "🔒 Files are processed locally in your browser and are never uploaded to any server.",

      // Common upload & actions
      dropTitleSingle: "Drag & drop a file here, or click to select",
      dropTitleMulti: "Drag & drop multiple files here, or click to select",
      dropHintPdf: "Supports .pdf files (up to 50 MB recommended for smooth browser processing)",
      dropHintImages: "Supports .jpg / .jpeg / .png images (select multiple at once)",
      chooseFileBtn: "Select File",
      chooseFilesBtn: "Add More Files",
      clearBtn: "Clear",
      removeBtn: "Remove",
      moveUpBtn: "Up",
      moveDownBtn: "Down",
      rotateBtn: "Rotate 90°",
      optionsTitle: "Options",
      progressWorking: "Processing...",
      progressDone: "Done!",
      resultTitle: "Ready to Download",
      downloadBtn: "Download",
      downloadZipBtn: "Download All (.zip)",
      previewLabel: "Preview",
      fileInfoPages: "{pages} pages · {size}",
      dragReorderHint: "Tip: Drag items or use the arrow buttons to reorder",

      // Common errors
      errInvalidPdf: "Please select a valid PDF file (.pdf).",
      errInvalidImage: "Please select valid image files (.jpg, .jpeg, or .png).",
      errEmptyFile: "File \"{name}\" is empty (0 bytes) and cannot be processed.",
      errTooLarge: "File \"{name}\" exceeds 50 MB, which may freeze your browser tab. Please use a smaller file or split it first.",
      errEncryptedPdf: "File \"{name}\" is encrypted or password-protected. Please unlock it first.",
      errReadPdf: "Could not read PDF \"{name}\". It may be corrupted or unsupported.",
      errNoTextScanned: "This PDF appears to be a scanned image with no selectable text; converting it would produce an empty document.",
      errLibMissing: "Required library failed to load. Please check your internet connection and refresh.",
      errGeneric: "Processing failed: {msg}",

      // Tool 1: PDF to Word
      wordPageTitle: "PDF to Word (.docx) — Free PDF Tools",
      wordMetaDesc: "Convert PDF text and basic paragraphs to an editable Word (.docx) document directly in your browser.",
      wordTitle: "PDF to Word",
      wordDesc: "Extract text from PDF into an editable .docx document (preserves text and basic paragraphs; complex layouts are simplified).",
      wordOptPageBreak: "Insert page break between PDF pages",
      wordOptMergeLines: "Smartly merge wrapped lines into paragraphs",
      wordBtn: "Convert to Word",
      wordProgressPage: "Extracting text from page {current} of {total}...",
      wordProgressBuild: "Building .docx document...",
      wordResultMeta: "Converted {pages} pages, extracted {paragraphs} paragraphs ({chars} characters).",
      wordDownloadBtn: "Download Word (.docx)",

      // Tool 2: PDF to Excel
      excelPageTitle: "PDF to Excel (.xlsx) — Free PDF Tools",
      excelMetaDesc: "Extract tabular text from PDF files into an Excel (.xlsx) spreadsheet locally in your browser.",
      excelTitle: "PDF to Excel",
      excelDesc: "Extract rows and columns from text-based PDFs into an .xlsx Excel spreadsheet.",
      excelOptSheetMode: "Worksheet mode",
      excelOptPerPage: "One sheet per PDF page (Sheet1, Sheet2...)",
      excelOptSingleSheet: "Merge all pages into one sheet",
      excelOptGapSensitivity: "Column split sensitivity",
      excelOptAuto: "Standard (automatic gap detection)",
      excelOptTight: "Fine (for dense tables)",
      excelOptLoose: "Loose (fewer splits)",
      excelBtn: "Convert to Excel",
      excelProgressPage: "Parsing table structure on page {current} of {total}...",
      excelProgressBuild: "Generating .xlsx workbook...",
      excelResultMeta: "Generated {sheets} sheet(s) with {rows} total rows.",
      excelDownloadBtn: "Download Excel (.xlsx)",

      // Tool 3: Merge PDF
      mergePageTitle: "Merge PDF — Free PDF Tools",
      mergeMetaDesc: "Combine multiple PDF files into one PDF in any order, locally in your browser.",
      mergeTitle: "Merge PDF",
      mergeDesc: "Upload multiple PDFs, drag to reorder them, and combine them into a single PDF file.",
      mergeOptFilename: "Output filename",
      mergeBtn: "Merge PDFs",
      mergeErrNeedTwo: "Please add at least 2 PDF files to merge.",
      mergeProgressFile: "Merging file {current} of {total}...",
      mergeProgressSave: "Saving merged PDF...",
      mergeResultMeta: "Successfully merged {files} files ({pages} pages total, {size}).",
      mergeDownloadBtn: "Download Merged PDF",

      // Tool 4: Compress PDF
      compressPageTitle: "Compress PDF — Free PDF Tools",
      compressMetaDesc: "Compress PDF files locally in your browser with target size presets (100KB, 500KB, 1MB, or custom).",
      compressTitle: "Compress PDF",
      compressDesc: "Shrink PDF file size toward a chosen target (100KB / 500KB / 1MB / custom; rasterizes pages when needed to reach strict targets).",
      compressOptTarget: "Target file size",
      compressOptCustomLabel: "Custom target (KB)",
      compressOptCustomPlaceholder: "e.g. 300",
      compressOptModeNote: "Note: Lossless optimization runs first. If the file still exceeds the target size, pages are re-encoded as compressed JPEG images to fit.",
      compressBtn: "Compress PDF",
      compressErrInvalidTarget: "Please enter a valid target size (at least 20 KB).",
      compressProgressLossless: "Running lossless structural optimization...",
      compressProgressRender: "Compressing page {current} of {total} ({attempt})...",
      compressProgressPack: "Finalizing compressed PDF...",
      compressResultMeta: "Original: {before} → Compressed: {after} ({percent}% smaller)",
      compressResultBigger: "Original: {before} → Result: {after} (already well-compressed; kept the smallest version)",
      compressWarnAboveTarget: "Note: Could not shrink below {target} without making text unreadable; saved the smallest readable result ({actual}).",
      compressDownloadBtn: "Download Compressed PDF",

      // Tool 5: Split PDF
      splitPageTitle: "Split PDF — Free PDF Tools",
      splitMetaDesc: "Split PDF files by page ranges or every N pages directly in your browser.",
      splitTitle: "Split PDF",
      splitDesc: "Extract specific page ranges or split a PDF into multiple files every N pages.",
      splitOptMode: "Split method",
      splitModeRange: "By page range",
      splitModeEveryN: "Every N pages",
      splitOptRangeLabel: "Page ranges (e.g. 1-3, 5, 7-9)",
      splitOptRangePlaceholder: "e.g. 1-3, 5",
      splitOptRangeOutput: "Range output",
      splitOptRangePerSegment: "One separate PDF per range",
      splitOptRangeCombined: "Combine selected pages into one PDF",
      splitOptEveryNLabel: "Pages per split file (N)",
      splitBtn: "Split PDF",
      splitErrBadRange: "Invalid page range or out of bounds (total pages: {total}). Example: 1-3, 5",
      splitErrBadN: "Please enter a whole number N of at least 1.",
      splitProgressPart: "Building output file {current} of {total}...",
      splitResultMeta: "Split complete: created {count} PDF file(s).",
      splitDownloadSingle: "Download Split PDF",

      // Tool 6: JPG to PDF
      jpgPageTitle: "JPG to PDF — Free PDF Tools",
      jpgMetaDesc: "Convert multiple JPG or PNG images into a single PDF with custom page size and ordering.",
      jpgTitle: "JPG to PDF",
      jpgDesc: "Combine multiple JPG / PNG images into a PDF with custom ordering, page size, and margins.",
      jpgOptPageSize: "Page size",
      jpgSizeA4: "A4 (210 × 297 mm)",
      jpgSizeLetter: "Letter (215.9 × 279.4 mm)",
      jpgSizeFit: "Fit to each image",
      jpgOptOrientation: "Orientation",
      jpgOrientAuto: "Auto (match image)",
      jpgOrientPortrait: "Portrait",
      jpgOrientLandscape: "Landscape",
      jpgOptMargin: "Margins",
      jpgMarginNone: "None (0 mm)",
      jpgMarginSmall: "Small (10 mm)",
      jpgMarginNormal: "Normal (20 mm)",
      jpgBtn: "Create PDF",
      jpgErrNoImages: "Please add at least 1 image.",
      jpgProgressImg: "Processing image {current} of {total}...",
      jpgProgressSave: "Generating PDF file...",
      jpgResultMeta: "Combined {count} image(s) into PDF ({size}).",
      jpgDownloadBtn: "Download PDF"
    }
  };

  function detectDefaultLang() {
    try {
      const saved = global.localStorage.getItem(STORAGE_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (_) {
      // Ignore storage access restrictions
    }
    const navLang = (global.navigator && (global.navigator.language || global.navigator.userLanguage)) || "en";
    return navLang.toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  let currentLang = detectDefaultLang();
  const listeners = new Set();

  function t(key, params) {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    let str = dict[key] !== undefined ? dict[key] : (TRANSLATIONS.en[key] !== undefined ? TRANSLATIONS.en[key] : key);
    if (params) {
      Object.keys(params).forEach((k) => {
        str = str.replaceAll("{" + k + "}", String(params[k]));
      });
    }
    return str;
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";

    const pageTitleKey = document.documentElement.dataset.i18nTitle;
    if (pageTitleKey) {
      document.title = t(pageTitleKey);
    }

    const metaDescKey = document.documentElement.dataset.i18nDesc;
    if (metaDescKey) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t(metaDescKey));
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(key));
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key) el.setAttribute("title", t(key));
    });
  }

  function setLang(lang) {
    if (lang !== "zh" && lang !== "en") return;
    currentLang = lang;
    try {
      global.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      // Ignore storage access restrictions
    }
    applyTranslations();
    listeners.forEach((fn) => {
      try {
        fn(currentLang);
      } catch (_) {}
    });
  }

  function toggleLang() {
    setLang(currentLang === "zh" ? "en" : "zh");
  }

  function getLang() {
    return currentLang;
  }

  function onChange(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  global.PDFToolsI18n = {
    TRANSLATIONS,
    t,
    getLang,
    setLang,
    toggleLang,
    applyTranslations,
    onChange
  };
})(window);
