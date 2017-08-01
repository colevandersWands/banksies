// this is an example of who to load stuff locally you need to first install the library with npm or have export in the local package
// all tools we need in production are taken from cdns!



$(function() {
    $(document).pjax('a:not([data-remote]):not([data-behavior]):not([data-skip-pjax])', '#pjax-container')
    $.pjax.defaults["timeout"] = 5000
});



// Asinc loader
function jsLoader() {
    ! function() {

        if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void(window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
            t.methods = ["identify", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
            t.factory = function(e) {
                return function() {
                    var n;
                    return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
                };
            }, t.methods.forEach(function(e) {
                t[e] = t.factory(e);
            }), t.load = function(t) {
                var e, n, o, r;
                e = 3e5, r = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
                    o.type = "text/javascript", o.defer = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + r + "/" + t + ".js",
                    n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
            });
            
    }();

    drift.SNIPPET_VERSION = '0.2.0';
    drift.load('hht3chvf7e9c');

    // load getsite controll
    (function(w, i, d, g, e, t, s) {
        var t
        w[d] = w[d] || [];
        t = i.createElement(g);
        t.defer = !0;
        t.src = e;
        s = i.getElementsByTagName(g)[0];
        s.parentNode.insertBefore(t, s);
    })(window, document, '_gscq', 'script', '//widgets.getsitecontrol.com/56026/script.js');

    // load mail chim validation

    // load getsite controll
    (function() {
        var t = document.createElement("script");
        t.defer = true;
        t.src = '//widgets.getsitecontrol.com/56026/script.js';
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(t, s);
    })();

    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
}

function onReadyAction() {
    "use strict";

    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function() {
        $("#cartoonVideo").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function() {
        $("#cartoonVideo").attr('src', url);
    });


    // Nav Sticky
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500 && !$('.mobile-toggle').is(":visible")) {
            $('.top-bar').addClass('nav-sticky');
        } else {
            $('.top-bar').removeClass('nav-sticky');
        }
    });


    // Feature Selector

    $('.selector-tabs li').click(function() {
        $(this).parent('.selector-tabs').children('li').removeClass('active');
        $(this).addClass('active');

        var activeTab = $(this).index() + 1;

        $(this).closest('.feature-selector').find('.selector-content').children('li').removeClass('active');
        $(this).closest('.feature-selector').find('.selector-content').children('li:nth-child(' + activeTab + ')').addClass('active');
    });

    // Fullwidth Subnavs
    // Position Fullwidth Subnavs fullwidth correctly

    $('.subnav-fullwidth').each(function() {
        $(this).css('width', $('.container').width());
        var offset = $(this).closest('.has-dropdown').offset();
        offset = offset.left;
        var containerOffset = $(window).width() - $('.container').outerWidth();
        containerOffset = containerOffset / 2;
        offset = offset - containerOffset - 15;
        $(this).css('left', -offset);
    });

    $(window).resize(function() {
        $('.subnav-fullwidth').each(function() {
            $(this).css('width', $('.container').width());
            var offset = $(this).closest('.has-dropdown').offset();
            offset = offset.left;
            var containerOffset = $(window).width() - $('.container').outerWidth();
            containerOffset = containerOffset / 2;
            offset = offset - containerOffset - 15;
            $(this).css('left', -offset);
        });
    });



    // Accordion

    $('.accordion li').click(function() {
        $(this).parent('.accordion').children('li').removeClass('active');
        $(this).addClass('active');
    });

    // Map Holder Overlay

    $('.map-holder').click(function() {
        $(this).addClass('on');
    });

    $(window).scroll(function() {
        if ($('.map-holder').hasClass('on')) {
            $('.map-holder').removeClass('on');
        }
    });

    // Map Details Holder

    $('.details-holder').each(function() {
        $(this).css('height', $(this).width());
    });

    $('.details-holder').mouseenter(function() {
        $(this).closest('.map-overlay').addClass('fade-overlay');
    }).mouseleave(function() {
        $(this).closest('.map-overlay').removeClass('fade-overlay');
    });

    // Expanding Lists (updated in Pivot 1.4.0)

    $('.expanding-ul li').click(function() {
        $('.expanding-ul li').removeClass('active');
        $(this).addClass('active');
    });

    // Contact form code
};


// toggle navbar on mobile
$(document).ready(function() {
    $(document).on("click.navbar", "i.icon.icon_menu", function() {
        $("nav").toggleClass('open-nav');
    })
})



$(document).ready(function() {
    $(document).on("mouseenter", ".timeline .feature", createProgressBar)
    $(document).on("mouseout", ".timeline .feature", destroyProgressBar)
})


var progressBar

function createProgressBar(number) {
    try {
        progressBar.destroy()
    } catch (err) {}
    var obj = $(this).find($("[data-progressbar]")).get(0)
    var ratio = $(obj).data("progressbar")
    progressBar = new ProgressBar.Circle(obj, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#555',
            width: 8
        },
        to: {
            color: '#555',
            width: 8
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText("" + value + "%");
            }

        }
    });
    progressBar.text.style.fontSize = '2rem';
    progressBar.animate(ratio * 0.01)
}

function destroyProgressBar() {
    if (!$(":hover").is(".feature")) {
        progressBar.destroy()
    }
}



function onLoadAction() {

    jsLoader()

    "use strict";
    // Align Elements Vertically
    alignVertical();
    alignBottom();

    $(window).resize(function() {
        alignVertical();
        alignBottom();
    });

    // Remove Loader
    $('.loader').css('opacity', 0);
    setTimeout(function() {
        $('.loader').hide();
        isotopify()
    }, 200);

}

function alignVertical() {
    $('.align-vertical').each(function() {
        var that = $(this);
        var height = that.height();
        var parentHeight = that.parent().height();
        var padAmount = (parentHeight / 2) - (height / 2);
        that.css('padding-top', padAmount);
    });

}

function alignBottom() {
    $('.align-bottom').each(function() {
        var that = $(this);
        var height = that.height();
        var parentHeight = that.parent().height();
        var padAmount = (parentHeight) - (height) - 32;
        that.css('padding-top', padAmount);
    });
}



// ouibounce

// var $ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
//     aggressive: false,
//     sensitivity: 15,
//     timer: 10,
//     sitewide: true,
//     cookieExpire: 10,
//     callback: function() {
//         console.log('ouibounce fired!');
//     }
// });



// Isotope Projects
// right now not used because it breaks in production... don't know why
const isotopify = function() {
    // imagesloaded - removed because not working
    var $isoLoading = $('.blog-masonry-container');
    $isoLoading.isotope({
        itemSelector: '.blog-masonry-item',
        layoutMode: 'masonry'
    });
    $('.contained-features-wrapper').isotope({
        itemSelector: '.no-pad',
        layoutMode: 'masonry',
        masonry: {
            gutter: 0
        }
    });
}



// 	$('.blog-masonry-container').isotope({
// 	  itemSelector: '.blog-masonry-item',
// 	  layoutMode: 'masonry'
// 	});


$(document).on('click.isotope', '.blog-filters li', function() {
    var current = $(this);

    current.siblings('li').removeClass('active');
    current.addClass('active');

    var filterValue = current.attr('data-filter');
    var container = current.closest('.blog-masonry').find('.blog-masonry-container');
    container.isotope({
        filter: filterValue
    });
});

// Isotope contained feature boxes




$(document).ready( onReadyAction );
$(window).load( onLoadAction );
$(window).on( "pjax:success", onLoadAction);
$(document).on( "pjax:success", onReadyAction );


// equalize heights

function arrayUnique(array){
    var uniqueElements = [];
        $.each(array, function(i, el){
        if($.inArray(el, uniqueElements) === -1) uniqueElements.push(el);
    });
    return uniqueElements
}

function equalizeHeight(i, selector){
    var heights = []
    var elements = $(selector)
    elements.each(
        function(key,ele){
            $(ele).height("auto")
        }
    )

    elements.each(
        function(key,ele){
            heights.push(ele.scrollHeight)
        }
    )

    var maxHeight = Math.max.apply(Math, heights)
    elements.each(
        function(key,ele){
            $(ele).height(maxHeight)
        }
    )
}

function findEqualizableElements() {
        var elements = $("[equalizeHeight]");
        var ids = [];
        elements.each(function(i, el){
            ids.push("[equalizeHeight='"+$(el).attr("equalizeHeight")+"']")
        });
            $.each(ids, equalizeHeight)

}

$(window).ready(findEqualizableElements)
$(window).resize(findEqualizableElements)
$(document).on('pjax:success', findEqualizableElements);


/*!
* lazyYT (lazy load YouTube videos)
* v1.0.1 - 2014-12-30
* (CC) This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
* http://creativecommons.org/licenses/by-sa/4.0/
* Contributors: https://github.com/tylerpearson/lazyYT/graphs/contributors || https://github.com/daugilas/lazyYT/graphs/contributors
* 
* Usage: <div class="lazyYT" data-youtube-id="laknj093n" data-parameters="rel=0">loading...</div>
*/

(function ($) {
    'use strict';

    function setUp($el, settings) {
        var width = $el.data('width'),
            height = $el.data('height'),
            ratio = ($el.data('ratio')) ? $el.data('ratio') : settings.default_ratio,
            id = $el.data('youtube-id'),
            padding_bottom,
            innerHtml = [],
            $thumb,
            thumb_img,
            loading_text = $el.text() ? $el.text() : settings.loading_text,
            youtube_parameters = $el.data('parameters') || '';
        
        ratio = ratio.split(":");
        
        // width and height might override default_ratio value
        if (typeof width === 'number' && typeof height === 'number') {
          $el.width(width);
          padding_bottom = height + 'px';
        } else if (typeof width === 'number') {
          $el.width(width);
          padding_bottom = (width * ratio[1] / ratio[0]) + 'px';
        } else {
          width = $el.width();
		      
          // no width means that container is fluid and will be the size of its parent
          if (width == 0) {
            width = $el.parent().width();
          }
		      
          padding_bottom = (ratio[1] / ratio[0] * 100) + '%';
        }
        
        //
        // This HTML will be placed inside 'lazyYT' container
        
        innerHtml.push('<div class="ytp-thumbnail">');
        
          // Play button from YouTube (exactly as it is in YouTube)
          innerHtml.push('<div class="ytp-large-play-button"');
          if (width <= 640) innerHtml.push(' style="transform: scale(0.563888888888889);"');
          innerHtml.push('>');
          innerHtml.push('<svg>');
            innerHtml.push('<path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-large-play-button-svg" d="M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z"></path>');
            innerHtml.push('<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="33.3,41.4 33.3,17.75 56,29.6"></polygon>');
          innerHtml.push('</svg>');
          innerHtml.push('</div>'); // end of .ytp-large-play-button
        
        innerHtml.push('</div>'); // end of .ytp-thumbnail
        
        // Video title (info bar)
        innerHtml.push('<div class="html5-info-bar">');
        innerHtml.push('<div class="html5-title">');
        innerHtml.push('<div class="html5-title-text-wrapper">');
        innerHtml.push('<a id="lazyYT-title-', id, '" class="html5-title-text" target="_blank" tabindex="3100" href="//www.youtube.com/watch?v=', id, '">');
        innerHtml.push(loading_text);
        innerHtml.push('</a>');
        innerHtml.push('</div>'); // .html5-title
        innerHtml.push('</div>'); // .html5-title-text-wrapper
        innerHtml.push('</div>'); // end of Video title .html5-info-bar

        $el.css({
            'padding-bottom': padding_bottom
        })
          .html(innerHtml.join(''));
        
        if (width > 640) {
          thumb_img = 'maxresdefault.jpg';
        } else if (width > 480) {
          thumb_img = 'sddefault.jpg';
        } else if (width > 320) {
          thumb_img = 'hqdefault.jpg';
        } else if (width > 120) {
          thumb_img = 'mqdefault.jpg';
        } else if (width == 0) { // sometimes it fails on fluid layout
          thumb_img = 'hqdefault.jpg';
        } else {
          thumb_img = 'default.jpg';
        }
        
        $thumb = $el.find('.ytp-thumbnail').css({
            'background-image': ['url(//img.youtube.com/vi/', id, '/', thumb_img, ')'].join('')
        })
          .addClass('lazyYT-image-loaded')
          .on('click', function (e) {
            e.preventDefault();
            if (!$el.hasClass('lazyYT-video-loaded') && $thumb.hasClass('lazyYT-image-loaded')) {
              $el.html('<iframe src="//www.youtube.com/embed/' + id + '?autoplay=1&' + youtube_parameters + '" frameborder="0" allowfullscreen></iframe>')
                .addClass('lazyYT-video-loaded');
            }
          });

        $.getJSON('//gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', function (data) {
            $el.find('#lazyYT-title-' + id).text(data.entry.title.$t);
        });

    }

    $.fn.lazyYT = function (newSettings) {
      var defaultSettings = {
        loading_text: '',
        default_ratio: '16:9',
        callback: null, // ToDO execute callback if given
        container_class: 'lazyYT-container'
      };
      var settings = $.extend(defaultSettings, newSettings);
      
      return this.each(function () {
          var $el = $(this).addClass(settings.container_class);
          setUp($el, settings);
      });
    };

}(jQuery));

$( document ).ready(function() {
    $('.js-lazyYT').lazyYT('AIzaSyDXSwRqp0QP1H65gR8JjcYe4op2yQDPFxg');
});

$('#js-lazyYT').on('hidden.bs.modal', function () {
    var src = $(this).find('iframe').attr('src');
    $(this).find('iframe').attr('src', '');
    $(this).find('iframe').attr('src', src);
});