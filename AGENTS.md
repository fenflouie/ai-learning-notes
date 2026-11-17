# AGENTS.md — AI 學習筆記網站開發指南

## 專案目的

這是一個 **AI 學習筆記網站**，用來整理與展示 AI / 機器學習 / 程式設計相關的學習筆記。
目標是建立一套可重複使用的規則，讓 AI 能快速新增筆記頁面，保持風格與結構一致。

---

## 技術棧

- **純靜態網站**：HTML5 + CSS3 + Vanilla JavaScript
- **不使用任何框架或建置工具**（無 React、Vue、Webpack 等）
- **部署方式**：GitHub Pages（從 `main` 分支的根目錄部署）
- **字型**：Google Fonts — Noto Sans TC（中文）+ Inter（英文）
- **圖示**：使用 emoji 或 SVG inline icon，不引入 icon library

---

## 網頁整體風格

### 配色方案
| 用途 | 色碼 | 說明 |
|------|------|------|
| 主色 | `#6C63FF` | 紫色，用於標題、按鈕、連結 hover |
| 背景色 | `#F8F9FA` | 淺灰白，頁面背景 |
| 卡片背景 | `#FFFFFF` | 白色，筆記卡片與內容區塊 |
| 文字主色 | `#2D3436` | 深灰黑，正文文字 |
| 文字副色 | `#636E72` | 灰色，次要說明文字 |
| 強調色 | `#00B894` | 綠色，標籤、提示框 |
| 警告色 | `#FDCB6E` | 黃色，注意事項 |
| 邊框色 | `#DFE6E9` | 淺灰，分隔線、卡片邊框 |

### 設計原則
- 簡潔、清晰、留白充足
- 卡片式佈局，圓角 `12px`，陰影 `0 2px 12px rgba(0,0,0,0.08)`
- 響應式設計，支援手機與桌面瀏覽
- 最大內容寬度 `900px`，置中顯示
- 標題使用 `font-weight: 700`，正文使用 `font-weight: 400`
- 行高 `1.8`，段落間距 `1.2em`

---

## 檔案結構

```
ai-learning-notes/
├── index.html              # 首頁（筆記列表）
├── style.css               # 全域樣式
├── script.js               # 全域腳本（筆記列表載入等）
├── notes/                  # 所有筆記頁面放在此資料夾
│   ├── note-template.html  # 筆記頁面範本（新增筆記時複製此檔）
│   ├── what-is-llm.html    # 範例筆記：什麼是 LLM
│   ├── prompt-engineering.html  # 範例筆記：Prompt Engineering
│   └── ...                 # 更多筆記
├── AGENTS.md               # 本文件
└── README.md               # GitHub 專案說明
```

---

## 頁面結構規範

### 首頁 (`index.html`)

首頁包含以下區塊，順序固定：

1. **Header**：網站標題「📚 AI 學習筆記」+ 一行副標題
2. **搜尋列**：可依關鍵字篩選筆記卡片（純前端篩選）
3. **筆記卡片列表**：每張卡片顯示筆記標題、摘要、標籤、日期
4. **Footer**：版權資訊 + GitHub 連結

### 筆記頁面 (`notes/*.html`)

每個筆記頁面包含以下區塊，順序固定：

1. **Header**：與首頁相同的 Header（含返回首頁連結）
2. **文章標題區**：標題 + 標籤 + 日期
3. **文章內容區**：筆記正文，支援以下元素：
   - 標題（h2, h3, h4）
   - 段落文字
   - 程式碼區塊（使用 `<pre><code>` 並加上對應語言 class）
   - 重點提示框（`.note-tip`、`.note-warning`、`.note-info`）
   - 有序 / 無序列表
   - 表格
   - 圖片（放在專案內或使用外部連結）
4. **上一篇 / 下一篇導覽**（選用）
5. **Footer**：與首頁相同

---

## 新增筆記的標準流程

當需要新增一篇筆記時，請 **嚴格遵守** 以下步驟：

### 步驟 1：建立 HTML 檔案
- 複製 `notes/note-template.html` 並重新命名
- 檔名規則：**全小寫英文、用短橫線分隔**，例如 `what-is-transformer.html`
- 放在 `notes/` 資料夾中

### 步驟 2：填寫筆記內容
在新檔案中修改以下欄位：

| 欄位 | 位置 | 說明 |
|------|------|------|
| `<title>` | `<head>` 內 | 格式：`筆記標題 - AI 學習筆記` |
| `.article-title` | 文章標題區 | 筆記的中文標題 |
| `.article-tags` | 文章標題區 | 標籤，每個用 `<span class="tag">` 包裹 |
| `.article-date` | 文章標題區 | 格式：`YYYY 年 MM 月 DD 日` |
| `.article-content` | 文章內容區 | 筆記正文（HTML 格式） |

### 步驟 3：在首頁新增卡片
在 `index.html` 的 `#notes-grid` 區塊中，新增一張筆記卡片：

```html
<a href="notes/檔名.html" class="note-card" data-tags="標籤1,標籤2">
  <div class="note-icon">🤖</div>
  <h3>筆記標題</h3>
  <p>一句話摘要，不超過 50 字。</p>
  <div class="note-meta">
    <span class="note-date">YYYY/MM/DD</span>
    <span class="note-tags">
      <span class="tag">標籤1</span>
      <span class="tag">標籤2</span>
    </span>
  </div>
</a>
```

### 步驟 4：選擇適當的 Emoji 圖示
每篇筆記卡片需要一個代表性 emoji，常用對應：
- 🤖 — AI / 機器學習通用
- 💬 — 自然語言處理 / 對話
- 🧠 — 深度學習 / 神經網路
- 📝 — Prompt / 文字相關
- 🔧 — 工具 / 實作
- 📊 — 資料分析
- 🌐 — 網頁 / API
- 🔐 — 安全 / 隱私

---

## 程式碼區塊格式

筆記中的程式碼區塊使用以下格式：

```html
<pre><code class="language-python">
def hello():
    print("Hello, AI!")
</code></pre>
```

支援的語言 class：`language-python`、`language-javascript`、`language-html`、`language-css`、`language-bash`、`language-json`

程式碼區塊樣式：
- 背景色：`#2D3436`
- 文字色：`#DFE6E9`
- 字型：`'Fira Code', 'Consolas', monospace`
- 圓角：`8px`
- 內距：`1.2em`

---

## 提示框格式

三種提示框：

```html
<!-- 一般提示 -->
<div class="note-tip">
  <strong>💡 提示：</strong>這是一個有用的小技巧。
</div>

<!-- 重要資訊 -->
<div class="note-info">
  <strong>ℹ️ 補充：</strong>這是額外的背景知識。
</div>

<!-- 注意事項 -->
<div class="note-warning">
  <strong>⚠️ 注意：</strong>這裡有常見的錯誤要避免。
</div>
```

---

## 標籤系統

每篇筆記至少要有 1 個標籤，最多 4 個。標籤使用中文。

### 預定義標籤（優先使用）
- `LLM`
- `Prompt`
- `機器學習`
- `深度學習`
- `Python`
- `自然語言處理`
- `電腦視覺`
- `AI 工具`
- `基礎觀念`
- `實作教學`

如果以上標籤都不適合，可以新增標籤，但需使用 **簡短中文**（2-6 個字）。

---

## AI 修改或新增內容時的規則

1. **不要修改 `style.css` 的配色方案**，除非使用者明確要求
2. **不要引入新的外部函式庫或框架**
3. **所有新增的筆記頁面必須使用 `note-template.html` 作為基礎**
4. **保持 HTML 語意化**：使用 `<article>`、`<section>`、`<nav>` 等語意標籤
5. **所有連結使用相對路徑**，確保 GitHub Pages 部署正常
6. **圖片若為外部連結，確保使用 HTTPS**
7. **每次新增筆記後，務必同步更新 `index.html` 的卡片列表**
8. **程式碼範例必須是可運行的正確程式碼**，不要使用假的 placeholder
9. **中英文之間加一個半形空格**，例如「使用 Python 進行開發」
10. **不要刪除或修改 AGENTS.md 中的任何規則**，除非使用者明確要求

---

## 擴展指南

未來可以擴展的方向：
- 新增「分類頁面」：依照標籤分組顯示筆記
- 新增「暗色模式」：在 CSS 中使用 CSS 變數切換
- 新增「目錄側欄」：在筆記頁面自動產生文章目錄
- 新增「搜尋功能強化」：支援全文搜尋

擴展時仍須遵守以上所有規則。
