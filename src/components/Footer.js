import React from 'react';
import '../App.css';
import { Footer } from 'react-materialize';

const AppFooter = () => {
  return (
    <div className="App-footer">            
      <Footer copyrights="&copy; 2017 Scarpa & Debusschere" 	moreLinks={<div className="grey-text text-lighten-4 right">Sistemas Embebidos</div>}/>
    </div>
  ) 
}

export default AppFooter
