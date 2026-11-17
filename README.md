# AI 學習筆記 📚

一個靜態的 AI 學習筆記網站，整理 AI、機器學習與程式設計相關的學習紀錄。

## 🌐 網頁連結

👉 [點此瀏覽網站](https://your-username.github.io/ai-learning-notes)

## 📖 專案簡介

這個專案是一個純靜態的學習筆記網站，使用 HTML + CSS + JavaScript 建構，無需任何框架或建置工具，可直接部署至 GitHub Pages。

### 特色
- 🎨 簡潔美觀的卡片式佈局
- 🔍 前端即時搜尋篩選
- 📱 完整的響應式設計
- 📝 規範化的筆記範本與新增流程

## 📂 專案結構

```
ai-learning-notes/
├── index.html              # 首頁（筆記列表）
├── style.css               # 全域樣式
├── script.js               # 搜尋篩選腳本
├── notes/                  # 筆記頁面
│   ├── note-template.html  # 筆記範本
│   ├── what-is-llm.html
│   ├── prompt-engineering.html
│   └── ai-tools-overview.html
├── AGENTS.md               # AI 開發指南
└── README.md               # 本文件
```

## 🤖 AGENTS.md 說明

本專案包含完整的 `AGENTS.md`，定義了：

- 專案目的與技術棧
- 配色方案與設計原則
- 頁面結構規範
- **新增筆記的標準流程**（4 個步驟）
- 程式碼區塊與提示框格式
- 標籤系統
- AI 修改內容時必須遵守的 10 條規則

### 如何新增筆記？

只需告訴 AI：「請新增一篇關於 ○○ 的筆記」，AI 就能依照 AGENTS.md 中的規則：
1. 複製 `note-template.html` 建立新頁面
2. 填寫標題、標籤、日期和內容
3. 在 `index.html` 新增對應的卡片
4. 保持一致的風格與格式

## 🚀 部署方式

1. 將專案推送至 GitHub
2. 進入 Repository → Settings → Pages
3. Source 選擇 `main` 分支，資料夾選 `/ (root)`
4. 儲存後等待部署完成

## 📝 授權

MIT License
