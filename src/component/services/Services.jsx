import React from 'react';
import './services.css';

const Services = () => {
	return (
		<section id="services">
			<h2>SERVICES</h2>

			<div className ="container services__container">
				<article className="services__item">
					<h3>Web Application Development</h3>
					<h4>Use of frontend and backend stacks, frameworks and tools for development of websites. Examples include React, Node, GNU O, PHP, C, C# and Javascript</h4>
				</article>

				<article className="services__item">
					<h3>Database Management & Design</h3>
					<h4>With database management, I can facilitate the security of the users in a given system by encrypting and hashing for safe use.</h4>
				</article>

				<article className="services__item">
					<h3>Machine Learning & Data Science</h3>
					<h4>Data Analysis and data visualization of different data sets. Development of AI systems used to predict different outcomes in various fields</h4>
				</article>

				<article className="services__item">
					<h3>Mobile Gaming Development</h3>
					<h4>Development of gaming applications by integrating C# and javascript stacks that create the functionalities for different objects in Unity Hub.</h4>
				</article>
			</div>	
		</section>
	)
}

export default Services