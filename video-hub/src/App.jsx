
import { useCallback, useState } from 'react';
import './App.css';
import FooterVideo from './containers/footer-video/footer-video';
import HeaderVideo from './containers/header-video/header-video';
import MainVideo from './containers/main-video/main-video';

function App() {
  const [data, setData] = useState([]);

  const handleData = useCallback((vid) => {

    setData(data => [...data, ...vid] );
    console.log('-------------------------------------')
    console.log(data);
    
  },[data])

  return (
    <>
      <HeaderVideo onMiningData= {handleData} />

      <MainVideo />

      <FooterVideo />
      
    </>
  )
}

export default App
