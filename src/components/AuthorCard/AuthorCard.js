import React from "react";
import "./style.css";

function AuthorCard(props) {
    return (
        <div className="card">
           <div className="card-image">
               <img className="responsive-img" alt={props.name} src={props.image} />
            </div> 
        </div>
    );
}

export default AuthorCard;
            
/* <div className="card-content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}                    
                    </li>
                    <li>
                        <strong>Books:</strong> {props.books}
                    </li>
                </ul>
            </div> */