$(document).ready(function(){
	var point = 0;
	// 	level_curs = 0,
	// 	point_curs = 9,
	// 	point_curs_active = false,

	$(".button").on("click",function(){
		point+=1;
		console.log(point);
		$(".point").text(point);
		console.log(point_curs);
	});

	// $("#curs").on("click",function(){

	// 	while (point >= point_curs){
	// 		point -= point_curs;
	// 		if ( point < 0 ){
	// 			point = 0;
	// 		}
	// 		$(".point").text(point);

	// 		if ( point_curs_active === false){
	// 			point_curs_active = true;
	// 			var x = setTimeout(function tick_curs() {
	// 				point += level_curs;
	// 				$(".point").text(point);
	// 				x = setTimeout(tick_curs,1000);
	// 			}, 1000);

	// 		}

	// 		level_curs++;
	// 		point_curs += 9;
	// 		$("#curs").text("Уровень:"+ level_curs +" До следующего уровня "+ point_curs);
			
	// 		break;
	// 	}
	// });
});