import React from 'react';
import Routes from './src/routes';
import Database  from './src/data/initDataBase';


export default function App() {
  const db  = new Database();  
  return (
    <Routes/>
  );
}

