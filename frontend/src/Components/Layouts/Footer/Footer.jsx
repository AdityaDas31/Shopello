import { useEffect, useState } from 'react';
// import WorkIcon from '@mui/icons-material/Work';
// import StarsIcon from '@mui/icons-material/Stars';
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
    {
        title: "about",
        links: [
            {
                name: "Contact Us",
                redirect: "https://www.flipkart.com/helpcentre",
            },
            {
                name: "About Us",
                redirect: "https://www.flipkart.com/about-us",
            },
            {
                name: "Careers",
                redirect: "https://www.flipkartcareers.com",
            },
            {
                name: "Flipkart Stories",
                redirect: "https://stories.flipkart.com",
            },
            {
                name: "Press",
                redirect: "https://stories.flipkart.com/category/top-stories/news",
            },
            {
                name: "Flipkart Wholesale",
                redirect: "https://www.flipkartwholesale.com",
            },
            {
                name: "Corporate Information",
                redirect: "https://www.flipkart.com/corporate-information",
            },
        ]
    },
    {
        title: "help",
        links: [
            {
                name: "Payments",
                redirect: "https://www.flipkart.com/pages/payments",
            },
            {
                name: "Shipping",
                redirect: "https://www.flipkart.com/pages/shipping",
            },
            {
                name: "Cancellation & Returns",
                redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
            },
            {
                name: "FAQ",
                redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
            }
        ]
    },
    {
        title: "policy",
        links: [
            {
                name: "Return Policy",
                redirect: "https://www.flipkart.com/pages/returnpolicy",
            },
            {
                name: "Terms Of Use",
                redirect: "https://www.flipkart.com/pages/terms",
            },
            {
                name: "Security",
                redirect: "https://www.flipkart.com/pages/paymentsecurity",
            },
            {
                name: "Privacy",
                redirect: "https://www.flipkart.com/pages/privacypolicy",
            },
            {
                name: "Sitemap",
                redirect: "https://www.flipkart.com/sitemap",
            },
            {
                name: "EPR Compliance",
                redirect: "https://www.flipkart.com/pages/ewaste-compliance-tnc",
            },
        ]
    },
    {
        title: "social",
        links: [
            {
                name: "Facebook",
                redirect: "https://www.facebook.com/flipkart",
            },
            {
                name: "Twitter",
                redirect: "https://twitter.com/flipkart",
            },
            {
                name: "YouTube",
                redirect: "https://www.youtube.com/flipkart",
            }
        ]
    }
]

const Footer = () => {

    const location = useLocation();
    const [adminRoute, setAdminRoute] = useState(false);

    useEffect(() => {
        setAdminRoute(location.pathname.split("/", 2).includes("admin"))
    }, [location]);

    return (
        <>
            {!adminRoute && (
                <>
                    <footer className="mt-0 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
                        <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

                            {footerLinks.map((el, i) => (
                                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                                    <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                                    {el.links.map((item, i) => (
                                        <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                                    ))}

                                </div>
                            ))}

                        </div>

                        <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
                        <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
                            <div className="w-full sm:w-1/2">
                                <h2 className="text-primary-grey">Mail Us:</h2>
                                <p className="mt-2 leading-5">Flipkart Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia &<br />
                                    Clove Embassy Tech Village,<br />
                                    Outer Ring Road, Devarabeesanahalli Village,<br />
                                    Bengaluru, 560103,<br />
                                    Karnataka, India
                                </p>
                            </div>

                            <div className="w-full sm:w-1/2">
                                <h2 className="text-primary-grey">Registered Office Address:</h2>
                                <p className="mt-2 leading-5">Flipkart Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia &<br />
                                    Clove Embassy Tech Village,<br />
                                    Outer Ring Road, Devarabeesanahalli Village,<br />
                                    Bengaluru, 560103,<br />
                                    Karnataka, India <br />
                                    CIN : U51109KA2012PTC066107<br />
                                    Telephone: <a className="text-primary-blue" href="tel:18002029898">1800 202 9898</a>
                                </p>
                            </div>
                        </div>

                    </footer>
                    {/* <!-- footer ends --> */}

                    <div className="px-16 py-0 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
                        <div className='pt-6'>
                            <form action="" >
                                <div
                                    class="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                                

                                    {/* <!-- Newsletter sign-up input field --> */}
                                    <div class="relative md:mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="email"
                                            class="peer block min-h-[auto] w-full rounded bg-white text-black placeholder-gray-500 px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                            id="exampleFormControlInput1"
                                            placeholder="Email address" />
                                        
                                    </div>

                                    {/* <!-- Newsletter sign-up submit button --> */}
                                    <div class="mb-6 md:mr-auto">
                                        <button
                                            type="submit"
                                            class="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 "
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <span>&copy; 2007-{new Date().getFullYear()} Flipkart.com</span>
                        <img draggable="false" src={paymentMethods} alt="Card Payment" />
                    </div>
                </>
            )}
        </>
    )
};

export default Footer;
