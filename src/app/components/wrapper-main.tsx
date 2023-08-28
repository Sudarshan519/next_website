import ExchangeRage from "./exchange-rate"

const heroStyle = {

    backgroundImage: "url('images/image-5.jpg')"
}
export default function MainWrapper() {
    return (
        <div id="main-wrapper">


            <header id="header" className="bg-transparent header-text-light">
                <div className="container">
                    <div className="header-row">
                        <div className="header-column justify-content-start">

                            <div className="logo me-3"> <a className="d-flex" href="index.html" title="Payyed - HTML Template"><img
                                src="images/logo-light.png" alt="Payyed" /></a> </div>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav">
                                <span></span> <span></span> <span></span> </button>

                            <nav className="primary-menu navbar navbar-expand-lg">
                                <div id="header-nav" className="collapse navbar-collapse">
                                    <ul className="navbar-nav me-auto">
                                        <li><a href="landing-page-send.html">Send</a></li>
                                        <li><a href="landing-page-receive.html">Receive</a></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="fees.html">Fees</a></li>
                                        <li><a href="help.html">Help</a></li>
                                        <li className="dropdown"> <a className="dropdown-toggle" href="#">Features</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Headers</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                                                        <li><a className="dropdown-item" href="feature-header-dark.html">Dark Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-header-primary.html">Primary Version</a></li>
                                                        <li><a className="dropdown-item" href="index-2.html">Transparent Version</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Navigation DropDown</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                                                        <li><a className="dropdown-item" href="feature-navigation-dropdown-dark.html">Dark Version</a>
                                                        </li>
                                                        <li><a className="dropdown-item" href="feature-navigation-dropdown-primary.html">Primary
                                                            Version</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Second Navigation</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="send-money.html">Default Version</a></li>
                                                        <li><a className="dropdown-item" href="deposit-money.html">Alternate Version</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Page Headers</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="feature-page-header-left-alignment.html">Left Alignment</a>
                                                        </li>
                                                        <li><a className="dropdown-item" href="feature-page-header-center-alignment.html">Center
                                                            Alignment</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-light.html">Light Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-dark.html">Dark Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-primary.html">Primary Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-custom-background.html">Custom
                                                            Background</a></li>
                                                        <li><a className="dropdown-item"
                                                            href="feature-page-header-custom-background-with-transparent-header.html">Custom
                                                            Background 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Footer</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="index.html">Light Version Default</a></li>
                                                        <li><a className="dropdown-item" href="index-2.html">Alternate Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-footer-dark.html">Dark Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-footer-primary.html">Primary Version</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item" href="feature-layout-boxed.html">Layout Boxed</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown dropdown-mega"> <a className="dropdown-toggle" href="#">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <div className="dropdown-mega-content">
                                                        <div className="row">
                                                            <div className="col-lg"> <span className="sub-title">Homepage</span>
                                                                <ul className="dropdown-mega-submenu">
                                                                    <li><a className="dropdown-item" href="index.html">Home Version 1</a></li>
                                                                    <li><a className="dropdown-item" href="index-2.html">Home Version 2</a></li>
                                                                    <li><a className="dropdown-item" href="landing-page-send.html">Landing Page - Send</a></li>
                                                                    <li><a className="dropdown-item" href="landing-page-receive.html">Landing Page - Receive</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg"> <span className="sub-title">Account</span>
                                                                <ul className="dropdown-mega-submenu">
                                                                    <li><a className="dropdown-item" href="settings-profile.html">My Profile</a></li>
                                                                    <li><a className="dropdown-item" href="settings-security.html">Security</a></li>
                                                                    <li><a className="dropdown-item" href="settings-payment-methods.html">Payment Methods</a>
                                                                    </li>
                                                                    <li><a className="dropdown-item" href="settings-notifications.html">Notifications</a></li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Login</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="login.html">Login Page 1</a></li>
                                                                            <li><a className="dropdown-item" href="login-2.html">Login Page 2</a></li>
                                                                            <li><a className="dropdown-item" href="login-3.html">Login Page 3</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Signup</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="signup.html">Signup Page 1</a></li>
                                                                            <li><a className="dropdown-item" href="signup-2.html">Signup Page 2 </a></li>
                                                                            <li><a className="dropdown-item" href="signup-3.html">Signup Page 3 </a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg"> <span className="sub-title">Dashboard</span>
                                                                <ul className="dropdown-mega-submenu">
                                                                    <li><a className="dropdown-item" href="dashboard.html">Dashboard</a></li>
                                                                    <li><a className="dropdown-item" href="transactions.html">Transactions</a></li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Send Money</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="send-money.html">Send Money</a></li>
                                                                            <li><a className="dropdown-item" href="send-money-confirm.html">Send Money Confirm</a>
                                                                            </li>
                                                                            <li><a className="dropdown-item" href="send-money-success.html">Send Money Success </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Request Money</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="request-money.html">Request Money</a></li>
                                                                            <li><a className="dropdown-item" href="request-money-confirm.html">Request Money
                                                                                Confirm</a></li>
                                                                            <li><a className="dropdown-item" href="request-money-success.html">Request Money Success
                                                                            </a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Deposit Money</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="deposit-money.html">Deposit Money</a></li>
                                                                            <li><a className="dropdown-item" href="deposit-money-confirm.html">Deposit Money
                                                                                Confirm</a></li>
                                                                            <li><a className="dropdown-item" href="deposit-money-success.html">Deposit Money Success
                                                                            </a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Withdraw
                                                                        Money</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="withdraw-money.html">Withdraw Money</a></li>
                                                                            <li><a className="dropdown-item" href="withdraw-money-confirm.html">Withdraw Money
                                                                                Confirm</a></li>
                                                                            <li><a className="dropdown-item" href="withdraw-money-success.html">Withdraw Money
                                                                                Success </a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><a className="dropdown-item" href="notifications.html">Notifications</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg"> <span className="sub-title">Blog</span>
                                                                <ul className="dropdown-mega-submenu">
                                                                    <li><a className="dropdown-item" href="blog.html">Blog Standard</a></li>
                                                                    <li><a className="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
                                                                    <li><a className="dropdown-item" href="blog-list.html">Blog List</a></li>
                                                                    <li><a className="dropdown-item" href="blog-single.html">Blog Single Right Sidebar</a></li>
                                                                    <li><a className="dropdown-item" href="blog-single-left-sidebar.html">Blog Single Left
                                                                        Sidebar</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg"> <span className="sub-title">Others</span>
                                                                <ul className="dropdown-mega-submenu">
                                                                    <li><a className="dropdown-item" href="about-us.html">About Us</a></li>
                                                                    <li><a className="dropdown-item" href="fees.html">Fees</a></li>
                                                                    <li><a className="dropdown-item" href="help.html">Help</a></li>
                                                                    <li><a className="dropdown-item" href="contact-us.html">Contact Us</a></li>
                                                                    <li><a className="dropdown-item" href="404.html">404</a></li>
                                                                    <li><a className="dropdown-item" href="coming-soon.html" target="_blank">Coming Soon</a>
                                                                    </li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Elements</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="elements.html">Elements 1</a></li>
                                                                            <li><a className="dropdown-item" href="elements-2.html">Elements 2</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                        <div className="header-column justify-content-end">

                            <nav className="login-signup navbar navbar-expand">
                                <ul className="navbar-nav">
                                    <li><a href="login.html">Login</a> </li>
                                    <li className="align-items-center h-auto ms-sm-3"><a className="btn btn-primary" href="signup.html">Sign Up</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </header>

            <div id="content">


                <section className="hero-wrap">
                    <div className="hero-mask opacity-7 bg-dark"></div>
                    <div className="hero-bg" style={heroStyle}></div>
                    <div className="hero-content d-flex min-vh-100">
                        <div className="container my-auto py-5">
                            <div className="row mt-4 pt-5">
                                <div className="col-lg-6 col-xl-7 my-auto text-center text-lg-start pb-4 pb-lg-0">
                                    <h2 className="text-14 fw-400 text-white mb-4">The Secure,<br className="d-none d-xl-block" />
                                        easiest and fastest <br className="d-none d-xl-block" />
                                        way to transfer money.</h2>
                                    <p className="lead text-light mb-4">Send & Receive money to your loved ones in minutes with great rates and
                                        low
                                        fees. Over 180 countries and 30 currencies supported.</p>
                                    <a href="#" className="btn-link text-4">See more details<i className="fas fa-chevron-right text-2 ms-2"></i></a>
                                </div>
                                <ExchangeRage />

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center text-uppercase fw-400">Why choose us?</h2>
                        <p className="lead text-center mb-5">Here’s Top 4 reasons why using a Payyed account for manage your money.</p>
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <div className="featured-box style-3">
                                            <div className="featured-box-icon border border-primary text-primary rounded-circle"> <i
                                                className="fas fa-hand-pointer"></i> </div>
                                            <h3 className="fw-400">Easy to use</h3>
                                            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="featured-box style-3">
                                            <div className="featured-box-icon border border-primary text-primary rounded-circle"> <i
                                                className="fas fa-share"></i> </div>
                                            <h3 className="fw-400">Faster Payments</h3>
                                            <p>Persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="featured-box style-3">
                                            <div className="featured-box-icon border border-primary text-primary rounded-circle"> <i
                                                className="fas fa-dollar-sign"></i> </div>
                                            <h3 className="fw-400">Lower Fees</h3>
                                            <p>Essent lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim
                                                iriure.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="featured-box style-3">
                                            <div className="featured-box-icon border border-primary text-primary rounded-circle"> <i
                                                className="fas fa-lock"></i> </div>
                                            <h3 className="fw-400">100% secure</h3>
                                            <p>Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim
                                                iriure.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2 className="text-9 text-center text-uppercase fw-400">As simple as 1-2-3</h2>
                        <p className="lead text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="row g-4 g-lg-5">
                            <div className="col-sm-4">
                                <div className="featured-box style-4">
                                    <div className="featured-box-icon text-dark shadow-none border-bottom"><span
                                        className="w-100 text-20 fw-500">1</span></div>
                                    <h3 className="mb-3">Sign Up Your Account</h3>
                                    <p className="text-3 fw-300">Sign up for your free personal/business Account in fea a minute.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="featured-box style-4">
                                    <div className="featured-box-icon text-dark shadow-none border-bottom"><span
                                        className="w-100 text-20 fw-500">2</span></div>
                                    <h3 className="mb-3">Send & Receive Money</h3>
                                    <p className="text-3 fw-300">Receive & Send Payments from worldwide in 40 currencies.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="featured-box style-4">
                                    <div className="featured-box-icon text-dark shadow-none border-bottom"><span
                                        className="w-100 text-20 fw-500">3</span></div>
                                    <h3 className="mb-3">Withdraw Funds</h3>
                                    <p className="text-3 fw-300">Your funds will be transferred to your local bank account.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5"><a href="#" className="btn btn-primary">Open a Free Account</a></div>
                    </div>
                </section>

                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center text-uppercase fw-400">What can you do?</h2>
                        <p className="lead text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="row g-4">
                            <div className="col-sm-6 col-lg-3"> <a href="#">
                                <div className="featured-box style-5 rounded">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-share-square"></i> </div>
                                    <h3>Send Money</h3>
                                </div>
                            </a> </div>
                            <div className="col-sm-6 col-lg-3"> <a href="#">
                                <div className="featured-box style-5 rounded">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-check-square"></i> </div>
                                    <h3>Receive Money</h3>
                                </div>
                            </a> </div>
                            <div className="col-sm-6 col-lg-3"> <a href="#">
                                <div className="featured-box style-5 rounded">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-user-friends"></i> </div>
                                    <h3>Pay a Friend</h3>
                                </div>
                            </a> </div>
                            <div className="col-sm-6 col-lg-3"> <a href="#">
                                <div className="featured-box style-5 rounded">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-shopping-bag"></i> </div>
                                    <h3>Online Shopping</h3>
                                </div>
                            </a> </div>
                        </div>
                        <div className="text-center mt-5"><a href="#" className="btn-link text-4">See more can you do<i
                            className="fas fa-chevron-right text-2 ms-2"></i></a></div>
                    </div>
                </section>

                <section className="hero-wrap section shadow-md">
                    <div className="hero-mask opacity-3 bg-dark"></div>
                    <div className="hero-bg hero-bg-scrll" style={heroStyle}></div>
                    <div className="hero-content py-0 py-lg-5 my-0 my-lg-5">
                        <div className="container text-center">
                            <h2 className="text-9 text-white fw-400 text-uppercase mb-5">What our customers say</h2>
                            <a className="video-btn d-flex" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas"
                                data-bs-toggle="modal" data-bs-target="#videoModal"> <span
                                    className="playButton playButton-pulsing bg-white m-auto"><i className="fas fa-play"></i></span> </a>
                        </div>
                    </div>
                </section>

                <section className="section pt-5 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-9 col-xl-8 mx-auto">
                                <div className="row">
                                    <div className="col-sm-5 text-center align-bottom order-1 order-sm-0"> <img className="img-fluid" alt=""
                                        src="images/app-mobile.png" /> </div>
                                    <div className="col-sm-7 my-auto order-0 order-sm-1 text-center text-sm-start">
                                        <h2 className="text-9 fw-400 text-uppercase mb-3">Get the app</h2>
                                        <p className="lead">Download our app for the fastest, most convenient way to send & get Payment.</p>
                                        <div className="pt-2 mb-4 mb-sm-0"> <a className="me-3" href=""><img className="img-fluid" alt=""
                                            src="images/app-store.png" /></a><a href=""><img className="img-fluid" alt=""
                                                src="images/google-play-store.png" /></a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div >

            <footer id="footer" className="pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md mb-3 mb-md-0">
                            <h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Information</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item"> <a className="nav-link" href="#">About Us</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">Careers</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">Affiliate</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">Fees</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md mb-3 mb-md-0">
                            <h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Services</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item"> <a className="nav-link" href="#">Transfer Money</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">Send Money</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">Receive Money</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">Online Shopping</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">Pay bill</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md mb-3 mb-md-0">
                            <h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Help Center</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item"> <a className="nav-link" href="#">Contact Us</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">Support</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">Help</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md mb-3 mb-md-0">
                            <h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Keep in touch</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item"> <a className="nav-link" href="#">facebook</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">twitter</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">google</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">youtube</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Subscribe</h4>
                            <p>Subscribe to receive latest news and updates.</p>
                            <div className="input-group newsletter">
                                <input className="form-control" placeholder="Your Email Address" name="newsletterEmail" id="newsletterEmail"
                                    type="text" />
                                <button className="btn btn-secondary shadow-none px-3" type="button" data-bs-toggle="tooltip"
                                    title="Subscribe"><i className="fas fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright pt-4 mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg">
                                <p className="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="#">Payyed</a>. All Rights
                                    Reserved.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>


        </div >
    )

}