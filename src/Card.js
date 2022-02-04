import React from "react";


const Card = (props) => {
   return (<div className="card">
    <img src={props.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 style={cardStyles} className="card-title">{props.title}</h5>
      <p className="card-text">{props.descripcion}</p>
      <div className="card-footer" style={{textAlign:"center"}}>
      <button type="button" className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  </div>)
}

export const cardStyles = {
	color : "white",
	background : "grey",
	textAlign: "center"

};

export const headerStyles ={
	color: "blue",
	textAlign: "center"

};

export default Card;



