'use strict'; 

$j(document).ready( function() {
 
	

    var width = 100,
        perfData = window.performance.timing, 
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = ((EstimatedTime/1000)%50) * 100


    // Percentage Increment Animation
    var PercentageID = $j(".percentage"),
            start = 0,
            end = 100,
            durataion = time;
            animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

        var range = end - start,
          current = start,
          increment = end > start? 1 : -1,
          stepTime = Math.abs(Math.floor(duration / range)),
          obj = $j(id);


        var timer = setInterval(function() {
            current += increment;
            $j(obj).text(current);
          //obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    

    
	setTimeout(function(){
        $j('.preloader').fadeOut();
        
        $j('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
            $j(this).removeClass("visible closing opening").dequeue();
        });
        
	}, time);
		
    


   // FADE OUT EFFECT WHEN CLICK A LINK
    $j(document).on("click", "a:not(.lightbox)", function () {
        var newUrl = $j(this).attr("href");
        if (!newUrl || newUrl[0] === "#") {
            location.hash = newUrl;
            return;
        }
        $j("html").fadeOut(function () {
            location = newUrl;
        });
        return false;
    });
    

    var paget = $j(".page-title .title").text();

    $j( ".page-title").append("<span></span>");
    $j( ".page-title span").append(paget);


    
    //posts page hover 
    $j('.blog-post .blog-link').hover(function(){
        $j(this).parent('.content-outter').parent('.blog-post').toggleClass('mousef');
        $j(this).parent('.blog-post').toggleClass('mousef');
    });
 
});  




$j(window).load( function() {
 

function smokeeffect () { 
    var modalTrigger = $j('.nav-icon'),
        transitionLayer = $j('.cd-transition-layer'),
        transitionBackground = transitionLayer.children(),
        modalWindow = $j('.full-menu');

    var frameProportion = 1.78, //png frame aspect ratio
        frames = 25, //number of png frames
        resize = false;

    //set transitionBackground dimentions
    setLayerDimensions();
    $j(window).on('resize', function(){
        if( !resize ) {
            resize = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
        }
    });

    //open modal window
    modalTrigger.on('click', function(event){   
        event.preventDefault();
        transitionLayer.addClass('visible opening');
        var delay = ( $j('.no-cssanimations').length > 0 ) ? 0 : 600;
        setTimeout(function(){
            modalWindow.addClass('visible');
        }, delay);
    });

    //close modal window
    modalWindow.on('click', '.modal-close', function(event){
        event.preventDefault();
        transitionLayer.addClass('closing');
        modalWindow.removeClass('visible');
        transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
            transitionLayer.removeClass('closing opening visible');
            transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
        });
    });

    function setLayerDimensions() {
        var windowWidth = $j(window).width(),
            windowHeight = $j(window).height(),
            layerHeight, layerWidth;

        if( windowWidth/windowHeight > frameProportion ) {
            layerWidth = windowWidth;
            layerHeight = layerWidth/frameProportion;
        } else {
            layerHeight = windowHeight*1.2;
            layerWidth = layerHeight*frameProportion;
        }

        transitionBackground.css({
            'width': layerWidth*frames+'px',
            'height': layerHeight+'px',
        });

        resize = false;
    }

}
smokeeffect()

 
    
/*--------------------------------------------------
 Hero Section Height
---------------------------------------------------*/	
     function homeh() {
        var hometext = $j('.main')

        hometext.css({
            "height": $j(window).height() + "px"
        });
    }
    homeh();
    $j(window).resize(homeh);


    $j( ".page-menu li:not(.social) a, .portfolio_filter ul li a").append( "<span></span>" );

    $j('.nav-icon').on("click", function(){
            $j(this).toggleClass('modal-close');
    });
 
 
     
}); 