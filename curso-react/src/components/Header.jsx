import React from "react";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="container"> 
            <div className="row">
                <div className="col-md-6">
                    <NavBar />
                </div>
                <div className="col-md-6">
                    CartWidget
                </div>
            </div>
        </div>
    )
}




export default Header; 