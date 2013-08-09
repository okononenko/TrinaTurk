/**
 * Speroteck_fadeScript Package is a demo extension
 *
 * @category    Speroteck
 * @package     Speroteck_fadeScript
 * @copyright   Copyright (c) http://www.speroteck.com
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

/**
 * Speroteck_fadeScript adding animation and positioning elements on the page
 *
 * @category    Speroteck
 * @package     Speroteck_fadeScript
 * @author      Speroteck team (dev@speroteck.com)
 */


(function ($) {
    $(document).ready(function () {

        //-------------------Main images----------------------

        //Positioning .info in the center of fade layer
        $('.info, .thumb_info').each(function(){
            var position = $(this);
            var backgroundImage = (position.parent()).prev().height();
            position.css('margin-top', (backgroundImage / 2) - position.outerHeight(true) / 2);
        });

        //Positioning .content_card in the center of background
        $('.content_card').width($('.content_card_background').width());

        $('.content_card_bg').each(function(){
            var content_layer = $(this);
            var background = (content_layer.parent()).prev().height();
            content_layer.css("margin-top", (-(background / 2) -
                (content_layer.outerHeight(true) / 2)) - 3);
        });

        //Positioning .fade_layer over the image
        $('.fade_layer').each(function(){
            var $this = $(this);
            var image = $this.prev();
            $this.width(image.width());
            $this.height(image.height());
            $this.css('margin-top', -(image.height() + 3));
        });

        //------animation------

        //when mouseOver animate element
        $('.fade_layer').mouseover(function() {
            $(this).fadeTo(500, 0.5);
            $(this).clearQueue();
        });

        //when mouseLeave animate element
        $('.fade_layer').mouseleave(function () {
            $(this).fadeTo(500, 0.0);
            $(this).clearQueue();
        });

        //-------------------Products----------------------

        //Positioning .info in the center of fade layer
        $('.product_info').each(function(){
            var position = $(this);
            var backgroundImage = (position.parent()).prev().height();
            position.css('margin-top', (backgroundImage / 2) - position.outerHeight(true) / 2);
        });

        //Positioning .fade_layer over the image
        $('.product_fade').each(function(){
            var $this = $(this);
            var image = $this.prev();
            $this.width(image.width());
            $this.height(image.height());
            $this.css('margin-top', -(image.height()));
        });

        //------animation------

        //when mouseOver animate element
        $('.product_fade').mouseover(function() {
            $(this).fadeTo(500, 1.0);
            $(this).clearQueue();
        });

        //when mouseLeave animate element
        $('.product_fade').mouseleave(function () {
            $(this).fadeTo(500, 0.0);
            $(this).clearQueue();
        });
    });
})(jQuery);
    
