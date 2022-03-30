import React from 'react';
import './footer.css';
import {BsTwitter} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {SiLinkedin} from 'react-icons/si'

const Footer = () => {
	return (
		<footer>
			<h2 className="footer__logo">PERSONAL WEBSITE</h2>

			<ul className="gs9">
				<li><a href="#">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<br />
			<div className="footer__socials">
				<a href="https://twitter.com"><BsTwitter /></a>
				<a href="https://instagram.com"><FaInstagram /></a>
				<a href="https://www.linkedin.com/in/elvis-keter-a91a7422a/"><SiLinkedin /></a>
			</div>

			<div className="footer__copyright">
				<small>&copy; Keter Elvis. At your service. All rights reserved.</small>
			</div>
		</footer>
	)
}

export default Footer