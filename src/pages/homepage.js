import { useEffect } from 'react';
import '../App.css';
import Blurb from '../components/blurb.js';

export default function Homepage(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            console.log('Observing:', entry.target);
            if (entry.isIntersecting) {
              console.log('isIntersecting');
              entry.target.classList.add('fadeIn');
            }
          });
        }, { threshold: 0.3 });
    
        const elementsToFadeIn = document.querySelectorAll('.blurb-text-container, .fade-in');
        if (elementsToFadeIn.length === 0) {
          console.warn('No elements found with the class .blurb-text-container');
        }
        elementsToFadeIn.forEach(el => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);

    return(
        <div className='homepage'>
            <Blurb text-html='<strong>Author of the award-winning titles</strong>:
                  <ul>
                    <li> <em>Ethics for Capitalists</em>, Choice Outstanding Academic Title, 2023 </li>
                    <li> <em>Cooperation and Social Justice</em>, Finalist, Donner Prize for Best Book in Public Policy, 2022 </li>
                    <li><em>The Machinery of Government</em>, Winner, Donner Prize for Best Book in Public Policy, 2020 </li>
                    <li><em>Enlightenment 2.0</em>
                    <ul id="e2">
                    <li id="e21"> Winner, Shaughnessy Cohen Prize for Political Writing, 2014 </li>
                    <li id="e22"> Finalist, Donner Prize for Best Book in Public Policy, 2014 </li>
                    </ul>
                    </li>
                    <li> <em>Communication Action and Rational Choice</em>, Canadian Philosophical Association Book Prize, 2000 </li>
                  </ul>'
                  id='blurb-1' text-id='blurb-1-text' below='true'/>

            <Blurb title='Business Ethics' text-html='In the field of business ethics I am best known as a proponent of the “market failures approach” to
                    In the field of business ethics I am best known as a proponent of the “market failures approach” to
                    business ethics. The name comes from title of the first paper that I ever wrote on the subject, called “A
                    Market Failures Approach to Business Ethics,” which was published in a fairly obscure edited collection,
                    but was reprinted, along with many of my other papers in business ethics, in my book Morality,
                    Competition, and the Firm, published by Oxford University Press in 2014. When I started writing on the
                    subject, I didn’t actually know very much about business ethics, or about the structure of the
                    corporation. My view has therefore evolved over time (to the point where I discourage people from
                    reading or citing that early paper). For an accessible and up-to-date presentation of the view, see my
                    recently published book, <em>Ethics for Capitalists</em>.' id='blurb-2' in-box='true'/>

            <Blurb title='Politics, Philosophy, and Economics' text-html='Like many people, I was turned off by the first economics course I took. The basic assumptions seemed
                    both unrealistic and uncharitable to human nature. It therefore took me a long time to come around to
                    the realization that understanding economics is essential to understanding the modern world.
                    Unfortunately, many philosophers and political theorists still do not accept this necessity. My popular
                    book on economics, <em>Filthy Lucre </em>(published in the U.S. as <em>Economics without Illusions</em>) is intended to
                    show some of the trouble that economic illiteracy can lead one into. In <em>The Rebel Sell</em>, Andrew Potter
                    and I tried to explain how the critique of consumerism that became popular in the 20 th century was
                    based on an economic fallacy. In other work, I have tried to show how various economic ideas,
                    especially ideas from game theory, are relevant to questions in political philosophy. <em>Philosophical
                    Foundations of Climate Change Policy</em>, for example, is an attempt to defend the basic normative
                    framework adopted by climate economists.' id='blurb-3' in-box='true'/>

            <Blurb title='Critical Theory' text-html='My official philosophical training is in Frankfurt School critical theory, which occupied my undivided
                    My official philosophical training is in Frankfurt School critical theory, which occupied my undivided
                    attention for over a decade. The most important influence on my work has been Jurgen Habermas,
                    especially his two-volume <em>The Theory of Communicative Action</em>. The influence can be seen most clearly
                    in the emphasis that I put on institutions in my work, and my reluctance to treat principles of justice or
                    morality as exogenous to them. (Habermas once wrote that “golden rules and obedience to the law are
                    ethical imperatives that merely sue, as it were, for what is already implicit in social roles and norms prior
                    to any actual moral conflict.”) I have tried to resist becoming overly absorbed by the numerous moral
                    and epistemological puzzles raised by the practice of social criticism, but to mainly relatively constant
                    engagement with the practice of criticism. Most of my ‘popular’ work reflects this commitment to doing
                    critical theory, as well as reflecting upon its presuppositions and commitments.' id='blurb-4' in-box='true'/>
        </div>
    )
}