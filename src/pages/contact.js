import ImgBand from "../components/general/imgBand";
import React from "react";
import homepageBg2 from '../homepageBg2.jpg';
import joseph from "../joseph_heath.jpg"

export default function Contact(){
    return (
        <>
        <ImgBand id="commentary-band" src={homepageBg2} title='Contact'/>
        <div className="contact-container">
            <img className="contact-img" src={joseph} alt="Joseph Heath"></img>
            <div className="wrapper">
                <div className="contact-title"> Joseph Heath</div>
                <div className="contact-blurb">Campus: St. George</div>
                <div className="contact-blurb">Email Address: <a href="mailto:joseph.heath@utoronto.ca">joseph.heath@utoronto.ca</a></div>
                <div className="contact-blurb">Phone Number: 416-978-8094</div>
                <div className="contact-blurb">Fax Number: 416-971-2027</div>
                <div className="contact-blurb">Address: University College (room 149), 15 King's College Circle, Toronto
                </div>
            </div>
        </div>
        </>
    )
}