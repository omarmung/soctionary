"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*
 * textillate.js
 * http://jschr.github.com/textillate
 * MIT licensed
 *
 * Copyright (C) 2012-2013 Jordan Schroter
 */

(function ($) {
  "use strict";

  function isInEffect(effect) {
    return (/In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0
    );
  };

  function isOutEffect(effect) {
    return (/Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0
    );
  };

  function stringToBoolean(str) {
    if (str !== "true" && str !== "false") return str;
    return str === "true";
  };

  // custom get data api method
  function getData(node) {
    var attrs = node.attributes || [],
        data = {};

    if (!attrs.length) return data;

    $.each(attrs, function (i, attr) {
      var nodeName = attr.nodeName.replace(/delayscale/, 'delayScale');
      if (/^data-in-*/.test(nodeName)) {
        data.in = data.in || {};
        data.in[nodeName.replace(/data-in-/, '')] = stringToBoolean(attr.nodeValue);
      } else if (/^data-out-*/.test(nodeName)) {
        data.out = data.out || {};
        data.out[nodeName.replace(/data-out-/, '')] = stringToBoolean(attr.nodeValue);
      } else if (/^data-*/.test(nodeName)) {
        data[nodeName.replace(/data-/, '')] = stringToBoolean(attr.nodeValue);
      }
    });

    return data;
  }

  function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}
    return o;
  }

  function animate($t, effect, cb) {
    $t.addClass('animated ' + effect).css('visibility', 'visible').show();

    $t.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $t.removeClass('animated ' + effect);
      cb && cb();
    });
  }

  function animateTokens($tokens, options, cb) {
    var that = this,
        count = $tokens.length;

    if (!count) {
      cb && cb();
      return;
    }

    if (options.shuffle) $tokens = shuffle($tokens);
    if (options.reverse) $tokens = $tokens.toArray().reverse();

    $.each($tokens, function (i, t) {
      var $token = $(t);

      function complete() {
        if (isInEffect(options.effect)) {
          $token.css('visibility', 'visible');
        } else if (isOutEffect(options.effect)) {
          $token.css('visibility', 'hidden');
        }
        count -= 1;
        if (!count && cb) cb();
      }

      var delay = options.sync ? options.delay : options.delay * i * options.delayScale;

      $token.text() ? setTimeout(function () {
        animate($token, options.effect, complete);
      }, delay) : complete();
    });
  };

  var Textillate = function Textillate(element, options) {
    var base = this,
        $element = $(element);

    base.init = function () {
      base.$texts = $element.find(options.selector);

      if (!base.$texts.length) {
        base.$texts = $('<ul class="texts"><li>' + $element.html() + '</li></ul>');
        $element.html(base.$texts);
      }

      base.$texts.hide();

      base.$current = $('<span>').html(base.$texts.find(':first-child').html()).prependTo($element);

      if (isInEffect(options.in.effect)) {
        base.$current.css('visibility', 'hidden');
      } else if (isOutEffect(options.out.effect)) {
        base.$current.css('visibility', 'visible');
      }

      base.setOptions(options);

      base.timeoutRun = null;

      setTimeout(function () {
        base.options.autoStart && base.start();
      }, base.options.initialDelay);
    };

    base.setOptions = function (options) {
      base.options = options;
    };

    base.triggerEvent = function (name) {
      var e = $.Event(name + '.tlt');
      $element.trigger(e, base);
      return e;
    };

    base.in = function (index, cb) {
      index = index || 0;

      var $elem = base.$texts.find(':nth-child(' + ((index || 0) + 1) + ')'),
          options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {}),
          $tokens;

      $elem.addClass('current');

      base.triggerEvent('inAnimationBegin');

      base.$current.html($elem.html()).lettering('words');

      // split words to individual characters if token type is set to 'char'
      if (base.options.type == "char") {
        base.$current.find('[class^="word"]').css({
          'display': 'inline-block',
          // fix for poor ios performance
          '-webkit-transform': 'translate3d(0,0,0)',
          '-moz-transform': 'translate3d(0,0,0)',
          '-o-transform': 'translate3d(0,0,0)',
          'transform': 'translate3d(0,0,0)'
        }).each(function () {
          $(this).lettering();
        });
      }

      $tokens = base.$current.find('[class^="' + base.options.type + '"]').css('display', 'inline-block');

      if (isInEffect(options.in.effect)) {
        $tokens.css('visibility', 'hidden');
      } else if (isOutEffect(options.in.effect)) {
        $tokens.css('visibility', 'visible');
      }

      base.currentIndex = index;

      animateTokens($tokens, options.in, function () {
        base.triggerEvent('inAnimationEnd');
        if (options.in.callback) options.in.callback();
        if (cb) cb(base);
      });
    };

    base.out = function (cb) {
      var $elem = base.$texts.find(':nth-child(' + ((base.currentIndex || 0) + 1) + ')'),
          $tokens = base.$current.find('[class^="' + base.options.type + '"]'),
          options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {});

      base.triggerEvent('outAnimationBegin');

      animateTokens($tokens, options.out, function () {
        $elem.removeClass('current');
        base.triggerEvent('outAnimationEnd');
        if (options.out.callback) options.out.callback();
        if (cb) cb(base);
      });
    };

    base.start = function (index) {
      setTimeout(function () {
        base.triggerEvent('start');

        (function run(index) {
          base.in(index, function () {
            var length = base.$texts.children().length;

            index += 1;

            if (!base.options.loop && index >= length) {
              if (base.options.callback) base.options.callback();
              base.triggerEvent('end');
            } else {
              index = index % length;

              base.timeoutRun = setTimeout(function () {
                base.out(function () {
                  run(index);
                });
              }, base.options.minDisplayTime);
            }
          });
        })(index || 0);
      }, base.options.initialDelay);
    };

    base.stop = function () {
      if (base.timeoutRun) {
        clearInterval(base.timeoutRun);
        base.timeoutRun = null;
      }
    };

    base.init();
  };

  $.fn.textillate = function (settings, args) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('textillate'),
          options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), (typeof settings === "undefined" ? "undefined" : _typeof(settings)) == 'object' && settings);

      if (!data) {
        $this.data('textillate', data = new Textillate(this, options));
      } else if (typeof settings == 'string') {
        data[settings].apply(data, [].concat(args));
      } else {
        data.setOptions.call(data, options);
      }
    });
  };

  $.fn.textillate.defaults = {
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    in: {
      effect: 'fadeInLeftBig',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function callback() {}
    },
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function callback() {}
    },
    autoStart: true,
    inEffects: [],
    outEffects: ['hinge'],
    callback: function callback() {},
    type: 'char'
  };
})(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi90ZXh0aWxsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7Ozs7Ozs7QUFRQyxXQUFVLENBQVYsRUFBYTtBQUNaOztBQUVBLFdBQVMsVUFBVCxDQUFxQixNQUFyQixFQUE2QjtBQUMzQixXQUFPLE1BQUssSUFBTCxDQUFVLE1BQVYsS0FBcUIsRUFBRSxPQUFGLENBQVUsTUFBVixFQUFrQixFQUFFLEVBQUYsQ0FBSyxVQUFMLENBQWdCLFFBQWhCLENBQXlCLFNBQTNDLEtBQXlEO0FBQXJGO0FBQ0Q7O0FBRUQsV0FBUyxXQUFULENBQXNCLE1BQXRCLEVBQThCO0FBQzVCLFdBQU8sT0FBTSxJQUFOLENBQVcsTUFBWCxLQUFzQixFQUFFLE9BQUYsQ0FBVSxNQUFWLEVBQWtCLEVBQUUsRUFBRixDQUFLLFVBQUwsQ0FBZ0IsUUFBaEIsQ0FBeUIsVUFBM0MsS0FBMEQ7QUFBdkY7QUFDRDs7QUFHRCxXQUFTLGVBQVQsQ0FBeUIsR0FBekIsRUFBOEI7QUFDNUIsUUFBSSxRQUFRLE1BQVIsSUFBa0IsUUFBUSxPQUE5QixFQUF1QyxPQUFPLEdBQVA7QUFDdkMsV0FBUSxRQUFRLE1BQWhCO0FBQ0Q7O0FBRUQ7QUFDQSxXQUFTLE9BQVQsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDdEIsUUFBSSxRQUFRLEtBQUssVUFBTCxJQUFtQixFQUEvQjtBQUFBLFFBQ0ksT0FBTyxFQURYOztBQUdBLFFBQUksQ0FBQyxNQUFNLE1BQVgsRUFBbUIsT0FBTyxJQUFQOztBQUVuQixNQUFFLElBQUYsQ0FBTyxLQUFQLEVBQWMsVUFBVSxDQUFWLEVBQWEsSUFBYixFQUFtQjtBQUMvQixVQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixZQUF0QixFQUFvQyxZQUFwQyxDQUFmO0FBQ0EsVUFBSSxhQUFhLElBQWIsQ0FBa0IsUUFBbEIsQ0FBSixFQUFpQztBQUMvQixhQUFLLEVBQUwsR0FBVSxLQUFLLEVBQUwsSUFBVyxFQUFyQjtBQUNBLGFB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QUFFSCxrQkFBWSxHQUZUO0FBR0gsYUFBTyxFQUhKO0FBSUgsWUFBTSxLQUpIO0FBS0gsZUFBUyxLQUxOO0FBTUgsZUFBUyxLQU5OO0FBT0gsZ0JBQVUsb0JBQVksQ0FBRTtBQVByQixLQWRvQjtBQXVCekIsZUFBVyxJQXZCYztBQXdCekIsZUFBVyxFQXhCYztBQXlCekIsZ0JBQVksQ0FBRSxPQUFGLENBekJhO0FBMEJ6QixjQUFVLG9CQUFZLENBQUUsQ0ExQkM7QUEyQnpCLFVBQU07QUEzQm1CLEdBQTNCO0FBOEJELENBdFJBLEVBc1JDLE1BdFJELENBQUQiLCJmaWxlIjoidGV4dGlsbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLypcbiAqIHRleHRpbGxhdGUuanNcbiAqIGh0dHA6Ly9qc2Noci5naXRodWIuY29tL3RleHRpbGxhdGVcbiAqIE1JVCBsaWNlbnNlZFxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxMi0yMDEzIEpvcmRhbiBTY2hyb3RlclxuICovXG5cbihmdW5jdGlvbiAoJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiBpc0luRWZmZWN0IChlZmZlY3QpIHtcbiAgICByZXR1cm4gL0luLy50ZXN0KGVmZmVjdCkgfHwgJC5pbkFycmF5KGVmZmVjdCwgJC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzLmluRWZmZWN0cykgPj0gMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpc091dEVmZmVjdCAoZWZmZWN0KSB7XG4gICAgcmV0dXJuIC9PdXQvLnRlc3QoZWZmZWN0KSB8fCAkLmluQXJyYXkoZWZmZWN0LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMub3V0RWZmZWN0cykgPj0gMDtcbiAgfTtcblxuXG4gIGZ1bmN0aW9uIHN0cmluZ1RvQm9vbGVhbihzdHIpIHtcbiAgICBpZiAoc3RyICE9PSBcInRydWVcIiAmJiBzdHIgIT09IFwiZmFsc2VcIikgcmV0dXJuIHN0cjtcbiAgICByZXR1cm4gKHN0ciA9PT0gXCJ0cnVlXCIpO1xuICB9O1xuXG4gIC8vIGN1c3RvbSBnZXQgZGF0YSBhcGkgbWV0aG9kXG4gIGZ1bmN0aW9uIGdldERhdGEgKG5vZGUpIHtcbiAgICB2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXMgfHwgW11cbiAgICAgICwgZGF0YSA9IHt9O1xuXG4gICAgaWYgKCFhdHRycy5sZW5ndGgpIHJldHVybiBkYXRhO1xuXG4gICAgJC5lYWNoKGF0dHJzLCBmdW5jdGlvbiAoaSwgYXR0cikge1xuICAgICAgdmFyIG5vZGVOYW1lID0gYXR0ci5ub2RlTmFtZS5yZXBsYWNlKC9kZWxheXNjYWxlLywgJ2RlbGF5U2NhbGUnKTtcbiAgICAgIGlmICgvXmRhdGEtaW4tKi8udGVzdChub2RlTmFtZSkpIHtcbiAgICAgICAgZGF0YS5pbiA9IGRhdGEuaW4gfHwge307XG4gICAgICAgIGRhdGEuaW5bbm9kZU5hbWUucmVwbGFjZSgvZGF0YS1pbi0vLCAnJyldID0gc3RyaW5nVG9Cb29sZWFuKGF0dHIubm9kZVZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoL15kYXRhLW91dC0qLy50ZXN0KG5vZGVOYW1lKSkge1xuICAgICAgICBkYXRhLm91dCA9IGRhdGEub3V0IHx8IHt9O1xuICAgICAgICBkYXRhLm91dFtub2RlTmFtZS5yZXBsYWNlKC9kYXRhLW91dC0vLCAnJyldID1zdHJpbmdUb0Jvb2xlYW4oYXR0ci5ub2RlVmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICgvXmRhdGEtKi8udGVzdChub2RlTmFtZSkpIHtcbiAgICAgICAgZGF0YVtub2RlTmFtZS5yZXBsYWNlKC9kYXRhLS8sICcnKV0gPSBzdHJpbmdUb0Jvb2xlYW4oYXR0ci5ub2RlVmFsdWUpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNodWZmbGUgKG8pIHtcbiAgICAgIGZvciAodmFyIGosIHgsIGkgPSBvLmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4KTtcbiAgICAgIHJldHVybiBvO1xuICB9XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZSAoJHQsIGVmZmVjdCwgY2IpIHtcbiAgICAkdC5hZGRDbGFzcygnYW5pbWF0ZWQgJyArIGVmZmVjdClcbiAgICAgIC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAuc2hvdygpO1xuXG4gICAgJHQub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkdC5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgJyArIGVmZmVjdCk7XG4gICAgICAgIGNiICYmIGNiKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlVG9rZW5zICgkdG9rZW5zLCBvcHRpb25zLCBjYikge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgLCBjb3VudCA9ICR0b2tlbnMubGVuZ3RoO1xuXG4gICAgaWYgKCFjb3VudCkge1xuICAgICAgY2IgJiYgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zaHVmZmxlKSAkdG9rZW5zID0gc2h1ZmZsZSgkdG9rZW5zKTtcbiAgICBpZiAob3B0aW9ucy5yZXZlcnNlKSAkdG9rZW5zID0gJHRva2Vucy50b0FycmF5KCkucmV2ZXJzZSgpO1xuXG4gICAgJC5lYWNoKCR0b2tlbnMsIGZ1bmN0aW9uIChpLCB0KSB7XG4gICAgICB2YXIgJHRva2VuID0gJCh0KTtcblxuICAgICAgZnVuY3Rpb24gY29tcGxldGUgKCkge1xuICAgICAgICBpZiAoaXNJbkVmZmVjdChvcHRpb25zLmVmZmVjdCkpIHtcbiAgICAgICAgICAkdG9rZW4uY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc091dEVmZmVjdChvcHRpb25zLmVmZmVjdCkpIHtcbiAgICAgICAgICAkdG9rZW4uY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50IC09IDE7XG4gICAgICAgIGlmICghY291bnQgJiYgY2IpIGNiKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWxheSA9IG9wdGlvbnMuc3luYyA/IG9wdGlvbnMuZGVsYXkgOiBvcHRpb25zLmRlbGF5ICogaSAqIG9wdGlvbnMuZGVsYXlTY2FsZTtcblxuICAgICAgJHRva2VuLnRleHQoKSA/XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBhbmltYXRlKCR0b2tlbiwgb3B0aW9ucy5lZmZlY3QsIGNvbXBsZXRlKSB9LCBkZWxheSkgOlxuICAgICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBUZXh0aWxsYXRlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgYmFzZSA9IHRoaXNcbiAgICAgICwgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG4gICAgYmFzZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgYmFzZS4kdGV4dHMgPSAkZWxlbWVudC5maW5kKG9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gICAgICBpZiAoIWJhc2UuJHRleHRzLmxlbmd0aCkge1xuICAgICAgICBiYXNlLiR0ZXh0cyA9ICQoJzx1bCBjbGFzcz1cInRleHRzXCI+PGxpPicgKyAkZWxlbWVudC5odG1sKCkgKyAnPC9saT48L3VsPicpO1xuICAgICAgICAkZWxlbWVudC5odG1sKGJhc2UuJHRleHRzKTtcbiAgICAgIH1cblxuICAgICAgYmFzZS4kdGV4dHMuaGlkZSgpO1xuXG4gICAgICBiYXNlLiRjdXJyZW50ID0gJCgnPHNwYW4+JylcbiAgICAgICAgLmh0bWwoYmFzZS4kdGV4dHMuZmluZCgnOmZpcnN0LWNoaWxkJykuaHRtbCgpKVxuICAgICAgICAucHJlcGVuZFRvKCRlbGVtZW50KTtcblxuICAgICAgaWYgKGlzSW5FZmZlY3Qob3B0aW9ucy5pbi5lZmZlY3QpKSB7XG4gICAgICAgIGJhc2UuJGN1cnJlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIGlmIChpc091dEVmZmVjdChvcHRpb25zLm91dC5lZmZlY3QpKSB7XG4gICAgICAgIGJhc2UuJGN1cnJlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgIH1cblxuICAgICAgYmFzZS5zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICBiYXNlLnRpbWVvdXRSdW4gPSBudWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmFzZS5vcHRpb25zLmF1dG9TdGFydCAmJiBiYXNlLnN0YXJ0KCk7XG4gICAgICB9LCBiYXNlLm9wdGlvbnMuaW5pdGlhbERlbGF5KVxuICAgIH07XG5cbiAgICBiYXNlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgYmFzZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9O1xuXG4gICAgYmFzZS50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGUgPSAkLkV2ZW50KG5hbWUgKyAnLnRsdCcpO1xuICAgICAgJGVsZW1lbnQudHJpZ2dlcihlLCBiYXNlKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH07XG5cbiAgICBiYXNlLmluID0gZnVuY3Rpb24gKGluZGV4LCBjYikge1xuICAgICAgaW5kZXggPSBpbmRleCB8fCAwO1xuXG4gICAgICB2YXIgJGVsZW0gPSBiYXNlLiR0ZXh0cy5maW5kKCc6bnRoLWNoaWxkKCcgKyAoKGluZGV4fHwwKSArIDEpICsgJyknKVxuICAgICAgICAsIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgYmFzZS5vcHRpb25zLCAkZWxlbS5sZW5ndGggPyBnZXREYXRhKCRlbGVtWzBdKSA6IHt9KVxuICAgICAgICAsICR0b2tlbnM7XG5cbiAgICAgICRlbGVtLmFkZENsYXNzKCdjdXJyZW50Jyk7XG5cbiAgICAgIGJhc2UudHJpZ2dlckV2ZW50KCdpbkFuaW1hdGlvbkJlZ2luJyk7XG5cbiAgICAgIGJhc2UuJGN1cnJlbnRcbiAgICAgICAgLmh0bWwoJGVsZW0uaHRtbCgpKVxuICAgICAgICAubGV0dGVyaW5nKCd3b3JkcycpO1xuXG4gICAgICAvLyBzcGxpdCB3b3JkcyB0byBpbmRpdmlkdWFsIGNoYXJhY3RlcnMgaWYgdG9rZW4gdHlwZSBpcyBzZXQgdG8gJ2NoYXInXG4gICAgICBpZiAoYmFzZS5vcHRpb25zLnR5cGUgPT0gXCJjaGFyXCIpIHtcbiAgICAgICAgYmFzZS4kY3VycmVudC5maW5kKCdbY2xhc3NePVwid29yZFwiXScpXG4gICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgLy8gZml4IGZvciBwb29yIGlvcyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcbiAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXG4gICAgICAgICAgICAgICctby10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcbiAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkgeyAkKHRoaXMpLmxldHRlcmluZygpIH0pO1xuICAgICAgfVxuXG4gICAgICAkdG9rZW5zID0gYmFzZS4kY3VycmVudFxuICAgICAgICAuZmluZCgnW2NsYXNzXj1cIicgKyBiYXNlLm9wdGlvbnMudHlwZSArICdcIl0nKVxuICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuXG4gICAgICBpZiAoaXNJbkVmZmVjdChvcHRpb25zLmluLmVmZmVjdCkpIHtcbiAgICAgICAgJHRva2Vucy5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICB9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xuICAgICAgICAkdG9rZW5zLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIGJhc2UuY3VycmVudEluZGV4ID0gaW5kZXg7XG5cbiAgICAgIGFuaW1hdGVUb2tlbnMoJHRva2Vucywgb3B0aW9ucy5pbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBiYXNlLnRyaWdnZXJFdmVudCgnaW5BbmltYXRpb25FbmQnKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaW4uY2FsbGJhY2spIG9wdGlvbnMuaW4uY2FsbGJhY2soKTtcbiAgICAgICAgaWYgKGNiKSBjYihiYXNlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBiYXNlLm91dCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyICRlbGVtID0gYmFzZS4kdGV4dHMuZmluZCgnOm50aC1jaGlsZCgnICsgKChiYXNlLmN1cnJlbnRJbmRleHx8MCkgKyAxKSArICcpJylcbiAgICAgICAgLCAkdG9rZW5zID0gYmFzZS4kY3VycmVudC5maW5kKCdbY2xhc3NePVwiJyArIGJhc2Uub3B0aW9ucy50eXBlICsgJ1wiXScpXG4gICAgICAgICwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBiYXNlLm9wdGlvbnMsICRlbGVtLmxlbmd0aCA/IGdldERhdGEoJGVsZW1bMF0pIDoge30pXG5cbiAgICAgIGJhc2UudHJpZ2dlckV2ZW50KCdvdXRBbmltYXRpb25CZWdpbicpO1xuXG4gICAgICBhbmltYXRlVG9rZW5zKCR0b2tlbnMsIG9wdGlvbnMub3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbGVtLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG4gICAgICAgIGJhc2UudHJpZ2dlckV2ZW50KCdvdXRBbmltYXRpb25FbmQnKTtcbiAgICAgICAgaWYgKG9wdGlvbnMub3V0LmNhbGxiYWNrKSBvcHRpb25zLm91dC5jYWxsYmFjaygpO1xuICAgICAgICBpZiAoY2IpIGNiKGJhc2UpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGJhc2Uuc3RhcnQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBiYXNlLnRyaWdnZXJFdmVudCgnc3RhcnQnKTtcblxuICAgICAgKGZ1bmN0aW9uIHJ1biAoaW5kZXgpIHtcbiAgICAgICAgYmFzZS5pbihpbmRleCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBsZW5ndGggPSBiYXNlLiR0ZXh0cy5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgICAgIGluZGV4ICs9IDE7XG5cbiAgICAgICAgICBpZiAoIWJhc2Uub3B0aW9ucy5sb29wICYmIGluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5jYWxsYmFjaykgYmFzZS5vcHRpb25zLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICBiYXNlLnRyaWdnZXJFdmVudCgnZW5kJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gaW5kZXggJSBsZW5ndGg7XG5cbiAgICAgICAgICAgIGJhc2UudGltZW91dFJ1biA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBiYXNlLm91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuKGluZGV4KVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGJhc2Uub3B0aW9ucy5taW5EaXNwbGF5VGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0oaW5kZXggfHwgMCkpO1xuICAgICAgfSwgYmFzZS5vcHRpb25zLmluaXRpYWxEZWxheSk7XG4gICAgfTtcblxuICAgIGJhc2Uuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChiYXNlLnRpbWVvdXRSdW4pIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChiYXNlLnRpbWVvdXRSdW4pO1xuICAgICAgICBiYXNlLnRpbWVvdXRSdW4gPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBiYXNlLmluaXQoKTtcbiAgfVxuXG4gICQuZm4udGV4dGlsbGF0ZSA9IGZ1bmN0aW9uIChzZXR0aW5ncywgYXJncykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICAsIGRhdGEgPSAkdGhpcy5kYXRhKCd0ZXh0aWxsYXRlJylcbiAgICAgICAgLCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sICQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cywgZ2V0RGF0YSh0aGlzKSwgdHlwZW9mIHNldHRpbmdzID09ICdvYmplY3QnICYmIHNldHRpbmdzKTtcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICR0aGlzLmRhdGEoJ3RleHRpbGxhdGUnLCAoZGF0YSA9IG5ldyBUZXh0aWxsYXRlKHRoaXMsIG9wdGlvbnMpKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PSAnc3RyaW5nJykge1xuICAgICAgICBkYXRhW3NldHRpbmdzXS5hcHBseShkYXRhLCBbXS5jb25jYXQoYXJncykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YS5zZXRPcHRpb25zLmNhbGwoZGF0YSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSlcbiAgfTtcblxuICAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMgPSB7XG4gICAgc2VsZWN0b3I6ICcudGV4dHMnLFxuICAgIGxvb3A6IGZhbHNlLFxuICAgIG1pbkRpc3BsYXlUaW1lOiAyMDAwLFxuICAgIGluaXRpYWxEZWxheTogMCxcbiAgICBpbjoge1xuICAgICAgZWZmZWN0OiAnZmFkZUluTGVmdEJpZycsXG4gICAgICBkZWxheVNjYWxlOiAxLjUsXG4gICAgICBkZWxheTogNTAsXG4gICAgICBzeW5jOiBmYWxzZSxcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgICAgc2h1ZmZsZTogZmFsc2UsXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge31cbiAgICB9LFxuICAgIG91dDoge1xuICAgICAgZWZmZWN0OiAnaGluZ2UnLFxuICAgICAgZGVsYXlTY2FsZTogMS41LFxuICAgICAgZGVsYXk6IDUwLFxuICAgICAgc3luYzogZmFsc2UsXG4gICAgICByZXZlcnNlOiBmYWxzZSxcbiAgICAgIHNodWZmbGU6IGZhbHNlLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSxcbiAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgaW5FZmZlY3RzOiBbXSxcbiAgICBvdXRFZmZlY3RzOiBbICdoaW5nZScgXSxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge30sXG4gICAgdHlwZTogJ2NoYXInXG4gIH07XG5cbn0oalF1ZXJ5KSk7Il19