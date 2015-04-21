/*
 * jQuery MiniColors: A tiny color picker built on jQuery
 *
 * Copyright: Cory LaViska for A Beautiful Site, LLC: http://www.abeautifulsite.net/
 *
 * Contribute: https://github.com/claviska/jquery-minicolors
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
(function (factory) {
    /* jshint ignore:start */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
    /* jshint ignore:end */
}(function ($) {

    // Defaults
    $.minicolors = {
        colorList: {
            "aliceblue": "#f0f8ff",
            "antiquewhite": "#faebd7",
            "aqua": "#00ffff",
            "aquamarine": "#7fffd4",
            "azure": "#f0ffff",
            "beige": "#f5f5dc",
            "bisque": "#ffe4c4",
            "black": "#000000",
            "blanchedalmond": "#ffebcd",
            "blue": "#0000ff",
            "blueviolet": "#8a2be2",
            "brown": "#a52a2a",
            "burlywood": "#deb887",
            "cadetblue": "#5f9ea0",
            "chartreuse": "#7fff00",
            "chocolate": "#d2691e",
            "coral": "#ff7f50",
            "cornflowerblue": "#6495ed",
            "cornsilk": "#fff8dc",
            "crimson": "#dc143c",
            "cyan": "#00ffff",
            "darkblue": "#00008b",
            "darkcyan": "#008b8b",
            "darkgoldenrod": "#b8860b",
            "darkgray": "#a9a9a9",
            "darkgreen": "#006400",
            "darkkhaki": "#bdb76b",
            "darkmagenta": "#8b008b",
            "darkolivegreen": "#556b2f",
            "darkorange": "#ff8c00",
            "darkorchid": "#9932cc",
            "darkred": "#8b0000",
            "darksalmon": "#e9967a",
            "darkseagreen": "#8fbc8f",
            "darkslateblue": "#483d8b",
            "darkslategray": "#2f4f4f",
            "darkturquoise": "#00ced1",
            "darkviolet": "#9400d3",
            "deeppink": "#ff1493",
            "deepskyblue": "#00bfff",
            "dimgray": "#696969",
            "dodgerblue": "#1e90ff",
            "firebrick": "#b22222",
            "floralwhite": "#fffaf0",
            "forestgreen": "#228b22",
            "fuchsia": "#ff00ff",
            "gainsboro": "#dcdcdc",
            "ghostwhite": "#f8f8ff",
            "gold": "#ffd700",
            "goldenrod": "#daa520",
            "gray": "#808080",
            "green": "#008000",
            "greenyellow": "#adff2f",
            "honeydew": "#f0fff0",
            "hotpink": "#ff69b4",
            "indianred ": "#cd5c5c",
            "indigo  ": "#4b0082",
            "ivory": "#fffff0",
            "khaki": "#f0e68c",
            "lavender": "#e6e6fa",
            "lavenderblush": "#fff0f5",
            "lawngreen": "#7cfc00",
            "lemonchiffon": "#fffacd",
            "lightblue": "#add8e6",
            "lightcoral": "#f08080",
            "lightcyan": "#e0ffff",
            "lightgoldenrodyellow": "#fafad2",
            "lightgray": "#d3d3d3",
            "lightgreen": "#90ee90",
            "lightpink": "#ffb6c1",
            "lightsalmon": "#ffa07a",
            "lightseagreen": "#20b2aa",
            "lightskyblue": "#87cefa",
            "lightslategray": "#778899",
            "lightsteelblue": "#b0c4de",
            "lightyellow": "#ffffe0",
            "lime": "#00ff00",
            "limegreen": "#32cd32",
            "linen": "#faf0e6",
            "magenta": "#ff00ff",
            "maroon": "#800000",
            "mediumaquamarine": "#66cdaa",
            "mediumblue": "#0000cd",
            "mediumorchid": "#ba55d3",
            "mediumpurple": "#9370db",
            "mediumseagreen": "#3cb371",
            "mediumslateblue": "#7b68ee",
            "mediumspringgreen": "#00fa9a",
            "mediumturquoise": "#48d1cc",
            "mediumvioletred": "#c71585",
            "midnightblue": "#191970",
            "mintcream": "#f5fffa",
            "mistyrose": "#ffe4e1",
            "moccasin": "#ffe4b5",
            "navajowhite": "#ffdead",
            "navy": "#000080",
            "oldlace": "#fdf5e6",
            "olive": "#808000",
            "olivedrab": "#6b8e23",
            "orange": "#ffa500",
            "orangered": "#ff4500",
            "orchid": "#da70d6",
            "palegoldenrod": "#eee8aa",
            "palegreen": "#98fb98",
            "paleturquoise": "#afeeee",
            "palevioletred": "#db7093",
            "papayawhip": "#ffefd5",
            "peachpuff": "#ffdab9",
            "peru": "#cd853f",
            "pink": "#ffc0cb",
            "plum": "#dda0dd",
            "powderblue": "#b0e0e6",
            "purple": "#800080",
            "rebeccapurple": "#663399",
            "red": "#ff0000",
            "rosybrown": "#bc8f8f",
            "royalblue": "#4169e1",
            "saddlebrown": "#8b4513",
            "salmon": "#fa8072",
            "sandybrown": "#f4a460",
            "seagreen": "#2e8b57",
            "seashell": "#fff5ee",
            "sienna": "#a0522d",
            "silver": "#c0c0c0",
            "skyblue": "#87ceeb",
            "slateblue": "#6a5acd",
            "slategray": "#708090",
            "snow": "#fffafa",
            "springgreen": "#00ff7f",
            "steelblue": "#4682b4",
            "tan": "#d2b48c",
            "teal": "#008080",
            "thistle": "#d8bfd8",
            "tomato": "#ff6347",
            "turquoise": "#40e0d0",
            "violet": "#ee82ee",
            "wheat": "#f5deb3",
            "white": "#ffffff",
            "whitesmoke": "#f5f5f5",
            "yellow": "#ffff00",
            "yellowgreen": "#9acd32"
        },
        colorListReverse: {
            "#f0f8ff": "aliceblue",
            "#faebd7": "antiquewhite",
            "#00ffff": "cyan",
            "#7fffd4": "aquamarine",
            "#f0ffff": "azure",
            "#f5f5dc": "beige",
            "#ffe4c4": "bisque",
            "#000000": "black",
            "#ffebcd": "blanchedalmond",
            "#0000ff": "blue",
            "#8a2be2": "blueviolet",
            "#a52a2a": "brown",
            "#deb887": "burlywood",
            "#5f9ea0": "cadetblue",
            "#7fff00": "chartreuse",
            "#d2691e": "chocolate",
            "#ff7f50": "coral",
            "#6495ed": "cornflowerblue",
            "#fff8dc": "cornsilk",
            "#dc143c": "crimson",
            "#00008b": "darkblue",
            "#008b8b": "darkcyan",
            "#b8860b": "darkgoldenrod",
            "#a9a9a9": "darkgray",
            "#006400": "darkgreen",
            "#bdb76b": "darkkhaki",
            "#8b008b": "darkmagenta",
            "#556b2f": "darkolivegreen",
            "#ff8c00": "darkorange",
            "#9932cc": "darkorchid",
            "#8b0000": "darkred",
            "#e9967a": "darksalmon",
            "#8fbc8f": "darkseagreen",
            "#483d8b": "darkslateblue",
            "#2f4f4f": "darkslategray",
            "#00ced1": "darkturquoise",
            "#9400d3": "darkviolet",
            "#ff1493": "deeppink",
            "#00bfff": "deepskyblue",
            "#696969": "dimgray",
            "#1e90ff": "dodgerblue",
            "#b22222": "firebrick",
            "#fffaf0": "floralwhite",
            "#228b22": "forestgreen",
            "#ff00ff": "magenta",
            "#dcdcdc": "gainsboro",
            "#f8f8ff": "ghostwhite",
            "#ffd700": "gold",
            "#daa520": "goldenrod",
            "#808080": "gray",
            "#008000": "green",
            "#adff2f": "greenyellow",
            "#f0fff0": "honeydew",
            "#ff69b4": "hotpink",
            "#cd5c5c": "indianred ",
            "#4b0082": "indigo  ",
            "#fffff0": "ivory",
            "#f0e68c": "khaki",
            "#e6e6fa": "lavender",
            "#fff0f5": "lavenderblush",
            "#7cfc00": "lawngreen",
            "#fffacd": "lemonchiffon",
            "#add8e6": "lightblue",
            "#f08080": "lightcoral",
            "#e0ffff": "lightcyan",
            "#fafad2": "lightgoldenrodyellow",
            "#d3d3d3": "lightgray",
            "#90ee90": "lightgreen",
            "#ffb6c1": "lightpink",
            "#ffa07a": "lightsalmon",
            "#20b2aa": "lightseagreen",
            "#87cefa": "lightskyblue",
            "#778899": "lightslategray",
            "#b0c4de": "lightsteelblue",
            "#ffffe0": "lightyellow",
            "#00ff00": "lime",
            "#32cd32": "limegreen",
            "#faf0e6": "linen",
            "#800000": "maroon",
            "#66cdaa": "mediumaquamarine",
            "#0000cd": "mediumblue",
            "#ba55d3": "mediumorchid",
            "#9370db": "mediumpurple",
            "#3cb371": "mediumseagreen",
            "#7b68ee": "mediumslateblue",
            "#00fa9a": "mediumspringgreen",
            "#48d1cc": "mediumturquoise",
            "#c71585": "mediumvioletred",
            "#191970": "midnightblue",
            "#f5fffa": "mintcream",
            "#ffe4e1": "mistyrose",
            "#ffe4b5": "moccasin",
            "#ffdead": "navajowhite",
            "#000080": "navy",
            "#fdf5e6": "oldlace",
            "#808000": "olive",
            "#6b8e23": "olivedrab",
            "#ffa500": "orange",
            "#ff4500": "orangered",
            "#da70d6": "orchid",
            "#eee8aa": "palegoldenrod",
            "#98fb98": "palegreen",
            "#afeeee": "paleturquoise",
            "#db7093": "palevioletred",
            "#ffefd5": "papayawhip",
            "#ffdab9": "peachpuff",
            "#cd853f": "peru",
            "#ffc0cb": "pink",
            "#dda0dd": "plum",
            "#b0e0e6": "powderblue",
            "#800080": "purple",
            "#663399": "rebeccapurple",
            "#ff0000": "red",
            "#bc8f8f": "rosybrown",
            "#4169e1": "royalblue",
            "#8b4513": "saddlebrown",
            "#fa8072": "salmon",
            "#f4a460": "sandybrown",
            "#2e8b57": "seagreen",
            "#fff5ee": "seashell",
            "#a0522d": "sienna",
            "#c0c0c0": "silver",
            "#87ceeb": "skyblue",
            "#6a5acd": "slateblue",
            "#708090": "slategray",
            "#fffafa": "snow",
            "#00ff7f": "springgreen",
            "#4682b4": "steelblue",
            "#d2b48c": "tan",
            "#008080": "teal",
            "#d8bfd8": "thistle",
            "#ff6347": "tomato",
            "#40e0d0": "turquoise",
            "#ee82ee": "violet",
            "#f5deb3": "wheat",
            "#ffffff": "white",
            "#f5f5f5": "whitesmoke",
            "#ffff00": "yellow",
            "#9acd32": "yellowgreen"
        },
        defaults: {
            animationSpeed: 50,
            animationEasing: 'swing',
            change: null,
            changeDelay: 0,
            control: 'hue',
            dataUris: true,
            defaultValue: '',
            hide: null,
            hideSpeed: 100,
            inline: false,
            letterCase: 'lowercase',
            opacity: false,
            position: 'bottom left',
            show: null,
            showSpeed: 100,
            theme: 'default',
            format: 'hex',
            showFormatSelector: false
        }
    };

    // Public methods
    $.extend($.fn, {
        minicolors: function(method, data) {

            switch(method) {

                // Destroy the control
                case 'destroy':
                    $(this).each( function() {
                        destroy($(this));
                    });
                    return $(this);

                // Hide the color picker
                case 'hide':
                    hide();
                    return $(this);

                // Get/set opacity
                case 'opacity':
                    // Getter
                    if( data === undefined ) {
                        // Getter
                        return $(this).attr('data-opacity');
                    } else {
                        // Setter
                        $(this).each( function() {
                            updateFromInput($(this).attr('data-opacity', data));
                        });
                    }
                    return $(this);

                // Get an RGB(A) object based on the current color/opacity
                case 'rgbObject':
                    return rgbObject($(this), method === 'rgbaObject');

                // Get an RGB(A) string based on the current color/opacity
                case 'rgbString':
                case 'rgbaString':
                    return rgbString($(this), method === 'rgbaString');

                // Get/set settings on the fly
                case 'settings':
                    if( data === undefined ) {
                        return $(this).data('minicolors-settings');
                    } else {
                        // Setter
                        $(this).each( function() {
                            var settings = $(this).data('minicolors-settings') || {};
                            destroy($(this));
                            $(this).minicolors($.extend(true, settings, data));
                        });
                    }
                    return $(this);

                // Show the color picker
                case 'show':
                    show( $(this).eq(0) );
                    return $(this);

                // Get/set the hex color value
                case 'value':
                    if( data === undefined ) {
                        // Getter
                        return $(this).val();
                    } else {
                        // Setter
                        $(this).each( function() {
                            updateFromInput($(this).val(data));
                        });
                    }
                    return $(this);

                // Initializes the control
                default:
                    if( method !== 'create' ) data = method;
                    $(this).each( function() {
                        init($(this), data);
                    });
                    return $(this);

            }

        }
    });

    // Initialize input elements
    function init(input, settings) {

        var minicolors = $('<div class="minicolors" />'),
            defaults = $.minicolors.defaults;

        // Do nothing if already initialized
        if( input.data('minicolors-initialized') ) return;

        // Handle settings
        settings = $.extend(true, {}, defaults, settings);

        // The wrapper
        minicolors
            .addClass('minicolors-theme-' + settings.theme)
            .toggleClass('minicolors-with-opacity', settings.opacity)
            .toggleClass('minicolors-no-data-uris', settings.dataUris !== true);

        // Custom positioning
        if( settings.position !== undefined ) {
            $.each(settings.position.split(' '), function() {
                minicolors.addClass('minicolors-position-' + this);
            });
        }

        // The input
        input
            .addClass('minicolors-input')
            .data('hex', settings.defaultValue)
            .data('minicolors-initialized', false)
            .data('minicolors-settings', settings)
            .prop('size', 7)
            .wrap(minicolors)
            .after(
                '<div class="minicolors-panel minicolors-slider-' + settings.control + '">' +
                '<div class="minicolors-slider minicolors-sprite">' +
                '<div class="minicolors-picker"></div>' +
                '</div>' +
                '<div class="minicolors-opacity-slider minicolors-sprite">' +
                '<div class="minicolors-picker"></div>' +
                '</div>' +
                '<div class="minicolors-grid minicolors-sprite">' +
                '<div class="minicolors-grid-inner"></div>' +
                '<div class="minicolors-picker"><div></div></div>' +
                '</div>' +
                '</div>'
            );


        // The format selector
        if ( settings.showFormatSelector ) {
            var curFormat = input.minicolors("settings").format;
            var isHexActive = "hex" === curFormat ? "label-primary": "";
            var isRgbActive = "rgb" === curFormat ? "label-primary": "";
            var isRgbaActive = "rgba" === curFormat ? "label-primary": "";
            input.after(
                '<span class="minicolors-formats">' +
                '<span data-format="hex" class="label label-default hvr-grow ' + isHexActive + '">HEX</span>' +
                '<span data-format="rgb" class="label label-default hvr-grow ' + isRgbActive + '">RGB</span>' +
                '<span data-format="rgba" class="label label-default hvr-grow ' + isRgbaActive + '">RGBA</span>' +
                '</span>'
            );
            input.next('.minicolors-formats').on('click', ".label", function(event) {
                var $label = $(event.currentTarget);

                input.attr("data-format", $label.attr("data-format"));

                var inputValues = getInputValue(input);

                setInputValue(input, inputValues);

                $label.parent().find(".label").removeClass("label-primary");
                $label.addClass("label-primary");
            });
        }

        // The swatch
        if( !settings.inline ) {
            input.after('<span class="minicolors-swatch minicolors-sprite"><span class="minicolors-swatch-color"></span></span>');
            input.next('.minicolors-swatch').on('click', function(event) {
                event.preventDefault();
                input.focus();
            });
        }

        // Prevent text selection in IE
        input.parent().find('.minicolors-panel').on('selectstart', function() { return false; }).end();

        // Inline controls
        if( settings.inline ) input.parent().addClass('minicolors-inline');

        updateFromInput(input, false);

        input.data('minicolors-initialized', true);

    }

    // Returns the input back to its original state
    function destroy(input) {

        var minicolors = input.parent();

        // Revert the input element
        input
            .removeData('minicolors-initialized')
            .removeData('minicolors-settings')
            .removeProp('size')
            .removeClass('minicolors-input');

        // Remove the wrap and destroy whatever remains
        minicolors.before(input).remove();

    }

    // Shows the specified dropdown panel
    function show(input) {

        var minicolors = input.parent(),
            panel = minicolors.find('.minicolors-panel'),
            settings = input.data('minicolors-settings');

        // Do nothing if uninitialized, disabled, inline, or already open
        if( !input.data('minicolors-initialized') ||
            input.prop('disabled') ||
            minicolors.hasClass('minicolors-inline') ||
            minicolors.hasClass('minicolors-focus')
        ) return;

        hide();

        minicolors.addClass('minicolors-focus');
        panel
            .stop(true, true)
            .fadeIn(settings.showSpeed, function() {
                if( settings.show ) settings.show.call(input.get(0));
            });

    }

    // Hides all dropdown panels
    function hide() {

        $('.minicolors-focus').each( function() {

            var minicolors = $(this),
                input = minicolors.find('.minicolors-input'),
                panel = minicolors.find('.minicolors-panel'),
                settings = input.data('minicolors-settings');

            panel.fadeOut(settings.hideSpeed, function() {
                if( settings.hide ) settings.hide.call(input.get(0));
                minicolors.removeClass('minicolors-focus');
            });

        });
    }

    // Moves the selected picker
    function move(target, event, animate) {

        var input = target.parents('.minicolors').find('.minicolors-input'),
            settings = input.data('minicolors-settings'),
            picker = target.find('[class$=-picker]'),
            offsetX = target.offset().left,
            offsetY = target.offset().top,
            x = Math.round(event.pageX - offsetX),
            y = Math.round(event.pageY - offsetY),
            duration = animate ? settings.animationSpeed : 0,
            wx, wy, r, phi;

        // Touch support
        if( event.originalEvent.changedTouches ) {
            x = event.originalEvent.changedTouches[0].pageX - offsetX;
            y = event.originalEvent.changedTouches[0].pageY - offsetY;
        }

        // Constrain picker to its container
        if( x < 0 ) x = 0;
        if( y < 0 ) y = 0;
        if( x > target.width() ) x = target.width();
        if( y > target.height() ) y = target.height();

        // Constrain color wheel values to the wheel
        if( target.parent().is('.minicolors-slider-wheel') && picker.parent().is('.minicolors-grid') ) {
            wx = 75 - x;
            wy = 75 - y;
            r = Math.sqrt(wx * wx + wy * wy);
            phi = Math.atan2(wy, wx);
            if( phi < 0 ) phi += Math.PI * 2;
            if( r > 75 ) {
                r = 75;
                x = 75 - (75 * Math.cos(phi));
                y = 75 - (75 * Math.sin(phi));
            }
            x = Math.round(x);
            y = Math.round(y);
        }

        // Move the picker
        if( target.is('.minicolors-grid') ) {
            picker
                .stop(true)
                .animate({
                    top: y + 'px',
                    left: x + 'px'
                }, duration, settings.animationEasing, function() {
                    updateFromControl(input, target);
                });
        } else {
            picker
                .stop(true)
                .animate({
                    top: y + 'px'
                }, duration, settings.animationEasing, function() {
                    updateFromControl(input, target);
                });
        }

    }

    // Sets the input based on the color picker values
    function updateFromControl(input, target) {

        function getCoords(picker, container) {

            var left, top;
            if( !picker.length || !container ) return null;
            left = picker.offset().left;
            top = picker.offset().top;

            return {
                x: left - container.offset().left + (picker.outerWidth() / 2),
                y: top - container.offset().top + (picker.outerHeight() / 2)
            };

        }

        var hue, saturation, brightness, x, y, r, phi,

            inputValues = getInputValue(input),
            hex = inputValues.hex,
            opacity = input.attr('data-opacity'),
        // Helpful references
            minicolors = input.parent(),
            settings = input.data('minicolors-settings'),
            swatch = minicolors.find('.minicolors-swatch'),
            $formats = minicolors.find('.minicolors-formats'),

        // Panel objects
            grid = minicolors.find('.minicolors-grid'),
            slider = minicolors.find('.minicolors-slider'),
            opacitySlider = minicolors.find('.minicolors-opacity-slider'),

        // Picker objects
            gridPicker = grid.find('[class$=-picker]'),
            sliderPicker = slider.find('[class$=-picker]'),
            opacityPicker = opacitySlider.find('[class$=-picker]'),

        // Picker positions
            gridPos = getCoords(gridPicker, grid),
            sliderPos = getCoords(sliderPicker, slider),
            opacityPos = getCoords(opacityPicker, opacitySlider);

        // Handle colors
        if( target.is('.minicolors-grid, .minicolors-slider') ) {
            // Determine HSB values
            switch(settings.control) {

                case 'wheel':
                    // Calculate hue, saturation, and brightness
                    x = (grid.width() / 2) - gridPos.x;
                    y = (grid.height() / 2) - gridPos.y;
                    r = Math.sqrt(x * x + y * y);
                    phi = Math.atan2(y, x);
                    if( phi < 0 ) phi += Math.PI * 2;
                    if( r > 75 ) {
                        r = 75;
                        gridPos.x = 69 - (75 * Math.cos(phi));
                        gridPos.y = 69 - (75 * Math.sin(phi));
                    }
                    saturation = keepWithin(r / 0.75, 0, 100);
                    hue = keepWithin(phi * 180 / Math.PI, 0, 360);
                    brightness = keepWithin(100 - Math.floor(sliderPos.y * (100 / slider.height())), 0, 100);
                    inputValues.hex = hsb2hex({
                        h: hue,
                        s: saturation,
                        b: brightness
                    });

                    // Update UI
                    slider.css('backgroundColor', hsb2hex({ h: hue, s: saturation, b: 100 }));
                    break;

                case 'saturation':
                    // Calculate hue, saturation, and brightness
                    hue = keepWithin(parseInt(gridPos.x * (360 / grid.width()), 10), 0, 360);
                    saturation = keepWithin(100 - Math.floor(sliderPos.y * (100 / slider.height())), 0, 100);
                    brightness = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
                    inputValues.hex = hsb2hex({
                        h: hue,
                        s: saturation,
                        b: brightness
                    });

                    // Update UI
                    slider.css('backgroundColor', hsb2hex({ h: hue, s: 100, b: brightness }));
                    minicolors.find('.minicolors-grid-inner').css('opacity', saturation / 100);
                    break;

                case 'brightness':
                    // Calculate hue, saturation, and brightness
                    hue = keepWithin(parseInt(gridPos.x * (360 / grid.width()), 10), 0, 360);
                    saturation = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
                    brightness = keepWithin(100 - Math.floor(sliderPos.y * (100 / slider.height())), 0, 100);
                    inputValues.hex = hsb2hex({
                        h: hue,
                        s: saturation,
                        b: brightness
                    });

                    // Update UI
                    slider.css('backgroundColor', hsb2hex({ h: hue, s: saturation, b: 100 }));
                    minicolors.find('.minicolors-grid-inner').css('opacity', 1 - (brightness / 100));
                    break;

                default:
                    // Calculate hue, saturation, and brightness
                    hue = keepWithin(360 - parseInt(sliderPos.y * (360 / slider.height()), 10), 0, 360);
                    saturation = keepWithin(Math.floor(gridPos.x * (100 / grid.width())), 0, 100);
                    brightness = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
                    inputValues.hex = hsb2hex({
                        h: hue,
                        s: saturation,
                        b: brightness
                    });

                    // Update UI
                    grid.css('backgroundColor', hsb2hex({ h: hue, s: 100, b: 100 }));
                    break;

            }

            if (Object.keys($.minicolors.colorListReverse).indexOf(inputValues.hex.toLowerCase()) !== -1) {
                inputValues.hex = $.minicolors.colorListReverse[inputValues.hex];
            }

            // Adjust case

            setInputValue(input, inputValues);
        }

        // Handle opacity
        if( target.is('.minicolors-opacity-slider') ) {

            if( settings.opacity ) {
                inputValues.opacity = parseFloat(1 - (opacityPos.y / opacitySlider.height())).toFixed(2);
                input.attr('data-opacity', inputValues.opacity);
                setInputValue(input, inputValues);
            }

        }

        // Set swatch color
        swatch.find('SPAN').css({
            backgroundColor: hex,
            opacity: opacity
        });

        opacitySlider.css({
            backgroundColor: hex
        });


        // Handle change event
        doChange(input, hex, opacity, inputValues.format);

    }

    // Sets the color picker values from the input
    function updateFromInput(input, preserveInputValue) {

        if ( ! input.val() ) {
            return false;
        }

        var hex,
            hsb,
            opacity,
            x, y, r, phi,

        // Helpful references
            minicolors = input.parent(),
            settings = input.data('minicolors-settings'),
            swatch = minicolors.find('.minicolors-swatch'),
            $formats = minicolors.find('.minicolors-formats'),

        // Panel objects
            grid = minicolors.find('.minicolors-grid'),
            slider = minicolors.find('.minicolors-slider'),
            opacitySlider = minicolors.find('.minicolors-opacity-slider'),

        // Picker objects
            gridPicker = grid.find('[class$=-picker]'),
            sliderPicker = slider.find('[class$=-picker]'),
            opacityPicker = opacitySlider.find('[class$=-picker]');

        var inputValues = parseInput(input);

        input.attr("data-opacity", inputValues.opacity);

        // Determine hex/HSB values
        inputValues.hex = convertCase(inputValues.hex, settings.letterCase);
        if( ! inputValues.hex ) {
            inputValues.hex = convertCase(parseHex(settings.defaultValue, true), settings.letterCase);
        }
        hsb = hex2hsb(inputValues.hex);

        // Update input value
        if( ! preserveInputValue ) {
            setInputValue(input, inputValues);
        }

        // Determine opacity value
        if( settings.opacity ) {
            // Get from data-opacity attribute and keep within 0-1 range
            opacity = input.attr('data-opacity') === '' ? 1 : keepWithin(parseFloat(input.attr('data-opacity')).toFixed(2), 0, 1);
            if( isNaN(opacity) ) opacity = 1;
            input.attr('data-opacity', opacity);
            swatch.find('SPAN').css('opacity', opacity);

            // Set opacity picker position
            y = keepWithin(opacitySlider.height() - (opacitySlider.height() * opacity), 0, opacitySlider.height());
            opacityPicker.css('top', y + 'px');
        }

        // Update swatch
        swatch.find('SPAN').css('backgroundColor', inputValues.hex);

        // Determine picker locations
        switch(settings.control) {

            case 'wheel':
                // Set grid position
                r = keepWithin(Math.ceil(hsb.s * 0.75), 0, grid.height() / 2);
                phi = hsb.h * Math.PI / 180;
                x = keepWithin(75 - Math.cos(phi) * r, 0, grid.width());
                y = keepWithin(75 - Math.sin(phi) * r, 0, grid.height());
                gridPicker.css({
                    top: y + 'px',
                    left: x + 'px'
                });

                // Set slider position
                y = 150 - (hsb.b / (100 / grid.height()));
                if( hex === '' ) y = 0;
                sliderPicker.css('top', y + 'px');

                // Update panel color
                slider.css('backgroundColor', hsb2hex({ h: hsb.h, s: hsb.s, b: 100 }));
                break;

            case 'saturation':
                // Set grid position
                x = keepWithin((5 * hsb.h) / 12, 0, 150);
                y = keepWithin(grid.height() - Math.ceil(hsb.b / (100 / grid.height())), 0, grid.height());
                gridPicker.css({
                    top: y + 'px',
                    left: x + 'px'
                });

                // Set slider position
                y = keepWithin(slider.height() - (hsb.s * (slider.height() / 100)), 0, slider.height());
                sliderPicker.css('top', y + 'px');

                // Update UI
                slider.css('backgroundColor', hsb2hex({ h: hsb.h, s: 100, b: hsb.b }));
                minicolors.find('.minicolors-grid-inner').css('opacity', hsb.s / 100);
                break;

            case 'brightness':
                // Set grid position
                x = keepWithin((5 * hsb.h) / 12, 0, 150);
                y = keepWithin(grid.height() - Math.ceil(hsb.s / (100 / grid.height())), 0, grid.height());
                gridPicker.css({
                    top: y + 'px',
                    left: x + 'px'
                });

                // Set slider position
                y = keepWithin(slider.height() - (hsb.b * (slider.height() / 100)), 0, slider.height());
                sliderPicker.css('top', y + 'px');

                // Update UI
                slider.css('backgroundColor', hsb2hex({ h: hsb.h, s: hsb.s, b: 100 }));
                minicolors.find('.minicolors-grid-inner').css('opacity', 1 - (hsb.b / 100));
                break;

            default:
                // Set grid position
                x = keepWithin(Math.ceil(hsb.s / (100 / grid.width())), 0, grid.width());
                y = keepWithin(grid.height() - Math.ceil(hsb.b / (100 / grid.height())), 0, grid.height());
                gridPicker.css({
                    top: y + 'px',
                    left: x + 'px'
                });

                // Set slider position
                y = keepWithin(slider.height() - (hsb.h / (360 / slider.height())), 0, slider.height());
                sliderPicker.css('top', y + 'px');

                // Update panel color
                grid.css('backgroundColor', hsb2hex({ h: hsb.h, s: 100, b: 100 }));
                break;

        }

        // Fire change event, but only if minicolors is fully initialized
        if( input.data('minicolors-initialized') ) {
            doChange(input, inputValues.hex, opacity, inputValues.format);
        }



    }

    // Runs the change and changeDelay callbacks
    function doChange(input, hex, opacity, format) {

        var settings = input.data('minicolors-settings'),
            lastChange = input.data('minicolors-lastChange');

        // Only run if it actually changed
        if(
            ! lastChange
            || lastChange.hex !== hex
            || lastChange.opacity !== opacity
            || lastChange.format !== format
        ) {

            // Remember last-changed value
            input.data('minicolors-lastChange', {
                hex: hex,
                opacity: opacity,
                format: format
            });

            // Fire change event
            if( settings.change ) {
                if( settings.changeDelay ) {
                    // Call after a delay
                    clearTimeout(input.data('minicolors-changeTimeout'));
                    input.data('minicolors-changeTimeout', setTimeout( function() {
                        settings.change.call(input.get(0), hex, opacity);
                    }, settings.changeDelay));
                } else {
                    // Call immediately
                    settings.change.call(input.get(0), hex, opacity);
                }
            }
            input.trigger('change').trigger('input');

            var $formats = input.parent().find(".minicolors-formats");
            $formats.find(".label").removeClass("label-primary");
            $formats.find(".label[data-format=" + format + "]").addClass("label-primary");
        }

    }

    // Generates an RGB(A) object based on the input's value
    function rgbObject(hex) {
        var rgb = hex2rgb(hex),
            opacity = $(input).attr('data-opacity');
        if( !rgb ) return null;
        if( opacity !== undefined ) $.extend(rgb, { a: parseFloat(opacity) });
        return rgb;
    }

    // Genearates an RGB(A) string based on the input's value
    function rgbString(hex, opacity) {
        var rgb = hex2rgb(hex);

        if ( ! rgb ) {
            return null;
        }
        if ( opacity ) {
            opacity = parseFloat(opacity);
            if (isNaN(opacity)) {
                opacity = 1;
            }

            return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + opacity + ')';
        }
        else {
            return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
        }
    }

    // Converts to the letter case specified in settings
    function convertCase(string, letterCase) {

        if (string) {
            string = letterCase === 'uppercase' ? string.toUpperCase() : string.toLowerCase();
        }

        return string;
    }

    function parseInput($input) {
        var string = $input.val().toLowerCase();
        var opacity = $input.attr("data-opacity");
        var format = 'hex';

        if (string.indexOf("rgba") === 0 && string.substr(-1) === ")") {
            var rgb = string.substring(5, string.length-1)
                .replace(/ /g, '')
                .split(',');

            string = rgb2hex({
                r: parseInt(rgb[0]),
                g: parseInt(rgb[1]),
                b: parseInt(rgb[2])
            });

            opacity = parseFloat(rgb[3]);
            if (isNaN(opacity)) {
                opacity = 1;
            }

            format = 'rgba';
        }
        else if (string.indexOf("rgb") === 0 && string.substr(-1) === ")") {
            var rgb = string.substring(4, string.length-1)
                .replace(/ /g, '')
                .split(',');

            string = rgb2hex({
                r: parseInt(rgb[0]),
                g: parseInt(rgb[1]),
                b: parseInt(rgb[2])
            });
            format = 'rgb';
        }
        else {
            string = parseHex(string, true);
        }

        string = string.toLowerCase();

        if (Object.keys($.minicolors.colorList).indexOf(string) !== -1) {
            string = $.minicolors.colorListReverse[string];
        }


        return {
            hex: string,
            opacity: opacity,
            format: format
        };
    }

    // Parses a string and returns a valid hex string when possible
    function parseHex(string, expand) {
        string = string.replace(/[^A-F0-9]/ig, '');
        if( string.length !== 3 && string.length !== 6 ) return '';
        if( string.length === 3 && expand ) {
            string = string[0] + string[0] + string[1] + string[1] + string[2] + string[2];
        }
        string = '#' + string;

        return string;
    }

    // Keeps value within min and max
    function keepWithin(value, min, max) {
        if( value < min ) value = min;
        if( value > max ) value = max;
        return value;
    }

    // Converts an HSB object to an RGB object
    function hsb2rgb(hsb) {
        var rgb = {};
        var h = Math.round(hsb.h);
        var s = Math.round(hsb.s * 255 / 100);
        var v = Math.round(hsb.b * 255 / 100);
        if(s === 0) {
            rgb.r = rgb.g = rgb.b = v;
        } else {
            var t1 = v;
            var t2 = (255 - s) * v / 255;
            var t3 = (t1 - t2) * (h % 60) / 60;
            if( h === 360 ) h = 0;
            if( h < 60 ) { rgb.r = t1; rgb.b = t2; rgb.g = t2 + t3; }
            else if( h < 120 ) {rgb.g = t1; rgb.b = t2; rgb.r = t1 - t3; }
            else if( h < 180 ) {rgb.g = t1; rgb.r = t2; rgb.b = t2 + t3; }
            else if( h < 240 ) {rgb.b = t1; rgb.r = t2; rgb.g = t1 - t3; }
            else if( h < 300 ) {rgb.b = t1; rgb.g = t2; rgb.r = t2 + t3; }
            else if( h < 360 ) {rgb.r = t1; rgb.g = t2; rgb.b = t1 - t3; }
            else { rgb.r = 0; rgb.g = 0; rgb.b = 0; }
        }
        return {
            r: Math.round(rgb.r),
            g: Math.round(rgb.g),
            b: Math.round(rgb.b)
        };
    }

    // Converts an RGB object to a hex string
    function rgb2hex(rgb) {
        var hex = [
            rgb.r.toString(16),
            rgb.g.toString(16),
            rgb.b.toString(16)
        ];
        $.each(hex, function(nr, val) {
            if (val.length === 1) hex[nr] = '0' + val;
        });
        return '#' + hex.join('');
    }

    // Converts an HSB object to a hex string
    function hsb2hex(hsb) {
        return rgb2hex(hsb2rgb(hsb));
    }

    // Converts a hex string to an HSB object
    function hex2hsb(hex) {
        var hsb = rgb2hsb(hex2rgb(hex));
        if( hsb.s === 0 ) hsb.h = 360;
        return hsb;
    }

    // Converts an RGB object to an HSB object
    function rgb2hsb(rgb) {
        var hsb = { h: 0, s: 0, b: 0 };
        var min = Math.min(rgb.r, rgb.g, rgb.b);
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var delta = max - min;
        hsb.b = max;
        hsb.s = max !== 0 ? 255 * delta / max : 0;
        if( hsb.s !== 0 ) {
            if( rgb.r === max ) {
                hsb.h = (rgb.g - rgb.b) / delta;
            } else if( rgb.g === max ) {
                hsb.h = 2 + (rgb.b - rgb.r) / delta;
            } else {
                hsb.h = 4 + (rgb.r - rgb.g) / delta;
            }
        } else {
            hsb.h = -1;
        }
        hsb.h *= 60;
        if( hsb.h < 0 ) {
            hsb.h += 360;
        }
        hsb.s *= 100/255;
        hsb.b *= 100/255;
        return hsb;
    }

    // Converts a hex string to an RGB object
    function hex2rgb(hex) {
        if (hex && Object.keys($.minicolors.colorList).indexOf(hex.toLowerCase()) !== -1) {
            hex = $.minicolors.colorList[hex.toLowerCase()];
        }

        hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
        return {
            /* jshint ignore:start */
            r: hex >> 16,
            g: (hex & 0x00FF00) >> 8,
            b: (hex & 0x0000FF)
            /* jshint ignore:end */
        };
    }

    function getInputValue($input) {

        return {
            hex: $input.attr("data-hex"),
            opacity: $input.attr("data-opacity"),
            format: $input.attr("data-format")
        };
    }

    function setInputValue($input, inputValues) {
        var settings = $input.data('minicolors-settings');

        var value = inputValues.hex;

        switch (inputValues.format) {
            case "rgb":
                value = rgbString(inputValues.hex);
                break;

            case "rgba":
                value = rgbString(inputValues.hex, inputValues.opacity);
                break;

            case "hex":
            default:
                if (Object.keys($.minicolors.colorListReverse).indexOf(inputValues.hex.toLowerCase()) !== -1) {
                    value = $.minicolors.colorListReverse[inputValues.hex];
                }

                break;
        }



        $input.attr("data-hex", inputValues.hex);
        $input.attr("data-format", inputValues.format);
        $input.val(convertCase(value, inputValues.format === "hex" ? 'uppercase' : 'lowercase'));
    }

    // Handle events
    $(document)
        // Hide on clicks outside of the control
        .on('mousedown.minicolors touchstart.minicolors', function(event) {
            if( ! $(event.target).parents().add(event.target).hasClass('minicolors') ) {
                hide();
            }
        })
        // Start moving
        .on('mousedown.minicolors touchstart.minicolors', '.minicolors-grid, .minicolors-slider, .minicolors-opacity-slider', function(event) {
            var target = $(this);
            event.preventDefault();
            $(document).data('minicolors-target', target);
            move(target, event, true);
        })
        // Move pickers
        .on('mousemove.minicolors touchmove.minicolors', function(event) {
            var target = $(document).data('minicolors-target');
            if( target ) move(target, event);
        })
        // Stop moving
        .on('mouseup.minicolors touchend.minicolors', function() {
            $(this).removeData('minicolors-target');
        })
        // Show panel when swatch is clicked
        .on('mousedown.minicolors touchstart.minicolors', '.minicolors-swatch', function(event) {
            var input = $(this).parent().find('.minicolors-input');
            event.preventDefault();
            show(input);
        })
        // Show on focus
        .on('focus.minicolors', '.minicolors-input', function() {
            var input = $(this);
            if( !input.data('minicolors-initialized') ) return;
            show(input);
        })
        // Fix hex on blur
        .on('blur.minicolors', '.minicolors-input', function() {
            var input = $(this);
                //settings = input.data('minicolors-settings');
            if( ! input.data('minicolors-initialized') ) {
                return;
            }

/*
            var inputValues = parseInput(input);
debugger;


            setInputValue(input, inputValues);
*/
        })
        // Handle keypresses
        .on('keydown.minicolors', '.minicolors-input', function(event) {
            var input = $(this);
            if( !input.data('minicolors-initialized') ) return;
            switch(event.keyCode) {
                case 9: // tab
                case 13: // enter
                    var inputValues = parseInput(input);
                    setInputValue(input, inputValues);
                    //hide();
                    //break;
                case 27: // esc
                    hide();
                    break;
            }
        })
        // Update on keyup
        .on('keyup.minicolors', '.minicolors-input', function() {
            var input = $(this);
            if( !input.data('minicolors-initialized') ) return;
            updateFromInput(input, true);
        })
        // Update on paste
        .on('paste.minicolors', '.minicolors-input', function() {
            var input = $(this);
            if( !input.data('minicolors-initialized') ) return;
            setTimeout( function() {
                updateFromInput(input, true);
            }, 1);
        });

}));