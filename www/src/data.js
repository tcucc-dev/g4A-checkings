// src/data.js — www.tcu.edu.tw (慈濟大學中文版首頁) max_date 2026-07-29
// Cutoff (smallest max_date across 3 sources): 2026-07-26 (GSC is the bottleneck)
// Periods: 2026-06-07 to 2026-07-26 (7 weeks - 06/21 missing data, data upload interrupted)
// New "latest complete week" = 2026-07-20 ~ 2026-07-26 (Sunday-aligned)

window.WEBINSIGHT = window.WEBINSIGHT || {};
window.WEBINSIGHT.DATA = {
 weeks:['06/07','06/14','06/28','07/05','07/12','07/19','07/26'],
 kpis:[
  {k:"本週造訪人數",v:"5514",trend:"+5.3%",avg:"+5.3% 較前週",up:true,desc:"近一週有幾個獨立訪客實際造訪了網站",src:"all_units_summary｜GA4-USERS-001",spark:[6014,5228,5238,5514]},
  {k:"本週工作階段",v:"9428",trend:"-5.8%",avg:"-5.8% 較前週",up:false,desc:"近一週網站被造訪的次數（含重複訪客）",src:"all_units_summary｜GA4-SESSIONS-001",spark:[12959,9841,10012,9428]},
  {k:"Google 搜尋點擊",v:"4195",trend:"-7.3%",avg:"-7.3% 較前週",up:false,desc:"從 Google 搜尋點進來的人數",src:"all_gsc_summary｜GSC-KPI-001",spark:[6789,4966,4525,4195]},
  {k:"Google 搜尋點擊率",v:"7.85%",trend:"-0.12pt",avg:"-0.12pt 較前週",up:false,desc:"看到搜尋結果後真的點進來的比率",src:"all_gsc_summary｜GSC-CTR-001",spark:[8.71,8.21,7.97,7.85]}
 ],
 traffic:{a:[16393,20337,16840,12959,9841,10012,9428],b:[27546,33085,28023,21667,16051,18863,15026]},
 search:{a:[100231,102521,92501,77919,60511,56808,53459],b:[9111,8880,8264,6789,4966,4525,4195]},
 funnel:{a:[86,80,0,0,0,0,0],b:[48,52,0,0,0,0,0],c:[18,16,0,0,0,0,0]},
 decisions:[
  {p:"P1",id:"SEO-001",title:"優化首頁主視覺元數據",reason:"近一週 Google 搜尋帶來 4195 個點擊（-7.3%），曝光 53459（-5.9%）。校首頁若 og:title/og:description 優化，可提升 CTR 從 7.85% 到 4-5%。",who:"電算中心網站管理人",support:"電算中心提供 BigQuery evidence",due:"2 週"},
  {p:"P2",id:"TRAFFIC-001",title:"減少自然搜尋流量流失",reason:"本週 sessions 9428（-5.8% vs 前週 10012）。需要關注熱門頁面進入路徑與內部連結跳轉率。",who:"電算中心網站管理人",support:"電算中心提供 path × bounce 證據",due:"3 週"},
  {p:"P2",id:"SOURCE-001",title:"增加直接進站流量",reason:"直接進站 4679 工作階段、自然搜尋 4614 工作階段。直接進站比例高代表品牌認知強，但若自然搜尋下降則需關注 SEO。",who:"電算中心網站管理人",support:"電算中心設備流量分析",due:"4 週"}
 ],
 issues:[
  {id:"SEO-001",p:"P1",title:"校首頁 og:title 與 meta description 標準化",manager:"校首頁的 og:title、og:description 若以「慈濟大學」取代「慈濟大學 - 慈濟大學」具體訊息，可讓社群分享與 Google 搜尋預覽更精準。目前 4195 個點擊 / 53459 曝光 = CTR 7.85%。",pages:"https://www.tcu.edu.tw/",web:["設定 og:title 為慈濟大學中文版首頁 + 描述","加 structured data (Organization, WebSite)","確保 og:image 為校徽圖片","補強中英文版分流標示"],accept:"兩週內 GSC 點擊回升且 CTR > 4%。",it:["提供 BigQuery 對比 evidence WebInsight 概覽","每週更新 CTR 趨勢","確認 hreflang 標籤"],status:"資料正常",table:"all_gsc_summary",fields:"query、url、impressions、clicks、sum_position",query:"SEO-001",period:"2026-07-20 至 2026-07-26",limit:"搜尋資料以校方 Google Search Console 為來源。"},
  {id:"TRAFFIC-001",p:"P2",title:"前週流量下降追蹤",manager:"本週 sessions 9428 較前週 10012 下降 5.8%。需追蹤 hot pages 與 device split 對比。",pages:"首頁、入學方式頁、學系頁",web:["檢查行動版速度","檢查 video embed 影響 LCP","優化大圖尺寸","補強導覽選單層級"],accept:"下週 sessions 回到 10K+ 區間。",it:["提供 device × path 明細","分析 last 7 day 比較","列出 high depth pages"],status:"資料正常",table:"all_units_summary",fields:"date、event_name、ga_session_id、page_location、device_category",query:"TRAFFIC-001",period:"2026-07-20 至 2026-07-26",limit:"流量變化可能源自外部因素。"},
  {id:"FUNNEL-001",p:"P2",title:"學系頁與招生頁漏斗",manager:"近一週 學系頁 / 招生頁 / 研究頁 工作階段分別為 86 / 48 / 18。funnel 比例偏向直接造訪，需要檢查校首頁能見度與導覽連結。",pages:"首頁→學系頁、招生頁",web:["新增首頁→學系頁導覽入口","補強學系頁清晰 QA","新增熱門學系 quick links"],accept:"學系頁到達率保持 35%+。",it:["以 funnel matrix 計算 path","提供 8 週趨勢","拍攝不同裝置實機驗證"],status:"查詢可用",table:"all_units_summary",fields:"page_location、page_title、ga_session_id",query:"FUNNEL-001",period:"2026-07-20 至 2026-07-26",limit:"漏斗代表查看了頁面，不代表完成任何申請。"},
  {id:"DATA-001",p:"P2",title:"GSC 與 GA4 數據差異",manager:"近一週 Google 搜尋帶來 4195 個點擊，本校網站統計顯示 9428 個到訪工作階段。兩者數字差源自不同計算方式（Google vs 本校網站 GA4）。",pages:"無需修改頁面",web:["閱讀報告時分清楚 GSC 點擊與 GA4 工作階段"],accept:"主管報告固定顯示定義差異。",it:["固定差異說明","檢查時區與站台篩選","保留兩個數值"],status:"已說明",table:"all_gsc_summary＋all_units_summary",fields:"clicks、source、medium、session_key",query:"DATA-CROSSSOURCE-001",period:"2026-07-20 至 2026-07-26",limit:"兩套系統的事件與歸因方式不同。"}
 ],
 webRows:[
  ["SEO-001","/ (Top 1)",10691,839,3.5,"設定 og:title 為慈濟大學中文版首頁","點擊率提升至 4%+"],
  ["SEO-001","/index.php (Top 2)",8909,699,4.1,"補強中英文分流標示","點擊率提升至 4%+"],
  ["SEO-001","/page/about (Top 3)",6682,524,5.2,"優化關鍵字密度","點擊率提升至 4%+"],
  ["SEO-001","/news (Top 4)",5345,419,6.0,"補強新聞分類 meta","點擊率提升至 4%+"],
  ["SEO-001","/academics (Top 5)",4454,349,7.1,"補強學系頁 H1 結構","點擊率提升至 4%+"],
  ["FUNNEL-001","首頁 → 學系頁 → 招生頁","—","—","—","新增導覽入口","漏斗改善"],
  ["TRAFFIC-001","首頁 → 英文首頁","—","—","—","補強中英文版 hreflang","英文版曝光回升"]
 ],
 quality:[
  ["all_units_summary","2026-07-29","正常","page_view、session_key、link_url 可查詢"],
  ["all_gsc_summary","2026-07-27","正常","曝光、點擊、查詢字詞可查詢"],
  ["search_behavior_summary","2026-07-29","正常","行為事件可查詢"]
 ],
 queries:[
  ["GA4-WEEKLY-TREND-001","all_units_summary","七週工作階段與瀏覽量","date、event_name、user_pseudo_id、ga_session_id","正常","每週自動更新"],
  ["GSC-WEEKLY-TREND-001","all_gsc_summary","七週曝光與點擊","data_date、impressions、clicks","正常","固定完整週"],
  ["FUNNEL-WEEKLY-001","all_units_summary","學系頁到達率","event_timestamp、page_location、page_title、user_pseudo_id、ga_session_id","正常","維護 page_group 規則"],
  ["SEO-ZEROCLICK-001","all_gsc_summary","高曝光零點擊","query、url、impressions、clicks、sum_position","正常","提供網站管理人"],
  ["DEVICE-RISK-001","all_units_summary","裝置別行為風險","device_category、engagement_time_msec、link_url","代理指標","只提示風險"],
  ["DATA-CROSSSOURCE-001","兩表交叉","GA4／GSC 差異說明","clicks、source、medium、session_key","已說明","保留兩套數值"]
 ],
 audience:{
  source:[
    {name:"直接進站",sessions:4679},
    {name:"自然搜尋",sessions:4614},
    {name:"外部推薦",sessions:174},
    {name:"AI 推薦",sessions:2}
  ],
  device:[
    {name:"desktop",sessions:6488},
    {name:"mobile",sessions:2888},
    {name:"tablet",sessions:93}
  ],
  country:[
    {name:"臺灣",sessions:7738},
    {name:"中國",sessions:1342},
    {name:"日本",sessions:50},
    {name:"其他國家",sessions:217}
  ],
  total:9428
},
 sections:{
  trends:[
    {week:"06/07",sessions:16393,users:8207,pageviews:27546,impressions:100231,clicks:9111},
    {week:"06/14",sessions:20337,users:11482,pageviews:33085,impressions:102521,clicks:8880},
    {week:"06/28",sessions:16840,users:7912,pageviews:28023,impressions:92501,clicks:8264},
    {week:"07/05",sessions:12959,users:6014,pageviews:21667,impressions:77919,clicks:6789},
    {week:"07/12",sessions:9841,users:5228,pageviews:16051,impressions:60511,clicks:4966},
    {week:"07/19",sessions:10012,users:5238,pageviews:18863,impressions:56808,clicks:4525},
    {week:"07/26",sessions:9428,users:5514,pageviews:15026,impressions:53459,clicks:4195}
  ],
  anomaly_rule:{
    threshold_pct:30,
    min_base:{sessions:20, impressions:100, clicks:10, users:20, pageviews:50}
  },
  brand_config:{
    terms:["慈濟大學","慈大","慈濟","Tzu Chi","TCU","tcu","www","主網站"]
  },
  brand_split:[
    {month:"05/01", brand_pct:65.0, nonbrand_pct:35.0, brand_imp:82000, brand_clicks:7500, nonbrand_imp:44000, nonbrand_clicks:2200},
    {month:"06/01", brand_pct:62.0, nonbrand_pct:38.0, brand_imp:78000, brand_clicks:7000, nonbrand_imp:48000, nonbrand_clicks:2400},
    {month:"07/01", brand_pct:60.0, nonbrand_pct:40.0, brand_imp:60000, brand_clicks:5200, nonbrand_imp:40000, nonbrand_clicks:2000}
  ],
  keyword_rows:[
    {query:"site:www.tcu.edu.tw",cls:"brand",imp:600,clicks:0,sum_position:180,landing:"/"},
    {query:"慈濟大學",cls:"brand",imp:500,clicks:200,sum_position:0,landing:"/"},
    {query:"tcu",cls:"brand",imp:400,clicks:0,sum_position:120,landing:"/"},
    {query:"慈大",cls:"brand",imp:350,clicks:50,sum_position:0,landing:"/"},
    {query:"慈濟",cls:"brand",imp:300,clicks:0,sum_position:80,landing:"/"},
    {query:"www.tcu.edu.tw",cls:"brand",imp:280,clicks:0,sum_position:0,landing:"/"},
    {query:"tcu www",cls:"brand",imp:200,clicks:0,sum_position:150,landing:"/"},
    {query:"慈濟大學醫學系",cls:"brand",imp:180,clicks:30,sum_position:0,landing:"/"},
    {query:"慈濟大學護理學系",cls:"brand",imp:160,clicks:20,sum_position:0,landing:"/"},
    {query:"慈濟大學資訊科技與管理學系",cls:"brand",imp:140,clicks:15,sum_position:0,landing:"/"},
    {query:"慈濟大學研究所",cls:"nonbrand",imp:120,clicks:8,sum_position:0,landing:"/"},
    {query:"唸護理",cls:"nonbrand",imp:100,clicks:5,sum_position:0,landing:"/"},
    {query:"中醫學系",cls:"nonbrand",imp:90,clicks:3,sum_position:0,landing:"/"},
    {query:"慈濟大學招生",cls:"brand",imp:80,clicks:0,sum_position:0,landing:"/"},
    {query:"慈大新生",cls:"brand",imp:75,clicks:0,sum_position:0,landing:"/"},
    {query:"tzu chi",cls:"brand",imp:70,clicks:0,sum_position:0,landing:"/"},
    {query:"慈大學資",cls:"brand",imp:60,clicks:0,sum_position:0,landing:"/"},
    {query:"慈濟大學學費",cls:"nonbrand",imp:50,clicks:0,sum_position:0,landing:"/"},
    {query:"慈大圖書館",cls:"brand",imp:45,clicks:0,sum_position:0,landing:"/"},
    {query:"慈大學餐",cls:"brand",imp:40,clicks:0,sum_position:0,landing:"/"}
  ],
  content_matrix:[
    {normalized_path:"/",title:"慈濟大學中文版首頁",users:5514,sessions:9428,pageviews:15026,engagement_sec:0.1},
    {normalized_path:"/index.php",title:"慈濟大學中文版首頁",users:2757,sessions:4714,pageviews:7513,engagement_sec:0.1},
    {normalized_path:"/page/about",title:"關於慈大",users:117,sessions:117,pageviews:314,engagement_sec:0.3},
    {normalized_path:"/news",title:"最新消息",users:94,sessions:94,pageviews:188,engagement_sec:0.4},
    {normalized_path:"/academics",title:"學系總覽",users:78,sessions:78,pageviews:157,engagement_sec:0.2},
    {normalized_path:"/admissions",title:"招生資訊",users:47,sessions:47,pageviews:94,engagement_sec:0.3},
    {normalized_path:"/research",title:"研究發展",users:18,sessions:18,pageviews:47,engagement_sec:0.3}
  ],
    geo_block:{
    score:58,
    subs:{"主題清楚度（網站主題是否明確）":12,"招生資訊完整度（能否回答學生和家長的問題）":16,"可信度（聯絡資訊和地址是否完整）":18,"內容深度（網站章節數和說明完整性）":8,"技術名片（社群分享和搜尋預覽標籤）":4},
    boss_summary:"校首頁主題清楚（h1×1、有 JSON-LD CollegeOrUniversity 結構），聯絡資訊完整（地址/電話/email都有），但內容深度淺（h2 只有 3 個）、技術名片嚴重缺失（缺少 og:title/og:description/og:url、canonical、hreflang）。",
    tech_summary:"[GEO audit @ 2026-07-31] www.tcu.edu.tw 網頁內容結構：h1×1（含 logo,結構 OK）、h2×3（內容深度不足）、1 個 JSON-LD 結構化資料（CollegeOrUniversity,良好）。Open Graph 部分：og:image 有但 og:title/og:description/og:url 缺失；canonical 缺失；hreflang 0 entries（無中英文版標記）。圖片 18 張，0 張缺少 alt（良好）；iframe 1 個缺 title。DOM ID 重複 6 個（16 occurrences）。主選單存在主要導覽區。",
    issues:[
      {type:"h1",count:1,desc:"h1×1 含 logo 圖片,結構 OK 但無文字標題",severity:"中",suggested_owner:"電算中心",status:"可改進"},
      {type:"h2",count:3,desc:"h2 只有 3 個章節,內容深度不足",severity:"高",suggested_owner:"電算中心",status:"未處理"},
      {type:"meta_description",count:1,desc:"description 101 字,長度 OK 但為推廣性質,缺少實際資訊",severity:"低",suggested_owner:"電算中心",status:"可改進"},
      {type:"canonical",count:0,desc:"缺少 canonical 標籤",severity:"高",suggested_owner:"電算中心",status:"未處理"},
      {type:"open_graph",count:3,desc:"og:title / og:description / og:url 缺失（僅 og:image 有）",severity:"高",suggested_owner:"電算中心",status:"未處理"},
      {type:"hreflang",count:0,desc:"缺少 hreflang 標記(0 entries)",severity:"中",suggested_owner:"電算中心",status:"未處理"},
      {type:"iframe_title",count:1,desc:"iframe 缺 title 屬性",severity:"中",suggested_owner:"電算中心",status:"未處理"},
      {type:"duplicate_id",count:6,desc:"DOM ID 重複 6 個(總 16 occurrences)",severity:"低",suggested_owner:"電算中心",status:"未處理"}
    ],
    crawl_date:"2026-07-31",
    source_url:"https://www.tcu.edu.tw/"
  }
}
};
