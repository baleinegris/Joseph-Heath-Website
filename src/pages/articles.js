import '../App.css';
import ImgBand from '../components/general/imgBand';
import homepageBg1 from '../homepageBg1.png';
import React from 'react';
import articleData from '../articles.txt';
import { useEffect, useState } from 'react';


export default function Articles(){
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(articleData)
            .then(r => r.text())
            .then(text => {
                const lines = text.split('\n');
                setArticles(lines);
            });
    }, []);
    
    return(
        <div id='articles'>
            <ImgBand id="books-band" src={homepageBg1} title='Articles'/>
            <div className="articles-container"> 
                <ul>
                {articles.map(function(article, index){
                    return(
                        <li key={index}>{article}</li>
                    )
                }
                )}
                </ul>
            </div>
        </div>
    )
}