!function(n){var t={};function o(c){if(t[c])return t[c].exports;var g=t[c]={i:c,l:!1,exports:{}};return n[c].call(g.exports,g,g.exports,o),g.l=!0,g.exports}o.m=n,o.c=t,o.d=function(n,t,c){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:c})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var g in n)o.d(c,g,function(t){return n[t]}.bind(null,g));return c},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nif (document.body.classList.contains('bootstrap-project')) {\n  console.log('bootstrap-project');\n  window.onscroll = function () {\n    pokolorujMenu()\n  };\n\n  /*function pokolorujMenu() {\n      if (window.pageYOffset == 0) {\n          $('#main-nav').css('background-color', 'rgba(14, 216, 214, 0.0)'); ;\n      } else {\n          $('#main-nav').css('background-color', 'rgba(14, 216, 214, 0.6)');\n          $('#main-nav').css('transition-duration', '1s');\n      }\n  }*/\n\n\n  function pokolorujMenu() {\n      var target = $('button[data-scrollto]').attr('data-scrollto');\n      if (window.pageYOffset < $(target).offset().top) {\n          $('#main-nav').css('background-color', 'rgba(14, 216, 214, 0.0)'); ;\n      } else {\n          $('#main-nav').css('background-color', 'rgba(14, 216, 214, 0.6)');\n          $('#main-nav').css('transition-duration', '1s');\n      }\n  }\n\n  $('button[data-scrollto]').on('click', function(e) {\n  /*    e.preventDefault();*/\n      var target = $(this).attr('data-scrollto');\n      var topPosition = $(target).offset().top;\n\n      $('html, body').animate(\n          {scrollTop: topPosition},\n          600\n      );\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnYm9vdHN0cmFwLXByb2plY3QnKSkge1xuICBjb25zb2xlLmxvZygnYm9vdHN0cmFwLXByb2plY3QnKTtcbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIHBva29sb3J1ak1lbnUoKVxuICB9O1xuXG4gIC8qZnVuY3Rpb24gcG9rb2xvcnVqTWVudSgpIHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT0gMCkge1xuICAgICAgICAgICQoJyNtYWluLW5hdicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDE0LCAyMTYsIDIxNCwgMC4wKScpOyA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoJyNtYWluLW5hdicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDE0LCAyMTYsIDIxNCwgMC42KScpO1xuICAgICAgICAgICQoJyNtYWluLW5hdicpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsICcxcycpO1xuICAgICAgfVxuICB9Ki9cblxuXG4gIGZ1bmN0aW9uIHBva29sb3J1ak1lbnUoKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJCgnYnV0dG9uW2RhdGEtc2Nyb2xsdG9dJykuYXR0cignZGF0YS1zY3JvbGx0bycpO1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8ICQodGFyZ2V0KS5vZmZzZXQoKS50b3ApIHtcbiAgICAgICAgICAkKCcjbWFpbi1uYXYnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgxNCwgMjE2LCAyMTQsIDAuMCknKTsgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKCcjbWFpbi1uYXYnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgxNCwgMjE2LCAyMTQsIDAuNiknKTtcbiAgICAgICAgICAkKCcjbWFpbi1uYXYnKS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCAnMXMnKTtcbiAgICAgIH1cbiAgfVxuXG4gICQoJ2J1dHRvbltkYXRhLXNjcm9sbHRvXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgLyogICAgZS5wcmV2ZW50RGVmYXVsdCgpOyovXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNjcm9sbHRvJyk7XG4gICAgICB2YXIgdG9wUG9zaXRpb24gPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xuXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcbiAgICAgICAgICB7c2Nyb2xsVG9wOiB0b3BQb3NpdGlvbn0sXG4gICAgICAgICAgNjAwXG4gICAgICApO1xuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);