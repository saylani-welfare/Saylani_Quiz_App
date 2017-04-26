
import React from 'react';
import './style.css';
import { Link } from 'react-router';
import FBmiddleware from '../middlewares/FBmiddleware.js';
import GMAILmiddleware from '../middlewares/GMAILmiddleware.js';
import { Store } from '../store/store.js';
import { connect } from 'react-redux';
import SaylaniLogo from '../../public/assets/images/Saylogo.png';

function mapStateToProp(state) {
    return {
        userLoginStatus: state.InOutReducer.isLoggedIn
    }
}

function mapDispatchToProp(dispatch) {
    return {
        facebookLogin: () => { Store.dispatch(FBmiddleware.facebookLogin()) },
        facebookLogout: () => { Store.dispatch(FBmiddleware.fblogout()) },
        gmailLogin: () => { Store.dispatch(GMAILmiddleware.googleLogin()) },
    }
}

export class MassTrainingComp extends React.Component {
    constructor() {
        super()
        this.GMAILsignin = this.GMAILsignin.bind(this)
    }

    regestrationform() {
        return (
            <form>
                <label htmlFor="">Batch</label>
                <input type="text" ref='batch' placeholder=" enter your batch" />
                <label htmlFor="">section</label>
                <input type="text" ref='section' placeholder=" Enter your secton " />
                <label htmlFor="">Roll num</label>
                <input type="text" ref='section' placeholder=" Enter your rollnumber " />
            </form>
        )
    }


    FBsignin() {
        this.props.facebookLogin();
    }
    FBlogout() {
        this.props.facebookLogout()
    }

    GMAILsignin() {
        this.props.gmailLogin()
    }

    renderButton() {

        const signup_loginButton = (
            <div>                
                <Link onClick={this.FBsignin.bind(this)} style={{ paddingRight: '10px', cursor: 'pointer' }} ><img height='45px' src="assets/images/loginWithFB.png" alt=" Facebook Logo" title="Login with facebook" /></Link>
                <Link onClick={this.GMAILsignin.bind(this)} style={{ cursor: 'pointer' }}><img height='45px' src="assets/images/gmail.png" alt="Gmail Logo" title="Login With Gmail" /></Link>
            </div>
        )

        /*const LogoutButton = (
            <div>              
                <button className="btn btn-primary" onClick={this.FBlogout.bind(this)} style={{ float: "right", fontSize: "10px", marginLeft: "10px", borderRadius: "100px", marginTop: "10px", textAlign: "center" }}>Logout</button>
            </div>
        )*/

        if (this.props.userLoginStatus === false) {
            // Store.dispatch(FBmiddleware.studentForm())
            // browserHistory.push('./studentform');
            // return LogoutButton
            return signup_loginButton
        }
        
    }
    render() {
        return (
            <div>
                {console.log(this.props.userLoginStatus)}
                {/*<div id="menu-item" className="menu-item hide-menu">
            <div className="container">
                <ul>
                    <a href="index.html"><li>home</li></a>
                    <a href="#about"><li>about</li></a>
                    <a href="#expertise"><li>expertise</li></a>
                    <a href="#workstation"><li>workstation</li></a>
                    <a href="#team"><li>team</li></a>
                    <a href="#contact"><li>contact</li></a>
                    <a href="elements.html"><li>Elements</li></a>
                </ul>
            </div>
        </div>*/}

                <div className="main">
                    <header style={{ backgroundColor: 'grey' }}>
                        <nav>
                            <div style={{ height: '0px' }} className="container">
                                <div className="navigation-bar" >
                                    <div className="row" >
                                        <div className="col-xs-6">
                                            <div className="logo">
                                                {/*<a href="#"><span className="fa fa-viacoin"></span></a>*/}
                                                <img height='90px' src={SaylaniLogo} alt="saylaniLogo" />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            {/*<Link onClick={this.FBsignin.bind(this)} style={{paddingRight: '10px'}} ><img height='45px' src="assets/images/loginWithFB.png" alt=" Facebook Logo" title="Login with facebook"/></Link>
                                    <Link onClick={this.GMAILsignin.bind(this)} ><img height='45px' src="assets/images/gmail.png" alt="Gmail Logo" title="Login With Gmail"/></Link>
                                    <button className="btn btn-primary" onClick={this.FBlogout.bind(this)} style={{float:"right",fontSize:"10px",marginLeft:"10px" ,borderRadius:"100px",marginTop:"10px",textAlign:"center"}}>Logout</button>                         */}
                                            {this.renderButton()}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </nav>

                        <div className="container" style={{ paddingBottom: '20px' }}>
                            <div className="row">
                                <div className="intro-box">
                                    <div className="intro">
                                        {/*<h1>Mass Training Program</h1>
                                <p>Creative digital agency based in US</p>*/}
                                        {/*<a className="btn vira-btn" href="#">Explore us</a>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section id="about" className="about section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2">
                                    <h2 className="title">Mass Training Program</h2>
                                    <p>
                                        Saylani Mass Training and Job creation Program is DevBootcamp , which calls itself an “apprenticeship on steroids, ” is one of a new breed of computer programming  school that’s proliferating in San Francisco and other US tech hubs. These “hacker boot camps  ” promise to teach students how to write code in two or three months and help them get hired as web developers, with starting salaries between $500 – $1000, often within days or weeks of graduation. We’re focused on extreme employ ability.

Saylani Mass Training has trained about 500 students, and 95 percent of them have been hired as  software developers within a few months pf graduation . Its now opening campus in all over Pakistan.The target is to train 10,000 Mobile and cloud software developers each year , for the next five years. This will generate additional 50,000 support jobs each year . It is projected that it will inject at least $100,000 per year into the Pakistan Economy. In total it will increase exports by $ 1 billion each year .
                            </p>
                                    <img src="assets/images/signature.png" alt="signature" />
                                    <span>Vira Studio-ceo</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<section className="purpose section">
                <div className="container">
                    <h2 className="title">Courses</h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-diamond" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>GIT</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>                       
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>HTML5</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-bicycle" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>JavaScript</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Typescript</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Angular 2</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Apache Cordova</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Ionic</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Mongo DB</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>CCNA</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>CCO</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>CCA</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Graphic Designing</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Machine Learning</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
                    {/*<section id="expertise" className="expert">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 bg-img">
                            <div></div>
                        </div>
                        <div className="col-sm-5 section">
                            <h2 className="title">Responsive design expert</h2>
                            <div id="expert-slider" className="owl-carousel">
                                <div className="item">
                                    <p>
                                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall proposition. Organically grow the holistic world view of disruptiveinnovationvia workplace diversity and empowerment.
                                    </p>
                                </div>
                                <div className="item">
                                    <p>
                                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
                    {/*<section className="vira-quote section bg-img">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <img className="quote" src="assets/images/quote.png" />
                           <p>
                               A user interface is like a joke. If you have to explain it, it’s not that good.
                           </p>
                           <p className="author">Martin leBlance, Iconfinder</p>
                           <img src="assets/images/mouse.png" />
                        </div>
                    </div>
                </div>
            </section>*/}
                    {/*<section id="workstation" className="work section">
                <div className="container">
                    <h2 className="title">Our workstations</h2>
                    <div id="workstation-slider" className="owl-carousel">
                        <div className="item">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <img className="img-responsive" src="assets/images/4.jpg" />
                                </div>
                                <div className="vira-card-content">
                                    <h3>Creative geeks</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <img className="img-responsive" src="assets/images/5.jpg" />
                                </div>
                                <div className="vira-card-content">
                                    <h3>Creative freaks</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <img className="img-responsive" src="assets/images/6.jpg" />
                                </div>
                                <div className="vira-card-content">
                                    <h3>Creative nerds</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <img className="img-responsive" src="assets/images/4.jpg" />
                                </div>
                                <div className="vira-card-content">
                                    <h3>Creative geeks</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <img className="img-responsive" src="assets/images/5.jpg" />
                                </div>
                                <div className="vira-card-content">
                                    <h3>Creative freaks</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <img className="img-responsive" src="assets/images/6.jpg" />
                                </div>
                                <div className="vira-card-content">
                                    <h3>Creative nerds</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club met zichlaim meebrengt. Onze enige missiede
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
                    <section className="watch bg-img">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <span>Watch showreel</span>
                                    <a className="popup-youtube btn" href="https://www.youtube.com/watch?v=wHzFXcq17_c"><span className="fa fa-play"></span></a>
                                    <span>with us</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<section id="team" className="team section">
                <div className="container">
                    <h2 className="title">Our team members</h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <img className="img-responsive" src="assets/images/8.jpg" />
                                </div>
                                <div className="vira-card-content">
                                    <h3>Pink Floyd</h3>
                                    <p>
                                       Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club 
                                    </p>
                                    <div className="social-icons">
                                        <ul>
                                            <a href="#"><li><span className="ion-social-facebook"></span></li></a>
                                            <a href="#"><li><span className="ion-social-twitter"></span></li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <img className="img-responsive" src="assets/images/9.jpg" />
                                </div>
                                <div className="vira-card-content">
                                    <h3>Eric Clapton</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club 
                                    </p>
                                    <div className="social-icons">
                                        <ul>
                                            <a href="#"><li><span className="ion-social-facebook"></span></li></a>
                                            <a href="#"><li><span className="ion-social-twitter"></span></li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <img className="img-responsive" src="assets/images/10.jpg" />
                                </div>
                                <div className="vira-card-content">
                                    <h3>Elton Jhon</h3>
                                    <p>
                                        Complimenten, bewonderend gefluit en lonkende blikken zijn enkele risico’s die The Garment Club 
                                    </p>
                                    <div className="social-icons">
                                        <ul>
                                            <a href="#"><li><span className="ion-social-facebook"></span></li></a>
                                            <a href="#"><li><span className="ion-social-twitter"></span></li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
                    {/*<section className="subscribe section bg-img">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Subscribe to our newsletter to get update</p>
                            <form className="form-inline">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="user-email" placeholder="Write your email here...." />
                                </div>
                                <button type="submit" className="btn vira-btn">Send me</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>*/}

                    <section id="contact" className="contact section">
                        <div className="container">
                            <h2 className="title">Drop us a line</h2>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="vira-card">
                                        <div className="vira-card-header">
                                            <span className="fa fa-map-o" aria-hidden="true"></span>
                                        </div>
                                        <div className="vira-card-content">
                                            <h3>Address</h3>
                                            <p>
                                                Level 5, 25 pitt st, US
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="vira-card">
                                        <div className="vira-card-header">
                                            <span className="fa fa-phone" aria-hidden="true"></span>
                                        </div>
                                        <div className="vira-card-content">
                                            <h3>Phone</h3>
                                            <p>
                                                +555 211 3747
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="vira-card">
                                        <div className="vira-card-header">
                                            <span className="fa fa-paper-plane" aria-hidden="true"></span>
                                        </div>
                                        <div className="vira-card-content">
                                            <h3>Email</h3>
                                            <p>
                                                hey@themewagon.com
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="social-icons">
                                        <ul>
                                            <a href="#"><li><span className="ion-social-facebook"></span></li></a>
                                            <a href="#"><li><span className="ion-social-twitter"></span></li></a>
                                            <a href="#"><li><span className="ion-social-pinterest"></span></li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p> Mass Training Quiz  <span className="fa fa-heart"></span> by <a href="http://saylaniwelfare.com/">Our Team</a></p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export const MassTraining = connect(mapStateToProp, mapDispatchToProp)(MassTrainingComp)