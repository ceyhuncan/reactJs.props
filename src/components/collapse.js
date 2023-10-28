import React from 'react';

const Collapse = (props) => {

    return (
        <div>
                <a class="btn btn-primary" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>

            <div class="collapse" id={props.href}>
                {props.children}
                {/* props.children indicated card component */}
            </div>
        </div>


    );
}
export default Collapse;

