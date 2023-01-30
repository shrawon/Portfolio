import React, { useState } from "react";
import './portfolio.css';
import data from "./data";

function Portfolio (){
    const {item, setItem} = useState(data);

    const filterItem = (cateItem => {
        const updateItem = data.filterItem((curE1em) =>{
            return curE1em.category === cateItem
        })
        setItem(updateItem)
    })
    return(
    <section className="portfolio mtop">
        <div className="container">

            <div className="head flexSB">
                <div className="left">
                    <h6>
                       Creative works 
                    </h6>
                    <h2>Check My Portfolio</h2>
                </div>
            </div>

            <div className="links">
                <ul className="flexSB">
                    <li className="active" onClick={()=>setItem(data)}>All</li>
                    <li onClick={()=>filterItem("Products")}>Products</li>
                    <li onClick={()=>filterItem("Intraction")}>Intraction</li>
                    <li onClick={()=>filterItem("Web App")}>Web App</li>
                    <li onClick={()=>filterItem("Brand")}>Brand</li>

                    </ul>
            </div>
            <div className="content grid mtop">
                {item.map((elem) => {
                    const { cover, title} = elem;
                    return(
                        <div className="box">
                            <div className="img">
                                <img src={cover} alt="" />
                            </div>
                            <div className="overlay">
                                <h1>{title}</h1>

                            </div>
                        </div>
                    )
                } )}
            </div>
        </div>
    </section>
    )
}

export default Portfolio;
