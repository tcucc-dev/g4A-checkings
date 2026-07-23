const GLOSSARY_DB = {
  "AI": "人工智慧：會理解與總結內容的電腦程式（ChatGPT、Google AI Overviews 等）。",
  "BigQuery": "Google 的雲端資料倉儲，所有數字都是從這裡撈出來的。",
  "CSV": "Excel 可開啟的純文字資料檔。",
  "CTA": "行動呼籲：網頁上的「按這裡」「立即報名」按鈕。",
  "CTR": "點擊率：看過的人中有幾%真的點進來。",
  "ContactPoint": "Google 結構化資料的「聯絡方式」標記類型。",
  "Department": "Google 結構化資料的「大學系所」標記類型。",
  "EducationalOrganization": "Google 結構化資料的「教育機構」標記類型。",
  "FAQ": "常見問題：把使用者常問的整理成 Q&A。",
  "FAQPage": "Google 看得懂的 Q&A 結構化資料標記。",
  "Funnel": "漏斗分析：追蹤使用者從「看到 A 頁」到「點 B 頁」的轉換率。",
  "GA4": "Google Analytics 4：Google 的新版網站分析工具。",
  "GEO": "讓生成式 AI 正確理解與引用網站內容的優化。",
  "GSC": "Google Search Console：觀察網站在 Google 搜尋的表現。",
  "H1": "網頁最重要的標題，每頁應該只有 1 個。",
  "H2": "次要標題，一頁可有多個，用於分段。",
  "JSON": "一種資料格式，用 `{}` 和 `[]` 表達。",
  "JSON-LD": "寫在網頁裡的一段 JSON，用來告訴 Google「這頁是什麼東西」。",
  "KPI": "關鍵指標：可以用數字衡量表現的東西。",
  "OG": "Open Graph。",
  "P0": "最高優先級：本週必做。",
  "P1": "高優先級：本月必做。",
  "P2": "中優先級：本季完成。",
  "SQL": "跟資料庫溝通的語言，用來撈數字。",
  "URL": "網址。",
  "Wayback": "網站時光機：archive.org 提供的歷史快照。",
  "Wayback Machine": "網站時光機資料庫，可查過去某天的網頁版本。",
  "acceptance": "驗收標準：怎樣算改善完成。",
  "active_users": "在這段時間內實際操作過的使用者人數（不重複計算）。",
  "all_gsc_summary": "這是放所有系所「Google 搜尋曝光與點擊」資料的總表。報告只取 ITM 資管的部分。",
  "all_unit_summary": "拼字錯誤，正確為 all_units_summary。",
  "all_units_summary": "這是放整個慈濟大學「所有 97 個系所」上網資料的總表。報告只取 ITM 資管的數字，需要先過濾。",
  "audit": "稽核：定期檢查資料正確性與進度。",
  "canonical": "告訴搜尋引擎「這個網址才是正式版」。",
  "channel": "流量的管道分類，由 source + medium 自動歸類。",
  "city": "使用者所在的城市（從 IP 推測，僅供參考）。",
  "click_class": "被點擊的按鈕或連結的 CSS class 名稱（網頁程式設計師的命名）。",
  "country": "使用者所在的國家（從 IP 推測）。",
  "deadline": "完成期限。",
  "decision": "一筆主管決定。",
  "decisions": "主管這週需要做的決定清單。",
  "description": "描述欄位。",
  "device": "使用者用的裝置類型：桌機 / 手機 / 平板。",
  "docTitle": "等同 <title>。為求一致，請使用 'title'。",
  "duplicate ID": "同一個網頁裡有重複的元素 ID，是 bug。",
  "engagement_time_msec": "使用者實際捲動、點擊的時間（不算發呆）。",
  "event": "使用者在網站上做的任何一個動作，每一個動作都會記錄成一個事件。",
  "event_name": "這個動作叫什麼名字，例如：page_view（瀏覽一頁）、click（點擊）、scroll（捲動）。",
  "event_timestamp": "事件發生的精確時間（記到微秒等級）。",
  "funnel": "漏斗。",
  "ga_session_id": "訪客一次完整到訪的編號。同一人來兩天算兩個編號。",
  "hreflang": "告訴搜尋引擎「這個頁面有英文／日文等其他語言版本」。",
  "iframe": "內嵌的網頁框架（YouTube 嵌入、地圖都是 iframe）。",
  "image_alt": "圖片的替代文字，給看不見圖片的人或搜尋引擎讀的說明文字。",
  "impact": "影響。",
  "lead": "潛在學生。",
  "link_text": "連結上面寫的可見文字，例如「加入 LINE 群組」。",
  "link_url": "連結實際指向的網址。",
  "medium": "流量媒介，例如 organic（自然搜尋）、cpc（付費廣告）、referral（從別的網站點進來）。",
  "meta": "網頁的中介資料。",
  "meta description": "Google 搜尋結果標題下面那段說明文字。",
  "name": "名稱欄位。",
  "og": "Open Graph：控制分享到 LINE、Facebook 時顯示的標題/說明/圖片。",
  "og:description": "分享時顯示的說明。",
  "og:image": "分享時顯示的圖片。",
  "og:title": "分享時顯示的標題。",
  "og:url": "分享時的標準網址。",
  "operating_system": "使用者用的系統，例如 Windows、Mac、Android、iOS。",
  "page": "泛指網頁。",
  "page_group": "自定義分類，把頁面歸類為「課程」「師資」「特色」等大群組。",
  "page_location": "事件發生那一頁的網址。",
  "page_referrer": "使用者到這頁之前，是從哪個網址點過來的。",
  "page_title": "那一頁的標題（瀏覽器分頁上看到的文字）。",
  "page_view": "使用者瀏覽一頁的紀錄。",
  "pageview": "瀏覽次數。",
  "priority": "優先級。",
  "provenance": "資料出處：每個數字旁邊註明從哪張表來的。",
  "robots": "搜尋引擎的爬蟲程式。",
  "robots.txt": "放在網站根目錄的檔案，告訴 Google 哪些頁面可索引、哪些不行。",
  "search_behavior_summary": "這是放「使用者搜尋什麼關鍵字之後，在網站做了什麼」資料的總表。",
  "session": "使用者一次完整到訪。",
  "session_key": "把「誰」跟「哪一次」併起來當唯一識別。例：`user_pseudo_id_1234_session_567`。",
  "session_number": "使用者當天第幾次到訪。",
  "site": "BigQuery 報表中對一個系所的統稱。注意本報告全程固定 `site='資訊科技與管理系'`。<br><br>例子：`WHERE site_name='資訊科技與管理系'`。",
  "site_academy": "系所隸屬的學院。ITM 屬於人文社會學院。",
  "site_id": "Google Analytics 給這個系所的內部編號。",
  "site_link_clicks": "在 Google 搜尋結果裡，點擊了「同一個站的其他連結」的次數。",
  "site_url": "系所首頁的網址，例如 ITM 的就是 `https://itm.tcu.edu.tw/`。",
  "social_platform": "使用者從哪個社群平台來，例如 Facebook、LINE。",
  "source": "流量來源，例如 google、facebook.com、(direct)。",
  "sparkline": "小折線圖：KPI 卡裡的趨勢縮圖。",
  "subdomain": "系所的子網域簡寫，ITM 就是 `itm`。",
  "sum_position": "Google 搜尋結果「曝光在哪幾名」的加權平均。數字越小越前面。",
  "telephone": "電話號碼欄位。",
  "title": "網頁標題。",
  "title-variant": "<title> 別名。同 'title' 處理。",
  "total_behavior_events": "使用者搜尋後在站內繼續操作的總次數（瀏覽+點擊）。",
  "unit_category": "97 個系所的分類，例如「教學單位」、「行政單位」。",
  "url": "網址。",
  "user": "訪客（已去識別化）。",
  "user_pseudo_id": "給每位訪客的匿名編號（Google 為了保護隱私，把個人識別轉成亂碼）。",
  "view": "瀏覽。",
  "主題與實體清楚度": "é¦é ææ²ææ¸æ¥åè¨´ Googleãéæ¯åªåå­¸æ ¡ãåªåç³»ãã<br><br>ð ä¾å­ï¼å¥½ = æ¨é¡å¯«ãææ¿å¤§å­¸è³è¨ç§æèç®¡çå­¸ç³»ãï¼ä¸å¥½ = åªå¯«ãé¦é ãæãæ­¡è¿åè¨ãã",
  "內容結構與可擷取性": "Google æ©å¨äººè½ä¸è½é å©è®æç¶²ç«å§å®¹ãæäººè©±æ´çæç­æ¡ã<br><br>ð ä¾å­ï¼å¥½ = å§å®¹ææ¸æ¥çæ¨é¡éå±¤ï¼H1ãH2ãH3ï¼ãæåè¡¨ãæè¡¨æ ¼ï¼ä¸å¥½ = å¨é¨å¡å¨ä¸å¼µå¤§åçè£¡ï¼Google çä¸å°å­ã",
  "單位網站管理人": "負責網頁內容的人（標題、聯絡電話、CTA、內容）。",
  "工作階段": "Session â ä½¿ç¨èä¸æ¬¡é£çºçè¦½çå¤åäºä»¶ï¼éå¸¸ 30 åéç¡æ´»åå¾çµæã<br><br>ð ä¾å­ï¼åå­¸é²ä¾çå® 5 é ç¶å¾é¢éï¼éæ®µéç¨ç®ä¸åãå·¥ä½éæ®µãã",
  "技術 GEO": "ç¶²ç«ææ²æå®è£ãçµæ§åè³æãæ¨è¨è® Google èªè­å­¸æ ¡èç³»æãææ²æ og æ¨ç±¤è®åäº«ææ¼äº®é¡¯ç¤ºã<br><br>ð ä¾å­ï¼å¥½ = å®è£ JSON-LD æ¨è¨ `\"@type\": \"EducationalOrganization\"`ï¼ä¸å¥½ = å®å¨æ²æçµæ§åè³æï¼Google åªç¥éå®æ¯åãç¶²ç«ãä½ä¸ç¥éæ¯ãå¤§å­¸ç³»æãã",
  "招生問題回答能力": "å­¸çåãå­¸ä»éº¼ããæéº¼èããå­¸è²»å¤å°ãæï¼ç¶²ç«ææ²æç­æ¡ã<br><br>ð ä¾å­ï¼å¥½ = æãå¥å­¸æ¹å¼ãé é¢ååº 115 å­¸å¹´åº¦çå¥å­¸ç®¡éèåé¡ï¼ä¸å¥½ = å®å¨æ²ææå°å¦ä½å¥å­¸ã",
  "證據與可信度": "ç¶²ç«ææ²ææä¾ãå­¸çä½åãç«¶è³½å¾çãä¼æ¥­å¯¦ç¿ãéé¡è­æè®äººç¸ä¿¡éåç³»å¾å¼·ã<br><br>ð ä¾å­ï¼å¥½ = ååºãç¢æ¥­çéååå°é«å¬å¸ 12 ä½ããå­¸çç«¶è³½ç²ç 5 é ãï¼ä¸å¥½ = å®å¨æ²ææ¸å­ãæ²ææ¡ä¾ã",
  "過期": "頁面內容年份標記已過時，但 Google 還在推薦。對 SEO 是傷害。",
  "電算中心技術支援": "負責資料查詢、報表維護、技術問題的人。",
  "ARIA": "Accessible Rich Internet Applications。HTML 屬性集合，幫助輔助科技（如螢幕閱讀器）理解網頁內容。例如 aria-label 給元素加可讀標籤。",
  "DOM": "Document Object Model。瀏覽器把 HTML 解析成的樹狀結構。JavaScript 透過 DOM API 操作頁面元素。",
  "DOM ID": "HTML 元素的 id 屬性。同一頁面內 id 必須唯一。重複的 id 會破壞 JavaScript selector、ARIA 與無障礙工具。ITM 首頁偵測到 80 處重複。",
  "Widget": "頁面中的一個互動小區塊（例如嵌入的 YouTube 影片、地圖、聯絡表單）。ITM 首頁有 26 個 iframe widget，全部缺 title 屬性。",
  "application/ld+json": "JSON-LD 結構化資料在 HTML 中的 MIME 類型標記。出現這個 type 的 script 標籤就代表該網頁有寫結構化資料。",
  "console.log": "JavaScript 內建的開發者工具函式，用來把訊息輸出到瀏覽器的 Console 面板。本報告的 gloss tooltip 系統靠它來除錯。",
  "device_category": "BigQuery 欄位：裝置類別的另一個命名，等同 device。",
  "favicon.ico": "瀏覽器分頁左上角顯示的小圖示（網站圖標）。Open Graph 的 og:image 指向 favicon.ico 不是好的實作，應該改為正式的 1200×630 招生主視覺圖。",
  "null": "在 JavaScript / BigQuery 中表示「空值」或「不存在」。本報告用 null 代表「這項指標根本沒寫進網站原始碼」（例如 hreflang=null 表示從來沒有寫過這個標籤）。",
  "parentOrganization": "在 schema.org 結構化資料裡，用來標示某個單位（例如資管系）隸屬於哪個較大的組織（例如慈濟大學）。這層關係幫助 Google 正確判斷機構階層。",
  "schema.org/Department": "schema.org 提供的一種結構化資料類型。用 JSON 格式寫在網頁中，告訴 Google 這個頁面代表的是大學裡的「系所」單位。寫了之後，Google 搜尋結果能正確顯示系所名稱、地址、聯絡方式等。",

  "<h1>": "HTML 標籤 <h1>。代表頁面的「主要標題」。SEO 與無障礙規範要求每頁只能有一個 <h1>，用來告訴搜尋引擎與螢幕閱讀器這個頁面的主題是什麼。",
  "<h2>": "HTML 標籤 <h2>。代表頁面的「次要標題」。一頁通常會有多個 <h2> 用來區分章節。層級必須是 <h1> → <h2> → <h3>...，不能跳級。",
  "contactPoint": "schema.org/Department JSON-LD 結構化資料中的欄位。用來寫這個系所的聯絡方式（電話、Email、地址、聯絡表單 URL）。",

  "Hln_*": "範本自動產生的 HTML id 前綴（例如 Hln_a1b2）。同一個頁面上 id 必須唯一，重複的 id 會破壞 JavaScript selector、ARIA 與螢幕閱讀器的可訪問性。ITM 首頁偵測到 80 處這類 id 衝突。",

};
const GLOSSARY_PATTERN = /(?:(?:(?<![A-Za-z0-9_])EducationalOrganization(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])search_behavior_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])schema\.org\/Department(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])total_behavior_events(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])engagement_time_msec(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])application\/ld\+json(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])parentOrganization(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])all_units_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])all_unit_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])meta description(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])operating_system(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_link_clicks(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Wayback Machine(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])all_gsc_summary(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])device_category(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])event_timestamp(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])social_platform(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:description(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])session_number(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])user_pseudo_id(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])ga_session_id(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_location(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_referrer(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])title-variant(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])unit_category(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])ContactPoint(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])active_users(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])contactPoint(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])duplicate ID(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_academy(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])sum_position(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])click_class(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])console\.log(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])description(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])favicon\.ico(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])session_key(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Department(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])acceptance(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])event_name(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_group(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_title(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])provenance(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])robots\.txt(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])canonical(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])decisions(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])image_alt(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])link_text(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page_view(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])sparkline(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])subdomain(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])telephone(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])內容結構與可擷取性(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])BigQuery(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])deadline(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])decision(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])docTitle(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])hreflang(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])link_url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:image(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:title(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])pageview(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])priority(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])主題與實體清楚度(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])招生問題回答能力(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])電算中心技術支援(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])FAQPage(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])JSON-LD(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Wayback(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])channel(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])country(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])session(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site_id(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])單位網站管理人(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])DOM ID(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Funnel(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Widget(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])device(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])funnel(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])iframe(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])impact(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])medium(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og:url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])robots(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])source(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])技術 GEO(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])證據與可信度(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])Hln_\*(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])audit(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])event(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])title(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])<h1>(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])<h2>(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])ARIA(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])JSON(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])city(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])lead(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])meta(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])name(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])null(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])page(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])site(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])user(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])view(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])工作階段(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])CSV(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])CTA(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])CTR(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])DOM(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])FAQ(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])GA4(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])GEO(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])GSC(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])KPI(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])SQL(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])URL(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])url(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])AI(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])H1(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])H2(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])OG(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])P0(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])P1(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])P2(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])og(?![A-Za-z0-9_]))|(?:(?<![A-Za-z0-9_])過期(?![A-Za-z0-9_])))/g;

const seenFirst = new Set();

function isSkippable(node) {
  if (!node || !node.parentNode) return true;
  const p = node.parentNode;
  if (p.nodeType !== 1) return false;
  const tag = p.tagName;
  // Skip script/style/noscript/template (will break JS/CSS or render incorrectly)
  // Note: CODE and PRE are NOT skipped — we WANT gloss tooltips on technical tokens
  if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(tag)) return true;
  if (p.classList && p.classList.contains('gloss-tip')) return true;
  if (p.classList && p.classList.contains('gloss')) return true;
  if (p.classList && p.classList.contains('ev-table')) return true;  // don't break evidence tables
  if (p.tagName === 'A' && p.getAttribute('href')) return true;
  return false;
}

function walkTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (isSkippable(node)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const toProcess = [];
  let n;
  while ((n = walker.nextNode())) toProcess.push(n);
  return toProcess;
}

function wrapMatches(textNode) {
  const text = textNode.nodeValue;
  GLOSSARY_PATTERN.lastIndex = 0;
  const matches = [];
  let m;
  while ((m = GLOSSARY_PATTERN.exec(text)) !== null) {
    matches.push({ start: m.index, end: m.index + m[0].length, term: m[0] });
  }
  if (matches.length === 0) return null;
  const frag = document.createDocumentFragment();
  let cursor = 0;
  for (const match of matches) {
    if (match.start > cursor) {
      frag.appendChild(document.createTextNode(text.substring(cursor, match.start)));
    }
    const span = document.createElement('span');
    span.setAttribute('data-term', match.term);
    span.textContent = match.term;
    if (!seenFirst.has(match.term)) {
      seenFirst.add(match.term);
      span.className = 'gloss anchor';
    } else {
      span.className = 'gloss repeat';
    }
    frag.appendChild(span);
    cursor = match.end;
  }
  if (cursor < text.length) frag.appendChild(document.createTextNode(text.substring(cursor)));
  return frag;
}

function autoWrapAll() {
  const textNodes = walkTextNodes(document.body);
  for (const node of textNodes) {
    if (!node.parentNode) continue;
    const replacement = wrapMatches(node);
    if (replacement) node.parentNode.replaceChild(replacement, node);
  }
}

let activeTimer = null;
let activeTip = null;
let hideTimer = null;

function escHTML(s) {
  var d = document.createElement('div');
  d.appendChild(document.createTextNode(s));
  return d.innerHTML;
}

function showTip(term, el) {
  if (!term) return;
  const def = GLOSSARY_DB[term];
  if (!def) return;
  if (activeTip) hideTip(true);
  const tip = document.createElement('div');
  tip.className = 'gloss-tip';
  tip.innerHTML = '<div class="tip-label">' + escHTML(term) + '（hover 說明）</div>' +
                  '<div class="tip-def">' + escHTML(def) + '</div>' +
                  '<div class="tip-db">📚 完整資料庫：附錄 A｜術語資料庫（v56）</div>';
  document.body.appendChild(tip);
  const rect = el.getBoundingClientRect();
  let left = rect.left + window.scrollX;
  let top = rect.bottom + window.scrollY + 6;
  requestAnimationFrame(() => {
    const tipRect = tip.getBoundingClientRect();
    if (left + tipRect.width > window.innerWidth - 10) left = window.innerWidth - tipRect.width - 10;
    if (left < 10) left = 10;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
    tip.classList.add('show');
  });
  activeTip = tip;
}

function hideTip(immediate) {
  if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
  if (activeTip) {
    const t = activeTip;
    if (immediate) { t.remove(); activeTip = null; }
    else {
      hideTimer = setTimeout(() => {
        t.classList.remove('show');
        setTimeout(() => { t.remove(); activeTip = null; }, 200);
      }, 100);
    }
  }
}

function bindEvents() {
  document.body.addEventListener('mouseover', function(e) {
    const el = e.target.closest('.gloss');
    if (!el) return;
    const term = el.getAttribute('data-term');
    if (activeTimer) clearTimeout(activeTimer);
    activeTimer = setTimeout(() => showTip(term, el), 800);
  });
  document.body.addEventListener('mouseout', function(e) {
    const el = e.target.closest('.gloss');
    if (!el) return;
    if (activeTimer) { clearTimeout(activeTimer); activeTimer = null; }
    hideTip(false);
  });
  document.body.addEventListener('click', function(e) {
    const el = e.target.closest('.gloss');
    if (!el) { hideTip(true); return; }
    const term = el.getAttribute('data-term');
    if (activeTimer) clearTimeout(activeTimer);
    showTip(term, el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    autoWrapAll();
    bindEvents();
    // Expose for re-runs after dynamic content
    window.WEBINSIGHT = window.WEBINSIGHT || {};
    window.WEBINSIGHT.gloss = { autoWrapAll: autoWrapAll, DB: GLOSSARY_DB, PATTERN: GLOSSARY_PATTERN, rebind: bindEvents };
  });
} else {
  autoWrapAll();
  bindEvents();
  window.WEBINSIGHT = window.WEBINSIGHT || {};
  window.WEBINSIGHT.gloss = { autoWrapAll: autoWrapAll, DB: GLOSSARY_DB, PATTERN: GLOSSARY_PATTERN, rebind: bindEvents };
}

// Re-run after setView toggles (which shows/hides data-role sections)
const rewrap = () => { try { autoWrapAll(); } catch(e){} };
window.addEventListener('hashchange', rewrap);
// Also re-wrap shortly after view changes (setView may add DOM)
const oldSetView = window.setView;
window.setView = function(v){ if(typeof oldSetView === 'function') oldSetView(v); setTimeout(rewrap, 50); };
// Also re-wrap after a small delay (initial layout pass)
setTimeout(rewrap, 200);
setTimeout(rewrap, 800);

