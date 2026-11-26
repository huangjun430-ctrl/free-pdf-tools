# Free PDF Tools / 免费 PDF 工具

A 100% client-side, zero-backend static website offering 6 essential PDF tools. All file parsing, conversion, and generation happen directly in your browser — **your files never leave your computer**.

纯静态前端 PDF 工具站，6 个常用 PDF 工具全部在浏览器本地处理，**文件不出你的电脑**，无需后端服务器、无需注册登录。

## Included Tools / 包含工具

1. **PDF to Word (`pdf-to-word.html`)** — Extract text and basic paragraphs from PDF into an editable `.docx` file (`pdf.js` + `docx`).
2. **PDF to Excel (`pdf-to-excel.html`)** — Reconstruct rows and columns from text-based PDFs into `.xlsx` (`pdf.js` + `SheetJS / xlsx`).
3. **Merge PDF (`merge-pdf.html`)** — Combine multiple PDFs with drag-and-drop reordering (`pdf-lib`).
4. **Compress PDF (`compress-pdf.html`)** — Compress PDFs toward a target size (`100 KB` / `500 KB` / `1 MB` / custom) using lossless optimization and adaptive JPEG page re-encoding (`pdf-lib` + `pdf.js`).
5. **Split PDF (`split-pdf.html`)** — Split by page ranges (`1-3, 5`) or every `N` pages, with single-PDF or `.zip` batch download (`pdf-lib` + `JSZip`).
6. **JPG to PDF (`jpg-to-pdf.html`)** — Convert multiple JPG/PNG/WebP images into PDF with reordering, rotation, page size (`A4` / `Letter` / `Fit`), orientation, and margins (`jsPDF`).

## Bilingual Support / 中英文双语

- Automatically selects Chinese (`zh`) when `navigator.language` starts with `zh`, otherwise English (`en`).
- Click the language toggle button in the top-right header (`中文` / `English`) on any page to switch immediately (saved in `localStorage`).

## Pinned Client-Side CDN Libraries

- `pdfjs-dist@3.11.174` (jsDelivr)
- `pdf-lib@1.17.1` (jsDelivr)
- `docx@8.5.0` (jsDelivr)
- `xlsx@0.18.5` (jsDelivr)
- `jspdf@2.5.1` (jsDelivr)
- `jszip@3.10.1` (jsDelivr)

## Local Usage & Deployment / 本地使用与部署

- **Local**: Open `index.html` directly in a modern browser, or serve via any static file server (e.g., `python3 -m http.server 8080`).
- **GitHub Pages**: Push this directory to the `huangjun430-ctrl/free-pdf-tools` public repository and enable GitHub Pages on the default branch (`https://huangjun430-ctrl.github.io/free-pdf-tools/`).
