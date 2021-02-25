'use strict';
(function () {
  var button = document.querySelector('.card__button');
  var popup = document.querySelector('.card-popup');
  var close = document.querySelector('.card-popup__button-close');
  var overlay = document.querySelector('.card-popup__overlay');
  var body = document.querySelector('body');

  if (popup) {
    button.href = '#';

    var openPopupClickHandler = function (evt) {
      if (!popup.classList.contains('card-popup--show')) {
        evt.preventDefault();
        popup.classList.add('card-popup--show');
        close.focus();
        body.classList.add('no-scroll');
      }
      button.removeEventListener('click', openPopupClickHandler);
      close.addEventListener('click', closePopupClickHandler);
      overlay.addEventListener('click', closePopupClickHandler);
      window.addEventListener('keydown', escClickHandler);
    };
    button.addEventListener('click', openPopupClickHandler);

    var closePopupClickHandler = function () {
      if (popup.classList.contains('card-popup--show')) {
        popup.classList.remove('card-popup--show');
        body.classList.remove('no-scroll');
      }
      close.removeEventListener('click', closePopupClickHandler);
      button.addEventListener('click', openPopupClickHandler);
    };
    close.addEventListener('click', closePopupClickHandler);

    overlay.addEventListener('click', closePopupClickHandler);
    overlay.removeEventListener('click', closePopupClickHandler);


    var escClickHandler = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closePopupClickHandler();
        window.removeEventListener('keydown', escClickHandler);
      }
    };
    window.addEventListener('keydown', escClickHandler);
  }
})();

'use strict';
(function () {

  var container = document.querySelector('.card__container');

  if (container) {
    var swiper;
    var mobile = window.matchMedia('(max-width: 767px)').matches;

    if (mobile) {
      swiper = new window.Swiper('.card__container', {
        pagination: {
          el: '.swiper-pagination',
          clicable: true,
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          },
        },
        spaceBetween: 30,
      });
    }

    window.addEventListener('resize', function () {
      mobile = window.matchMedia('(max-width: 767px)').matches;
      if (mobile) {
        if (!swiper) {
          swiper = new window.Swiper('.card__container', {
            pagination: {
              el: '.swiper-pagination',
              clicable: true,
              type: 'fraction',
              renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
              },
            },
            spaceBetween: 30,
          });
        }
      } else {
        if (swiper) {
          swiper.destroy();
          swiper = undefined;
        }
      }
    });
  }
})();

'use strict';
(function () {

  new window.Swiper('.items__list', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clicable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    spaceBetween: 30,
    autoheight: false,
    slidesPerColumnFill: 'row',
    slidesPerView: 2,
    slidesPerGroup: 2,
    slidesPerColumn: 6,

    breakpoints: {
      1294: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 4
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 4
      },

      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 4
      },

      535: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 6
      }
    },
  });

})();

'use strict';
(function () {

  var faq = document.querySelector('.faq');
  var itemMaterials = document.querySelector('.faq__list-item--materials');
  var faqMaterialsToggle = document.querySelector('.faq__toggle--materials');
  var itemCountries = document.querySelector('.faq__list-item--countries');
  var faqCountriesToggle = document.querySelector('.faq__toggle--countries');
  var itemReturn = document.querySelector('.faq__list-item--return');
  var faqReturnToggle = document.querySelector('.faq__toggle--return');
  var itemPayment = document.querySelector('.faq__list-item--payment');
  var faqPaymentToggle = document.querySelector('.faq__toggle--payment');

  if (faq) {
    faq.classList.remove('faq--nojs');

    var toggleClickHandler = function (item) {
      if (item.classList.contains('faq__list-item--hide')) {
        item.classList.remove('faq__list-item--hide');
      } else {
        item.classList.add('faq__list-item--hide');
      }
    };

    faqMaterialsToggle.addEventListener('click', function () {
      toggleClickHandler(itemMaterials);
    });

    faqCountriesToggle.addEventListener('click', function () {
      toggleClickHandler(itemCountries);
    });

    faqReturnToggle.addEventListener('click', function () {
      toggleClickHandler(itemReturn);
    });

    faqPaymentToggle.addEventListener('click', function () {
      toggleClickHandler(itemPayment);
    });
  }
})();

'use strict';
(function () {

  var filter = document.querySelector('.items__filter');
  var filterButton = document.querySelector('.items__button-filter');
  var close = document.querySelector('.items__form-close');

  if (filter) {

    filter.classList.remove('items__filter--show');

    var openFilterClickHandler = function (evt) {
      if (!filter.classList.contains('items__filter--show')) {
        evt.preventDefault();
        filter.classList.add('items__filter--show');
      }
      filterButton.removeEventListener('click', openFilterClickHandler);
      close.addEventListener('click', closeFilterClickHandler);
      window.addEventListener('keydown', escClickHandler);
    };
    filterButton.addEventListener('click', openFilterClickHandler);

    var closeFilterClickHandler = function () {
      if (filter.classList.contains('items__filter--show')) {
        filter.classList.remove('items__filter--show');
      }
      close.removeEventListener('click', closeFilterClickHandler);
      filterButton.addEventListener('click', openFilterClickHandler);
    };
    close.addEventListener('click', closeFilterClickHandler);

    var escClickHandler = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closeFilterClickHandler();
        window.removeEventListener('keydown', escClickHandler);
      }
    };
    window.addEventListener('keydown', escClickHandler);
  }
})();

'use strict';
(function () {
  var filter = document.querySelector('.items__filter');
  var productToggle = document.querySelector('.items__filter-toggle--product');
  var productRange = document.querySelector('.items__option-product');

  var materialToggle = document.querySelector('.items__filter-toggle--material');
  var materialRange = document.querySelector('.items__option-material');

  var collectionToggle = document.querySelector('.items__filter-toggle--collection');
  var collectionRange = document.querySelector('.items__option-collection');

  var priceToggle = document.querySelector('.items__filter-toggle--price');
  var priceRange = document.querySelector('.items__option-price');

  var itemsList = document.querySelector('.items__list');

  if (filter) {

    itemsList.classList.remove('items__list--nojs');

    var toggleClickHandler = function (item) {
      if (item.classList.contains('items__option--hide')) {
        item.classList.remove('items__option--hide');
      } else {
        item.classList.add('items__option--hide');
      }
    };

    productToggle.addEventListener('click', function () {
      toggleClickHandler(productRange);
    });

    materialToggle.addEventListener('click', function () {
      toggleClickHandler(materialRange);
    });

    collectionToggle.addEventListener('click', function () {
      toggleClickHandler(collectionRange);
    });

    priceToggle.addEventListener('click', function () {
      toggleClickHandler(priceRange);
    });
  }

})();

'use strict';
(function () {
  var link = document.querySelector('.login-button');
  var loginPopup = document.querySelector('.login-popup');
  var close = document.querySelector('.login-popup__close');
  var overlay = document.querySelector('.login-popup__overlay');
  var body = document.querySelector('body');
  var header = document.querySelector('.header');

  if (loginPopup) {

    link.removeAttribute('href');

    var email = document.getElementById('popup-email');
    localStorage.setItem('email', email.value);

    var openPopupClickHandler = function (evt) {
      if (!loginPopup.classList.contains('login-popup--show')) {
        evt.preventDefault();
        loginPopup.classList.add('login-popup--show');
        email.focus();
        body.classList.add('no-scroll');
        if (header.classList.contains('header--menu-show')) {
          header.classList.remove('header--menu-show');
        }
      }
      link.removeEventListener('click', openPopupClickHandler);
      close.addEventListener('click', closePopupClickHandler);
      overlay.addEventListener('click', closePopupClickHandler);
      window.addEventListener('keydown', escClickHandler);
    };
    link.addEventListener('click', openPopupClickHandler);

    var closePopupClickHandler = function () {
      if (loginPopup.classList.contains('login-popup--show')) {
        loginPopup.classList.remove('login-popup--show');
        body.classList.remove('no-scroll');
      }
      close.removeEventListener('click', closePopupClickHandler);
      link.addEventListener('click', openPopupClickHandler);
    };
    close.addEventListener('click', closePopupClickHandler);

    overlay.addEventListener('click', closePopupClickHandler);
    overlay.removeEventListener('click', closePopupClickHandler);

    var escClickHandler = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closePopupClickHandler();
        window.removeEventListener('keydown', escClickHandler);
      }
    };
    window.addEventListener('keydown', escClickHandler);
  }
})();

'use strict';
(function () {

  var menuButton = document.querySelector('.header__main-nav-burger');
  var header = document.querySelector('.header');
  var body = document.querySelector('body');

  if (header) {

    header.classList.remove('header--menu-show');
    header.classList.remove('header--nojs');

    menuButton.addEventListener('click', function () {
      if (header.classList.contains('header--menu-show')) {
        header.classList.remove('header--menu-show');
        body.classList.remove('no-scroll');
      } else {
        header.classList.add('header--menu-show');
        body.classList.add('no-scroll');
      }
    });

  }

})();

'use strict';
(function () {

  new window.Swiper('.products__swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clicable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    spaceBetween: 30,
    slidesPerView: 2,

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1270: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    },
  });

})();
