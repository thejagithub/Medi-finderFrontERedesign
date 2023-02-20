import React from 'react';
// import logo from './logo.svg';

import './App.css';

function App() {
  

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Home</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">LogIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">SignUp</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Medi Finder!</div>
        <div className="intro-heading text-uppercase"><span style={{color:"#ffc107"}}>It's</span> Nice To Meet You</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">We provide you the best service available at the market.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className=" fa fa-map-marker  fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Find medicines based on location</h4>
          <p className="text-muted">Finding medicines has never been so simple.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Easy registration and login</h4>
          <p className="text-muted">Register to the application to get exclusive offers and many more.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-user-md fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Reputed Medical Companies</h4>
          <p className="text-muted">At this time, a lot of medical companies have joined forces with us. And a lot of other companies want to join forces with us.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Feel free to contact us at anytime.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Medi Finder 2023</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
