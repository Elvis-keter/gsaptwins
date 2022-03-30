import React, {useEffect, useRef} from 'react';
import {CSSTransitionGroup} from 'react-transition-group'
import {TweenMax, Power3} from 'gsap'
import './about.css';
import ME from '../../assets/me.png'
import {MdWorkOutline} from 'react-icons/md'
import {ImUsers} from 'react-icons/im'
import {GrProjects} from 'react-icons/gr'
import {FaAward} from 'react-icons/fa'

const About = () => {
	let about__card = useRef(null);

	useEffect(() => {
		TweenMax.from(about__card, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .9})
	}, [])

	return (
		<section id="about">
			<h2>ABOUT ME</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article ref={el => about__card = el} className="about__card">
							<MdWorkOutline className="about__icon"/>
							<h5>Experience</h5>
							<small>3+ years experience</small>
						</article>

						<article ref={el => about__card = el} className="about__card">
							<ImUsers className="about__icon"/>
							<h5>Customers</h5>
							<small>Over 2 clients served</small>
						</article>

						<article ref={el => about__card = el} className="about__card">
							<FaAward className="about__icon"/>
							<h5>Projects</h5>
							<small>Over 5+ projects done</small>
						</article>

						<article ref={el => about__card = el} className="about__card">
							<GrProjects className="about__icon"/>
							<h5>Work</h5>
							<small>Worked for 2 companies already</small>
						</article>
					</div>
					<br />
					<p>
						Here, you get to see my progress over the years as a junior software developer. I have been privileged to work for some few companies that provided me with the necessities to imprive on my craft, and that is why I am honoured and motivated to create this website not only for advertisement purposes, but also for personal reference whenever I need to look at my project progresses as a developer.
					</p>
					<br />
				</div>
			</div>
		</section>
	)
}

export default About