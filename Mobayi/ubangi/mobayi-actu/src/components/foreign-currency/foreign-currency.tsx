
import useSWR from 'swr';
import { fetchCurrencyService } from '../../services/currency.service';
import { useState } from 'react';

interface CurrencyData {
  // Définissez ici la structure de votre objet "data"
  // Par exemple :
  // id: number;
  // name: string;
  // ...
}
interface CurrencyData {
  meta: {
    // Définissez ici la structure de votre objet "meta"
    // Par exemple :
    // someMetaProperty: string;
    // ...
  };
  data: {
    // Définissez ici la structure de votre objet "data"
    // Par exemple :
    // id: number;
    // name: string;
    // ...
  };
}

const baseCurrent : Array<string>  = ["USD","EUR","CAD","GBP"];

 // exchange card
 const CurrencyView = ({curr ,code, value, date}) =>{
  <article className="current-card">
    <div className="curr-head">
      <h4>{curr}/{code}</h4>
    </div>
    <div className="curr-rate">
      {value}
    </div>
    <div className="curr-increase">
      <span>{date}</span>
    </div>
  </article>
}


const ForeignCurrency = () => {
  
  // const [currency, setCurrency] = useState(data);

  // for (let i=0; i < baseCurrent.length; i++) {
    
  //   console.log(baseCurrent[i]);
    
  //   const {data, isLoading} = useSWR(
  //     `currency`, 
  //     () => fetchCurrencyService(baseCurrent[i],"CDF","XOF"),
  //     { revalidateOnFocus: false }
  //   );

  //   const {exchangeCD, exchangeXO} =  {...data};
  //   console.log({exchangeCD, exchangeXO});
    
  //   for (let index = 0; index < 2; index++) {
  //     if(index==0){
  //       const {code, value, date} ={...exchangeCD};
  //       console.log(code, value, date)
  //     }else if(index==1){
  //       const {code, value, date} ={...exchangeXO};
  //       console.log(code, value, date)
  //     }
  //   }
    
  // }
  baseCurrent.map(element =>{
      console.log(element);
    
    const {data, isLoading} = useSWR(
      `currency`, 
      () => fetchCurrencyService(element,"CDF","XOF"),
      { revalidateOnFocus: false }
    );

    const {exchangeCD, exchangeXO} =  {...data};
    
    for (let index = 0; index < 2; index++) {
      if(index==0){
        const {code, value, date} ={...exchangeCD};
        console.log(code, value, date)
      }else if(index==1){
        const {code, value, date} ={...exchangeXO};
        console.log(code, value, date)
      }
    }
  })

  // 
  const {data, isLoading} = useSWR(
      `currency`, 
      () => fetchCurrencyService("EUR","CDF","XOF"),
      { revalidateOnFocus: false }
  );

  const {exchangeCD, exchangeXO} =  {...data};

 
  for (let index = 0; index < 2; index++) {
    if(index==0){
      const {code, value, date} ={...exchangeCD};
      console.log(code, value, date)
    }else if(index==1){
      const {code, value, date} ={...exchangeXO};
      console.log(code, value, date)
    }
  }


  
  return (
    <>
      <h2>Exchange</h2>
      <article>
      {isLoading ? (
                <p>Chargement...</p>
            ) : data ? (
                <>
                  <p>Data reçu</p>
                  
                </>
            ) : (
                <p>Error, API has 423 status 🥺</p>
            )}
      </article>
    </>
  )
}

export default ForeignCurrency;