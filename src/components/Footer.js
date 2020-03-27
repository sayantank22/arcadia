import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import '../css/slick.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import cors from 'cors';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      slugs: [],
      property_content: ''
    };
  }
  componentDidMount() {
    axios
      .get(
        'http://arcadiabsi.wpengine.com/wp-json/menus/v1/menus/primary-menu',
        cors()
      )
      .then(res => {
        res.data.items.map(item => {
          return this.setState({
            titles: this.state.titles.concat(item.title),
            slugs: this.state.slugs.concat(item.slug)
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {' '}
        <div class='footer-top-wrap'>
          <div class='wrapper clear'>
            <div class='footer-logo'>
              <a href=''>
                <img src={require('../images/logo.png')} alt='' />
              </a>
            </div>

            <div class='footer-nav'>
              <ul>
                <li>
                  <Link to='/'>{this.state.titles[0]}</Link>
                </li>
                <li>
                  <Link to={`/${this.state.slugs[1]}`}>
                    {this.state.titles[1]}
                  </Link>
                </li>
                <li>
                  <Link to={`/${this.state.slugs[2]}`}>
                    {this.state.titles[2]}
                  </Link>
                </li>
                <li>
                  <a href={`/${this.state.slugs[3]}`}>{this.state.titles[3]}</a>
                </li>
                <li>
                  <a href={`/${this.state.slugs[4]}`}>{this.state.titles[4]}</a>
                </li>
                <li>
                  <Link to={`/${this.state.slugs[5]}`}>
                    {this.state.titles[5]}
                  </Link>
                </li>
              </ul>
            </div>

            <div class='footer-social'>
              <a href=''>
                <i class='fab fa-facebook-square'></i>
              </a>
              <a href=''>
                <i class='fab fa-instagram'></i>
              </a>
              <a href=''>
                <i class='fab fa-twitter'></i>
              </a>
              <a href=''>
                <i class='fab fa-pinterest'></i>
              </a>
              <a href=''>
                <i class='fab fa-houzz'></i>
              </a>
            </div>
          </div>
        </div>
        <div class='footer-bottom-wrap'>
          <div class='wrapper clear'>
            <div class='copyright'>
              Copyright © 2020 Arcadia Homes Inc. All rights reserved.
            </div>
            <div class='footer-bottom-nav'>
              <ul>
                <li>
                  <a href=''>Terms and Conditions</a>
                </li>
                <li>
                  <a href=''>Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class='author-logo'>
              <a href=''>
                <img src={require('../images/da-logo.png')} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
