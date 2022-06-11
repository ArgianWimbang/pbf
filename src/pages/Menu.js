import React from "react";
import { Data } from "../Data/data";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import ParticlesBg from "particles-bg";
import Typical from 'react-typical';

function Menu() {
    return (
        <div className="menu">
         < ParticlesBg num={200} type="square" bg={true}/> 
            <h1 className="menuTitle">
            Our Ice Cream Menu</h1>
            
                <div className="menuList">
                    {Data.map((menuItem, key) => {
                        return (<MenuItem key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}/>);
                    })}
                </div>
            </div>
    );
}
export default Menu;
