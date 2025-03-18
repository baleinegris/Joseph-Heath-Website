import React from "react";
import ImgBand from "../components/general/imgBand";
import homepageBg2 from '../homepageBg2.jpg';
import '../App.css';
import VideoContainer from "../components/commentary/videoContainer";

export default function Commentary(){
    return (
        <>
            <ImgBand id="commentary-band" src={homepageBg2} title='Commentary'/>
            <div className="commentary-container">
                I am not on social media, but you can find my substack, with commentary on various contemporary political issues 
                 <a style={{marginLeft: '3px'}} href='https://josephheath.substack.com/'>here</a><br/>
                 You can find an archive of my old public affairs blog, In Due Course <a href='https://induecourse.utoronto.ca/'>here</a><br/>
                 A fair number of my lectures and media commentary have found their way onto Youtube:
            </div>
            <div className='videos-container' style={{display: 'flex', width: '80%', flexWrap: 'wrap', justifyContent: 'center', padding: '0 10%'}}>
            <VideoContainer src="https://youtube.com/embed/mHX6hTygZhM" title="Hussain on the Market: Critique of Kvetch?"/>
            <VideoContainer src="https://www.youtube.com/embed/0yrhgKf4XbY" title="Recent Advances in the Understanding of Human Sociality (London School of
Economics)"/>
            <VideoContainer src="https://youtube.com/embed/VMdzcAvFA_g" title="The Failure of Environmental Philosophy (Universität Bayreuth)"/>
            <VideoContainer src="https://youtube.com/embed/7WotnoBVF-s" title="Caring About Climate Change Implies Caring about Economic Growth (Université de
Montréal.)"/>
            <VideoContainer src="https://youtube.com/embed/nWdbVB-sDpg" title="Reason vs. Passion in Politics (Parliament Hill)"/>
            <VideoContainer src="https://youtube.com/embed/HSl7UezyvAQ" title="The Status of Abstract Moral Concepts (conference in honour of Charles Taylor)"/>
            <VideoContainer src="https://youtube.com/embed/eSqAB4AKnIg" title="Interview about Filthy Lucre"/>
            <VideoContainer src="https://youtube.com/embed/v2qAy4k8vFI" title="Summary of argument of The Rebel Sell (University of Winnipeg)"/>
            <VideoContainer src="https://youtube.com/embed/nrZei9FDmDQ" title="Interview about The Machinery of Government (TVO The Agenda)"/>
            <VideoContainer src="https://youtube.com/embed/fsVQcIw_u54" title="Interview about Enlightenment 2.0 (TVO The Agenda)"/>
            <VideoContainer src="https://youtube.com/embed/nZILscl1BA4" title="Discussion of The Machinery of Government (University of Ottawa)"/>
            </div>
        </>
    )
}