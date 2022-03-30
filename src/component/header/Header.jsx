import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocials';
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {FaHandsHelping} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import {AiFillPhone} from 'react-icons/ai'


const Header = () => {
	return (
		<header>		
			<div className="gastank">
				<a href="#">HOME <AiFillHome className="myicon"/></a>
				<a href="#about">ABOUT <AiOutlineUser className="myicon"/></a>
				<a href="#services">SERVICES <FaHandsHelping className="myicon"/></a>
				<a href="#experience">EXPERIENCE <MdWorkOutline className="myicon"/></a>
				<a href="#portfolio">PORTFOLIO <FaAward className="myicon"/></a>				
				<a href="#contact">CONTACT <AiFillPhone className="myicon"/></a>
			</div>
			<div className = "container header__container">
				
				<h1>KETER ELVIS</h1>
				<h4 className ="text-light">UI/UX Designer</h4>
				<CTA />
				<HeaderSocial />

				<div className="me">
					<img src={ME} alt="me" />
				</div>
			</div>
		</header>
	)
}

export default Header