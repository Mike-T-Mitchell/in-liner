/*global console, jQuery*/
(function ($) {
    /*
        Title: HTML In-Liner for E-mail
        Purpose: read all styles within the <style> tags and directly inline styles via JS
        Model:
            selectorStyles = [
                {
                    'p.1': [
                        {'color': 'green'},
                        {'background': 'gold'}
                    ]
                },
                {
                    ...
                }
            ];
     */
    'use strict';
    var Inliner = (function () {
        var styles = '',
            selectorStyles = [],
            selector = '',
            j;

        function traverse(o) {
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    if (o[i] !== null && (!$.isNumeric(i)) && typeof o[i] === 'object') {
                        // set selector
                        selector = i;
                    }
                    if (o[i] !== null && (!$.isNumeric(i)) && typeof o[i] === 'string') {
                        // set styles
                        $(selector).css(i, o[i]);
                    }
                    if (o[i] !== null && typeof o[i] === 'object') {
                        //going on step down in the object tree
                        traverse(o[i]);
                    }
                }
            }
        }

        function applyStyles() {
            // loop through selectorStyles and use JS to inline the styles on your content
            if (selectorStyles.length > 0) {
                for (j = 0; j < selectorStyles.length; j += 1) {
                    traverse(selectorStyles[j]);
                }
                // remove style tags from dom
                $('style').remove();
            }
        }

        function createModel() {
            // loop through each declaration
            styles = $('#target').find('style').text().split("}");
            $.each(styles, function (index, elementType) {
                // split on { which will now separate your style selector from declarations
                var cssPair = $.trim(elementType).split("{"),
                    cssSelector = '',
                    cssDeclarations = '',
                    obj = {};
                // parse out selector; first element in our new array
                if (cssPair.length === 2) {
                    cssSelector = $.trim(cssPair[0]);
                    // store selector as key and individual declarations as your values
                    obj[cssSelector] = [];
                    // split declarations
                    cssDeclarations = $.trim(cssPair[1]).split(";");
                    // loop through declarations
                    $.each(cssDeclarations, function (i, dec) {
                        var props = {},
                            splits = [];
                        dec = $.trim(dec);
                        if (dec.length > 0) {
                            // split this into key/value or style/declaration pairs
                            splits = dec.split(':');
                            if (splits.length === 2) {
                                // trim whitespace
                                splits[0] = $.trim(splits[0]);
                                splits[1] = $.trim(splits[1]);
                                // assign key/value pairs
                                props[splits[0]] = splits[1];
                                // pass it to parent object literal
                                obj[cssSelector].push(props);
                            }
                        }
                    });
                    // populate parent object literal
                    selectorStyles.push(obj);
                }
            });

            applyStyles();
        }


        return {
            init: function() {
                $('.fpSubmitButton').on('click', function() {
                    // $('.overlay').fadeIn();

                    var originalCode = $.trim($('#original').val());
                    $('#target').html(originalCode);

                    createModel();

                    var parsed = $.trim($('#target').html());
                    $('#inlined').val(parsed);

                    $('#copy_button').clipboard({
                        path: 'jquery.clipboard.swf',
                        copy: function() {
                            $('#copy_button').on('click', function() {
                                // change button text to read 'copied.'
                                $('#copy_button').val('Copied.');
                                //change the button text back after 3 seconds
                                setTimeout(function(){
                                    $('#copy_button').val('Copy HTML.');
                                }, 3000);
                                //alert("In-lined HTML copied to clipboard.");
                            });
                            return $('#inlined').val();
                        }

                    });

                    // $('.overlay').fadeOut();
                });

                // clear both fields
                $('#clear_button').on('click', function() {
                    $('#original').val('');
                    $('#inlined').val('');
                });
            }
        };
    }());

    $(function () {
        Inliner.init();
    });
}(jQuery));


