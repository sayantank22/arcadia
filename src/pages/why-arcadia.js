import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';
import '../css/slick.css';
import '../js/slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';
import cors from 'cors';

class WhyArcadia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pl_heading: '',
      pl_content: '',
      pl_cta_label: '',
      pl_cta_link: '',
      ic_image_1: '',
      ic_image_2: '',
      ic_cont_heading: '',
      ic_cont_desc: '',
      ic_cont_cta_label: '',
      ic_cont_cta_link: '',
      wac_features_heading: '',
      wac_features_content: '',
      wac_features_list: [],
      wac_features_image: '',
      wac_certifications_heading: '',
      wac_certifications_content: '',
      wac_certifications_logo: [],
      cta_content: {},
      activeClassHeading1: '',
      activeClassHeading2: '',
      activeClassHeading3: '',
      activeClassHeading4: '',
      activeClassHeading5: '',
      loadingHeader1: true,
      loadingHeader2: true,
      loadingHeader3: true,
      loadingHeader4: true,
      loadingHeader5: true,
      isLoaded: false
    };
  }
  componentDidMount() {
    axios
      .get('https://arcadiabsi.wpengine.com/wp-json/acf/v3/pages/62/', cors())
      .then(res => {
        this.setState({
          pl_heading: res.data.acf.pl_heading,
          pl_content: res.data.acf.pl_content,
          pl_cta_label: res.data.acf.pl_cta_label,
          pl_cta_link: res.data.acf.pl_cta_link,
          ic_image_1: res.data.acf.image_with_content.ic_image.ic_image_1,
          ic_image_2: res.data.acf.image_with_content.ic_image.ic_image_2,
          ic_cont_heading:
            res.data.acf.image_with_content.ic_content.ic_cont_heading,
          ic_cont_desc: res.data.acf.image_with_content.ic_content.ic_cont_desc,
          ic_cont_cta_label:
            res.data.acf.image_with_content.ic_content.ic_cont_cta_label,
          ic_cont_cta_link:
            res.data.acf.image_with_content.ic_content.ic_cont_cta_link,
          wac_features_heading:
            res.data.acf.wac_features.wac_features_content.wac_features_heading,
          wac_features_content:
            res.data.acf.wac_features.wac_features_content.wac_features_content,
          wac_features_list:
            res.data.acf.wac_features.wac_features_content.wac_features_list,
          wac_features_image:
            res.data.acf.wac_features.wac_features_content.wac_features_image,
          wac_certifications_heading:
            res.data.acf.wac_certifications.wac_certifications_heading,
          wac_certifications_content:
            res.data.acf.wac_certifications.wac_certifications_content,
          wac_certifications_logo:
            res.data.acf.wac_certifications.wac_certifications_logo,
          cta_content: res.data.acf.cta_content,
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
  render() {
    console.log(this.state.wac_features_list[0]);
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            {/* <Navbar /> */}

            <div class='page-content-wrap'>
              <div class='wrapper clear' style={{ position: 'relative' }}>
                <VisibilitySensor
                  active={this.state.loadingHeader1}
                  onChange={this.onChangeHeader1}>
                  <div class='page-content-header'>
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
                    <div class='pch-content'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.pl_content
                        }}
                      />
                      <br />
                      <br />
                      <a
                        href={this.state.pl_cta_link}
                        class='cta-btn light-brown'>
                        {' '}
                        <img src={require('../images/play.svg')} />
                        {this.state.pl_cta_label}
                      </a>
                    </div>
                  </div>
                </VisibilitySensor>
                <div class='page-content-right-bg'></div>
              </div>
            </div>

            <div class='landing-bottom-wrap full-bg'>
              <div class='wrapper clear'>
                <div class='landing-bottom-image'>
                  <div
                    class='lbi-image-landscape'
                    style={{
                      backgroundImage: `url(${this.state.ic_image_1})`
                    }}></div>

                  <div
                    class='lbi-image-vertical'
                    style={{
                      backgroundImage: `url(${this.state.ic_image_2})`
                    }}></div>
                </div>
                <VisibilitySensor
                  active={this.state.loadingHeader2}
                  onChange={this.onChangeHeader2}>
                  <div class='landing-bottom-content'>
                    <div class='lbc-content'>
                      <h3 style={{ fontSize: '66px' }}>
                        <div
                          className={`masked-wrapper element i-v ${this.state.activeClassHeading2}`}>
                          <div className='masked-row animate'>
                            {this.state.ic_cont_heading}
                          </div>
                        </div>
                      </h3>
                      <div
                        className={`element i-v spacer ${this.state.activeClassHeading2}`}>
                        <div className='hr line animate-line'></div>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.ic_cont_desc
                        }}
                      />
                      <br />
                      <br />
                      <a
                        href={this.state.ic_cont_cta_link}
                        class='cta-btn light-brown'>
                        {' '}
                        <img src={require('../images/play.svg')} />
                        {this.state.ic_cont_cta_label}
                      </a>
                    </div>
                  </div>
                </VisibilitySensor>
                <div class='landing-bottom-overlay'></div>
              </div>
            </div>

            <div class='section-features-row'>
              <div class='wrapper clear'>
                <div class='section-features-image'>
                  <img src={require('../images/wy-img3.png')} alt='' />
                </div>

                <div class='section-features-content'>
                  <VisibilitySensor
                    active={this.state.loadingHeader3}
                    onChange={this.onChangeHeader3}>
                    <div>
                      <h3 style={{ fontSize: '66px' }}>
                        <div
                          className={`masked-wrapper element i-v ${this.state.activeClassHeading3}`}>
                          <div className='masked-row animate'>
                            {this.state.wac_features_heading}
                          </div>
                        </div>
                      </h3>

                      <div
                        className={`element i-v spacer ${this.state.activeClassHeading3}`}>
                        <div className='hr line animate-line'></div>
                      </div>
                    </div>
                  </VisibilitySensor>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.wac_features_content
                    }}
                  />
                  <br />
                  <br />

                  <div class='section-features-list'>
                    {this.state.wac_features_list.map((list, index) => {
                      return (
                        <div class='features-list-row'>
                          <div class='flr-no'>{index + 1}.</div>
                          <div class='flr-content'>
                            <h6>{list.wac_features_title}</h6>
                            <p>{list.wac_features_short_desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <VisibilitySensor
              active={this.state.loadingHeader4}
              onChange={this.onChangeHeader4}>
              <div class='section-certification-row'>
                <div class='wrapper clear'>
                  <h3 style={{ fontSize: '56px' }}>
                    <div
                      className={`masked-wrapper element i-v ${this.state.activeClassHeading4}`}>
                      <div className='masked-row animate'>
                        {this.state.wac_certifications_heading}
                      </div>
                    </div>
                  </h3>
                  <div
                    className={`element i-v spacer ${this.state.activeClassHeading4}`}>
                    <div className='hr line animate-line'></div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.wac_certifications_content
                    }}
                  />
                  <br />
                  <br />

                  <div class='certification-logo'>
                    <img src={this.state.wac_certifications_logo[0]} alt='' />
                    <img src={this.state.wac_certifications_logo[1]} alt='' />
                    <img src={this.state.wac_certifications_logo[2]} alt='' />
                  </div>
                </div>
              </div>
            </VisibilitySensor>

            <VisibilitySensor
              active={this.state.loadingHeader5}
              onChange={this.onChangeHeader5}>
              <div class='cta-wrap'>
                <div class='wrapper'>
                  <h6>{this.state.cta_content.cta_cont_sub_heading}</h6>
                  <div class='heading-bar'>
                    <h2>
                      <div
                        className={`masked-wrapper element i-v ${this.state.activeClassHeading5}`}>
                        <div className='masked-row animate'>
                          <span>{this.state.cta_content.cta_cont_heading}</span>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <a
                    href={this.state.cta_content.cta_cont_cta_link}
                    class='cta-btn'>
                    {this.state.cta_content.cta_cont_cta_label}
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

export default WhyArcadia;
