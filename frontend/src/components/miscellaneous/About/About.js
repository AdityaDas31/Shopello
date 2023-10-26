import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import icon1 from "../../../images/truck.svg";
import icon2 from "../../../images/bag.svg";
import icon3 from "../../../images/support.svg";
import icon4 from "../../../images/return.svg";
import icon5 from "../../../images/about.jpg";
import kaustav from "../../../images/Kaustav.jpg";
import aditya from "../../../images/Aditya.jpg";
import Navbar from "../Header/Header";
// import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={icon1} alt="Icon" className="imf-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={icon2} alt="Icon" className="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={icon3} alt="Icon" className="imf-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={icon4} alt="Icon" className="imf-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img src={icon5} alt="Icon" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>

          {/* <div className="row">


                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 link">
                            <img src={aditya} className="img-fluid mb-5" alt="icon" />
                            <h3><Link to="#"><span className="">Aditya</span> Das</Link ></h3>
                            <span className="d-block position mb-4">MERN DEVELOPER</span>
                            <p>Separated they live in.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="mb-0"><Link to="https://www.linkedin.com/in/aditya-das-513883222" className="more dark">Learn More <span className="icon-arrow_forward"></span></Link ></p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 link">
                            <img src={kaustav} className="img-fluid mb-5" alt="icon" />

                            <h3><Link to="#"><span className="">Kaustav</span> Ghosh</Link ></h3>
                            <span className="d-block position mb-4">MERN DEVELOPER</span>
                            <p>Separated they live in.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="mb-0"><Link to="https://www.linkedin.com/in/kaustav-ghosh-b8a8b3222" className="more dark">Learn More <span className="icon-arrow_forward"></span></Link ></p>

                        </div>
                    </div> */}
          <section className="team-section py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                  <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                    <div className="card-body p-4">
                      <div className="member-profile position-absolute w-100 text-center">
                        <img
                          className="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={aditya}
                          alt="icon"
                        />
                      </div>
                      <div className="card-text pt-1">
                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                          Aditya Das
                        </h5>
                        <div className="mb-3 text-center">MERN DEVELOPER</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus. Curabitur pellentesque convallis purus non
                          ornare. Donec bibendum sed purus dignissim rutrum.
                          Maecenas bibendum feugiat est, et venenatis nunc.
                        </div>
                      </div>
                    </div>
                    <div className="card-footer theme-bg-primary border-0 text-center">
                      <ul className="social-list list-inline mb-0 mx-auto">
                        <li className="list-inline-item">
                          <Link to="https://www.linkedin.com/in/aditya-das-513883222" className="text-dark">
                          <i class="fa-brands fa-linkedin"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="https://github.com/AdityaDas31" className="text-dark">
                          <i class="fa-brands fa-github"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                    <div className="card-body p-4">
                      <div className="member-profile position-absolute w-100 text-center">
                        <img
                          className="rounded-circle mx-auto d-inline-block shadow-sm"
                          src={kaustav} 
                          alt="icon"
                        />
                      </div>
                      <div className="card-text pt-1">
                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                        Kaustav Ghosh
                        </h5>
                        <div className="mb-3 text-center">MERN DEVELOPER</div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Vivamus eget
                          eros vestibulum, accumsan ante viverra, condimentum
                          tellus. Curabitur pellentesque convallis purus non
                          ornare. Donec bibendum sed purus dignissim rutrum.
                          Maecenas bibendum feugiat est, et venenatis nunc.
                        </div>
                      </div>
                    </div>
                    <div className="card-footer theme-bg-primary border-0 text-center">
                      <ul className="social-list list-inline mb-0 mx-auto">
                        <li className="list-inline-item">
                          <Link to="https://www.linkedin.com/in/kaustav-ghosh-b8a8b3222" className="text-dark">
                          <i class="fa-brands fa-linkedin"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="https://github.com/kaustav03" className="text-dark">
                          <i class="fa-brands fa-github"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
