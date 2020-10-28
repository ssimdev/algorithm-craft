import React from 'react';
import './App.css';
// import Logo from './img/algorithm2.png';
import AlgorithmAthom from './img/logoAthom.png';
import NodeJS from './img/nodejs.png';
import ReactImg from './img/react-img.png';
import ReactNative from './img/react-native.png';
import PostgreSQL from './img/postgreSQL.png';
import Vue from './img/vue-img.png';
import GoogleMaps from './img/google-maps.png';
import MySQL from './img/mysql.png';
import Mongo from './img/mongo.png';
import Html from './img/html.png';
import CSS from './img/css.png';
import JS from './img/js.png';
import PHP from './img/php.png';


function App() {
    // if(true) return (
    //     <div>
    //         <div style={{marginTop: '200px', display: 'flex', justifyContent: 'center'}}>
    //                 <div class="container d-flex align-items-center flex-column">
    //                     <img src={AlgorithmAthom} alt={'logo'}></img>
    //                     <span>Coming soon...</span>
    //                 </div>
    //         </div>
    //     </div>
    // )
  return (
    <div className="App">

        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg portfolio-black text-uppercase" id="mainNav">
            <div className="container">
            </div>
        </nav>


        {/* <!-- Masthead--> */}
        <header className="masthead bg-algorithm text-center">
            <div className="container d-flex align-items-center flex-column header-title-master">
                {/* <!-- Masthead Avatar Image--> */}
                {/* <img className="masthead-avatar mb-5" src="./img/avataaars.svg" alt="" /> */}
                <img className="masthead-avatar" src={AlgorithmAthom} alt="" />

                {/* <!-- Masthead Heading--> */}
                <h1 className="masthead-heading text-uppercase mb-0">Algorithm</h1>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p className="masthead-subheading font-weight-light mb-5">Web - Development - Design - Business support</p>
            </div>
        </header>


        {/* <!-- Portfolio Section--> */}
        <section className="page-section portfolio portfolio-black" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Knowledge stack</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row">
                    {/* <!-- Portfolio Item 1--> */}
                    <div className="col-md-6 col-lg-4 mb-5 text-white">
                        Web Applications 
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div className="col-md-6 col-lg-4 mb-5 text-white">
                        Mobile Applications
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div className="col-md-6 col-lg-4 mb-5 text-white">
                        Software Architecture 
                    </div>
                    {/* <!-- Portfolio Item 4--> */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 text-white">
                        Frontend UI / UX 
                    </div>
                    {/* <!-- Portfolio Item 5--> */}
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0 text-white">
                        SPA (Single Page Applications)
                    </div>
                    {/* <!-- Portfolio Item 6--> */}
                    <div className="col-md-6 col-lg-4 text-white">
                        Backend {' & '} Databases   
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- About Section--> */}
        <section className="page-section bg-algorithm mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase">Technology stack</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                {/* <div className="row">
                    <div className="col-lg-4 ml-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div> */}
                {/* <!-- About Section Button--> */}
                {/* <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-dark" href="https://startbootstrap.com/themes/freelancer/">
                        <i className="fas fa-download mr-2"></i>
                        Free Download!
                    </a>
                </div> */}
                <div className="row">
                    <div className="text-center col-md-3">
                        <a className="" href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={NodeJS} alt="" />
                        </a>
                    </div>
                    <div className="text-center col-md-3">
                        <a className="" href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={ReactImg} alt="" />
                        </a>
                    </div>
                    <div className="text-center col-md-3">
                        <a className="" href="https://reactnative.dev/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={ReactNative} alt="" />
                        </a>
                    </div>
                    <div className="text-center col-md-3">
                        <a className="" href="https://www.postgresql.org/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={PostgreSQL} alt="" />
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="text-center col-md-3">
                        <a className="" href="https://vuejs.org/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={Vue} alt="" />
                        </a>
                    </div>
                    <div className="text-center col-md-3">
                        <a className="" href="https://cloud.google.com/maps-platform/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={GoogleMaps} alt="" />
                        </a>
                    </div>
                    <div className="text-center col-md-3">
                        <a className="" href="https://www.mysql.com/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={MySQL} alt="" />
                        </a>
                    </div>
                    <div className="text-center col-md-3">
                        <a className="" href="https://www.mongodb.com/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={Mongo} alt="" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="text-center col-md-3">
                        <a className="" href="https://html5.org/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={Html} alt="" />
                        </a>
                    </div>
                    <div className="text-center col-md-3">
                        <a className="" href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={CSS} alt="" />
                        </a>
                    </div>
                    <div className="text-center col-md-3">
                        <a className="" href="https://www.javascript.com/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={JS} alt="" />
                        </a>
                    </div>
                    <div className="text-center col-md-3">
                        <a className="" href="https://www.php.net/" rel="noopener noreferrer" target="_blank">
                            <img className="img-fluid" src={PHP} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- Contact Section--> */}
        {/* <section class="page-section" id="contact">
            <div class="container"> */}
                {/* <!-- Contact Section Heading--> */}
                {/* <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2> */}
                {/* <!-- Icon Divider--> */}
                {/* <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div> */}
                {/* <!-- Contact Section Form--> */}
                {/* <div class="row">
                    <div class="col-lg-8 mx-auto"> */}
                        {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
                        {/* <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section> */}


        {/* <!-- Footer--> */}
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Plohi 6
                            <br />
                            Sv. Nedelja 10431
                            <br />
                            Croatia
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        {/* <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a> */}
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Contact</h4>
                        <p className="lead mb-0">
                            email: algorithm.craft@gmail.com
                        </p>
                        <p className="lead mb-0">
                            web: <a href="https://algorithm-craft.hr/">algorithm-craft.hr</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Copyright Section--> */}
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright © algorithm 2020</small></div>
        </div>
        {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
        <div className="scroll-to-top d-lg-none position-fixed">
            <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
        </div>

    </div>
  );
}

export default App;
