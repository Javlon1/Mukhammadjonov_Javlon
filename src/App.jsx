import { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/layout/Header/Header';
import About from './Components/Page/Home/About/About';
import Contact from './Components/Page/Home/Contact/Contact';
import Intro from './Components/Page/Home/Intro/Intro';
import Item from './Components/Page/Home/Portfolio/item/item';
import Services from './Components/Page/Home/Services/Services';
import NotFound from './Components/Ui/404/404.jsx';
import Loader from './Components/Ui/Loader/Loader';

function App() {

  const [scrol, setScrol] = useState(false)
  const offSet = 100;
  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  const top = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  document.onkeydown = (e) => {
    if (e.keyCode === 123) {
      return false;
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
      return false
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
      return false
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
      return false
    } else if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
      return false
    }
  };
  //

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCounteries = async () => {
      await fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/users')
      setLoading(false)
    }
    getCounteries()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Item />
      <Services />
      <Contact />

      <div onClick={top} className={scrol ? "scroll-up active" : "scroll-up"}>
        <svg className='scroll-up__svg' viewBox='-2 -2 52 52'>
          <path className='scroll-up__svg__path'
            d='
              M24,0
              a24,24, 0 0,1 0, 48
              a24,24, 0 0,1 0, -48
            '/>
        </svg>
      </div>
    </div>
  );
}

export default App;