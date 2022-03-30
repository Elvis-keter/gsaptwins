import React from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'

const Contact = () => {
	return (
		<section id="contact">
			<h2>CONTACT ME</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdEmail className="contact__option-icon"/>
						<h4>Email</h4>
						<a href="mailto:ketere254@gmail.com" target="_blank">Message</a>
					</article>

					<article className="contact__option">
						<BsGithub className="contact__option-icon"/>
						<h4>Github</h4>
						<a href="https://github.com/Elvis-keter">View</a>
					</article>

					<article className="contact__option">
						<BsGithub className="contact__option-icon"/>
						<h4>Instagram</h4>
						<a href="https://www.instagram.com/_elv.is/">View</a>
					</article>
				</div>
				<div className="contact__options">
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon"/>
						<h4>WhatsApp</h4>
						<a href="https://api.whatsapp.com/send?phone=+254741457808">Message</a>
					</article>

					<article className="contact__option">
						<BsTwitter className="contact__option-icon"/>
						<h4>Twitter</h4>
						<a href="https://twitter.com/ketwaeps">Message</a>
					</article>

					<article className="contact__option">
						<SiLinkedin className="contact__option-icon"/>
						<h4>LinkedIn</h4>
						<a href="https://www.linkedin.com/in/elvis-keter-a91a7422a/">View</a>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Contact