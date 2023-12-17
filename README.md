# 天氣預報 - [DeployLink](https://landy510.github.io/weather-project/)

## 元件在畫面的位置
<img src="https://i.imgur.com/ZbbEJet.png" title="source: imgur.com" width="700" />
<img src="https://i.imgur.com/duAtrkS.png" title="source: imgur.com" width="700" />

## 操作說明
**step1.** <br/>
在畫面上的 input 欄位輸入欲查詢之城市的英文 (e.g. hsinchu, London) <br/>

**step2.** <br/>
step1 的操作會觸發取得相關城市列表的 api，在 api 還未取得資料的期間， input 欄位會呈現一個變淺色的 loading 樣式，待 api 回傳後，這個 loading 樣式就會消失。<br/>

**step3.** <br/>
若有相對應的城市查詢結果，相關城市選單會滑進畫面 <br/>

**step4.** <br/>
接著，點擊城市選單內的任一選項，此時會觸發取得相關天氣的 api，在 api 還未回傳前，畫面上會呈現 loading 樣式覆蓋整個畫面，待 api 回傳後，這個 loading 樣式就會消失。<br/>

**step5.** <br/>
畫面下方就會出現選擇城市的當前天氣和未來五天的天氣資訊

## 狀態管理規劃
<table>
    <thead>
        <tr>
            <th style='text-align: left;'>state 名稱</th>
            <th>功能</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style='width: 100px;'>
                cityList
            </td>
            <td>
                儲存由 api 回傳的相關城市列表
            </td>
        </tr>
        <tr>
            <td style='width: 100px;'>
                currentWeatherInfo
            </td>
            <td>
                儲存由 api 回傳的當天天氣資訊
            </td>
        </tr>
        <tr>
            <td style='width: 100px;'>
                forecastInfo
            </td>
            <td>
                儲存由 api 回傳的未來天氣資訊
            </td>
        </tr>
    </tbody>
</table>

1. 當使用者在元件 SearchBar 輸入欲搜尋城市，接著會觸發**取得城市資訊的 api**，當 api 回傳相關的城市資料，就會將回傳資料存入 `cityList` 這個 state 中。
2. `cityList` 會做為元件 Accordion 的 props 傳入，將回傳的城市資料渲染到選單上。
3. 當使用者點擊 Accordion 中的任一選項，就會觸發**取得該城市的當前天氣 api**和**未來五天氣象 api**，接著，將前者 api 回傳的資料存入 state `currentWeatherInfo` 中，再將後者回傳資料存入 state `forecastInfo` 中。
4. 最後將 `currentWeatherInfo` 作為 CurrentWeather 元件的 props 傳入，`forecastInfo` 作為 DailyWeather 元件的 props 傳入，將當前天氣和未來五天的資訊渲染到畫面上。
 

## 主要元件功能介紹
<table>
   <thead>
      <tr>
         <th style='text-align:left;'>元件名稱</th>
         <th>功能</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td style='width:100px;'>App</td>
         <td>
             <strong>
             管理共用 state - <code>currentWeatherInfo</code>,  <code>forecastInfo</code>
             </strong> <br/>
             當使用者完成選取想要搜索的城市選項後，<br/>
             會觸發取得當前天氣 api 和 取得未來天氣 api，並分別存入 currentWeatherInfo 和 forecastInfo，<br/>
             一旦以上兩個 setter function 完成 state 的更新後，更新後的 state 值，就會分別傳入元件 <code>CurrentWeather</code> 和             <code>DailyWeather</code> 中，<br/>
             最終使用者選擇的城市的當前天氣資訊和未來天氣資訊就會呈現在畫面上。
         </td>
      </tr>
      <tr>
         <td style='width:100px;'>SearchArea</td>
         <td>
             <strong>
                專門管理元件 <code>SearchBar</code> 和<code>Accordion</code> 間共享的 state - <code>isAccordionShow</code>, <code>cityList</code>
             </strong> <br/>
             ．當使用者在 <code>SearchBar</code> 元件的輸入框輸入要搜尋的城市關鍵字後，會觸發取得相關城市列表資訊 api，<br/>
             當 api 回傳後會將回傳資料設入 <code>cityList</code> 中。<br/>
             接著， <code>Accordion</code> 元件接收到更新後的 <code>cityList</code> 值之後，就會將相關的城市列表資訊呈現在選單中。 <br/>
             ．當 <code>SearchBar</code> 元件觸發取得相關城市列表資訊 api 並成功回傳資訊後，會將<code>isAccordionShow</code>切為<code>true</code>，此時，<code>Accordion</code> 元件就會滑進畫面，讓使用者可以點擊 <code>Accordion</code> 元件內的城市選項。
         </td>
      </tr>
      <tr>
         <td style='width:100px;'>CurentWeather</td>
         <td>
             <strong>
                呈現指定城市的當前天氣資訊
             </strong>
         </td>
      </tr>
      <tr>
         <td style='width:100px;'>DailyWeather</td>
         <td>
             <strong>
                呈現指定城市的未來天氣資訊
             </strong>
         </td>
      </tr>
      <tr>
         <td style='width:100px;'>Accordion</td>
         <td>
             <strong>
                呈現搜尋後的城市列表
             </strong>
         </td>
      </tr>
      <tr>
         <td style='width:100px;'>SearchBar</td>
         <td>
             <strong>
                讓使用者可以輸入欲搜尋的城市
             </strong>
         </td>
      </tr>
      <tr>
         <td style='width:100px;'>Modal</td>
         <td>
             <strong>
                呈現 api 回傳的錯誤訊息
             </strong>
         </td>
      </tr>
      <tr>
         <td style='width:100px;'>GlobalContextBoundary</td>
         <td>
             <strong>
                管理並提供全域 Context
             </strong>
         </td>
      </tr>
   </tbody>
</table>

## 主要 Reducer 介紹
<table>
   <thead>
      <tr>
         <th style='text-align:left;'>reducer 檔案名稱</th>
         <th>功能</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td style='width:100px;'>reducer.js</td>
         <td>
             <strong>
                集中管理註冊的 reducer
             </strong>
         </td>
      </tr>
      <tr>
         <td style='width:100px;'>loadingReducer.js</td>
         <td>
             <strong>
                管理元件 GlobalLoading 是否要出現
             </strong>
         </td>
      </tr>
      <tr>
         <td style='width:100px;'>modalReducer.js</td>
         <td>
             <strong>
                管理元件 Modal 彈窗內容與是否要出現
             </strong>
         </td>
      </tr>
   </tbody>
</table>

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

---

## 目錄架構
```
src                   # 原始碼
├─assets              # 靜態資源
│  └─styles           # scss
│      ├─base         # 原生樣式設定
│      ├─components   # 客製化元件樣式設定
│      ├─utils        # 客製化功能樣式設定
│      └─vendors      # 第三方套件樣式設定
├─core                # 存放核心功能
│  ├─hooks            # 核心 hook
│  ├─reducers         # 核心 reducer
│  ├─services         # api 功能
│  └─utils            # 核心 function
├─features            # 主要開發的功能元件
└─shared              # 共用功能

```