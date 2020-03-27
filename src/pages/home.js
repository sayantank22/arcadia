import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';
import '../css/slick.css';
import '../js/custom';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';
import cors from 'cors';
import Slider from 'react-slick';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [],
      lc_heading: {},
      lc_content: '',
      hp_awards_image: {},
      hp_awards_content: {},
      hp_cta: {},
      source_url: '',
      activeClassHeader: '',
      activeClassCta: '',
      isLoaded: false,
      loadingHeader: true,
      loadingCta: true
    };
  }
  componentDidMount() {
    axios
      .get('https://arcadiabsi.wpengine.com/wp-json/wp/v2/pages/11/', cors())
      .then(res =>
        this.setState({
          banner: res.data.acf.hp_banner,
          lc_heading: res.data.acf.hp_landing_content.lc_heading,
          lc_content: res.data.acf.hp_landing_content.lc_content,
          hp_awards_image: res.data.acf.hp_awards.hp_awards_image,
          hp_awards_content: res.data.acf.hp_awards.hp_awards_content[0],
          hp_cta: res.data.acf.hp_cta,
          isLoaded: true
        })
      )
      .catch(err => console.log(err));

    axios
      .get(
        'https://arcadiabsi.wpengine.com/wp-json/wp/v2/posts/59?_embed',
        cors()
      )
      .then(res => {
        this.setState({
          source_url: res.data._embedded['wp:featuredmedia'][0].source_url
        });
      })
      .catch(err => console.log(err));
  }
  onChangeHeader = isVisible => {
    if (isVisible) {
      return this.setState({
        activeClassHeader: 'in-viewport in-viewport-once',
        loadingHeader: false
      });
    }
  };
  onChangeCta = isVisible => {
    if (isVisible) {
      return this.setState({
        activeClassCta: 'in-viewport in-viewport-once',
        loadingCta: false
      });
    }
  };
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      fade: false,
      autoplay: false
    };
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <div>
              {/* <Navbar /> */}

              <div className='banner-wrap'>
                <Slider {...settings} className='home-banner owl-carousel'>
                  <div className='slider__item'>
                    <div className='banner-slider'>
                      <div
                        className='banner-image'
                        style={{
                          backgroundImage: `url(${this.state.banner[0]})`
                        }}></div>
                    </div>
                  </div>

                  <div className='slider__item'>
                    <div className='banner-slider'>
                      <div
                        className='banner-image'
                        style={{
                          backgroundImage: `url(${this.state.banner[1]})`
                        }}></div>
                    </div>
                  </div>

                  <div className='slider__item'>
                    <div className='banner-slider'>
                      <div
                        className='banner-image'
                        style={{
                          backgroundImage: `url(${this.state.banner[2]})`
                        }}></div>
                    </div>
                  </div>

                  <div className='slider__item'>
                    <div className='banner-slider'>
                      <div
                        className='banner-image'
                        style={{
                          backgroundImage: `url(${this.state.banner[3]})`
                        }}></div>
                    </div>
                  </div>

                  <div className='slider__item'>
                    <div className='banner-slider'>
                      <div
                        className='banner-image'
                        style={{
                          backgroundImage: `url(${this.state.banner[4]})`
                        }}></div>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className='landing-wrap'>
                <div className='wrapper'>
                  <div className='landing-content'>
                    <VisibilitySensor
                      active={this.state.loadingHeader}
                      onChange={this.onChangeHeader}>
                      <div className='landing-header'>
                        <div
                          className={`text-row-1 masked-wrapper delay-2 element i-v ${this.state.activeClassHeader}`}>
                          {' '}
                          <div className='masked-row animate'>
                            {' '}
                            <i>Uncommon Care</i>{' '}
                          </div>{' '}
                        </div>
                        <div
                          className={`text-row-2 masked-wrapper element i-v  ${this.state.activeClassHeader}`}>
                          {' '}
                          <div className='masked-row animate'>
                            Creates Livable Luxury
                          </div>{' '}
                        </div>
                      </div>
                    </VisibilitySensor>

                    <div className='landing-header-content'>
                      <div
                        className={`element i-v ${this.state.activeClassHeader}`}>
                        <div className='hr line animate-line'></div>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${this.state.lc_content}`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='landing-bottom-wrap'>
                <div className='wrapper clear'>
                  <div className='landing-bottom-image'>
                    <div
                      className='lbi-image-landscape'
                      style={{
                        backgroundImage: `url(${this.state.hp_awards_image.ai_featured_1})`
                      }}></div>

                    <div
                      className='lbi-image-vertical'
                      style={{
                        backgroundImage: `url(${this.state.hp_awards_image.ai_featured_2})`
                      }}></div>
                  </div>

                  <div className='landing-bottom-content'>
                    <div className='lbc-header'>
                      <div className='lbc-header-image'>
                        <img src={this.state.source_url} alt='' />
                      </div>
                      <div className='lbc-header-title'>
                        {this.state.hp_awards_content.post_title}
                      </div>
                    </div>

                    <div className='lbc-content'>
                      <p>
                        {this.state.hp_awards_content.post_content}
                        <br /> <a href=''>View Article</a>
                      </p>
                    </div>
                  </div>

                  <div className='landing-bottom-overlay'></div>
                </div>
              </div>

              {/* <Cta hp_cta={this.state.hp_cta} /> */}
              <VisibilitySensor
                active={this.state.loadingCta}
                onChange={this.onChangeCta}>
                <div className='cta-wrap'>
                  <div className='wrapper'>
                    <h6>{this.state.hp_cta.cta_sub_heading}</h6>
                    <div className='heading-bar'>
                      <h2>
                        <div
                          class={`masked-wrapper element i-v ${this.state.activeClassCta}`}>
                          <div class='masked-row animate'>
                            <span>{this.state.hp_cta.cta_heading}</span>
                          </div>
                        </div>
                      </h2>
                    </div>
                    <a href='' class='cta-btn'>
                      {this.state.hp_cta.cta_label}
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

export default home;
