function baconFade() {
  	$('#bacon').fadeIn(1000, function() {
  		setTimeout("$('#bacon').fadeOut(500); breadFade();",2000);
  	});
}

function breadFade() {
	$('#bread').fadeIn(1000, function() {
  		setTimeout("$('#bread').fadeOut(500); cheeseFade();",2000);
  	});
}

function cheeseFade() {
	$('#cheese').fadeIn(1000, function() {
  		setTimeout("$('#cheese').fadeOut(500); eggFade();",2000);
  	});
}

function eggFade() {
	$('#egg').fadeIn(1000, function() {
  		setTimeout("$('#egg').fadeOut(500); milkFade();",2000);
  	});
}

function milkFade() {
	$('#milk').fadeIn(1000, function() {
  		setTimeout("$('#milk').fadeOut(500); peanutsFade();",2000);
  	});
}

function peanutsFade() {
	$('#peanuts').fadeIn(1000, function() {
  		setTimeout("$('#peanuts').fadeOut(500); pepperFade();",2000);
  	});
}

function pepperFade() {
	$('#pepper').fadeIn(1000, function() {
  		setTimeout("$('#pepper').fadeOut(500); tomatoesFade();",2000);
  	});
}

function tomatoesFade() {
	$('#tomatoes').fadeIn(1000, function() {
  		setTimeout("$('#tomatoes').fadeOut(500); baconFade();",2000);
  	});
}

function sliders() {
  const handle = $("#custom-handle");
  
  $("#serving-slider-range").slider({
    range: true,
    min: 2,
    max: 30,
    values: [ 2, 30 ],
    slide: ( event, ui ) => {
      $("#left-people").text(`${ui.values[0]} people`);
      $("#right-people").text(`${ui.values[1]} people`);
    }
  });

  $("#prep-slider-range").slider({
    range: true,
    min: 0,
    max: 60,
    values: [ 0, 60 ],
    slide: ( event, ui ) => {
      $("#prep-left-mins").text(`${ui.values[0]} mins`);
      $("#prep-right-mins").text(`${ui.values[1]} mins`);
    }
  });

  $("#cooking-slider-range").slider({
    range: true,
    min: 0,
    max: 180,
    values: [ 0, 180 ],
    slide: ( event, ui ) => {
      $("#cooking-left-mins").text(`${ui.values[0]} mins`);
      $("#cooking-right-mins").text(`${ui.values[1]} mins`);
    }
  });
}

function transitions() {
  $(".link").fastClick(function () {
    screen = "#" + $(this).attr("page-load");
    if($(this).hasClass("none")){
      $(".sc").removeClass("selected");
      $(screen).addClass("selected");
    }
    if($(this).hasClass("slideup")){
      $(".selected").addClass("previous");
      $(screen).css({y:$(window).height() + "px"}).addClass("selected");
      $(screen).transition({y:"0px"},300,"ease",function() {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      }); 
    }
    if($(this).hasClass("slidedown")){
      $(".selected").addClass("previous");
      $(screen).addClass("selected");
      $(screen).css({y:"-" + $(window).height() + "px"});
      $(screen).transition({y:"0px"},300,"ease",function() {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      }); 
    }
    if($(this).hasClass("slideleft")){
      $(".selected").addClass("previous");
      $(screen).css({x:$(window).width() + "px"}).addClass("selected");
      $(".previous").transition({x:"-" + $(window).width() + "px"},300,"ease");
      $(screen).transition({x:"0px"},300,"ease",function () {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      }); 
      
    }
    if($(this).hasClass("slideright")){
      $(".selected").addClass("previous");
      $(screen).css({x:"-" + $(window).width() + "px"}).addClass("selected");
      $(".previous").transition({x:$(window).width() + "px"},300,"ease");
      $(screen).transition({x:"0px"},300,"ease",function () {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(".sc").removeAttr("style");
      }); 
      
    }
    if($(this).hasClass("backdown")){
      $(".selected").addClass("previous");
      $(screen).show();
      $(".previous").css("z-index","24").transition({y:$(window).height() + "px"},300,"ease",function() {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(screen).addClass("selected");
        $(".sc").removeAttr("style")
      }); 
    }
    if($(this).hasClass("backup")){
      $(".selected").addClass("previous");
      $(screen).show();
      $(".previous").css("z-index","24").transition({y: "-" + $(window).height() + "px"},300,"ease",function() {
        $(".previous").removeClass("selected");
        $(".previous").removeClass("previous");
        $(screen).addClass("selected");
        $(".sc").removeAttr("style");
      }); 
    }
  });
}