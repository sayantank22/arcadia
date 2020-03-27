import $ from 'jquery';
import Isotope from 'isotope-layout';
import matchesSelector from 'matches-selector';

$(window).on('load', function() {
  // if ($('.home-banner').index() == 0) {
  //   $('.home-banner').slick({
  //     dots: false,
  //     infinite: true,
  //     speed: 1000,
  //     fade: false,
  //     autoplay: false
  //   });
  // }

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

  if ($('.grid').index() == 0) {
    // init Isotope
    var iso = new Isotope('.grid', {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
      }
    });

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function(itemElem) {
        var number = itemElem.querySelector('.number').textContent;
        return parseInt(number, 10) > 50;
      },
      // show if name ends with -ium
      ium: function(itemElem) {
        var name = itemElem.querySelector('.name').textContent;
        return name.match(/ium$/);
      }
    };

    // bind filter button click
    var filtersElem = document.querySelector('.sort-by-button-group');
    filtersElem.addEventListener('click', function(event) {
      // only work with buttons
      if (!matchesSelector(event.target, 'li')) {
        return;
      }
      var filterValue = event.target.getAttribute('data-filter');
      // use matching filter function
      filterValue = filterFns[filterValue] || filterValue;
      iso.arrange({ filter: filterValue });
    });
  }
});
