export const ParseData = (dataList) => {
    const ParsedData = [];
    dataList.map(item=>{
      ParsedData.push(JSON.parse(item.data.body));
      }); 
    return ParsedData;
};

export const GetRequiredStockData = (stockData) => {
  const sData = [];
  stockData.map((item)=>{
      const row = {
          "region": item.region,
          "quoteSourceName": item.quoteSourceName,
          "quoteType": item.quoteType,
          "currency": item.currency,
          "exchange": item.exchange,
          "marketCap":item.marketCap,
          "symbol":item.symbol,
          "targetPriceHigh":item.targetPriceHigh,
          "totalCash":item.totalCash
      }
  sData.push(row)
  })
  return sData
};