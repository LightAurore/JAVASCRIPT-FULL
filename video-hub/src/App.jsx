
import { useCallback, useState } from 'react';
import './App.css';
import FooterVideo from './containers/footer-video/footer-video';
import HeaderVideo from './containers/header-video/header-video';
import MainVideo from './containers/main-video/main-video';

function App() {
  const [data, setData] = useState([]);
  let video = [...data]

  console.log(data);
  console.log('--- data 1 ---');

  const handleData = useCallback((vid) => {

    setData(t => vid.map((v,i) => t.push(Number(v) ? t[i] : v)));
    // data = [...vid];
    console.log('-------------------------------------')
    console.log(data);
    console.log('-------------------------------------')
    video = [...data];
    setData([]);
    
  },[data])
  console.log(video);
  console.log('--- data 2 ---');



  return (
    <>
      <HeaderVideo onMiningData= {handleData} />

      <MainVideo video = {video} />
      <p>Mes video</p>
      {data}

      <FooterVideo />
      
    </>
  )
}

export default App
