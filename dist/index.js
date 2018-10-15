'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _grayPercentage = require('gray-percentage');

var _grayPercentage2 = _interopRequireDefault(_grayPercentage);

var _typographyBreakpointConstants = require('typography-breakpoint-constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = {
  title: 'Midnight Coder',
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  googleFonts: [{
    name: 'Source Code Pro',
    styles: ['700']
  }, {
    name: 'Open Sans',
    styles: ['400', '400i', '700', '700i', '900', '900i']
  }],
  headerFontFamily: ['Source Code Pro', 'serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  bodyColor: 'hsla(0, 0%, 87%, 1)',
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: function overrideStyles(_ref, options) {
    var _ref2;

    var adjustFontSizeTo = _ref.adjustFontSizeTo,
        scale = _ref.scale,
        rhythm = _ref.rhythm;
    return _ref2 = {
      h1: {
        fontFamily: ['Source Code Pro', 'sans-serif'].join(',')
      },
      blockquote: _extends({}, scale(1 / 5), {
        color: (0, _grayPercentage2.default)(41),
        fontStyle: 'italic',
        paddingLeft: rhythm(13 / 16),
        marginLeft: rhythm(-1),
        borderLeft: rhythm(3 / 16) + ' solid ' + (0, _grayPercentage2.default)(10)
      }),
      'blockquote > :last-child': {
        marginBottom: 0
      },
      'blockquote cite': _extends({}, adjustFontSizeTo(options.baseFontSize), {
        color: options.bodyColor,
        fontWeight: options.bodyWeight
      }),
      'blockquote cite:before': {
        content: '"— "'
      },
      ul: {
        listStyle: 'disc'
      },
      'ul,ol': {
        marginLeft: 0
      }
    }, _defineProperty(_ref2, _typographyBreakpointConstants.MOBILE_MEDIA_QUERY, {
      'ul,ol': {
        marginLeft: rhythm(1)
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16)
      }
    }), _defineProperty(_ref2, 'h1,h2,h3,h4,h5,h6', {
      marginTop: rhythm(2)
    }), _defineProperty(_ref2, 'h4', {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase'
    }), _defineProperty(_ref2, 'h6', {
      fontStyle: 'italic'
    }), _defineProperty(_ref2, 'a', {
      boxShadow: '0 1px 0 0 currentColor',
      color: '#66D9EF',
      textDecoration: 'none'
    }), _defineProperty(_ref2, 'a:hover,a:active', {
      boxShadow: 'none'
    }), _defineProperty(_ref2, 'mark,ins', {
      background: '#66D9EF',
      color: 'white',
      padding: rhythm(1 / 16) + ' ' + rhythm(1 / 8),
      textDecoration: 'none'
    }), _ref2;
  }
};

exports.default = theme;