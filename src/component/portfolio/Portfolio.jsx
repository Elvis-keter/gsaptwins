import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/rest.jpg';
import IMG2 from '../../assets/ml.jpg';
import IMG3 from '../../assets/bouncyball.jpg';
import IMG4 from '../../assets/mlm.jpg';
import IMG5 from '../../assets/smartphone.jpg';
import IMG6 from '../../assets/embedded.jpg';

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h2>PORTFOLIO</h2>

			<div className ="container portfolio__container">
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG1} alt="" height="180px"/>
					</div>
					<h3>Rest API</h3>
					<h4>Algorithm API that uses HTTP requests to access data regarding course names</h4>
				</article>

				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG2} alt=""/>
					</div>
					<h3>Covid-19 DS Visualization</h3>
					<h4>Analysis of Covid 19 data and outbreak predictions using Machine Learning model</h4>
				</article>

				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG3} alt=""/>
					</div>
					<h3>Chaos Ball Game</h3>
					<h4>A game created in Unity Hub that involves balls bouncing off a cube and surfaces inside a wall</h4>
				</article>

				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG4} alt=""/>
					</div>
					<h3>Multilevel Marketing system</h3>
					<h4>Through direct referrals and formation of child nodes, users are able to acquire profit as the root node</h4>
				</article>

				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG5} alt=""/>
					</div>
					<h3>Smartphone Analysis System</h3>
					<h4>A system that analyses the different features of smartphone brands, along with global market performance</h4>
				</article>

				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img src={IMG6} alt="" height="180px" />
					</div>
					<h3>Smart Home Embedded System</h3>
					<h4>Evolution of artificial intelligence is manifested in this system by programming of the microprocessor chip to conduct house functions</h4>
				</article>
			</div>						
		</section>
	)
}

export default Portfolio