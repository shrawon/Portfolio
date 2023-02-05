import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";

const state = [

    { id: 1,
        icon: './image/WeatherApp.png',
        heading: "Weather App",
    },

    {
        id: 2,
        icon: './image/EdgeCLothing.png',
        heading: "EDGE ONLINE CLOTHING",
    
    },
    
];

function Project() {
    return (  
        <div className="Project">
            <div className="container">
                <div className="ProjectHeader">
                    <div className="HeadingProject">
                        <h2 className="mainHeading">
                            My Projects
                        </h2>
                    </div>
                    
                    <div className="row bgMain1">
                        {state.map((info) => (
                            <div className="col-2 projectcontainer">
                                <div className="projectinfo">
                                    <img src={info.icon} className="projectIcon" />
                                    <h3 className="Overlay">{info.heading}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            
        </div>
    );
}

export default Project;
