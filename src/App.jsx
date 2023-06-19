import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/layout/Header/Header';
import Intro from './Components/Page/Home/Intro/Intro';
import NotFound from './Components/Ui/404/404.jsx';

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
  // document.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // });

  // document.onkeydown = (e) => {
  //   if (e.keyCode === 123) {
  //     return false;
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
  //     return false
  //   }
  // };
  //

  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Intro/>} />

      </Routes>
    </div>
  );
}

export default App;