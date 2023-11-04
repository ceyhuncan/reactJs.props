import React from 'react';


//COLLAPS COMPONENTS AS FUNCTION
// const Collapse = (props) => {

//     return (
//         <div>
//             <a class="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
//                 Click for collapse                </a>

//             <div class="collapse show" id={props.href}>
//                 {props.children}
//                 {/* props.children indicated card component */}
//             </div>
//         </div>


//     );
// }
// export default Collapse;

//COLLAPSE COMPONENT AS CLASS (We need class componentfor state, state is an object). 
//states are mutable, but probs are immutable.

class Collapse extends React.Component{

    constructor(){
        super();
        this.state={
            showContent:"Test Content"
        }

    }
render(){
    
    return (
                <div>
                    <a class="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                        Click for collapse               
                    </a>
        
                    <div class="collapse show" id={this.props.href}>
                        {this.props.children}
                        {/* props.children indicates card component */}
{this.state.showContent}
                    </div>
                </div>
            );
    }
}
export default Collapse;