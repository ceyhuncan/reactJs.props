import React from 'react';

const Card = (props) => {
 
    return (
            <div className="card w-100">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardText}</p>
                    <p className="card-text"><small className="text-body-secondary">{props.updatedTime}</small></p>
                </div>
        </div>
    
    );
}
export default Card;

//Functional and class components:
// To use state: class components
//To use only probs and not using state: functional component. 
//With recent react update, you can also use states using Hooks in Function components. Basically we mostly use functional comporents.

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

//   class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }

