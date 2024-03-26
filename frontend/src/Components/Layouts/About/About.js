import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../../images/truck.svg";
import icon2 from "../../../images/bag.svg";
import icon3 from "../../../images/support.svg";
import icon4 from "../../../images/return.svg";
import icon5 from "../../../images/about.jpg";
import kaustav from "../../../images/Kaustav.jpg";
import aditya from "../../../images/Aditya.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="why-choose-section font-inter font-normal text-base text-gray-800 py-20 ml-20 pl-10 justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="col-lg-6">
            <h2 className="section-title text-3xl font-semibold mb-4">
              Why Choose Us
            </h2>
            <p className="mb-8">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <img src={icon1} alt="Fast & Free Shipping" className="w-20 h-20" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fast & Free Shipping</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                    velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <img src={icon2} alt="Easy to Shop" className="w-20 h-20" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Easy to Shop</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                    velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <img src={icon3} alt="24/7 Support" className="w-20 h-20" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                    velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <img src={icon4} alt="Hassle Free Returns" className="w-20 h-20" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hassle Free Returns</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                    velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="img-wrap relative">
              <img
                src={icon5}
                alt="Why Choose Us"
                className="rounded-lg object-cover w-4/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="py-8 px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          <section className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                  <div className="mb-4">
                    <img
                      className="rounded-full w-32 h-32 object-cover"
                      src={aditya}
                      alt="icon"
                    />
                  </div>
                  <div className="text-center">
                    <h5 className="text-xl font-semibold text-primary">Aditya Das</h5>
                    <p className="mb-2">MERN DEVELOPER</p>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                      Curabitur pellentesque convallis purus non ornare. Donec
                      bibendum sed purus dignissim rutrum. Maecenas bibendum
                      feugiat est, et venenatis nunc.
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href="https://www.linkedin.com/in/aditya-das-513883222"
                      className="text-primary"
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a
                      href="https://github.com/AdityaDas31"
                      className="text-primary"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                  <div className="mb-4">
                    <img
                      className="rounded-full w-32 h-32 object-cover"
                      src={kaustav}
                      alt="icon"
                    />
                  </div>
                  <div className="text-center">
                    <h5 className="text-xl font-semibold text-primary">Kaustav Ghosh</h5>
                    <p className="mb-2">MERN DEVELOPER</p>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                      Curabitur pellentesque convallis purus non ornare. Donec
                      bibendum sed purus dignissim rutrum. Maecenas bibendum
                      feugiat est, et venenatis nunc.
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href="https://www.linkedin.com/in/kaustav-ghosh-b8a8b3222"
                      className="text-primary"
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a
                      href="https://github.com/kaustav03"
                      className="text-primary"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
