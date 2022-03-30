import React from 'react';
import './experience.css';
import {MdDoneAll} from 'react-icons/md'

const Experience = () => {
	return (
		<section id="experience">
			<h2>EXPERIENCE</h2>

			<div className ="container experience__container">
				<div className ="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>React</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>HTML</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>CSS</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>C</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>C++</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>Javascript</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
					</div>
				</div>
				<div className ="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>MySQL</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>PHP</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>Python</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
						<article className="experience__details">
							<MdDoneAll className="experience__details-icon"/>
							<div>
								<h4>Node JS</h4>
								<small className="text-light">Experienced</small>
								<p>-------------</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience