import React, { Component } from 'react';
import '../App.css';
import '../js/slick';
import axios from 'axios';
import cors from 'cors';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisibilitySensor from 'react-visibility-sensor';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pl_heading: '',
      pl_content: '',
      label1: '',
      label2: '',
      label3: '',
      label4: '',
      label5: '',
      content: '',
      source_url: '',
      property_content: '',
      header_logo: '',
      activeClassHeading1: '',
      loadingHeader1: true,
      isLoaded: false
    };
  }
  componentDidMount() {
    axios
      .get('https://arcadiabsi.wpengine.com/wp-json/wp/v2/pages/61', cors())
      .then(res => {
        this.setState({
          content: res.data.content.rendered
        });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get('https://arcadiabsi.wpengine.com/wp-json/acf/v3/pages/61', cors())
      .then(res => {
        this.setState({
          pl_heading: res.data.pl_heading,
          pl_heading: res.data.pl_content
        });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get('https://arcadiabsi.wpengine.com/wp-json/wp/v2/media/91', cors())
      .then(res => {
        this.setState({
          source_url: res.data.source_url
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
          header_logo: res.data.acf.header_logo,
          isLoaded: true
        });
      });

    // var OAuth = require('OAuth');
    // var oauth = new OAuth.OAuth(
    //   'ck_1779f6f0d1536b518dc0d471f9d8aa38157565ee',
    //   'cs_997913a847fa908c9dcc203799dc09043d6e8b70',
    //   '1.0A',
    //   null,
    //   'HMAC-SHA1'
    // );

    // oauth.get(
    //   'http://arcadiabsi.wpengine.com/wp-json/gf/v2/entries?_labels=1',
    //   function(error, data, response) {
    //     if (error) console.error(error);
    //     // data = JSON.parse(data);
    //     // console.log(JSON.stringify(data, 0, 2));
    //     console.log(response);
    //   }
    // );

    // axios
    //     .get(
    //       'http://arcadiabsi.wpengine.com/wp-json/gf/v2/entries?_labels=1',
    //       cors()
    //     )
    //     .then(res => {
    //       this.setState({
    //         label1: res.data.entries[0]._labels
    //       });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
  }
  onChangeHeader1 = isVisible => {
    if (isVisible) {
      return this.setState({
        activeClassHeading1: 'in-viewport in-viewport-once',
        loadingHeader1: false
      });
    }
  };
  render() {
    // setTimeout(() => {
    //   return console.log(this.state.pl_heading);
    // });
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <div className='page-content-wrap'>
              <div className='wrapper clear'>
                <div className='contact-content clear'>
                  <div className='contact-content-main'>
                    <VisibilitySensor
                      active={this.state.loadingHeader1}
                      onChange={this.onChangeHeader1}>
                      <div>
                        <h2
                          style={{
                            fontSize: '66px'
                          }}>
                          <div
                            className={`masked-wrapper element i-v ${this.state.activeClassHeading1}`}>
                            <div className='masked-row animate'>
                              Get In Touch
                            </div>
                          </div>
                        </h2>

                        <div
                          className={`element i-v spacer ${this.state.activeClassHeading1}`}>
                          <div className='hr line animate-line'></div>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: this.state.property_content
                          }}
                        />
                      </div>
                    </VisibilitySensor>

                    <div className='contact-main clear'>
                      <div className='conatct-tow-col'>
                        <label>Full Name *</label>
                        <input type='text' name='' />
                      </div>

                      <div className='conatct-tow-col'>
                        <label>Email *</label>
                        <input type='email' name='' />
                      </div>

                      <div className='conatct-tow-col'>
                        <label>Phone *</label>
                        <input type='tel' name='' />
                      </div>

                      <div className='conatct-tow-col'>
                        <label>Subject</label>
                        <input type='text' name='' />
                      </div>

                      <label>Message</label>
                      <textarea placeholder='I’m ready to set up my consultation…'></textarea>

                      <input type='submit' name='' value='Send Message' />
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.content
                      }}
                    />
                  </div>

                  <div className='contact-content-image'>
                    <img src={this.state.source_url} alt='' />
                  </div>
                </div>
              </div>
            </div>

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

export default Contact;
