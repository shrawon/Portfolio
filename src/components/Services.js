import react from "react";

function Services() {

    const header = {
        subHeading : "Providing wide Range of Digital Services",

     };
     const state = [
        {
            id: 1,
            icon: './image/portfolio1.png',
            heading: "VISUAL DESIGN",
            text: "focusing on improving a design’s/product’s aesthetic appeal and usability with suitable images, typography, space, layout and color",

        },
        
        {
            id: 2,
            icon: './image/portfolio3.png',
            heading: "INTERACTION",
            text: "designing interactive products and services in which a customer's focus goes beyond the item in development to include the way users will interact with it.",

        },
        {
            id: 3,
            icon: './image/portfolio2.png',
            heading: "UI/UX desgin",
            text: "bringing a design-centric approach to user interface and user experience design, and offering practical, skill-based instruction centered around a visual communications perspective.",

        },
     ];

    return ( 
        <div className="services">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h2 className="subheading">{header.subHeading}</h2>
                        <div className="commonBorder">
                        </div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="services_box">
                                    <img src={info.icon} className="commonIcons" />
                                    <h3 className="services_box-header">{info.heading}</h3>
                                    <p className="services_box-p">{info.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Services;