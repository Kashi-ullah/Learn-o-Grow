import React, { useState,useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Index from './components/Home/Index';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const storeUserLoggedInformation  = localStorage.getItem('isloggedIn')
  
  if(storeUserLoggedInformation ==='1'){
    setIsLoggedIn(true)
  }
  },[])
  
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isloggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedin')
    setIsLoggedIn(false);
  };

  return (
    <div>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
     
    </div>
  );
}

export default App;