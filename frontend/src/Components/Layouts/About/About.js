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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center bg-gray-100">
        <div className="w-full lg:w-5/12 lg:order-2">
          <img src={icon5} alt="Icon" className="w-full rounded-lg" />
        </div>
        <div className="w-full lg:w-5/12 lg:order-1 py-8 lg:py-0 px-4 lg:px-12">
          <h2 className="text-center lg:text-left text-4xl font-bold mb-8">Why Choose Us</h2>
          <div className="flex flex-wrap justify-center lg:justify-start">
            <div className="w-full md:w-1/2 lg:w-full mb-8">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4">
                  <img src={icon1} alt="Icon" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Fast & Free Shipping</h3>
                  <p className="text-lg">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-full mb-8">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4">
                  <img src={icon2} alt="Icon" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Easy to Shop</h3>
                  <p className="text-lg">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-full mb-8">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4">
                  <img src={icon3} alt="Icon" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                  <p className="text-lg">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-full mb-8">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-4">
                  <img src={icon4} alt="Icon" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Hassle Free Returns</h3>
                  <p className="text-lg">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container mx-auto">
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
