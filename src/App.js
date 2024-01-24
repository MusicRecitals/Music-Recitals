import React from 'react'
import { useHistory } from "react-router-dom"; 
import { BroweserRouter } from 'react-router-dom';
import "./App.css"; 
import AppRouter from './routers/AppRoute';

function App() {
  return (
    <>
    <AppRouter />
    </>
    
  );
}

export default App;
