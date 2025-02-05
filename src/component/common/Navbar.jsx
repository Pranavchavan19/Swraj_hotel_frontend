import React from "react";
import { NavLink , useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";


function Navbar(){
      
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();

    return(
        <nav>

            <div>

            </div>
             
             <ul>
                <li> <NavLink to="/home" activeClass="active"> Home </NavLink> </li>
                <li> <NavLink to="/rooms" activeClass="active"> Rooms </NavLink> </li>
                <li> <NavLink to="/find-booking" activeClass="active"> Find my bookings </NavLink> </li>

                <li> <NavLink to="/profile" activeClass="active"> Profile </NavLink> </li>
                <li> <NavLink to="/admin" activeClass="active"> Admin </NavLink> </li>

                <li> <NavLink to="/login" activeClass="active"> Login </NavLink> </li>
                <li> <NavLink to="/register" activeClass="active"> Register </NavLink> </li>

                <li> Logout  </li>
             </ul>
        </nav>
          
    )
}

export default Navbar;