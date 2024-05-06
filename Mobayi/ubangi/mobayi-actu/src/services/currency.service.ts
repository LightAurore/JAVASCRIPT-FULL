import axios from 'axios';


 export const fetchCurrencyService : Promise<unknown>  = async (_curr:string,exch1:string, exch2:string)=> {
    // const url : string = import.meta.env.EXCHANGE_API;
    
    // let user: User = null;
    console.log("currency : ", _curr);
    

    let exchangeCD, exchangeXO;

    try {
        const { data }= await axios.get(`https://api.currencyapi.com/v3/latest?apikey=cur_live_EyhBEYkjxK9J8tVpbXJASnDZGMbfYISXXB5ZTJfe&currencies=${exch1}%2C${exch2}&base_currency=${_curr}`);
        // console.log("*************************");
        const curr = data.data;
        // console.log(data);
        const rdc = curr[exch1];
        // console.log(curr[exch2]);
        const rc = curr[exch2];
        // console.log("*************************");

        exchangeCD = {
            code: rdc.code,
            value: rdc.value,
            date: data.meta.last_updated_at
        }

        exchangeXO = {
            code: rc.code,
            value: rc.value,
            date: data.meta.last_updated_at
        }
        
      } catch (error) {
        if (axios.isAxiosError(error)) {
          handleAxiosError(error);
        } else {
          handleUnexpectedError(error);
        }
      }

    
    return {exchangeCD, exchangeXO};
  }