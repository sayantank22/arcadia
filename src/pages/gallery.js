import React, { Component } from 'react';
import '../App.css';
import '../js/custom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import Isotope from 'isotope-layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisibilitySensor from 'react-visibility-sensor';
import $ from 'jquery';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeClassHeading1: '',
            activeClassHeading2: '',
            loadingHeader1: true,
            loadingHeader2: true,
            isotope: null,
            isLoaded: false
        };
    }
    componentDidMount() {
        // $(window).on('load', () => {
        //     this.setState({
        //         isotope: new Isotope('.grid', {
        //             itemSelector: '.grid-item',
        //             percentPosition: true,
        //             masonry: {
        //                 // use outer width of grid-sizer for columnWidth
        //                 columnWidth: '.grid-sizer'
        //             }
        //         }),
        //         isLoaded: true
        //     });
        // });

        // this.setState({
        //     isotope: new Isotope('.grid', {
        //         itemSelector: '.grid-item',
        //         percentPosition: true,
        //         masonry: {
        //             // use outer width of grid-sizer for columnWidth
        //             columnWidth: '.grid-sizer'
        //         }
        //     }),
        //     isLoaded: true
        // });

        if (!this.state.isotope) {
            this.setState({
                isotope: new Isotope('.grid', {
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: '.grid-sizer'
                    }
                }),
                isLoaded: true
            });
        } else {
            this.state.isotope.reloadItems();
        }
    }
    // componentDidUpdate() {
    //     if (this.state.isotope) {
    //         this.state.isotope.reloadItems();
    //         this.state.isotope.layout();
    //     }
    // }
    // shouldComponentUpdate() {
    //     this.setState({
    //         isotope: new Isotope('.grid', {
    //             itemSelector: '.grid-item',
    //             percentPosition: true,
    //             masonry: {
    //                 // use outer width of grid-sizer for columnWidth
    //                 columnWidth: '.grid-sizer'
    //             }
    //         })
    //     });
    // }
    onChangeHeader1 = isVisible => {
        if (isVisible) {
            return this.setState({
                activeClassHeading1: 'in-viewport in-viewport-once',
                loadingHeader1: false
            });
        }
    };
    onChangeHeader2 = isVisible => {
        if (isVisible) {
            return this.setState({
                activeClassHeading2: 'in-viewport in-viewport-once',
                loadingHeader2: false
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <div>
                            {/* <Navbar /> */}

                            <div className='page-content-wrap'>
                                <div className='wrapper clear'>
                                    <VisibilitySensor
                                        active={this.state.loadingHeader1}
                                        onChange={this.onChangeHeader1}>
                                        <div className='page-content-header'>
                                            <h1>
                                                <div
                                                    className={`masked-wrapper element i-v ${this.state.activeClassHeading1}`}>
                                                    <div className='masked-row animate'>
                                                        Luxury Home Collection
                                                    </div>
                                                </div>
                                            </h1>
                                            <div
                                                className={`element i-v spacer ${this.state.activeClassHeading1}`}>
                                                <div className='hr line animate-line'></div>
                                            </div>
                                        </div>
                                    </VisibilitySensor>

                                    <div className='sorting-nav clear'>
                                        <ul className='sort-by-button-group'>
                                            <li data-filter='*'>Show All</li>
                                            <li data-filter='.exterior'>
                                                Exterior
                                            </li>
                                            <li data-filter='.interior'>
                                                Interior
                                            </li>
                                            <li data-filter='.outdoor-living'>
                                                Outdoor Living
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='toggle-bar clear'>
                                        <div className='toggle-btn'>
                                            <div className='toggle-tracker'></div>
                                        </div>
                                    </div>

                                    <div className='grid-col-row '>
                                        <div className='grid'>
                                            <div className='grid-col-holder grid-item exterior '>
                                                <div className='grid-col-content'>
                                                    <a
                                                        data-fancybox='images'
                                                        data-src='#gallery1'
                                                        href='javascript:;'>
                                                        <img
                                                            src={require('../images/image-7.png')}
                                                            alt=''
                                                        />
                                                    </a>

                                                    <div
                                                        id='gallery1'
                                                        style={{
                                                            display: 'none'
                                                        }}>
                                                        <div className='gallery-content clear'>
                                                            <div className='gallery-content-image'></div>

                                                            <div className='gallery-content-main'>
                                                                <h6>Title</h6>
                                                                <h4>
                                                                    Full Name
                                                                </h4>
                                                                <div className='hr'></div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consetetur
                                                                    sadipscing
                                                                    elitr, sed
                                                                    diam nonumy
                                                                    eirmod
                                                                    tempor
                                                                    invidunt ut
                                                                    labore et
                                                                    dolore magna
                                                                    aliquyam
                                                                    erat, sed
                                                                    diam
                                                                    voluptua. At
                                                                    vero eos et
                                                                    accusam et
                                                                    justo duo
                                                                    dolores et
                                                                    ea rebum.
                                                                    Stet clita
                                                                    kasd
                                                                    gubergren,
                                                                    no sea
                                                                    takimata
                                                                    sanctus est
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet. Lorem
                                                                    ipsum dolor
                                                                    sit amet,
                                                                    consetetur
                                                                    sadipscing
                                                                    elitr, sed
                                                                    diam nonumy
                                                                    eirmod
                                                                    tempor
                                                                    invidunt ut
                                                                    labore et
                                                                    dolore magna
                                                                    aliquyam
                                                                    erat, sed
                                                                    diam
                                                                    voluptua. At
                                                                    vero eos et
                                                                    accusam et
                                                                    justo duo
                                                                    dolores et
                                                                    ea rebum.
                                                                    Stet clita
                                                                    kasd
                                                                    gubergren,
                                                                    no sea
                                                                    takimata
                                                                    sanctus est
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet.
                                                                </p>

                                                                <div className='gallery-social'>
                                                                    <a href=''>
                                                                        <i className='fab fa-facebook-square'></i>
                                                                    </a>
                                                                    <a href=''>
                                                                        <i className='fab fa-instagram'></i>
                                                                    </a>
                                                                    <a href=''>
                                                                        <i className='fab fa-twitter'></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item grid-sizer outdoor-living'>
                                                <div className='grid-col-content'>
                                                    <a
                                                        data-fancybox='images'
                                                        data-src={require('../images/image-7.png')}
                                                        href='javascript:;'>
                                                        <img
                                                            src={require('../images/image-2.png')}
                                                            alt=''
                                                        />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item  outdoor-living'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-9.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item half exterior interior'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-5.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item'>
                                                <div className='grid-col-content'>
                                                    <blockquote>
                                                        Yes, My wife and I are
                                                        extremely happy with our
                                                        home. We have lived in
                                                        it for 9 months. Part of
                                                        my profession is to
                                                        teach around the world
                                                        how to high level
                                                        professionals whom
                                                        already carry doctorate
                                                        degrees. So, my wife and
                                                        I decided to grade
                                                        Arcadia…
                                                        <br />{' '}
                                                        <a href=''>Read More</a>
                                                    </blockquote>
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item interior'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-8.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item half exterior'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-4.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item exterior interior outdoor-living'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-5.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item interior '>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-7.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item exterior interior outdoor-living'>
                                                <div className='grid-col-content'>
                                                    <blockquote>
                                                        Yes, My wife and I are
                                                        extremely happy with our
                                                        home. We have lived in
                                                        it for 9 months. Part of
                                                        my profession is to
                                                        teach around the world
                                                        how to high level
                                                        professionals whom
                                                        already carry doctorate
                                                        degrees. So, my wife and
                                                        I decided to grade
                                                        Arcadia…
                                                        <br />{' '}
                                                        <a href=''>Read More</a>
                                                    </blockquote>
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item half exterior'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-8.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item interior outdoor-living'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-6.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item outdoor-living'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-4.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item exterior outdoor-living'>
                                                <div className='grid-col-content'>
                                                    <blockquote>
                                                        Yes, My wife and I are
                                                        extremely happy with our
                                                        home. We have lived in
                                                        it for 9 months. Part of
                                                        my profession is to
                                                        teach around the world
                                                        how to high level
                                                        professionals whom
                                                        already carry doctorate
                                                        degrees. So, my wife and
                                                        I decided to grade
                                                        Arcadia…
                                                        <br />{' '}
                                                        <a href=''>Read More</a>
                                                    </blockquote>
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item exterior interior outdoor-living'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-2.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item half exterior interior'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-9.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item   outdoor-living'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-7.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item exterior'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-2.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-6.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>

                                            <div className='grid-col-holder grid-item exterior interior'>
                                                <div className='grid-col-content'>
                                                    <img
                                                        src={require('../images/image-2.png')}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='grid-pagination'>
                                        <div className='grid-pagination-content clear'>
                                            <ul>
                                                <li>
                                                    <a href=''>Previous</a>
                                                </li>
                                                <li>
                                                    <a href=''>1</a>
                                                </li>
                                                <li>
                                                    <a href=''>2</a>
                                                </li>
                                                <li>
                                                    <a href=''>3</a>
                                                </li>
                                                <li>
                                                    <a href=''>Next</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <VisibilitySensor
                                active={this.state.loadingHeader2}
                                onChange={this.onChangeHeader2}>
                                <div className='cta-wrap'>
                                    <div className='wrapper'>
                                        <h6>
                                            Let’s Talk about your dream home
                                        </h6>
                                        <div className='heading-bar'>
                                            <h2>
                                                <div
                                                    className={`masked-wrapper element i-v ${this.state.activeClassHeading2}`}>
                                                    <div className='masked-row animate'>
                                                        <span>
                                                            {' '}
                                                            Meet With Us{' '}
                                                        </span>
                                                    </div>
                                                </div>
                                            </h2>
                                        </div>
                                        <a href='' className='cta-btn'>
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </VisibilitySensor>

                            <Footer />
                        </div>
                    </div>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ marginTop: '5px' }}>Loading...</h3>
                        <img src={require('../images/giphy.webp')} alt='' />
                    </div>
                )}
            </div>
        );
    }
}

export default Gallery;
