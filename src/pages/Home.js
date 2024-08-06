import React from 'react'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block",  borderRadius: "20px", color: "white" }}
            onClick={onClick}
        />
    );
}





AOS.init();


const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        waitForAnimate: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                   
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    }


    return (
        <>

            <nav className="navbar" id='#Home'>
                <div className='logo-container'>
                    <img className="logo" src={require("../Assets/nav-logo.png")} alt="" />
                    <span className='webdeveloper'>Web Developer</span>
                </div>
                <div className="menu">
                    <a className='effect-1' href="#Home">Home </a>
                    <a className='effect-1' href="#About">About</a>
                    <a className='effect-1' href="#projects">Projects</a>
                    <a className='effect-1' href="#contact">Contact</a>
                    <a className='effect-1' href="/">
                        <a href="#contact"><button class="bn-32 bn32">Hire me</button></a>

                    </a>
                </div>
            </nav>

            <section className="sec-1">
                <div className="sec-1-container" >
                    <div>
                        <h1 data-aos="flip-left" className='myname'>Hi ,</h1>
                        <h1 data-aos="flip-right" className='myname'>Iam Rammohan</h1>
                    </div>
                    <h1 data-aos="fade-right" className='webdeveloper'>Web Developer + Web Design</h1>
                    <p data-aos="flip-left" style={{ opacity: "0.7" }} >i break down complex user experience problems to <br /> create integrity focus solutions that connect <br /> billions of people</p>
                    <div className="media-icons" data-aos="fade-up-left">
                        <a href="/resume.pdf" download>
                            <button class="Btn">Download CV</button></a>

                        <div class="card" data-aos="zoom-in">
                            <a href="https://www.instagram.com/mr_teetotaller_guy/" class="socialContainer containerOne">
                                <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                            </a>

                            <a href="https://github.com/chowdaryram1" class="socialContainer containerTwo">
                                <img className='socialSvg  socialmedia-1' src={require("../Assets/github.png")} alt="" />              </a>

                            <a href="https://www.linkedin.com/in/mohan-chowda-0050bb258/" class="socialContainer containerThree">
                                <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </a>

                            <a href="https://wa.me/+916302914897" class="socialContainer containerFour">
                                <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                            </a>
                        </div>


                    </div>
                </div>
                <div className="container-2" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img className='mine-img' src={require("../Assets/mine.jpg")} alt="" />
                </div>


            </section>

            <section className="sec-2" id='About'>
                <div className="aboutme" data-aos="fade-up">
                    <h1>About Me</h1>
                </div>
                <div className="sec-2-all">
                    <div className="sec-2-container" data-aos="fade-right">
                        <div className="sec-2cnt-1">
                            <h1>4+</h1>
                            <h4>Months Experience</h4>
                        </div>
                    </div>
                    <div className="sec-2-container" data-aos="fade-up-right">
                        <div className="sec-2cnt-1">
                            <h1>8+</h1>
                            <h4>Done Projects</h4>
                        </div>
                    </div>
                    <div className="sec-2-container" data-aos="fade-right">
                        <div className="sec-2cnt-1" >
                            <h1>1+</h1>
                            <h4>Running Projects</h4>
                        </div>
                    </div>
                    <div className="sec-2-container" data-aos="fade-up-left">
                        <div className="sec-2cnt-1" >
                            <h1>1 year</h1>
                            <h4>Experience as a Technical Recruiter</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-3">
                <div className="sec-3-container">
                    <div className="services-cnt-1" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h1 className='quality-services'>My Quality Services</h1>
                        <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers</p>
                    </div>
                    <div class="cards">
                        <div className="cards-container" data-aos="fade-down-right">
                            <div class="card red" >
                                <div className="card-cnt-1">
                                    <h1 style={{ fontSize: "50px" }} class="tip">01</h1>
                                    <p class="second-text">Web Design</p>
                                </div>
                                <div className="card-cnt-2">
                                    <span className='card-cnt-fnt'> I creates websites and applications using web
                                        languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site. <br /> I break down creating websites </span>
                                </div>
                            </div>
                        </div>
                        <div className="cards-container" data-aos="fade-down-left">
                            <div class="card blue" >
                                <div className="card-cnt-1">
                                    <h1 style={{ fontSize: "50px" }} class="tip">02</h1>
                                    <p class="second-text">Web Developing</p>
                                </div>
                                <div className="card-cnt-2">
                                    <span className='card-cnt-fnt'> I Break Down Complex user Experience Problems to create integrity focussed solutions that connect to the people</span>
                                </div>
                            </div>
                        </div>
                        <div className="cards-container" data-aos="fade-left">
                            <div class="card green" >
                                <div className="card-cnt-1">
                                    <h1 style={{ fontSize: "50px" }} class="tip">03</h1>
                                    <p class="second-text">Human Resources</p>
                                </div>
                                <div className='card-cnt'>
                                    <span className='card-cnt-fnt'> Searching for the candidates based on the jd requirements throuh linkedin portal using boolean search , <br />  job postings and also cold calling to the candidates , interview scheduling </span>
                                </div>
                            </div>
                        </div>
                        <div className="cards-container" data-aos="fade-right">
                            <div class="card purple" >
                                <div className="card-cnt-1">
                                    <h1 style={{ fontSize: "50px" }} class="tip">04</h1>
                                    <p class="second-text">Web Design</p>
                                </div>
                                <div className='card-cnt'>
                                    <span className='card-cnt-fnt'>Crafting visually appealing and user-friendly digital experiences tailored to your brand's needs.</span>
                                </div>
                            </div>
                        </div>
                        <div className="cards-container" data-aos="fade-left">
                            <div class="card blueviolet" >
                                <div className="card-cnt-1">
                                    <h1 style={{ fontSize: "50px" }} class="tip">05</h1>
                                    <p class="second-text">Responsive Design</p>
                                </div>
                                <div className='card-cnt'>
                                    <span className='card-cnt-fnt'>Ensuring seamless user experience across all devices with adaptable and fluid website layouts.</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* section-4 start  */}
            <section className="sec-4" id='projects'>
                <div className="sec-4-container">
                    <div className="sec-4-cnt-1" data-aos="zoom-in-down">
                        <h1>My Projects</h1>
                    </div>
                    <div className='click'>
                        <span> Click on the Images to view projects</span>
                    </div>
                    <div className="sec-4-container-2">
                        <div className="sec-4-cnt-2">

                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className="imagescard">
                                        <a href="https://chowdaryram1.github.io/flex-project/"><img className='project-1' src={require("../projects/project-1.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://chowdaryram1.github.io/Beej-Project/"><img className='project-1' src={require("../projects/project-2.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://chowdaryram1.github.io/Html-css/"><img className='project-1' src={require("../projects/project-3.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://chowdaryram1.github.io/dom-project/"><img className='project-1' src={require("../projects/project-4.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://chowdaryram1.github.io/Ai-Landing-animation/"><img className='project-1' src={require("../projects/project-6.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://chowdaryram1.github.io/pet-store/"><img className='project-1' src={require("../projects/project-7.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://chowdaryram1.github.io/Head-phone-slider/"><img className='project-1' src={require("../projects/project-8.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://siteforfood.netlify.app/"><img className='project-1' src={require("../projects/project-9.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://rammohanchowdary.netlify.app/"><img className='project-1' src={require("../projects/project-10.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://chowdaryram1.github.io/planet/"><img className='project-1' src={require("../projects/project-11.png")} alt="" /></a>
                                    </ div>
                                    <div className="imagescard">
                                        <a href="https://chowdaryram1.github.io/Health-care/"><img className='project-1' src={require("../projects/project-12.png")} alt="" /></a>
                                    </ div>
                                </Slider>
                            </div>
                           

                        </div>
                    </div>
                </div>
            </section>


            {/* section-5 start */}
            <section className="sec-5">

                <div className="sec-5-cnt-1" data-aos="fade-up"
                    data-aos-duration="4000">
                    <h1>My skills</h1>
                </div>
                <div className="sec-5-container">
                    <div className="sec-5-cnt-2" data-aos="zoom-in-up">
                        <h2 className='skills'>Skills Reflects Our Knowledge</h2>
                        <p style={{ opacity: "0.6" }}>Mastery in React.js, Redux, Material UI, JavaScript, CSS, HTML, and Bootstrap.</p>
                        <p style={{ opacity: "0.6" }}>"300+ hours trained in React.js, Redux, Material UI, JavaScript, CSS, HTML, and BootStrap"</p>
                        <p style={{ opacity: "0.6" }}>Eager to contribute expertise in React.js, Redux, Material
                            UI, JavaScript, CSS, HTML, and Bootstrap,<br /> delivering a 20%
                            efficiency boost in real-world web development"</p>
                        <h1 style={{ opacity: "0.5" }}>5 Months of Experience <br /> as a Apprentice</h1>
                    </div>
                    <div className="sec-5-cnt-3-container">
                        <div className="sec-5-cnt-3">
                            <div class="htmlcard" data-aos="fade-right">
                                <div class="bg">
                                    <div className="html">
                                        <h1>HTML</h1>
                                        <p className='htmlprcnt'>95%</p>
                                    </div>
                                </div>
                                <div class="blob"></div>
                            </div>
                            <div class="htmlcard" data-aos="fade-left">
                                <div class="bg">
                                    <div className="html">
                                        <h1>CSS</h1>
                                        <p className='htmlprcnt'>85%</p>
                                    </div>
                                </div>
                                <div class="blob"></div>
                            </div>
                        </div>
                        <div className="sec-5-cnt-3">
                            <div class="htmlcard" data-aos="flip-left">
                                <div class="bg">
                                    <div className="html">
                                        <h1>Bootstrap</h1>
                                        <p className='htmlprcnt'>90%</p>
                                    </div>
                                </div>
                                <div class="blob"></div>
                            </div>
                            <div class="htmlcard" data-aos="flip-right">
                                <div class="bg">
                                    <div className="html">
                                        <h1>Javascript</h1>
                                        <p className='htmlprcnt'>80%</p>
                                    </div>
                                </div>
                                <div class="blob"></div>
                            </div>
                        </div>
                        <div className="reactjs-container">
                            <div class="reactjscard" data-aos="flip-up">
                                <div class="bg">
                                    <div className="html">
                                        <h1>React Js</h1>
                                        <p className='htmlprcnt'>80%</p>
                                    </div>
                                </div>
                                <div class="blob"></div>
                            </div>
                            <div class="tailwindcard" data-aos="fade-left">
                                <div class="bg">
                                    <div className="htmltailwind">
                                        <h3>Tailwind CSS</h3>
                                        <p className='htmlprcnt'>80%</p>
                                    </div>
                                </div>
                                <div class="blob"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* section-6 start */}
            <footer className="footer" id='contact'>
                <div className="footer-container">
                    <div className="footer-cnt-1" data-aos="flip-left">
                        <h1 className='contactus'>CONTACT US</h1>
                    </div>
                    <div className="footer-container-2">
                        <div className="footer-cnt-2" data-aos="fade-left">
                            <div className="oneinput">
                                <label htmlFor="Name">Name</label>
                                <input className='input-1' type="text" placeholder='Name' />
                            </div>
                            <div className="twoinputs">
                                <div className="email">
                                    <label htmlFor="Email">Email</label>
                                    <input className='input-2' type="text" placeholder='Email' />
                                </div>
                                <div className="email">
                                    <label htmlFor="Subject">Subject</label>
                                    <input className='input-2' type="text" placeholder='Subject' />
                                </div>
                            </div>
                            <div className="thirdinput">
                                <div className="message">
                                    <label htmlFor="Message">Message</label>
                                    <input className='input-3' type="text" placeholder='Your message' />
                                </div>
                            </div>
                            <div className="submit">
                                <button className='submit'>Submit</button>
                            </div>
                        </div>
                        <div className="ftr-cnt-3-container" data-aos="fade-right">
                            <div className="ftr-cnt-3">
                                <h1 className='contact'>CONTACT ADDRESS</h1>
                            </div>
                            <div className="ftr-cnt-4">
                                <img className='icons' src={require("../Assets/location.png")} alt="" />
                                <span>Andhrapradesh, Nellore <br /> Street : Nawabpet Fci Colony</span>
                            </div>
                            <div className="ftr-cnt-4">
                                <img className='icons' src={require("../Assets/phone.png")} alt="" />
                                <span>+91  6302914897 </span>

                            </div>
                            <div className="ftr-cnt-4">
                                <img className='icons' src={require("../Assets/email.png")} alt="" />
                                <span>Andhrapradesh, Nellore </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="scroll-container">
                <a href="Home"> <button class="scroll-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-up-to-line">
                    <path d="M5 3h14" /><path d="m18 13-6-6-6 6" /><path d="M12 7v14" /></svg></button></a>
            </div>
            <div className="copyrights">
                <span>- -- </span>  <p>  Copyrights © 2024 All rights reserved by Rammohan     </p><span>- --</span>
            </div>


        </>
    )
};

export default Home