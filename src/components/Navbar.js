import React, { Component, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import '../css/slick.css';
import axios from 'axios';
import cors from 'cors';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      slugs: [],
      property_content: '',
      header_logo: '',
      footer_social: {},
      header_fax: '',
      header_phone: '',
      header_location: '',
      isLoading: true
    };
  }

  componentDidMount() {
    $('.pop-click').click(function() {
      var popt = $(this).attr('data-popup');
      $(popt).fadeIn();
    });

    $('.popup-close').click(function() {
      $('.popup').fadeOut();
    });

    $('.toggle-btn').click(function() {
      $(this).toggleClass('active');
      $('.page-content-wrap').toggleClass('toggle-container-active');
    });

    axios
      .get(
        'https://arcadiabsi.wpengine.com/wp-json/menus/v1/menus/primary-menu',
        cors()
      )
      .then(res => {
        res.data.items.map(item => {
          return this.setState({
            titles: this.state.titles.concat(item.title),
            slugs: this.state.slugs.concat(item.slug),
            isLoading: false
          });
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(
        'https://arcadiabsi.wpengine.com/wp-json/acf/v3/options/options',
        cors()
      )
      .then(res => {
        this.setState({
          property_content: res.data.acf.property_content,
          footer_social: res.data.acf.footer_social,
          header_logo: res.data.acf.header_logo,
          header_fax: res.data.acf.header_fax,
          header_phone: res.data.acf.header_phone,
          header_location: res.data.acf.header_location
        });
      });
  }
  render() {
    return (
      <div className='site-header'>
        <div className='wrapper clear'>
          <div className='logo'>
            <a href=''>
              <img src={this.state.header_logo} alt='Arcadia' />
            </a>
          </div>

          <div className='main-nav'>
            <ul>
              <li
                id='home'
                className={
                  this.props.location.pathname === '/'
                    ? 'current-menu-item'
                    : ''
                }>
                <NavLink activeClassName={'active'} exact to='/'>
                  {this.state.titles[0]}
                </NavLink>
              </li>
              <li
                id='about'
                className={
                  this.props.location.pathname === '/about'
                    ? 'current-menu-item'
                    : ''
                }>
                <NavLink to={`/${this.state.slugs[1]}`}>
                  {this.state.titles[1]}
                </NavLink>
              </li>
              <li
                id='why-arcadia'
                className={
                  this.props.location.pathname === '/why-arcadia'
                    ? 'current-menu-item'
                    : ''
                }>
                <NavLink to={`/${this.state.slugs[2]}`}>
                  {this.state.titles[2]}
                </NavLink>
              </li>

              <li
                id='gallery'
                className={
                  this.props.location.pathname === '/gallery'
                    ? 'current-menu-item'
                    : ''
                }>
                <a
                  href={`https://arcadia-demo.netlify.com/${this.state.slugs[3]}`}>
                  {this.state.titles[3]}
                </a>
              </li>
              <li
                id='news-room'
                className={
                  this.props.location.pathname === '/news-room'
                    ? 'current-menu-item'
                    : ''
                }>
                <a
                  activeClassName={'active'}
                  href={`https://arcadia-demo.netlify.com/${this.state.slugs[4]}`}>
                  {this.state.titles[4]}
                </a>
              </li>
              <li
                id='contact'
                className={
                  this.props.location.pathname === '/contact'
                    ? 'current-menu-item'
                    : ''
                }>
                <NavLink to={`/${this.state.slugs[5]}`}>
                  {this.state.titles[5]}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='header-right'>
            <div className='header-right-col'>
              <div className='login-link pop-click'>
                Arcadia Trend <a href=''>Login</a>
              </div>
            </div>

            <div className='header-right-col'>
              <div className='search-icon pop-click' data-popup='#search-popup'>
                <i className='far fa-search'></i>
              </div>
            </div>

            <div className='header-right-col'>
              <div className='hamburger-btn pop-click' data-popup='#menu-popup'>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className='popup' style={{ display: 'none' }} id='search-popup'>
          <div className='popup-container'>
            <div className='popup-container-head'>
              <div className='wrapper clear'>
                <div className='popup-close'></div>
              </div>
            </div>

            <div className='popup-container-content'>
              <div className='wrapper clear'>
                <div className='search-area'>
                  <input type='text' name='' placeholder='|Search' />
                  <div className='search-bottom'>
                    Hit enter to search or ESC to close
                  </div>
                </div>
              </div>
            </div>

            <div
              className='popup-container-image'
              style={{
                backgroundImage: `url(${require('../images/image-2.png')})`
              }}></div>
          </div>
        </div>

        <div className='popup' style={{ display: 'none' }} id='menu-popup'>
          <div className='popup-container'>
            <div className='popup-container-head'>
              <div className='wrapper clear'>
                <div className='popup-logo'>
                  <img src={this.state.header_logo} alt='' />
                </div>

                <div className='popup-close'></div>
              </div>
            </div>

            <div className='popup-container-content'>
              <div className='wrapper clear'>
                <div className='header-top-content clear'>
                  <div className='htc-col'>
                    <h6>Ready to talk about your dream home?</h6>
                    <h4>Let’s Get Started</h4>

                    <label>Full Name *</label>
                    <input type='text' name='' value='' />

                    <label>Email *</label>
                    <input type='email' name='' value='' />

                    <label>Message</label>
                    <textarea placeholder='I’m ready to set up my consultation…'></textarea>

                    <input type='submit' name='' value='Schedule' />
                  </div>

                  <div className='htc-col'>
                    <h6>Need to Find us?</h6>
                    <h4>Our Location</h4>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.header_location
                      }}
                    />
                  </div>

                  <div className='htc-col'>
                    <h6>Are you ready to talk?</h6>
                    <h4>Give Us a Call</h4>

                    <p>
                      <strong>Phone:</strong> {this.state.header_phone} <br />{' '}
                      <strong>Fax:</strong> {this.state.header_fax}
                    </p>

                    <p>
                      <strong>
                        {' '}
                        <span
                          style={{
                            color: '#969aa1'
                          }}>
                          CONNECT
                        </span>{' '}
                      </strong>
                    </p>

                    <p>
                      <a href={this.state.footer_social.facebook_url}>
                        <i className='fab fa-facebook-square'></i>
                      </a>
                      <a href={this.state.footer_social.instagram_url}>
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href={this.state.footer_social.twitter_url}>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a href={this.state.footer_social.pinterest_url}>
                        <i className='fab fa-pinterest'></i>
                      </a>
                      <a href={this.state.footer_social.houzz_url}>
                        <i className='fab fa-houzz'></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className='popup-container-image'
              style={{
                backgroundImage: `url(${require('../images/image-2.png')})`
              }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
