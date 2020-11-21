/*-------------------------
スクロールして途中で固定
--------------------------*/
 $(window).on("load scroll",function(){
    let $sideBar = $(" .side-bar"),
				$sideBox = $(".side-box"),
        $distance = $sideBar.offset().top,
        $scrollVal = $(window).scrollTop();

	console.log('位置'+$distance);
	console.log('高さ'+$scrollVal);
	/* ブラウザに映っているエリアがside-barのTopを超えたら */
    if($scrollVal>$distance){
        $sideBox.css("margin-top",$scrollVal-$distance);
        console.log('Fixed');
    }else{
        $sideBox.css("margin-top", 0);
        console.log('static');
    }
});



$(".header-menu").on("touchstart", function(){
	var display = getComputedStyle(document.documentElement).getPropertyValue('--display-menu');

	$(this).toggleClass("active");

	if(display == "block"){
		document.documentElement.style.setProperty('--display-menu',"none");
	}else{
		document.documentElement.style.setProperty('--display-menu',"block");
	}


});






//bxslider
$(document).ready(function() {
	$('.bxslider').bxSlider({
		mode: 'fade',
		speed: 1000,
		pause: 3000,
		auto: true,
		pager: true,
		controls: false,
		touchEnabled: true,
    infiniteLoop: true,
    hideControlOnEnd: false
	});

	// 画面リサイズ時にスライド幅を再設定
	$(window).on('resize', function(){
		var windowWidth = $(window).width();
		$('.bxslider li').width(windowWidth)
	});
});
