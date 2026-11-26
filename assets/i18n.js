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
      jpgDownloadBtn: "下载生成的 PDF",

      // FAQ
      faqHeading: "常见问题",

      homeFaqQ1: "使用这些免费 PDF 工具需要注册或登录吗？",
      homeFaqA1: "不需要。站内全部 6 个工具均无需注册或登录即可直接使用，也没有每日使用次数限制。",
      homeFaqQ2: "我的 PDF 文件会上传到服务器吗？",
      homeFaqA2: "绝不会。所有解析、转换、合并、拆分和压缩都在你的浏览器内存中本地完成，文件不会离开你的设备。",
      homeFaqQ3: "这些在线 PDF 工具真的完全免费吗？",
      homeFaqA3: "是的。本站所有工具均 100% 免费，没有付费解锁门槛、不加水印，也没有弹窗广告。",
      homeFaqQ4: "网站目前提供哪些 PDF 工具？",
      homeFaqA4: "目前提供 6 个常用工具：PDF 转 Word（.docx）、PDF 转 Excel（.xlsx）、合并 PDF、按目标大小压缩 PDF、拆分 PDF，以及 JPG/PNG 图片转 PDF。",

      wordFaqQ1: "转出来的是可编辑的 Word (.docx) 文档吗？",
      wordFaqA1: "是的。工具会提取 PDF 中的文本和基本段落并生成标准 .docx 文件，可用 Microsoft Word、WPS 或 Google Docs 直接编辑。",
      wordFaqQ2: "扫描版 PDF（纯图片 PDF）能转成 Word 吗？",
      wordFaqA2: "不能。本工具不包含 OCR 文字识别，扫描图片版 PDF 没有可选文字，转出来会是空文档（检测到无文字时页面会提示你）。",
      wordFaqQ3: "原 PDF 的排版和格式会保留吗？",
      wordFaqA3: "会保留文本与基本段落结构（支持智能合并折行文本和每页插入分页符），但复杂的多栏排版、图片或特殊样式会被简化。",
      wordFaqQ4: "在线 PDF 转 Word 免费且安全吗？",
      wordFaqA4: "完全免费且安全。整个转换过程在你的浏览器本地完成，文件不上传服务器，也无需注册。",

      excelFaqQ1: "PDF 里的表格能还原到 Excel 里吗？",
      excelFaqA1: "对于含可选文字的表格型 PDF 可以还原。工具会按文字坐标对齐行与列并导出为 .xlsx，还提供标准、较细、较宽三种分列灵敏度供调整。",
      excelFaqQ2: "转换后是一页一个工作表，还是合在一个工作表里？",
      excelFaqA2: "两种方式都支持。转换前可在参数设置中选择“每页一个工作表（Page_1, Page_2...）”或“全部页面合并到同一个工作表”。",
      excelFaqQ3: "扫描件或图片形式的表格 PDF 能转换吗？",
      excelFaqA3: "不支持。只有包含可选文字的 PDF 才能按坐标提取行列，纯图片扫描件没有文字数据，无法解析出表格内容。",
      excelFaqQ4: "下载前可以先预览提取出的表格吗？",
      excelFaqA4: "可以。转换完成后，下载按钮下方会直接显示提取出的前几行表格预览，方便确认分列效果。",

      mergeFaqQ1: "合并前可以调整 PDF 文件的顺序吗？",
      mergeFaqA1: "可以。添加多个 PDF 后，你可以直接拖拽列表项调整顺序，也可以点击每一项右侧的上下箭头按钮调整位置。",
      mergeFaqQ2: "合并 PDF 有页数或文件数量限制吗？",
      mergeFaqA2: "没有人为设定的页数或次数限制。由于处理都在浏览器内存中完成，为避免页面卡顿，建议单个文件不超过 50 MB。",
      mergeFaqQ3: "可以自定义合并后的 PDF 文件名吗？",
      mergeFaqA3: "可以。在开始合并前的参数设置中可直接修改输出文件名，默认为 merged.pdf。",
      mergeFaqQ4: "合并过程中 PDF 会上传到云端吗？",
      mergeFaqA4: "不会。合并完全在你的浏览器本地完成，你的文档始终留在自己的设备上。",

      compressFaqQ1: "能把 PDF 压缩到 100KB 以下吗？",
      compressFaqA1: "可以选择 100 KB、500 KB、1 MB 或自定义目标大小（最低 20 KB）。如果无损压缩后仍超出目标体积，工具会逐步降采样重绘页面以尽量压到目标大小；若原文件页数过多，为保持基本可读性会输出最小可读版本并给出提示。",
      compressFaqQ2: "压缩 PDF 会损失画质或清晰度吗？",
      compressFaqA2: "工具会先尝试无损结构优化（不损画质）；若体积仍大于目标值，再将页面转为压缩 JPEG 图片。目标体积设得越小，画质损失就越大。",
      compressFaqQ3: "如果原 PDF 本身已经很小或高度压缩了怎么办？",
      compressFaqA3: "如果处理后体积没有变小，工具会自动保留体积更小的版本，不会越压越大。",
      compressFaqQ4: "在线压缩 PDF 会上传文件吗？",
      compressFaqA4: "不会。所有压缩处理均在你的浏览器本地完成，无需注册，文件绝不会离开你的设备。",

      splitFaqQ1: "支持按页码范围拆分，还是按每 N 页拆一个？",
      splitFaqA1: "两种都支持。你可以输入页码范围（如 1-3, 5, 7-9）选择每段单独生成或合并成一个 PDF，也可以按每 N 页自动拆分成多个文件。",
      splitFaqQ2: "拆完后的多个 PDF 怎么下载？",
      splitFaqA2: "如果只生成 1 个文件，可直接点击下载；如果拆出多个 PDF，既可以逐个单独下载，也可以一键“打包下载全部 (.zip)”。",
      splitFaqQ3: "拆分 PDF 会降低页面清晰度吗？",
      splitFaqA3: "不会。拆分时直接复制原 PDF 页面结构生成新文件，不重绘页面，文字和图片清晰度完全不变。",
      splitFaqQ4: "使用拆分工具需要安装软件或注册吗？",
      splitFaqA4: "不需要。打开网页即可免费在浏览器内本地拆分，零上传、无水印、无需账号。",

      jpgFaqQ1: "除了 JPG，还支持 PNG 等其他图片格式吗？",
      jpgFaqA1: "支持。除了 JPG/JPEG，还支持 PNG 和 WebP 图片，并且可以把不同格式的图片混合合成同一个 PDF。",
      jpgFaqQ2: "可以调整生成 PDF 的页面大小、方向和边距吗？",
      jpgFaqA2: "可以。页面大小支持 A4、Letter 或自适应每张图片尺寸；方向支持自动、纵向和横向；边距支持无边距（0 mm）、小边距（10 mm）和标准边距（20 mm）。",
      jpgFaqQ3: "合成 PDF 前能调整图片顺序或旋转图片吗？",
      jpgFaqA3: "可以。上传多张图片后，支持拖拽或点击上下箭头调整顺序，也可以点击每张图片旁的“旋转 90°”按钮旋转方向。",
      jpgFaqQ4: "我的图片会上传到服务器吗？",
      jpgFaqA4: "不会。图片读取、旋转和 PDF 生成全部在你的浏览器本地完成，图片不会上传到任何服务器。"
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
      jpgDownloadBtn: "Download PDF",

      // FAQ
      faqHeading: "Frequently Asked Questions",

      homeFaqQ1: "Do I need to sign up or create an account?",
      homeFaqA1: "No. All 6 tools are ready to use immediately with no sign-up, no login, and no daily limits.",
      homeFaqQ2: "Are my PDF files uploaded to a server?",
      homeFaqA2: "Never. All parsing, conversion, merging, splitting, and compression run locally in your browser memory—your files never leave your device.",
      homeFaqQ3: "Are these online PDF tools completely free?",
      homeFaqA3: "Yes. Every tool on this site is 100% free with no paywalls, watermarks, or popups.",
      homeFaqQ4: "What PDF tools are included?",
      homeFaqA4: "You can convert PDF to Word (.docx), convert PDF to Excel (.xlsx), merge PDFs, compress PDFs to a target size, split PDFs, and convert JPG/PNG images to PDF.",

      wordFaqQ1: "Does this tool output an editable Word (.docx) document?",
      wordFaqA1: "Yes. It extracts text and basic paragraphs from your PDF into a standard .docx file you can edit in Microsoft Word, Google Docs, or WPS.",
      wordFaqQ2: "Can it convert scanned PDFs?",
      wordFaqA2: "No. This tool runs without OCR, so a scanned image PDF has no selectable text and would produce an empty document—the tool will warn you if no text is found.",
      wordFaqQ3: "Will complex PDF formatting be preserved?",
      wordFaqA3: "It preserves text and basic paragraph structure (with options to merge wrapped lines and insert page breaks), while complex multi-column layouts or graphics are simplified.",
      wordFaqQ4: "Is PDF to Word conversion free and private?",
      wordFaqA4: "Yes. Conversion runs locally in your browser with no file uploads, no sign-up, and no watermarks.",

      excelFaqQ1: "Can it restore tables from a PDF into Excel?",
      excelFaqA1: "For text-based PDFs, yes—it analyzes text coordinates to group rows and align columns into an .xlsx spreadsheet, and offers standard, fine, and loose column split sensitivity.",
      excelFaqQ2: "Does each PDF page become its own sheet or merge into one sheet?",
      excelFaqA2: "You can choose either mode before converting: export one worksheet per PDF page (Page_1, Page_2...) or merge all pages into a single sheet.",
      excelFaqQ3: "Does it work on scanned PDF tables?",
      excelFaqA3: "No. Only text-based PDFs with selectable text are supported; scanned images without embedded text cannot be parsed into spreadsheet cells.",
      excelFaqQ4: "Can I preview the extracted table before downloading?",
      excelFaqA4: "Yes. After conversion finishes, a preview of the extracted rows and columns appears right below the download button.",

      mergeFaqQ1: "Can I reorder the PDF files before merging?",
      mergeFaqA1: "Yes. After adding your PDFs, you can drag and drop items in the list or use the up/down arrow buttons to set the exact merge order.",
      mergeFaqQ2: "Is there a page count or file count limit?",
      mergeFaqA2: "There is no artificial page limit or daily quota. Because processing runs in browser memory, we recommend keeping individual files within 50 MB for smooth performance.",
      mergeFaqQ3: "Can I customize the merged PDF filename?",
      mergeFaqA3: "Yes. You can enter any output filename in the options panel before clicking Merge PDFs (defaults to merged.pdf).",
      mergeFaqQ4: "Are my PDFs uploaded during merging?",
      mergeFaqA4: "No. Merging happens 100% locally in your browser, so your documents stay on your device.",

      compressFaqQ1: "Can it compress a PDF down to 100KB?",
      compressFaqA1: "Yes, you can pick 100 KB, 500 KB, 1 MB, or a custom target in KB (minimum 20 KB). If lossless optimization alone is still above your target, the tool progressively downsamples pages as JPEG images to reach it—though very large multi-page PDFs may stay above 100 KB to remain readable.",
      compressFaqQ2: "Will compressing my PDF reduce image or text quality?",
      compressFaqA2: "Lossless structural optimization runs first with zero quality loss. If the file still exceeds your target size, pages are re-encoded as compressed JPEG images—the smaller the target size you choose, the lower the image quality and resolution.",
      compressFaqQ3: "What happens if my PDF is already smaller or heavily compressed?",
      compressFaqA3: "If the compressed result is not smaller than the original file, the tool keeps and outputs the smaller version so your file never gets larger.",
      compressFaqQ4: "Is PDF compression done locally?",
      compressFaqA4: "Yes, it is completely local. All compression takes place in your browser with no server uploads and no sign-up.",

      splitFaqQ1: "Can I split by specific page ranges or every N pages?",
      splitFaqA1: "Both are supported. You can enter custom page ranges (such as 1-3, 5, 7-9) to extract each range separately or combined into one PDF, or split automatically every N pages.",
      splitFaqQ2: "How do I download the files after splitting?",
      splitFaqA2: "If the split produces one file, you get a single download button. If multiple PDFs are created, you can download them individually or click \"Download All (.zip)\" to get everything in one archive.",
      splitFaqQ3: "Does splitting alter the quality of the original PDF pages?",
      splitFaqA3: "No. Pages are copied structurally into new PDF files without re-rendering, preserving original text and image quality.",
      splitFaqQ4: "Do I need to install software or sign up to split a PDF?",
      splitFaqA4: "No. Splitting runs directly in your browser for free with zero uploads, no watermarks, and no account required.",

      jpgFaqQ1: "Does it support PNG or other image formats besides JPG?",
      jpgFaqA1: "Yes. You can add .jpg, .jpeg, .png, and .webp images, and mix different formats in the same PDF.",
      jpgFaqQ2: "Can I adjust the PDF page size, orientation, and margins?",
      jpgFaqA2: "Yes. You can choose A4, Letter, or \"Fit to each image\", set orientation (Auto, Portrait, or Landscape), and pick None (0 mm), Small (10 mm), or Normal (20 mm) margins.",
      jpgFaqQ3: "Can I reorder or rotate images before creating the PDF?",
      jpgFaqA3: "Yes. After uploading, you can drag and drop images or use the up/down buttons to reorder them, and click the \"Rotate 90°\" button on any image.",
      jpgFaqQ4: "Are my photos uploaded to any server?",
      jpgFaqA4: "No. Image reading, rotation, and PDF generation run entirely inside your browser, keeping your photos private on your device."
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
