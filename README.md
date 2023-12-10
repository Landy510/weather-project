# 天氣預報 - [DeployLink](https://landy510.github.io/weather-project/)

## 操作說明
step1. 在畫面上的 input 欄位輸入欲查詢之城市的英文 (e.g. hsinchu, London) <br/>
step2. 若有相對應的城市查詢結果，相關城市選單會滑進畫面 <br/>
step3. 接著，點擊城市選單內的任一選項 <br/>
step4. 畫面下方就會出現選擇城市的當前天氣和未來五天的天氣資訊

## 專案狀態管理規劃
1. 當使用者在元件 SearchBar 輸入欲搜尋城市，接著會觸發取得城市資訊的 api，當 api 回傳相關的城市資料，就會將回傳資料存入 `cityList` 這個 state 中。
2. `cityList` 會做為元件 Accordion 的 props 傳入，將回傳的城市資料渲染到選單上。
3. 當使用者點擊 Accordion 中的任一選項，就會觸發取得該城市的當前天氣 api 和 未來五天氣象 api，接著，將前者 api 回傳的資料存入 state `currentWeatherInfo` 中，再將後者回傳資料存入 state `forecastInfo` 中。
4. 將 `currentWeatherInfo` 作為 CurrentWeather 元件的 props 傳入，`forecastInfo` 作為 DailyWeather 元件的 props 傳入，最終將當前天氣和未來五天的資訊渲染到畫面上。

---

## 使用技術
React - v18 <br/>
tailwindcss - v3.3.6 <br/>
prop-types - v15.8.1

---

## 啟動
#### 專案安裝指令
`npm install`
#### 專案啟動指令
`npm run dev`

---

## Github
#### 分支
`main` - 主分支
#### Git Message
* chore: 其他瑣事
* core: 核心
* feat: 功能/修改
* perf: 優化
* refactor: 重構
* docs: 文件
