var faunadb = require('faunadb'),
  q = faunadb.query

const data = {
    "explains": [],
    "count": 15,
    "quotes": [
      {
        "exchange": "NMS",
        "shortname": "Tesla, Inc.",
        "quoteType": "EQUITY",
        "symbol": "TSLA",
        "index": "quotes",
        "score": 2006516,
        "typeDisp": "Equity",
        "longname": "Tesla, Inc.",
        "exchDisp": "NASDAQ",
        "sector": "Consumer Cyclical",
        "industry": "Auto Manufacturers",
        "isYahooFinance": true
      },
      {
        "exchange": "NEO",
        "shortname": "TESLA, INC. CDR (CAD HEDGED)",
        "quoteType": "EQUITY",
        "symbol": "TSLA.NE",
        "index": "quotes",
        "score": 23690,
        "typeDisp": "Equity",
        "longname": "Tesla, Inc.",
        "exchDisp": "NEO",
        "sector": "Consumer Cyclical",
        "industry": "Auto Manufacturers",
        "isYahooFinance": true
      },
      {
        "exchange": "GER",
        "shortname": "TESLA INC",
        "quoteType": "EQUITY",
        "symbol": "TL0.DE",
        "index": "quotes",
        "score": 20729,
        "typeDisp": "Equity",
        "longname": "Tesla, Inc.",
        "exchDisp": "XETRA",
        "sector": "Consumer Cyclical",
        "industry": "Auto Manufacturers",
        "isYahooFinance": true
      },
      {
        "exchange": "LSE",
        "shortname": "LEVERAGE SHARES PUBLIC LIMITED ",
        "quoteType": "EQUITY",
        "symbol": "TSL3.L",
        "index": "quotes",
        "score": 20626,
        "typeDisp": "Equity",
        "longname": "Leverage Shares 3x Tesla ETP",
        "exchDisp": "London",
        "isYahooFinance": true
      },
      {
        "exchange": "FRA",
        "shortname": "TESLA INC",
        "quoteType": "EQUITY",
        "symbol": "TL0.F",
        "index": "quotes",
        "score": 20271,
        "typeDisp": "Equity",
        "longname": "Tesla, Inc.",
        "exchDisp": "Frankfurt",
        "sector": "Consumer Cyclical",
        "industry": "Auto Manufacturers",
        "isYahooFinance": true
      },
      {
        "exchange": "LSE",
        "shortname": "GRANITESHARES FINANCIAL PLC GRA",
        "quoteType": "EQUITY",
        "symbol": "3STS.L",
        "index": "quotes",
        "score": 20215,
        "typeDisp": "Equity",
        "longname": "GraniteShares 3x Short Tesla Daily ETP",
        "exchDisp": "London",
        "isYahooFinance": true
      },
      {
        "exchange": "MEX",
        "shortname": "TESLA INC",
        "quoteType": "EQUITY",
        "symbol": "TSLA.MX",
        "index": "quotes",
        "score": 20196,
        "typeDisp": "Equity",
        "longname": "Tesla, Inc.",
        "exchDisp": "Mexico",
        "sector": "Consumer Cyclical",
        "industry": "Auto Manufacturers",
        "isYahooFinance": true
      }
    ],
    "news": [
      {
        "uuid": "21e3a0ee-93e6-3eaf-b7b2-23e4e4a833f7",
        "title": "Tesla recalls 48,000 U.S. vehicles over speed display",
        "publisher": "Reuters",
        "link": "https://finance.yahoo.com/news/tesla-recalls-48-000-u-115408464.html",
        "providerPublishTime": 1651233248,
        "type": "STORY"
      },
      {
        "uuid": "bf1bf801-4dde-3e50-be95-9853652fe032",
        "title": "Tesla shares up 3% premarket after Elon Musk says no further stock sales are planned",
        "publisher": "MarketWatch",
        "link": "https://finance.yahoo.com/m/bf1bf801-4dde-3e50-be95-9853652fe032/tesla-shares-up-3%25-premarket.html",
        "providerPublishTime": 1651228110,
        "type": "STORY"
      },
      {
        "uuid": "52badc97-6a6e-3d3e-85be-af8733e37ef5",
        "title": "Tesla recalls another batch of Model 3 cars in China, the second in April",
        "publisher": "Reuters",
        "link": "https://finance.yahoo.com/news/china-regulator-says-tesla-recalls-064034007.html",
        "providerPublishTime": 1651214434,
        "type": "STORY"
      },
      {
        "uuid": "4de7dd7b-b910-3313-9ef8-4c8094ece9db",
        "title": "How Elon Musk transformed his cousins' solar panel company into Tesla Energy, which has faced lawsuits from angry shareholders and consumers",
        "publisher": "Business Insider",
        "link": "https://finance.yahoo.com/m/4de7dd7b-b910-3313-9ef8-4c8094ece9db/how-elon-musk-transformed-his.html",
        "providerPublishTime": 1651229206,
        "type": "STORY"
      },
      {
        "uuid": "25a200e2-d085-37b3-83e3-07a45128d176",
        "title": "Tesla recalls second batch of cars in China on safety concerns",
        "publisher": "AFP",
        "link": "https://finance.yahoo.com/m/25a200e2-d085-37b3-83e3-07a45128d176/tesla-recalls-second-batch-of.html",
        "providerPublishTime": 1651221995,
        "type": "STORY"
      },
      {
        "uuid": "0539618a-d0ab-3603-aa84-1f4793cceb61",
        "title": "UPDATE 1-Tesla recalls 48,000 U.S. vehicles over speed display",
        "publisher": "Reuters",
        "link": "https://finance.yahoo.com/news/1-tesla-recalls-48-000-132802620.html",
        "providerPublishTime": 1651238882,
        "type": "STORY"
      },
      {
        "uuid": "672737a7-cbf1-34a0-8d50-f0512f3d91bd",
        "title": "Elon Musk Sold Tesla Stock to Fund His Twitter Deal. More Disclosures Could Follow.",
        "publisher": "Barrons.com",
        "link": "https://finance.yahoo.com/m/672737a7-cbf1-34a0-8d50-f0512f3d91bd/elon-musk-sold-tesla-stock-to.html",
        "providerPublishTime": 1651235460,
        "type": "STORY"
      },
      {
        "uuid": "32dd9492-41fc-39f1-a2d9-1ef781293ee0",
        "title": "UPDATE 1-Tesla recalls another batch of Model 3 cars in China, the second in April",
        "publisher": "Reuters",
        "link": "https://finance.yahoo.com/news/1-tesla-recalls-another-batch-072308185.html",
        "providerPublishTime": 1651216988,
        "type": "STORY"
      }
    ],
    "nav": [],
    "lists": [],
    "researchReports": [],
    "screenerFieldResults": [],
    "totalTime": 64,
    "timeTakenForQuotes": 441,
    "timeTakenForNews": 600,
    "timeTakenForAlgowatchlist": 400,
    "timeTakenForPredefinedScreener": 400,
    "timeTakenForCrunchbase": 0,
    "timeTakenForNav": 400,
    "timeTakenForResearchReports": 0,
    "timeTakenForScreenerField": 0,
    "timeTakenForCulturalAssets": 0
  }

  exports.handler=async function(event,context){

    //fauna code 
    var client = new faunadb.Client({ secret: 'fnAElzeFKYAASfDo2w9UilY5-IMgq-KR-qCEPguh', domain:'db.us.fauna.com' })
    var resp ="";
    var createP = client.query(
                q.Create(q.Collection('UserDetails'), { data: { userName: 'tom@gmail.com' ,roleName:'Analyst' }})
      );
        
     createP.then(function(response) {
                console.log(response) // Would log the ref to console.
                resp=response;
        })

    return{
        statusCode:200,
        body:JSON.stringify({messge:resp})
    };
}