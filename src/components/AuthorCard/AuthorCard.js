import React from "react";
import "./style.css";

function AuthorCard(props) {
    return (
        <div className="card hoverable">
           <div className="card-image">
               <img className="responsive-img" alt={props.name} src={props.image} />
            </div> 
        </div>
    );
}

export default AuthorCard;
