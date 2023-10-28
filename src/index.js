// we will only use index.js and will create a component. We dont need app.js for now. 
// An Component is a javascript code consist of a class and a function. 
// We can use componets with jsx codes to display html outputs to user or 
// and js codes (event handler codes) provide us interactivity(functionality). 
//Smallest unit is elements in components.

//import: how it works:  from 'react' module and assing to React.They are all in modules folder.

import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/card';
import Collapse from './components/collapse';

//first we will create a functional component here. Later we will crete a class component.
// function App(){
//     return <h1>My name is Jay</h1>;
// }

//or we can write a class component;

// class App2 extends React.Component{
//     render(){
//         return <h1>My Name is Jay</h1>
//     }
// }


// ReactDOM.render(<App/>,document.getElementById('root') ); or we could use query selector;

//ReactDOM.render(<App2/>,document.querySelector('#root'));

// COMPONETS

// function App(){
//     return
// }

// if we want to rewrite our function (more modern way);

// const App=()=>{
//     return
// }


const App = () => {
  return (
  
    <div>
      

      <div className="card-group">
      <Collapse href="collapseExample1">

        <Card
          cardTitle="Lara"
          cardText="Card Text 1"
          updatedTime=" 1 minutes ago updated"
          image="https://picsum.photos/id/237/200/300"
        />
        </Collapse>

        <Collapse href="collapseExample2">
        <Card
          cardTitle="Nell"
          cardText="Card Text 2"
          updatedTime=" 2 minutes ago updated"
          image="https://picsum.photos/id/102/200/300"
        />
          </Collapse>

          <Collapse href="collapseExample3">

        <Card
          cardTitle="Ceyhuncan"
          cardText="Card Text 3"
          updatedTime=" 3 minutes ago updated"
          image="https://picsum.photos/id/152/200/300" 
        />
                  </Collapse>

      </div>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App/>, document.getElementById("root"));