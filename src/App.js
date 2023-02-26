import './App.css';
import React from 'react';
import ParticlesBg from 'particles-bg';
import { useState, useRef } from 'react';
import { FaChair, FaGamepad, FaGithub, FaHeadphones, FaKeyboard, FaLaptop, FaLaptopCode, FaMobile, FaMouse, FaSoundcloud, FaSpeakerDeck, FaVideo, FaWatchmanMonitoring, FaWheelchair, FaXbox, } from 'react-icons/fa';
import { FiHeadphones, FiInstagram, FiMonitor, FiShoppingBag, FiSpeaker, FiYoutube } from 'react-icons/fi';
import { AiOutlineDown, AiOutlineLaptop } from 'react-icons/ai';
import { RiServerLine } from 'react-icons/ri';
import { MdChair, MdChairAlt, MdOutlineChair } from 'react-icons/md';
import { FiTwitter } from "react-icons/fi";
import { FaBlogger } from "react-icons/fa";
//import { SiAntdesign } from 'react-icons/si';
//import { GiSlippers } from 'react-icons/gi';
//import { CgHeadset } from 'react-icons/cg';
//import { FaTshirt } from 'react-icons/fa';
import TextLoop from "react-text-loop";
import Typist from 'react-typist';

function App() {

	const [dark, setdark] = useState(false);
	const card = useRef(null);

	let cursor_config = {
		show: true,
		blink: true,
		element: '🔨',
		hideWhenDone: true,
	};

	function toogle() {
		setdark(!dark);
	}
	function HandleScrollDown() {
		card.current.scrollTop = card.current.scrollHeight;
	}
	return (
		<div className="d-flex content-center">

			{/* {block ?
				<a target="_blank" onClick={() => setblock()} rel="noreferrer" href="https://shp.ee/aswgeeb?smtt=0.0.9">
					<div className="ads" >

					</div>
				</a>
				: ''
			} */}
			<div className={`card ${dark ? 'dark-theme' : ''}`}>
				<div className={`toogle ${dark ? 'light' : 'dark'}`} onClick={() => toogle()}></div>
				<div className={`bg-dark ${dark ? 'active' : ''}`}></div>
				<div ref={card} className="card-body  custom-scrollbar">
					<div>
						<img className="card-avatar" src="feb.jpg" alt="avatar" />
					</div>
					<div className="card-title">
						<Typist startDelay={100} cursor={cursor_config}>
							Hello, selamat datang <br />
							<Typist.Delay ms={500} hideWhenDone={true} hideWhenDoneDelay={true} />
							
							<span className="subtitle">jangan lupa di checkout gaes</span><br />
							<Typist.Delay ms={100} hideWhenDone={true} hideWhenDoneDelay={true} />
							<span className="subtitle">dan di follow ya gaes!</span>
						</Typist>
					</div>

					<div className="card-title">
						{/*Project Freelance{' '}*/}
						<TextLoop interval={3000}>
							<span className="text-blue">Klik Link dibawah ini :</span>
							<span className="text-blue">Buat kamu yang tertarik!</span>
							<span className="text-blue">thanks you!</span>
						</TextLoop>
					</div>
					<div >
						<a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=AvBInFtkCiw?sub_confirmation=1">
							<div className="btn-action">
								<FiYoutube className='icon' />
								<span>Youtube</span>
								<span></span>
							</div>
						</a>
						<a target="_blank" rel="noreferrer" href="https://www.vantech-id.my.id/">
							<div className="btn-action">
								<FaBlogger className='icon' />
								<span>Blogger</span>
							</div>
						</a> 
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/jo7z52CXbxb">
							<div className="btn-action">
								<FaXbox className='icon' />
								<span>Xbox Series X + Gamepass</span>
							</div>
						</a>
						<a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=9s0za5poLGU&t=182s&ab_channel=febrybramantyo">
							<div className="btn-action">
								<FaXbox className='icon' />
								<span>Xbox Series S + Gamepass</span>
							</div>
						</a>
						
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/VySAXpYHxxb">
							<div className="btn-action">
								<FaGamepad className='icon' />
								<span>Cooling Stand Xbox Series S</span>
							</div>
						</a>
						
						<a target="_blank" rel="noreferrer" href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbDJfSjMwWEpnTVJ5WVN3Mkt2MTJwZUk5UGQ2d3xBQ3Jtc0tsaXZhRzBmTFMwaC1PT2NUUV9HUWlJaEJkc1FkWVF6NGZTN3oxOFMzclhzN3RQZ0N3R1lHWnpIMEtZRmxJNy1tZmZ2ZXU0dkRDcVNSWmhEamFBcEpDMWJzbEZwS2EyYk5VQnhuZjRJdktYOHpEVzNMRQ&q=https%3A%2F%2Ftokopedia.link%2FFC8ZMoZ3uxb&v=L-KUiq12y-k">
							<div className="btn-action">
								<FaKeyboard className='icon' />
								<span>Keyborad Mechanical Fantech</span>
							</div>
						</a>

                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbU1GeHBfREtnTndybE44MFhDV0c1N24yaDkyZ3xBQ3Jtc0tscHBGLTRUTXcxaXY4T3pUUTBDWk4xdk02bkU1cVpZaVhKblZMT3dzWlRUOE5XandrTWc2cGlERUpBcjRCU3BEUktDOUtGWHVFOTZjU1A5SF9uN0JYcnpVWEtvaXR4Y1k3UkhBbEhyQXNvMVgteWZCaw&q=https%3A%2F%2Ftokopedia.link%2FiIYqR0W3uxb&v=L-KUiq12y-k">
							<div className="btn-action">
								<FaKeyboard className='icon' />
								<span>Paket Keyboard + Mouse Logitech</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/n8GXot8Hxxb">
							<div className="btn-action">
								<FaVideo className='icon' />
								<span>Video Capture Live Streaming</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/mNlo4DaJxxb">
							<div className="btn-action">
								<FaLaptop className='icon' />
								<span>Laptop HP murah !!!</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/qF23CraKxxb">
							<div className="btn-action">
								<FaChair className='icon' />
								<span>Kursi Gaming Murah !!!</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/4K7CMY5jGxb">
							<div className="btn-action">
								<FiMonitor className='icon' />
								<span>SET TOP BOX Murah !!!</span>
							</div>
						</a>
						
						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/wFMeeMjkGxb">
							<div className="btn-action">
								<FiHeadphones className='icon' />
								<span>TWS Gamen</span>
							</div>
						</a>

						<a target="_blank" rel="noreferrer" href="https://tokopedia.link/w1o2EPtkGxb">
							<div className="btn-action">
								<FiHeadphones className='icon' />
								<span>Headset Razen Kraken X</span>
							</div>
						</a>

						{/* <a target="_blank" rel="noreferrer" href="https://shope.ee/2fW6BHclDU">
							<div className="btn-action">
								<GiSlippers className='icon' />
								<span>Sendal Nationidn</span>
							</div>
						</a>
						<a target="_blank" rel="noreferrer" href="https://shope.ee/q4S3niuJt">
							<div className="btn-action">
								<CgHeadset className='icon' />
								<span>Earphone Bluetooth Rexione</span>
							</div>
						</a>
						<a target="_blank" rel="noreferrer" href="https://shope.ee/7pDbp7qPYp">
							<div className="btn-action">
								<FaTshirt className='icon' />
								<span>Baju Lebaran Pria</span>
							</div>
						</a>
						<a target="_blank" rel="noreferrer" href="https://shope.ee/7pDbp7qPYp">
							<div className="btn-action">
								<FaTshirt className='icon' />
								<span>Baju Kuliah & Kerja</span>
							</div>
						</a>
						<a target="_blank" rel="noreferrer" href="https://mobile.twitter.com/febrybramantyo">
							<div className="btn-action">
								<FiTwitter className='icon' />
								<span> </span>
							</div>
						</a> 
						<a target="_blank" rel="noreferrer" href="https://github.com/try-catch-dev">
							<div className="btn-action">
								<FaGithub className='icon' />
								<span>Github</span>
							</div>
						</a>*/}
					</div>
					<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/0cqAAg8kGxb">
							<div className="btn-action">
								<FiSpeaker className='icon' />
								<span>JBL Go 2</span>
							</div>
							</a>
							<a id='shopee-af' target="_blank" rel="noreferrer" href="https://tokopedia.link/bAwJbbfoGxb">
							<div className="btn-action">
								<FaHeadphones className='icon' />
								<span>JBL On-Ear T500</span>
							</div>
							</a>
						
				</div>
				<div className='scroll-info' onClick={HandleScrollDown}> <span className='scroll-text'>Scroll Down</span ><AiOutlineDown size={12} /></div>

			</div>
			<ParticlesBg type="thick" bg={true} />

		</div>
	);
}

export default App;
