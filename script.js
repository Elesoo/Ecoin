$(document).ready(function(){
	var point = 0,
		level_curs = 0,
		point_curs = 9,
		point_curs_active = false,


		level_video = 0,
		point_video = 15,
		point_video_active = false,

		level_stay = 0;
		point_stay = 30;
		point_stay_active = false;

	$("#curs").text("Уровень:"+ level_curs +" До следующего уровня "+ point_curs);
	$("#curs").text("Уровень:"+ level_video +" До следующего уровня "+ point_video);
	$("#stay").text("Уровень: 0");


	$(".button").on("click",function(){
		point+=30;
		console.log(point);
		$(".point").text(point);
		console.log(point_curs);
	});

	$("#curs").on("click",function(){

		while (point >= point_curs){
			point -= point_curs;
			if ( point < 0 ){
				point = 0;
			}
			$(".point").text(point);
			level_curs++;
			point_curs += 9;
			$("#curs").text("Уровень:"+ level_curs +" До следующего уровня "+ point_curs);
			
			if ( point_curs_active === false){
				point_curs_active = true;
				var x = setTimeout(function tick_curs() {
					point += level_curs;
					$(".point").text(point);
					x = setTimeout(tick_curs,1000);
				}, 1000);

			}
			break;
		}
	});

	$("#video").on("click",function(){

		while (point >= point_video){
			point -= point_video;
			if ( point < 0 ){
				point = 0;
			}
			$(".point").text(point);
			level_video++;
			point_video += 15;
			$("#curs").text("Уровень:"+ level_video +" До следующего уровня "+ point_video);
			
			if ( point_video_active === false){
				point_video_active = true;
				var y = setTimeout(function tick_video() {
					point += level_video;
					$(".point").text(point);
					y = setTimeout(tick_video,1000);
				}, 1000);

			}
			break;
		}
	});

	$("#video").on("click",function(){

		while (point >= point_stay){
			point -= point_stay;
			if ( point < 0 ){
				point = 0;
			}
			$(".point").text(point);
			level_stay++;
			point_stay += 30;
			$("#curs").text("Уровень:"+ level_stay +" До следующего уровня "+ point_stay);
			
			if ( point_stay_active === false){
				point_stay_active = true;
				var z = setTimeout(function tick_stay() {
					point += level_stay;
					$(".point").text(point);
					z = setTimeout(tick_stay,1000);
				}, 1000);

			}
			break;
		}
	});
});