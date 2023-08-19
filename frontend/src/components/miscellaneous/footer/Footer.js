import React from 'react';
import './Footer.css';  


const Footer = () => {
  return (

    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">At Shopello, we're more than just an online store - we're your shopping companion on a journey of convenience and discovery. With a passion for quality and a dedication to service, we curate a diverse range of products that cater to your needs and aspirations.

Our mission is to bring you a seamless and enjoyable shopping experience, whether you're looking for fashion, electronics, home essentials, or beyond. With a user-friendly interface, secure transactions, and a commitment to excellence, we're here to make your online shopping simple and exciting.

Thank you for choosing Shopello as your go-to destination. Join us in creating memories through shopping, and let's embark on this journey together.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#/action-1">Categories 1</a></li>
              <li><a href="#/action-2">Categories 2</a></li>
              <li><a href="#/action-3">Categories 3</a></li>
              <li><a href="#/action-4">Categories 4</a></li>
              <li><a href="#/action-5">Categories 5</a></li>
              <li><a href="#/action-6">Categories 6</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#/action-1">About Us</a></li>
              <li><a href="#/action-2">Contact Us</a></li>
              <li><a href="#/action-3">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
          <a href="#/action-1"> Shopello</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#/action-1"><i class="fa-brands fa-facebook"></i></a></li>
              <li><a className="twitter" href="#/action-2"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a className="instagram" href="#/action-3"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a className="linkedin" href="#/action-4"><i class="fa-brands fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</div>
  )
}

export default Footer;
