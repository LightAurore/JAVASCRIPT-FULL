// https://app.currencyapi.com/request-playground
import useSWR from 'swr';
import { fetchCurrencyService } from '../../services/currency.service';
import style from './currence.module.css';

interface CurrencyData {
  // Définissez ici la structure de votre objet "data"
  // Par exemple :
  // id: number;
  // name: string;EUR,USD,GBP,CAD,XOF,JPY,CNY
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


// ----------------------------------
// const baseCurrent : Array<string>  = ["USD","EUR","CAD","GBP"];

 // exchange card
//  const CurrencyView = ({curr ,code, value, date}) =>{
//   <article className="current-card">
//     <div className="curr-head">
//       <h4>{curr}/{code}</h4>
//     </div>
//     <div className="curr-rate">
//       {value}
//     </div>
//     <div className="curr-increase">
//       <span>{date}</span>
//     </div>
//   </article>
// }


const ForeignCurrency = () => {

  const {data, isLoading} = useSWR(
      `currency`, 
      () => fetchCurrencyService(),
      { revalidateOnFocus: false }
  );

  const {exchange1} =  {...data};

  
  return (
    <>
      
      <article>
      {isLoading ? (
                <p>Chargement...</p>
            ) : data ? (
                <>
                  <article className={style["current-card"]}>
                    <div className="curr-head">
                      <h4>XOF/CDF</h4>
                      <span>2822 </span>
                    </div>
                    <div className="curr-head">
                      <h4>EUR/CDF</h4>
                      <span>2822 </span>
                    </div>
                    <div className="curr-head">
                      <h4>USD/CDF</h4>
                      <span>2822 </span>
                    </div>
                    <div className="curr-head">
                      <h4>GBP/CDF</h4>
                      <span>2822 </span>
                    </div>
                    <div className="curr-head">
                      <h4>CAD/CDF</h4>
                      <span>2822 </span>
                    </div>
                    <div className="curr-head">
                      <h4>JPY/CDF</h4>
                      <span>2822 </span>
                    </div>
                    <div className="curr-head">
                      <h4>CNY/CDF</h4>
                      <span>2822 </span>
                    </div>
                  </article>
                </>
            ) : (
                <p>Error, API has 423 status 🥺</p>
            )}
      </article>
    </>
  )
}

export default ForeignCurrency;