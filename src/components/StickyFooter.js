import React from 'react';
import '../App.css';
import '../css/slick.css';

const StickyFooter = () => {
  return (
    <div class='location-bar'>
      <div class='wrapper'>
        <a href=''>
          <img src={require('../images/pin.svg')} alt='' /> Browse our Luxury
          Homesites
        </a>
      </div>
    </div>
  );
};

export default StickyFooter;
