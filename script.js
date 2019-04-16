'use strict'

class Kompanent {
	constructor(name, level, nextLevel, second, secondNeed){
		this.name = name;
		this.level = Number(level); 
		this.nextLevel = Number(nextLevel);
		this.second = Number(second);
		this.secondNeed = Number(secondNeed);
	}

  // сеттер
  set stat(newValue) {
    [this.name, this.level, this.nextLevel, this.second, this.secondNeed] = newValue.split(',');
    this.level = Number(this.level);
    this.nextLevel = Number(this.nextLevel);
    this.second = Number(this.second);
    this.secondNeed = Number(this.secondNeed);
  }

  activate(){
  	while (point >= this.nextLevel){
			point -= this.nextLevel;
			if ( point < 0.000 ){
				point = 0.000;
			}

			window.localStorage["point"] = point.toFixed(3);
			$(".point").text(point.toFixed(3));

			this.level++;
			this.second += this.secondNeed;
			this.nextLevel += this.nextLevel;

			point_sec = parseFloat(point_sec) + this.secondNeed;
			point_sec = point_sec.toFixed(3);

			//Зарисовка очков и поинтов

			$("#main-second").text(point_sec);
			$("#"+ this.name + "_second").text(this.second.toFixed(3));
			$("#"+ this.name + "_level").text(this.level);
			$("#"+ this.name + "_nextLevel").text(this.nextLevel.toFixed(3));


			//Сохранение параметров

			window.localStorage["point_sec"] = point_sec;
			window.localStorage[this.name] = this.name + "," + this.level + "," + this.nextLevel + "," + this.second.toFixed(3) + ","+ this.secondNeed.toFixed(3);

			break;
		}
  }
}

var point = 0.000;
var point_sec = 0.000;
var active = false;

var curs = new Kompanent();
var video = new Kompanent();
var stay = new Kompanent();
var superComp = new Kompanent();
var data = new Kompanent();

function load(){
	if(window.localStorage["point"] != null){
		point = Number(window.localStorage["point"]).toFixed(3);
	} else {
		window.localStorage.setItem("point",0.000);
		point = Number(window.localStorage["point"]).toFixed(3);
	}

	if(window.localStorage["point_sec"] != null){
		point_sec = Number(window.localStorage["point_sec"]).toFixed(3);
	} else {
		window.localStorage.setItem("point_sec",0.000);
		point_sec = Number(window.localStorage["point_sec"]).toFixed(3);
	}

	if(window.localStorage["curs"] != null){
		curs.stat = window.localStorage["curs"];
	} else {
		window.localStorage.setItem("curs","curs,0,0.003,0.000,0.001");
		curs.stat = window.localStorage["curs"];
	}

	if(window.localStorage["video"] != null){
		video.stat = window.localStorage["video"];
	} else {
		window.localStorage.setItem("video","video,0,0.050,0.000,0.020");
		video.stat = window.localStorage["video"];
	}

	if(window.localStorage["stay"] != null){
		stay.stat = window.localStorage["stay"];
	} else {
		window.localStorage.setItem("stay","stay,0,0.800,0.000,0.500");
		stay.stat = window.localStorage["stay"];
	}

	if(window.localStorage["superComp"] != null){
		superComp.stat = window.localStorage["superComp"];
	} else {
		window.localStorage.setItem("superComp","superComp,0,3.000,0.000,1.000");
		superComp.stat = window.localStorage["superComp"];
	}

	if(window.localStorage["data"] != null){
		data.stat = window.localStorage["data"];
	} else {
		window.localStorage.setItem("data","data,0,5.000,0.000,3.000");
		data.stat = window.localStorage["data"];
	}




		$(".point").text(point);
		$("#main-second").text(point_sec);

		$("#"+ curs.name + "_second").text(curs.second.toFixed(3));
	  $("#"+ curs.name + "_level").text(curs.level);
		$("#"+ curs.name + "_nextLevel").text(curs.nextLevel.toFixed(3));

		$("#"+ video.name + "_second").text(video.second.toFixed(3));
	  $("#"+ video.name + "_level").text(video.level);
		$("#"+ video.name + "_nextLevel").text(video.nextLevel.toFixed(3));

		$("#"+ stay.name + "_second").text(stay.second.toFixed(3));
	  $("#"+ stay.name + "_level").text(stay.level);
		$("#"+ stay.name + "_nextLevel").text(stay.nextLevel.toFixed(3));

		$("#"+ superComp.name + "_second").text(superComp.second.toFixed(3));
	  $("#"+ superComp.name + "_level").text(superComp.level);
		$("#"+ superComp.name + "_nextLevel").text(superComp.nextLevel.toFixed(3));

		$("#"+ data.name + "_second").text(data.second.toFixed(3));
	  $("#"+ data.name + "_level").text(data.level);
		$("#"+ data.name + "_nextLevel").text(data.nextLevel.toFixed(3));

		var x = setTimeout(function tick() {
			point = parseFloat(point) + parseFloat(point_sec);
			point = point.toFixed(3);
			window.localStorage["point"] = point;
			$(".point").text(point);
			x = setTimeout(tick, 1000);
		}, 1000);


	//Клик По кнопке
	$(".button").on("click",function(){
		point = parseFloat(point) + 0.001;
		point = point.toFixed(3);
		$(".point").text(point);
		window.localStorage["point"] = point;
	});


	$(".curs").on("click", function (event) {
  	event.preventDefault();
    curs.activate();
	});

	$(".video").on("click", function (event) {
  	event.preventDefault();
    video.activate();
	});

	$(".stay").on("click", function (event) {
  	event.preventDefault();
    stay.activate();
	});

	$(".superComp").on("click", function (event) {
  	event.preventDefault();
    superComp.activate();
	});

	$(".data").on("click", function (event) {
  	event.preventDefault();
    data.activate();
	});

	$(".reload").on("click", function (event) {
  	event.preventDefault();
  	localStorage.clear();
  	window.location.reload();
	});

}