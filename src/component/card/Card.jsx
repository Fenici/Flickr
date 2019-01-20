import React, { Component } from 'react';
import './style.css'

class Card extends Component {
  
    render() { 
        return ( 
              <div className="example-1 card">
    <div className="wrapper">
      <div className="date">
        <span className="day">12</span>
        <span className="month">Aug</span>
        <span className="year">2016</span>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">Jane Doe</span>
          <h1 className="title"><a>Boxing icon has the will for a couple more fights</a></h1>
          <p className="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
        </div>
        
      </div>
    </div>
  </div>
         );
    }
}
 
export default Card;