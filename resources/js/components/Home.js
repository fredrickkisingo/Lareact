import React from 'react';
import { Link } from 'react-router-dom';
import Cover1 from '../../bg/1.jpg';
import Cover2 from '../../bg/2.jpg';
import Cover24 from '../../bg/24.jpg';
import Cover34 from '../../bg/25.jpg';
import Cover26 from '../../bg/26.jpg';

import Cover3 from '../../bg/3.jpg';
import Cover4 from '../../bg/4.jpg';
import Cover5 from '../../bg/5.jpg';
import Cover6 from '../../bg/6.jpg';
import Cover7 from '../../bg/7.jpg';
import Cover8 from '../../bg/8.jpg';
import Cover9 from '../../bg/9.jpg';
import Cover10 from '../../bg/10.jpg';
import Cover11 from '../../bg/11.jpg';
import Cover12 from '../../bg/12.jpg';
import Cover13 from '../../bg/13.jpg';
import Cover14 from '../../bg/14.jpg';
import Cover15 from '../../bg/15.jpg';
import Cover16 from '../../bg/16.jpg';



function Home() {
    return (
        <div className="container">
        <div className="blog-slider-wrapper">
            <div className="blog-slider-inner">
            <div className="swiper-container" id="blog-slider">
                <div className="swiper-wrapper">

                <div className="swiper-slide ui-bg-cover" style={{backgroundImage: `url(${Cover1})`}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                    <div className="blog-slider-content">
                        <div className="text-white mb-2">Travel</div>
                        <h2 className="blog-slider-caption mb-3">
                        </h2>
                        <div className="text-white text-tiny mb-4">
                        </div>
                    </div>
                    </div>
                </div>

                <div className="swiper-slide ui-bg-cover" style={{backgroundImage: `url(${Cover2})`}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                    <div className="blog-slider-content">
                        <div className="text-white mb-2">Lifestyle</div>
                        <h2 className="blog-slider-caption mb-3">
                        </h2>
                        <div className="text-white text-tiny mb-4">
                        </div>
                    </div>
                    </div>
                </div>

                <div className="swiper-slide ui-bg-cover" style={{backgroundImage: `url(${Cover3})`}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                    <div className="blog-slider-content">
                        <div className="text-white mb-2">Tips and Tricks</div>
                        <h2 className="blog-slider-caption mb-3">

                        </h2>
                        <div className="text-white text-tiny mb-4">
                        </div>
                    </div>
                    </div>
                </div>

                <div className="swiper-slide ui-bg-cover"style={{backgroundImage: `url(${Cover34})`}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                    <div className="blog-slider-content">
                        <div className="text-white mb-2">Traveling</div>
                        <h2 className="blog-slider-caption mb-3">
                        </h2>
                        <div className="text-white text-tiny mb-4">
                        </div>
                    </div>
                    </div>
                </div>

                <div className="swiper-slide ui-bg-cover"style={{backgroundImage: `url(${Cover26})`}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                    <div className="blog-slider-content">
                        <div className="text-white mb-2">Lifestyle</div>
                        <h2 className="blog-slider-caption mb-3">
                        <Link to="#" className="link-animated text-white">Get Around Easily With A New York Limousine Service</Link>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                        <Link to="#" className="text-white">MAY GIBSON</Link> &nbsp;\&nbsp; MARCH 28, 2018
                        </div>
                    </div>
                    </div>
                </div>

                </div>
                <div className="swiper-pagination swiper-pagination-white"></div>
            </div>
            </div>
            <div id="blog-slider-prev" className="display-1"><i className="lnr lnr-chevron-left scaleX--1-rtl"></i></div>
            <div id="blog-slider-next" className="display-1"><i className="lnr lnr-chevron-right scaleX--1-rtl"></i></div>
        </div>

        <div className="container">
            <div className="row mt-5">

            <div className="col">
                <div className="row">

                <div className="col-lg-6 pr-xl-4 mb-5">
                    <Link to="#" className="d-block ui-rect ui-rect-67 ui-bg-cover mb-3"style={{backgroundImage: `url(${Cover2})`}}></Link>
                    <div className="text-center text-success small font-weight-bold text-uppercase mb-2">Lifestyle</div>
                    <h4 className="text-center mb-2"><Link to="#" className="link-animated theme-text-dark">How To Meet That Special Someone</Link></h4>
                    <div className="text-center text-light text-tiny mb-3"><Link to="#" className="text-light">MAY GIBSON</Link> &nbsp;\&nbsp; MAY 25, 2018</div>
                    <div className="font-secondary text-big">
                    Curabitur pulvinar felis auctor lectus tincidunt iaculis. Vivamus aliquam elementum libero...
                    </div>
                </div>

                <div className="col-lg-6 pl-xl-4 mb-5">
                    <Link to="#" className="d-block ui-rect ui-rect-67 ui-bg-cover mb-3" style={{backgroundImage: `url(${Cover26})`}}></Link>
                    <div className="text-center text-danger small font-weight-bold text-uppercase mb-2">Travel</div>
                    <h4 className="text-center mb-2"><Link to="#" className="link-animated theme-text-dark">Three Ways To Get Travel Discounts</Link></h4>
                    <div className="text-center text-light text-tiny mb-3"><Link to="#" className="text-light">KENNETH FRAZIER</Link> &nbsp;\&nbsp; MAY 21, 2018</div>
                    <div className="font-secondary text-big">
                    Aliquam erat volutpat. Vivamus fringilla sed risus vel varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </div>
                </div>

                <div className="col-lg-6 pr-xl-4 mb-5">
                    <div className="text-center text-info small font-weight-bold text-uppercase mb-2">Social</div>
                    <h4 className="text-center mb-2"><Link to="#" className="link-animated theme-text-dark">Writing A Good Headline For Your Advertisement</Link></h4>
                    <div className="text-center text-light text-tiny mb-3"><Link to="#" className="text-light">ALICE HAMPTON</Link> &nbsp;\&nbsp; MAY 5, 2018</div>
                    <div className="font-secondary text-big">
                    Duis libero massa, posuere vitae mi ac, finibus facilisis ex. Maecenas facilisis, enim at cursus mattis, sem dui sollicitudin eros...
                    </div>
                </div>

                <div className="col-lg-6 pl-xl-4 mb-5">
                    <div className="text-center text-warning small font-weight-bold text-uppercase mb-2">Culture</div>
                    <h4 className="text-center mb-2"><Link to="#" className="link-animated theme-text-dark">Party Jokes Startling But Unnecessary</Link></h4>
                    <div className="text-center text-light text-tiny mb-3"><Link to="#" className="text-light">ARTHUR DUNCAN</Link> &nbsp;\&nbsp; APRIL 19, 2018</div>
                    <div className="font-secondary text-big">
                    Praesent lacinia velit ut urna sodales, id imperdiet velit fringilla. Nulla dignissim, odio eget faucibus rutrum...
                    </div>
                </div>

                <div className="col-lg-6 pr-xl-4 mb-5">
                    <div className="text-center text-success small font-weight-bold text-uppercase mb-2">Lifestyle</div>
                    <h4 className="text-center mb-2"><Link to="#" className="link-animated theme-text-dark">The Luxury Of Traveling With Yacht Charter Companies</Link></h4>
                    <div className="text-center text-light text-tiny mb-3"><Link to="#" className="text-light">BELLE ROSS</Link> &nbsp;\&nbsp; APRIL 9, 2018</div>
                    <div className="font-secondary text-big">
                    Aliquam ut tortor malesuada, convallis nunc sed, pulvinar neque. Mauris feugiat molestie purus...
                    </div>
                </div>

                <div className="col-lg-6 pl-xl-4 mb-5">
                    <Link to="#" className="d-block ui-rect ui-rect-67 ui-bg-cover mb-3"style={{backgroundImage: `url(${Cover6})`}}></Link>
                    <div className="text-center text-danger small font-weight-bold text-uppercase mb-2">Travel</div>
                    <h4 className="text-center mb-2"><Link to="#" className="link-animated theme-text-dark">How To Maintain Your Mental Health</Link></h4>
                    <div className="text-center text-light text-tiny mb-3"><Link to="#" className="text-light">MAY GIBSON</Link> &nbsp;\&nbsp; MARCH 28, 2018</div>
                    <div className="font-secondary text-big">
                    Quisque facilisis justo justo, id euismod risus ullamcorper mollis...
                    </div>
                </div>

                <div className="col-lg-6 pr-xl-4 mb-5">
                    <Link to="#" className="d-block ui-rect ui-rect-67 ui-bg-cover mb-3" style={{backgroundImage: `url(${Cover7})`}}></Link>
                    <div className="text-center text-info small font-weight-bold text-uppercase mb-2">Social</div>
                    <h4 className="text-center mb-2"><Link to="#" className="link-animated theme-text-dark">A Time Travel Postcard</Link></h4>
                    <div className="text-center text-light text-tiny mb-3"><Link to="#" className="text-light">KENNETH FRAZIER</Link> &nbsp;\&nbsp; MARCH 19, 2018</div>
                    <div className="font-secondary text-big">
                    Vestibulum auctor eget sem sit amet elementum. Phasellus sapien ipsum, tristique nec dui id, ultricies mollis nisi...
                    </div>
                </div>

                <div className="col-lg-6 pl-xl-4 mb-5">
                    <Link to="#" className="d-block ui-rect ui-rect-67 ui-bg-cover mb-3" style={{backgroundImage: `url(${Cover8})`}}></Link>
                    <div className="text-center text-warning small font-weight-bold text-uppercase mb-2">Culture</div>
                    <h4 className="text-center mb-2"><Link to="#" className="link-animated theme-text-dark">It S Hurricane Season But We Are Visiting Hilton Head Island</Link></h4>
                    <div className="text-center text-light text-tiny mb-3"><Link to="#" className="text-light">ALICE HAMPTON</Link> &nbsp;\&nbsp; FEBRUARY 25, 2018</div>
                    <div className="font-secondary text-big">
                    Quisque enim sem, vestibulum nec porttitor sed, tempus sed tortor. Nullam ornare velit augue...
                    </div>
                </div>
                </div>

                <ul className="pagination justify-content-center mt-4 mb-5">
                <li className="page-item disabled">
                    <Link className="page-link rounded-0" href="#">??</Link>
                </li>
                <li className="page-item active">
                    <Link className="page-link rounded-0" href="#">1</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link rounded-0" href="#">2</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link rounded-0" href="#">3</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link rounded-0" href="#">4</Link>
                </li>
                <li className="page-item">
                    <Link  className="page-link rounded-0" href="#">5</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link rounded-0" href="#">??</Link>
                </li>
                </ul>
            </div>
            
            <div className="col-lg-4 pl-xl-5">

                <div className="bg-lighter p-4 mb-4">
                <h6 className="small font-weight-bold mb-2">SUBSCRIBE</h6>
                <hr classNameName="blog-separator border-primary" />
                <p className="text-muted">
                    Enter your email address to subscribe to this blog and receive notifications of new posts by email.
                </p>
                <div className="form-group">
                    <input type="text" classNameName="form-control rounded-0" placeholder="Enter your email address" />
                </div>
                <button type="button" className="btn btn-primary btn-block rounded-0">Subscribe</button>
                </div>

                <div className="ui-bordered p-4 mb-4">
                <h6 className="small font-weight-bold mb-2">POPULAR POSTS</h6>
                <hr classNameName="blog-separator border-primary" />
                <div className="media mb-3">
                    <div className="ui-w-40">
                    <div className="ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover9})`}}></div>
                    </div>
                    <div className="media-body ml-3">
                    <div className="mb-1">
                        <Link to="#" className="link-animated theme-text-dark">Comment On The Importance Of Human Life</Link>
                    </div>
                    <div className="text-light text-tiny"><Link to="#" className="text-light">KENNETH FRAZIER</Link> &nbsp;\&nbsp; MAY 21, 2018</div>
                    </div>
                </div>
                <div className="media mb-3">
                    <div className="ui-w-40">
                    <div className="ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover10})`}}></div>
                    </div>
                    <div className="media-body ml-3">
                    <div className="mb-1">
                        <Link to="#" className="link-animated theme-text-dark">Les Houches The Hidden Gem Of The Chamonix Valley</Link>
                    </div>
                    <div className="text-light text-tiny"><Link to="#" className="text-light">ALICE HAMPTON</Link> &nbsp;\&nbsp; MAY 5, 2018</div>
                    </div>
                </div>
                <div className="media mb-3">
                    <div className="ui-w-40">
                    <div className="ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover11})`}}></div>
                    </div>
                    <div className="media-body ml-3">
                    <div className="mb-1">
                        <Link to="#" className="link-animated theme-text-dark">Cheap Romantic Vacations</Link>
                    </div>
                    <div className="text-light text-tiny"><Link to="#" className="text-light">ARTHUR DUNCAN</Link> &nbsp;\&nbsp; APRIL 19, 2018</div>
                    </div>
                </div>
                <div className="media mb-3">
                    <div className="ui-w-40">
                    <div className="ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover12})`}}></div>
                    </div>
                    <div className="media-body ml-3">
                    <div className="mb-1">
                        <Link to="#" className="link-animated theme-text-dark">Big Savings On Gas While You Travel</Link>
                    </div>
                    <div className="text-light text-tiny"><Link to="#" className="text-light">BELLE ROSS</Link> &nbsp;\&nbsp; APRIL 9, 2018</div>
                    </div>
                </div>
                <div className="media">
                    <div className="ui-w-40">
                    <div className="ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover13})`}}></div>
                    </div>
                    <div className="media-body ml-3">
                    <div className="mb-1">
                        <Link to="#" className="link-animated theme-text-dark">Get Around Easily With A New York Limousine Service</Link>
                    </div>
                    <div className="text-light text-tiny"><Link to="#" className="text-light">MAY GIBSON</Link> &nbsp;\&nbsp; MARCH 28, 2018</div>
                    </div>
                </div>
                </div>

                <div className="ui-bordered p-4 mb-4">
                <h6 className="small font-weight-bold mb-2">ARCHIVE</h6>
                <hr classNameName="blog-separator border-primary" />
                <div className="mb-2">
                    <Link to="#" className="text-body">2018 <span className="text-muted">(10)</span></Link>
                </div>
                <div className="mb-2">
                    <Link to="#" className="text-body">2017 <span className="text-muted">(26)</span></Link>
                </div>
                <div>
                    <Link to="#" className="text-body">2016 <span className="text-muted">(7)</span></Link>
                </div>
                </div>

                <div className="ui-bordered p-4 mb-4">
                <h6 className="small font-weight-bold mb-2">STAY CONNECTED</h6>
                <hr classNameName="blog-separator border-primary" />
                <div className="d-flex flex-wrap">
                    <Link to="#" className="icon-btn d-block bg-twitter text-center text-white mr-1 mb-1"><i className="ion ion-logo-twitter"></i></Link>
                    <Link to="#" className="icon-btn d-block bg-facebook text-center text-white mr-1 mb-1"><i className="ion ion-logo-facebook"></i></Link>
                    <Link to="#" className="icon-btn d-block bg-instagram text-center text-white mr-1 mb-1"><i className="ion ion-logo-instagram"></i></Link>
                </div>
                </div>

            </div>
            
            </div>
        </div>

        
        <nav className="footer bg-lighter pt-2 mt-5">
            <div className="container pt-5">
            <div className="row">

                <div className="col-lg-3 pr-lg-4 pb-5">
                <Link to="#" className="footer-text d-block text-large font-weight-bolder mb-3">Blog.</Link>

                <Link to="#" className="footer-link d-block pb-2">Lifestyle</Link>
                <Link to="#" className="footer-link d-block pb-2">Travel</Link>
                <Link to="#" className="footer-link d-block pb-2">Social</Link>
                <Link to="#" className="footer-link d-block pb-2">Culture</Link>
                <Link to="#" className="footer-link d-block pb-2">About</Link>
                <Link to="#" className="footer-link d-block pb-4">Contact Me</Link>

                <Link className="text-twitter" to="#">
                    <i className="ion ion-logo-twitter"></i>
                </Link>
                &nbsp; &nbsp;
                <Link className="text-facebook" to="#">
                    <i className="ion ion-logo-facebook"></i>
                </Link>
                &nbsp; &nbsp;
                <Link className="text-instagram" to="#">
                    <i className="ion ion-logo-instagram"></i>
                </Link>
                </div>

                <div className="col-lg pb-4 pl-lg-4">
                <div className="footer-text small font-weight-bold mb-3">LATEST IMAGES</div>

                <div className="clearfix">
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover1})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover2})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover3})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover4})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover5})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover6})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover7})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover8})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover9})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover10})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover11})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover12})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover13})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover14})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover15})`}}></span>
                    </Link>
                    <Link to="#" className="d-block float-left ui-w-60 pr-2 pb-2">
                    <span className="d-block ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover16})`}}></span>
                    </Link>

                </div>
                </div>

                <div className="col-lg pb-4 pl-lg-4">
                <div className="footer-text small font-weight-bold mb-3">LATEST POSTS</div>

                <div className="media mb-3">
                    <div className="ui-w-40">
                    <div className="ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover5})`}}></div>
                    </div>
                    <div className="media-body ml-3">
                    <Link to="#" className="footer-text link-animated">Comment On The Importance Of Human Life</Link>
                    <div className="small">May 21, 2017</div>
                    </div>
                </div>
                <div className="media mb-3">
                    <div className="ui-w-40">
                    <div className="ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover6})`}}></div>
                    </div>
                    <div className="media-body ml-3">
                    <Link to="#" className="footer-text link-animated">Enlightenment Is Not Just One State</Link>
                    <div className="small">May 21, 2017</div>
                    </div>
                </div>
                <div className="media">
                    <div className="ui-w-40">
                    <div className="ui-square ui-bg-cover" style={{backgroundImage: `url(${Cover7})`}}></div>
                    </div>
                    <div className="media-body ml-3">
                    <Link to="#" className="footer-text link-animated">Always Look On The Bright Side Of Life</Link>
                    <div className="small">May 21, 2017</div>
                    </div>
                </div>

                </div>
            </div>
            </div>

            <div className="bg-light mt-4">
            <div className="container py-3">
                <div >?? 2018. All rights reserved</div>
            </div>
            </div>
        </nav>    
        </div>
    );
}
export default Home;

