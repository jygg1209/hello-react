import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'react';

  return (
    <div>
    <div className="App">
      안녕하세요. 
    </div>
    <div>환영합니다.</div>
    {
      name === 'react'
      ? <div>리액트 페이지입니다.</div>
      : <div>리액트 페이지가 아닙니다. </div>
    }
    </div>
  );
}

export default App;
