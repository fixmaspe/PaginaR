import React from "react";
import {cardStyles, headerStyles} from "./Card";


const Header = (props) => {
   return (<div className="jumbotron jumbotron-fluid">
		   <div className="container-fluid">
    <h1 style={headerStyles} className="display-4">{props.title}</h1>
    <p className="lead">{props.descripcion}
    </p>
    <button type="button" class="btn btn-primary">Call to action!</button>
  </div>
</div>)

}

export default Header;