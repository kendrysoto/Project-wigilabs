import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Main from './components/Main';
import {useFirebaseApp} from 'reactfire'; 
import {ToastContainer} from 'react-toastify';


function App() {
  const firebase = useFirebaseApp();
    console.log(firebase);
  return (
    <div className="App">
      <Menu/>
      <Main/>
      <ToastContainer />
      

    </div>
  );
}

export default App;
