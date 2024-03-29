import React from "react";
import ReactDOM from 'react-dom';

let curDate = new Date();
curDate = curDate.getHours()

let greeting = '';
const cssStyle = { }

if(curDate >= 1 && curDate < 12){
  greeting = 'Good Morning'
  cssStyle.color = 'green'
} else if(curDate>=12 && curDate<19){
  greeting = 'Good Afternoon'
  cssStyle.color = 'red'
} else {
  greeting = 'Good Night'
  cssStyle.color = 'black'
}

ReactDOM.render(
  <h1> Hello Sir, <span style={cssStyle}>{greeting}</span></h1>,
  document.getElementById('root')
)