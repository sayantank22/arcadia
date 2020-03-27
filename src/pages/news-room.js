import React, { Component } from 'react';
import '../App.css';
import '../css/slick.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Isotope from 'isotope-layout';
import $ from 'jquery';
import axios from 'axios';
import cors from 'cors';
import VisibilitySensor from 'react-visibility-sensor';

class NewsRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iso: null,
      title: [],
      content: [],
      activeClassHeading1: '',
      activeClassHeading2: '',
      loadingHeader1: true,
      loadingHeader2: true,
      isLoaded: false
    };
  }
  componentDidMount() {
    // var iso = new Isotope('.grid', {
    //   itemSelector: '.grid-item',
    //   percentPosition: true,
    //   masonry: {
    //     columnWidth: '.grid-sizer'
    //   }
    // });

    axios
      .get('http://arcadiabsi.wpengine.com/wp-json/wp/v2/posts', cors())
      .then(res => {
        return res.data.map((post, index) => {
          return this.setState({
            title: this.state.title.concat(post.title.rendered),
            content: this.state.content.concat(post.content.rendered),
            iso: new Isotope('.grid', {
              itemSelector: '.grid-item',
              percentPosition: true,
              masonry: {
                columnWidth: '.grid-sizer'
              }
            }),
            isLoaded: true
          });
        });
      });

    $(window).on('load', function() {
      var iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });
    });

    // this.setState({
    //   iso: new Isotope('.grid', {
    //     itemSelector: '.grid-item',
    //     percentPosition: true,
    //     masonry: {
    //       columnWidth: '.grid-sizer'
    //     }
    //   }),
    //   isLoaded: true
    // });
  }
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
    // setTimeout(() => console.log(this.state));
    return (
      <div>
        {this.state.isLoaded ? (
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
                        <div className='masked-row animate'>News Room</div>
                      </div>
                    </h1>

                    <div
                      className={`element i-v spacer ${this.state.activeClassHeading1}`}>
                      <div className='hr line animate-line'></div>
                    </div>
                  </div>
                </VisibilitySensor>

                <div className='page-content-main'>
                  <div className='post-nav clear'>
                    <div className='post-nav-main'>
                      <ul className='sort-by-button-group'>
                        <li data-filter='*'>All</li>
                        <li data-filter='.awards'>Awards</li>
                        <li data-filter='.recognition'>Recognition</li>
                        <li data-filter='.press'>In The Press</li>
                        <li data-filter='.news'>Arcadia News</li>
                      </ul>
                    </div>

                    <div className='post-nav-right'>
                      <div className='archive-list'>
                        <span>Archive</span>
                        <ul>
                          <li>
                            <a href=''>2020</a>
                          </li>
                          <li>
                            <a href=''>2019</a>
                          </li>
                          <li>
                            <a href=''>2018</a>
                          </li>
                          <li>
                            <a href=''>2017</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='current-post clear'>
                    <div className='post-thumb'>
                      <img src={require('../images/award.png')} alt='' />
                    </div>
                    <div className='post-content'>
                      <div className='post-meta'>Award | 2019</div>
                      <h5>{this.state.title[0]}</h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.content[0]
                        }}
                      />
                      <br /> <a href=''>View Article</a>
                    </div>
                  </div>

                  <div className='post-grid-wrap'>
                    <div className='grid'>
                      <div className='post-grid-col grid-item grid-sizer press'>
                        <div className='pgc-content'>
                          <div className='post-thumb'>
                            <img src={require('../images/image.png')} alt='' />
                          </div>
                          <div className='post-content'>
                            <div className='post-meta'>Award | 2019</div>
                            <h5>{this.state.title[1]}</h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: this.state.content[1]
                              }}
                            />
                            <br /> <a href=''>View Article</a>
                          </div>
                        </div>
                      </div>

                      <div className='post-grid-col grid-item press'>
                        <div className='pgc-content'>
                          <div className='post-thumb'>
                            <img src={require('../images/image.png')} alt='' />
                          </div>
                          <div className='post-content'>
                            <div className='post-meta'>Award | 2019</div>
                            <h5>{this.state.title[2]}</h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: this.state.content[2]
                              }}
                            />
                            <br /> <a href=''>View Article</a>
                          </div>
                        </div>
                      </div>

                      <div className='post-grid-col grid-item press'>
                        <div className='pgc-content'>
                          <div className='post-thumb'>
                            <img src={require('../images/image.png')} alt='' />
                          </div>
                          <div className='post-content'>
                            <div className='post-meta'>Award | 2019</div>
                            <h5>{this.state.title[3]}</h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: this.state.content[3]
                              }}
                            />
                            <br /> <a href=''>View Article</a>
                          </div>
                        </div>
                      </div>

                      <div className='post-grid-col grid-item press'>
                        <div className='pgc-content'>
                          <div className='post-thumb'>
                            <img src={require('../images/image.png')} alt='' />
                          </div>
                          <div className='post-content'>
                            <div className='post-meta'>Award | 2019</div>
                            <h5>{this.state.title[4]}</h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: this.state.content[4]
                              }}
                            />
                            <br /> <a href=''>View Article</a>
                          </div>
                        </div>
                      </div>

                      <div className='post-grid-col grid-item press'>
                        <div className='pgc-content'>
                          <div className='post-thumb'>
                            <img src={require('../images/image.png')} alt='' />
                          </div>
                          <div className='post-content'>
                            <div className='post-meta'>Award | 2019</div>
                            <h5>{this.state.title[5]}</h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: this.state.content[5]
                              }}
                            />
                            <br /> <a href=''>View Article</a>
                          </div>
                        </div>
                      </div>

                      <div className='post-grid-col grid-item recognition'>
                        <div className='pgc-content'>
                          <div className='post-thumb'>
                            <img src={require('../images/image.png')} alt='' />
                          </div>
                          <div className='post-content'>
                            <div className='post-meta'>Award | 2019</div>
                            <h5>{this.state.title[6]}</h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: this.state.content[6]
                              }}
                            />
                            <br /> <a href=''>View Article</a>
                          </div>
                        </div>
                      </div>

                      <div className='post-grid-col grid-item recognition'>
                        <div className='pgc-content'>
                          <div className='post-thumb'>
                            <img src={require('../images/image.png')} alt='' />
                          </div>
                          <div className='post-content'>
                            <div className='post-meta'>Award | 2019</div>
                            <h5>{this.state.title[7]}</h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: this.state.content[7]
                              }}
                            />
                            <br /> <a href=''>View Article</a>
                          </div>
                        </div>
                      </div>

                      <div className='post-grid-col grid-item recognition'>
                        <div className='pgc-content'>
                          <div className='post-thumb'>
                            <img src={require('../images/image.png')} alt='' />
                          </div>
                          <div className='post-content'>
                            <div className='post-meta'>Award | 2019</div>
                            <h5>{this.state.title[8]}</h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: this.state.content[8]
                              }}
                            />
                            <br /> <a href=''>View Article</a>
                          </div>
                        </div>
                      </div>

                      <div className='post-grid-col grid-item recognition'>
                        <div className='pgc-content'>
                          <div className='post-thumb'>
                            <img src={require('../images/image.png')} alt='' />
                          </div>
                          <div className='post-content'>
                            <div className='post-meta'>Award | 2019</div>
                            <h5>{this.state.title[9]}</h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: this.state.content[9]
                              }}
                            />
                            <br /> <a href=''>View Article</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <VisibilitySensor
              active={this.state.loadingHeader2}
              onChange={this.onChangeHeader2}>
              <div className='cta-wrap'>
                <div className='wrapper'>
                  <h6>Let’s Talk about your dream home</h6>
                  <div className='heading-bar'>
                    <h2>
                      <div
                        className={`masked-wrapper element i-v ${this.state.activeClassHeading2}`}>
                        <div className='masked-row animate'>
                          <span> Meet With Us </span>
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

export default NewsRoom;
