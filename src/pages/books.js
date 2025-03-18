import '../App.css';
import ImgBand from '../components/general/imgBand';
import homepageBg1 from '../homepageBg1.png';
import React from 'react';
import Book from '../components/books/book';
import book1 from '../book1.jpg';
import book2 from '../book2.jpg';
import book3 from '../book3.jpg';
import book4 from '../book4.jpg';
import book5 from '../book5.jpg';
import book6 from '../book6.jpg';
import book7 from '../book7.jpg';
import book8 from '../book8.jpg';
import book9 from '../book9.jpg';
import book10 from '../book10.jpg';
import book11 from '../book11.jpg';



export default function Books(){
    return(
        <div id='books'>
            <ImgBand id="books-band" src={homepageBg1} title='My Books'/>
            <div id='all-books-container'>
            <Book title="Ethics for Capitalists" text="Ethics for Capitalists offers an updated statement of the Market Failures Approach to business ethics,
            suitable for use in undergraduate business ethics or PPE courses. While the competitive context of the
            market economy provides economic actors greater freedom to pursue their interests, it also imposes moral
            constraints on the range of strategies they may employ. The pursuit of profit must be consistent with the
            overall objective of market institutions, which is to promote efficiency in the production and allocation of
            goods and services. Ethics for Capitalists draws out the implications of this view for business strategy,
            corporate governance, managerial authority, and shareholder primacy." cover={book1}/>

            <Book title="Cooperation & Social Justice" text="This book comprises a set of six previously unpublished philosophical papers on the theme of
            “cooperation and social justice.” It is a common approach in contemporary political philosophy
            to conceive of the major institutions of society as creating a system of mutually beneficial
            cooperation. Principle of justice, on this view, are essentially a set of normative guides, used to
            allocate the benefits and burdens of this system of cooperation. This book explores the
            connection between the normative principles that feature in a theory of justice and the
            institutional arrangements required to achieve them. One cannot think about questions of social
            justice without also considering the institutional arrangements through which they might be
            achieved, and vice versa. Each of the papers in this collection reflects this approach, applied to a
            different topic: the feasibility of socialism, objections to profit motive under capitalism, the
            significance of status inequality, the problem of self-destructive behaviour, the question of open
            borders and immigration, and finally debates over racial inequality in the United States." cover={book2}/>

            <Book title="Philosophical Foundations of Climate Change Policy" text="Although the task of formulating an appropriate policy response to the problem of anthropogenic climate
            change raises a number of very difficult normative issues, environmental ethicists have not played an
            influential role in government deliberations. This is primarily due to their rejection of many of the assumptions
            that structure the debates over policy. This book offers a philosophical defense of these assumptions. There are
            five important barriers: First, the policy debate presupposes a stance of liberal neutrality, as a result of which it
            does not privilege any particular set of environmental values over other concerns. Second, it assumes ongoing
            economic growth, along with a commitment to what is sometimes called a weak sustainability framework
            when analyzing the value of the bequest being made to future generations. Third, it treats climate change as
            fundamentally a collective action problem, not an issue of distributive justice. Fourth, there is the acceptance

            of cost-benefit analysis, or more precisely, the view that a carbon pricing regime should be guided by our best
            estimate of the social cost of carbon. And finally, there is the view that when this calculation is undertaken, it is
            permissible to discount costs and benefits, depending on how far removed they are from the present. This book
            attempts to make explicit and defend these presuppositions." cover={book3}/>

            <Book title="The Machinery of Government" text="Political theorists are aware that the old-fashioned model of state power, according to which
            elected officials make policy decisions, which are then faithfully enacted by a loyal cadre of
            public servants, is hopelessly outdated. The complexity of the modern state, not to mention the
            difficulty of the economic and social problems it confronts, is such that a great deal of rule-
            making power is delegated to public servants. Yet if public servants are not merely in the
            business of administration, but are also deciding questions of policy, how are they making these
            decisions, and what normative principles inform their judgments? The Machinery of
            Government attempts to answer this question. The central challenge involves reconciling the
            tension between the traditional commitment to political neutrality on the part of the civil service
            with the fact that administrative discretion inevitably involves making normative judgments." cover={book4}/>

            <Book title="Morality Competition and the Firm" text="This collection of essays provides a compelling new framework for thinking about the moral
            obligations that private actors in a market economy have toward each other and to society. In a sharp
            break with traditional approaches to business ethics, Morality, Competition and the Firm argues that
            the basic principles of corporate social responsibility are already implicit in the institutional norms
            that structure both marketplace competition and the modern business corporation. Rather than
            bringing moral concerns to bear upon economic activity as a set of foreign or externally imposed
            constraints, this approach seeks to articulate a robust conception of business ethics derived solely
            from the basic normative justification for capitalism. The result is a unified theory of business ethics,
            corporate law, economic regulation, and the welfare state, which offers a reconstruction of the central
            normative preoccupations in each area that is consistent across all four domains. The book contains
            four new and nine previously published essays." cover={book5}/>

            <Book title="Enlightenment 2.0" text="Over the last twenty years, the political systems of the western world have become increasingly
            divided – not between right and left but between crazy and non-crazy. What&#39;s more, the crazies
            seem to be gaining the upper hand. Rational thought cannot prevail in the current social and
            media environment, where elections are won by appealing to voters&#39; hearts rather than their
            minds. The rapid-fire pace of modern politics, the hypnotic repetition of daily news items and
            even the multitude of visual sources of information all make it difficult for the voice of reason to
            be heard. Enlightenment 2.0 takes as its point of departure recent psychological and
            philosophical research that identifies the social and environmental preconditions for the exercise
            of rational thought. It then attempts to show how a politics of rationality could seek to improve
            the prevailing environment.
            A French version of this book, abridged and translated by Nicolas Bertrand, has been published
            as Les lumières de la raison.
            Translations of this book are available in the following languages: Japanese" cover={book6}/>       

            <Book title="Following the Rules" text="This book attempts to show how rule-following can be understood as an essential element of
            rational action. The first step involves showing how rational choice theory can be modified to
            incorporate deontic constraint as a feature of rational deliberation. The second involves
            disarming the suspicion that there is something mysterious or irrational about the psychological
            states underlying rule-following. Human rationality is interpreted as a by-product of the so-called
            “language upgrade” that we receive as a consequence of the development of specific social
            practices. As a result, certain constitutive features of our social environment — such as the rule-
            governed structure of social life — migrate inwards, and become constitutive features of our
            psychological faculties. This in turn explains why there is an indissoluble bond between practical
            rationality and deontic constraint. In the end, the book offers a naturalistic, evolutionary
            argument in favor of the traditional Kantian view that there is an internal connection between
            being a rational agent and feeling the force of one&#39;s moral obligations.
            Translations of this book are available in the following languages: Japanese" cover={book7}/>       

            <Book title="Filthy Lucre" text="Economists have a bad reputation. Not only do they assume that everyone is self-interested and
            amoral, they are almost always cheerleaders for the free market. As a result, most people who do
            not already share their beliefs ignore everything that economists have to say. This is a problem.
            Even among the highly educated, economics is a minefield of fallacies and errors. Among those
            who know little about the subject—a group that includes the average taxpayer and consumer, as
            well as most journalists, political activists and politicians—almost every widely held belief is
            false. The level of economic illiteracy is stunning.
            Filthy Lucre aims to level the playing field and, in this time of enormous market volatility and
            unprecedented instability, raise our level of economic literacy. Drawing on everyday examples to
            skewer the six favourite economic fallacies of the right and then the left, we learn why the right
            wing so wrongly believes that capitalism is the natural order of things, that any tax cut is a good
            tax cut, and that personal responsibility can solve any problem. And, contrary to how the left
            feels, why we must resist the urge to fiddle with prices, why the pursuit of profit is not such a
            bad thing, and why, despite efforts to improve or even fix wages, some jobs will always suck.
            Please note that this book was published under the title Economics Without Illusions in the
            United States.
            Translations of this book are available in the following languages: French, Spanish, Portuguese,
            Korean, Japanese, Chinese (Taiwan)" cover={book8}/>       

            <Book title="The Rebel Sell" text="With the popularity of Michael Moore, Adbusters magazine and Naomi Klein’s No Logo, it’s
            hard to ignore the growing tide of resistance to our corporate-controlled world. But do these
            vocal opponents of the status quo offer us a real political alternative? In this lively blend of pop
            culture, history and philosophical analysis, Joseph Heath and Andrew Potter argue that this
            countercultural opposition to &quot;the system&quot; has not only been unproductive but has helped to
            create the very consumer society that radicals oppose. This thought-provoking book will enrage
            and entertain today’s countercultural rebels and their opponents on the political right.
            Please note that this book was published under the title Nation of Rebels in the United States.
            Translations of this book are available in the following languages: French, German, Spanish,
            Japanese, Chinese (Taiwan), Korean, Indonesian, Russian, Serbian, Polish, Czech, Norwegian,
            Turkish" cover={book9}/>

            <Book title="The Efficient Society" text="Translations of this book are available in the following languages: French" cover={book10}/>      

            <Book title="Communicative Action and Rational Choice" text="In this book Joseph Heath brings Jürgen Habermas&#39;s theory of communicative action into dialogue
            with the most sophisticated articulation of the instrumental conception of practical rationality-modern
            rational choice theory. Heath begins with an overview of Habermas&#39;s action theory and his critique of
            decision and game theory. He then offers an alternative to Habermas&#39;s use of speech act theory to
            explain social order and outlines a multidimensional theory of rational action that includes norm-
            governed action as a specific type.In the second part of the book Heath discusses the more
            philosophical dimension of Habermas&#39;s conception of practical rationality. He criticizes Habermas&#39;s
            attempt to introduce a universalization principle governing moral discourse, as well as his criteria for
            distinguishing between moral and ethical problems. Heath offers an alternative account of the level
            of convergence exhibited by moral argumentation, drawing on game-theoretic models to specify the
            burden of proof that the theory of communicative action and discourse must assume." cover={book11}/>      

            </div>
        </div>
    )
}