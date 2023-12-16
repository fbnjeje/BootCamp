import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);


const button = React.createElement('button', { className: 'Button1' }, 'button 1');
const button2 = React.createElement('button', { className: 'Button2' }, 'button 2');
const button3 = React.createElement('button', { className: 'Button3' }, 'button 3');

/*         JSX
<React.Fragment>
      <button className = 'Button1'>button 1</button>
  <button className = 'Button2'>button 2</button>
  <button className = 'Button3'>button 3</button>
</React.Fragment>
*/

//La manera de envolver unos elementos con un div
//const div = React.createElement('div',null,[button,button2,button3]);

//la manera de envolverlas con un "div" pero de react
const div = React.createElement(React.Fragment, null, [button, button2, button3]);

root.render(div);
