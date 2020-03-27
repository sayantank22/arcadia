import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';
import '../css/slick.css';
import '../js/slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import cors from 'cors';
import VisibilitySensor from 'react-visibility-sensor';

class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pl_heading: '',
      pl_content: '',
      our_service: [],
      tcc_heading: '',
      tcc_sub_heading: '',
      left_content: '',
      right_content: '',
      ot_heading: '',
      ot_content: '',
      ac_video_content: {},
      ac_cta_content: {},
      activeClassHeading1: '',
      activeClassHeading2: '',
      activeClassHeading3: '',
      activeClassHeading4: '',
      activeClassHeading5: '',
      activeClassHeading6: '',
      activeClassHeading7: '',
      activeClassHeading8: '',
      loadingHeader1: true,
      loadingHeader2: true,
      loadingHeader3: true,
      loadingHeader4: true,
      loadingHeader5: true,
      loadingHeader6: true,
      loadingHeader7: true,
      loadingHeader8: true,
      isLoaded: false
    };
  }
  componentDidMount() {
    axios
      .get('http://arcadiabsi.wpengine.com/wp-json/acf/v3/pages/60/', cors())
      .then(res => {
        this.setState({
          pl_heading: res.data.acf.pl_heading,
          pl_content: res.data.acf.pl_content,
          our_service: res.data.acf.our_service,
          tcc_heading: res.data.acf.two_columns_content.tcc_heading,
          tcc_sub_heading: res.data.acf.two_columns_content.tcc_sub_heading,
          left_content: res.data.acf.two_columns_content.left_content,
          right_content: res.data.acf.two_columns_content.right_content,
          ot_heading: res.data.acf.our_teams.ot_heading,
          ot_content: res.data.acf.our_teams.ot_content,
          ac_video_content: res.data.acf.ac_video_content,
          ac_cta_content: res.data.acf.ac_cta_content,
          isLoaded: true
        });
      })
      .catch(err => console.log(err));
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
  onChangeHeader3 = isVisible => {
    if (isVisible) {
      return this.setState({
        activeClassHeading3: 'in-viewport in-viewport-once',
        loadingHeader3: false
      });
    }
  };
  onChangeHeader4 = isVisible => {
    if (isVisible) {
      return this.setState({
        activeClassHeading4: 'in-viewport in-viewport-once',
        loadingHeader4: false
      });
    }
  };
  onChangeHeader5 = isVisible => {
    if (isVisible) {
      return this.setState({
        activeClassHeading5: 'in-viewport in-viewport-once',
        loadingHeader5: false
      });
    }
  };
  onChangeHeader6 = isVisible => {
    if (isVisible) {
      return this.setState({
        activeClassHeading6: 'in-viewport in-viewport-once',
        loadingHeader6: false
      });
    }
  };
  onChangeHeader7 = isVisible => {
    if (isVisible) {
      return this.setState({
        activeClassHeading7: 'in-viewport in-viewport-once',
        loadingHeader7: false
      });
    }
  };
  onChangeHeader8 = isVisible => {
    if (isVisible) {
      return this.setState({
        activeClassHeading8: 'in-viewport in-viewport-once',
        loadingHeader8: false
      });
    }
  };
  render() {
    const [obj1, obj2, obj3] = this.state.our_service;
    console.log(this.state);
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            {/* <Navbar /> */}

            <div className='page-content-wrap'>
              <div className='wrapper clear' style={{ style: 'relative' }}>
                <VisibilitySensor
                  active={this.state.loadingHeader1}
                  onChange={this.onChangeHeader1}>
                  <div className='page-content-header'>
                    <h1>
                      <div
                        className={`masked-wrapper element i-v ${this.state.activeClassHeading1}`}>
                        <div className='masked-row animate'>
                          {this.state.pl_heading}
                        </div>
                      </div>
                    </h1>
                    <div
                      className={`element i-v spacer ${this.state.activeClassHeading1}`}>
                      <div className='hr line animate-line'></div>
                    </div>

                    <div className='pch-content'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.pl_content
                        }}
                      />
                    </div>
                  </div>
                </VisibilitySensor>

                <div className='page-content-right-bg'></div>
              </div>
            </div>

            <div className='section-row-wrap'>
              <VisibilitySensor
                active={this.state.loadingHeader2}
                onChange={this.onChangeHeader2}>
                <div className='section-row-content'>
                  <div className='wrapper'>
                    <div
                      className='section-row-image'
                      style={{
                        backgroundImage: `url(${obj1.os_image})`
                      }}>
                      <img src={require('../images/blank-image.png')} alt='' />
                    </div>

                    <div className='section-row-content'>
                      <div
                        className={`masked-wrapper element i-v ${this.state.activeClassHeading2}`}>
                        <div className='masked-row animate'>
                          <h2>{obj1.os_heading}</h2>
                        </div>
                      </div>

                      <div
                        className={`element i-v spacer ${this.state.activeClassHeading2}`}>
                        <div className='hr line animate-line'></div>
                      </div>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: obj1.os_content
                        }}
                      />
                    </div>
                  </div>
                </div>
              </VisibilitySensor>

              <VisibilitySensor
                active={this.state.loadingHeader3}
                onChange={this.onChangeHeader3}>
                <div className='section-row-content reverse'>
                  <div className='wrapper'>
                    <div
                      className='section-row-image'
                      style={{
                        backgroundImage: `url(${obj2.os_image})`
                      }}>
                      <img src={require('../images/blank-image.png')} alt='' />
                    </div>

                    <div className='section-row-content'>
                      <div
                        className={`masked-wrapper element i-v ${this.state.activeClassHeading3}`}>
                        <div className='masked-row animate'>
                          <h2>{obj2.os_heading}</h2>
                        </div>
                      </div>
                      <div
                        className={`element i-v spacer ${this.state.activeClassHeading3}`}>
                        <div className='hr line animate-line'></div>
                      </div>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: obj2.os_content
                        }}
                      />
                    </div>
                  </div>
                </div>
              </VisibilitySensor>

              <div className='section-row-content'>
                <VisibilitySensor
                  active={this.state.loadingHeader4}
                  onChange={this.onChangeHeader4}>
                  <div className='wrapper'>
                    <div
                      className='section-row-image'
                      style={{
                        backgroundImage: `url(${obj3.os_image})`
                      }}>
                      <img src='images/blank-image.png' alt='' />
                    </div>

                    <div className='section-row-content'>
                      <div
                        className={`masked-wrapper element i-v ${this.state.activeClassHeading4}`}>
                        <div className='masked-row animate'>
                          <h2>{obj3.os_heading}</h2>
                        </div>
                      </div>
                      <div
                        className={`element i-v spacer ${this.state.activeClassHeading4}`}>
                        <div className='hr line animate-line'></div>
                      </div>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: obj3.os_content
                        }}
                      />
                      <br />
                      <br />
                    </div>
                  </div>
                </VisibilitySensor>
              </div>
            </div>

            <div className='two-column-content'>
              <div className='wrapper clear'>
                <div className='two-column-content-head'>
                  <VisibilitySensor
                    active={this.state.loadingHeader5}
                    onChange={this.onChangeHeader5}>
                    <div>
                      <div
                        className={`masked-wrapper element i-v ${this.state.activeClassHeading5}`}>
                        <div className='masked-row animate'>
                          <h3
                            style={{
                              fontSize: '56px'
                            }}>
                            {this.state.tcc_heading}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`element i-v spacer ${this.state.activeClassHeading5}`}>
                        <div className='hr line animate-line'></div>
                      </div>
                    </div>
                  </VisibilitySensor>
                  <p>{this.state.tcc_sub_heading}</p>
                </div>

                <div className='column-col'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.left_content
                    }}
                  />
                </div>

                <div className='column-col'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.right_content
                    }}
                  />
                </div>
              </div>
            </div>
            {/* </VisibilitySensor> */}

            <div className='team-content'>
              <div className='wrapper clear'>
                <VisibilitySensor
                  active={this.state.loadingHeader6}
                  onChange={this.onChangeHeader6}>
                  <div>
                    <div
                      className={`masked-wrapper element i-v ${this.state.activeClassHeading6}`}>
                      <div className='masked-row animate'>
                        <h3
                          style={{
                            fontSize: '56px'
                          }}>
                          {this.state.ot_heading}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`element i-v spacer ${this.state.activeClassHeading6}`}>
                      <div className='hr line animate-line'></div>
                    </div>
                  </div>
                </VisibilitySensor>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.ot_content
                  }}
                />
                <br />

                <div className='team-content-main clear'>
                  <div className='team-content-col'>
                    <a data-fancybox data-src='#team-1' href='javascript:;'>
                      <img src={require('../images/placeholder.svg')} alt='' />
                    </a>

                    <div id='team-1' style={{ display: 'none' }}>
                      <div className='gallery-content clear'>
                        <div className='gallery-content-image'>
                          <img
                            src={require('../images/placeholder.svg')}
                            alt=''
                          />
                        </div>

                        <div className='gallery-content-main'>
                          <h6>Title</h6>

                          <h4>Full Name</h4>
                          <div className='hr'></div>

                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                          </p>

                          <div className='gallery-social'>
                            <a target='_blank' href=''>
                              <i className='fab fa-facebook-square'></i>
                            </a>
                            <a target='_blank' href=''>
                              <i className='fab fa-instagram'></i>
                            </a>
                            <a target='_blank' href=''>
                              <i className='fab fa-twitter'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='team-content-col'>
                    <a data-fancybox data-src='' href='javascript:;'>
                      <img src={require('../images/placeholder.svg')} alt='' />
                    </a>
                  </div>
                  <div className='team-content-col'>
                    <a data-fancybox data-src='' href='javascript:;'>
                      <img src={require('../images/placeholder.svg')} alt='' />
                    </a>
                  </div>
                  <div className='team-content-col'>
                    <a data-fancybox data-src='' href='javascript:;'>
                      <img src={require('../images/placeholder.svg')} alt='' />
                    </a>
                  </div>
                  <div className='team-content-col'>
                    <a data-fancybox data-src='' href='javascript:;'>
                      <img src={require('../images/placeholder.svg')} alt='' />
                    </a>
                  </div>
                  <div className='team-content-col'>
                    <a data-fancybox data-src='' href='javascript:;'>
                      <img src={require('../images/placeholder.svg')} alt='' />
                    </a>
                  </div>
                  <div className='team-content-col'>
                    <a data-fancybox data-src='' href='javascript:;'>
                      <img src={require('../images/placeholder.svg')} alt='' />
                    </a>
                  </div>
                </div>

                <a href='' className='cta-btn'>
                  More Team Members
                </a>
              </div>
            </div>

            <div className='video-wrap'>
              <div className='wrapper'>
                <VisibilitySensor
                  active={this.state.loadingHeader7}
                  onChange={this.onChangeHeader7}>
                  <div>
                    <div
                      className={`masked-wrapper element i-v ${this.state.activeClassHeading7}`}>
                      <div className='masked-row animate'>
                        <h3
                          style={{
                            fontSize: '56px'
                          }}>
                          {this.state.ac_video_content.vc_heading}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`element i-v spacer ${this.state.activeClassHeading7}`}>
                      <div className='hr line animate-line'></div>
                    </div>
                  </div>
                </VisibilitySensor>

                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.ac_video_content.vc_content
                  }}
                />
                <br />

                <div className='video-main'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.ac_video_content.video_link
                    }}
                  />
                  <br />
                  <br />
                </div>

                <div className='video-content'>
                  {this.state.ac_video_content.video_caption}
                </div>
              </div>
            </div>

            <VisibilitySensor
              active={this.state.loadingHeader8}
              onChange={this.onChangeHeader8}>
              <div className='cta-wrap'>
                <div className='wrapper'>
                  <h6>{this.state.ac_cta_content.cta_sub_heading}</h6>
                  <div className='heading-bar'>
                    <div
                      className={`masked-wrapper element i-v ${this.state.activeClassHeading8}`}>
                      <div className='masked-row animate'>
                        <h2>
                          {' '}
                          <span>
                            {this.state.ac_cta_content.cta_heading}
                          </span>{' '}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <a
                    href={this.state.ac_cta_content.cta_link}
                    className='cta-btn'>
                    {this.state.ac_cta_content.cta_label}
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

export default about;
