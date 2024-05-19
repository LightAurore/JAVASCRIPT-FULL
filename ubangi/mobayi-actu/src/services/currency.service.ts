import axios from 'axios';
// https://app.currencyapi.com/request-playground

 export const fetchCurrencyService : Promise<unknown>  = async ()=> {
    // let exchange, code;
/*
    try {
        const { data }= await axios.get(`https://api.currencyapi.com/v3/latest?apikey=cur_live_EyhBEYkjxK9J8tVpbXJASnDZGMbfYISXXB5ZTJfe&currencies=EUR%2CUSD%2CGBP%2CCAD%2CXOF%2CJPY%2CCNY&base_currency=CDF`);
        // console.log("*************************");
        const curr = data.data;
        const currData = data.meta.last_updated_at;
        // console.log("*************************");

        console.log(data);
        // EUR,USD,GBP,CAD,XOF,JPY,CNY

        const EUR = curr['EUR'];
        const USD = curr['USD'];
        const GBP = curr['GBP'];
        const CAD = curr['CAD'];
        const XOF = curr['XOF'];
        const JPY = curr['JPY'];
        const CNY = curr['CNY'];
       

        exchange = {
            valueEUR: 1 / EUR.value,
            valueUSD: 1 / USD.value,
            valueGBP: 1 / GBP.value,
            valueCAD: 1 / CAD.value,
            valueXOF: 1 / XOF.value,
            valueJPY: 1 / JPY.value,
            valueCNY: 1 / CNY.value
        };
        code = {
            codeEUR: EUR.code,
            codeUSD: USD.code,
            codeGBP: GBP.code,
            codeCAD: CAD.code,
            codeXOF: XOF.code,
            codeJPY: JPY.code,
            codeCNY: CNY.code,
            currData
        };

        // console.log(exchange);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          handleAxiosError(error);
        } else {
          handleUnexpectedError(error);
        }
      }
*/
      const exchange1= "2000";
      const code1 = "EURO";
      
    return {exchange1, code1};
  }