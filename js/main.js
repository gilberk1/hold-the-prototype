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

function changeHearts() {
  $(".heart-outline").click(function() {
    $(this).toggleClass('heart-outline');
    $(this).toggleClass('heart-filled animated pulse');
  });
}

function editLifestyles() {
  $("#edit").click(function() {
    $("#lifestyles").slideUp();
    $('#edit').fadeOut(500);
    setTimeout("$('#edit').css('display', 'none');", 200);
    $('#lifestyles-box').animate({height: '47px'});   
    $("#lifestyles-edit").slideDown();
  });

  $(".submit.green").click(function() {
    $("#lifestyles").slideDown();
    $('#edit').fadeIn(500);
    setTimeout("$('#edit').css('display', 'block');", 200);
    $('#lifestyles-box').animate({height: '145px'});
    $("#lifestyles-edit").slideUp();
  });
}

function selectLifestyles() {
  $(".gluten-free-unselected").click(function() {
    $(this).toggleClass('gluten-free-unselected');
    $(this).toggleClass('gluten-free-selected animated pulse');
  });

  $(".vegetarian-selected").click(function() {
    $(this).toggleClass('vegetarian-unselected');
    $(this).toggleClass('vegetarian-selected animated pulse');
  });

  $(".dairy-free-selected").click(function() {
    $(this).toggleClass('dairy-free-unselected');
    $(this).toggleClass('dairy-free-selected animated pulse');
  });

  $(".none-selected").click(function() {
    $(this).toggleClass('none-unselected');
    $(this).toggleClass('none-selected animated pulse');
  });
}

function search() {
  $(".not-searching").click(function() {
    $('.searching').css('display', 'block');
    $('.not-searching').css('display', 'none');
    $(".search").slideDown();
  });

  $(".searching").click(function() {
    $('.searching').css('display', 'none');
    $('.not-searching').css('display', 'block');
    $(".search").slideUp();
  });
}

function colexp() {
  $(".category").click(function() {
    if($(this).hasClass('exp') && $(this).parent().find('.category-elements').length) {
      $(this).find('.subtract').removeClass('sub');
      $(this).find('.subtract').addClass('add');  

      $(this).parent().find('.category-elements').slideUp();     

      $(this).removeClass('exp');
      $(this).addClass('col');
    }
    else if($(this).hasClass('col') && $(this).parent().find('.category-elements').length) {
      $(this).find('.subtract').removeClass('add');
      $(this).find('.subtract').addClass('sub');  

      $(this).parent().find('.category-elements').slideDown();

      $(this).removeClass('col');
      $(this).addClass('exp');
    }
    else if($(this).hasClass('exp') && $(this).parent().find('.range').length) {
      $(this).find('.subtract').removeClass('sub');
      $(this).find('.subtract').addClass('add');  

      $(this).parent().find('.range').slideUp();     

      $(this).removeClass('exp');
      $(this).addClass('col');
    }
    else if($(this).hasClass('col') && $(this).parent().find('.range')) {
      $(this).find('.subtract').removeClass('add');
      $(this).find('.subtract').addClass('sub');  

      $(this).parent().find('.range').slideDown();

      $(this).removeClass('col');
      $(this).addClass('exp');
    }
  });

}

function uncheck() {
  $(".text-field").click(function() {
    $(this).find('.filter-check').toggleClass('checked');
    $(this).find('.filter-check').toggleClass('unchecked');
  });
}

function servingSlider() {

  var servingSlider = document.getElementById('serving-slider');

  noUiSlider.create(servingSlider, {
    start: [ 2, 30 ],
    connect: true,
    step: 1,
    range: {
      'min': 2,
      'max': 30
    }
  });
  var left = document.getElementById('serving-min');
  var right = document.getElementById('serving-max');
  var minValue = document.getElementById('serving-min-value');
  var maxValue = document.getElementById('serving-max-value');
    

  servingSlider.noUiSlider.on('update', function( values, handle ) {

    var value = values[handle];

    left.value = values[0];
    right.value = values[1];

    var setMin = parseInt(left.value);
    minValue.innerHTML = setMin + " people";
    
    var setMax = parseInt(right.value);
    maxValue.innerHTML = setMax + " people";
  });
}


function prepSlider() {

  var prepSlider = document.getElementById('prep-slider');

  noUiSlider.create(prepSlider, {
    start: [ 0, 60 ],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 60
    }
  });
  var left = document.getElementById('prep-min');
  var right = document.getElementById('prep-max');
  var minValue = document.getElementById('prep-min-value');
  var maxValue = document.getElementById('prep-max-value');
    

  prepSlider.noUiSlider.on('update', function( values, handle ) {

    var value = values[handle];

    left.value = values[0];
    right.value = values[1];

    var setMin = parseInt(left.value);
    minValue.innerHTML = setMin + " mins";
    
    var setMax = parseInt(right.value);
    maxValue.innerHTML = setMax + " mins";
  });
}


function cookingSlider() {

  var cookingSlider = document.getElementById('cooking-slider');

  noUiSlider.create(cookingSlider, {
    start: [ 0, 180 ],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 180
    }
  });
  var left = document.getElementById('cooking-min');
  var right = document.getElementById('cooking-max');
  var minValue = document.getElementById('cooking-min-value');
  var maxValue = document.getElementById('cooking-max-value');
    

  cookingSlider.noUiSlider.on('update', function( values, handle ) {

    var value = values[handle];

    left.value = values[0];
    right.value = values[1];

    var setMin = parseInt(left.value);
    minValue.innerHTML = setMin + " mins";
    
    var setMax = parseInt(right.value);
    maxValue.innerHTML = setMax + " mins";
  });
}

function editPeople() {
  $("#edit-people").click(function() {
    $('.info-container').css('display', 'none');
    $('.edit-info-container').css('display', 'block');
    $("#number-served").val("2").focus().val("2");
    $('#numpad').css('display', 'block');
    $("#edit-modifications").css('display', 'none');
    $('.exclamation').css('display', 'none');
    $('.finalize-button').css('display', 'none');
    var height = $("#numpad").height();
    $('.content').css('margin-bottom', height);
    var subHeight = 64 + height;
    $('.content').css('max-height', 'calc(100% - ' + subHeight + 'px)');    
  });
}

function cancel() {
  $("#cancel-people").click(function() {
    $('.info-container').css('display', 'block');
    $('.edit-info-container').css('display', 'none');
    $('#numpad').css('display', 'none');
    $("#edit-modifications").css('display', 'block');
    $('.exclamation').css('display', 'block');
    $('.finalize-button').css('display', 'block');
    $('.content').css('margin-bottom', '50px');    
    $('.content').css('max-height', 'calc(100% - 114px)');
  });
  $("#cancel-sub").click(function() {
    $('#sub-demo').removeClass('selected-conflict');
    $('#sub-demo').addClass('unselected-conflict');
    $('#sub-picker').css('display', 'none');
    $("#edit-people").css('display', 'block');
    $("#edit-modifications").css('display', 'block');
    $('.exclamation').css('display', 'block');
    $('.finalize-button').css('display', 'block');
    $('.content').css('margin-bottom', '50px');    
    $('.content').css('max-height', 'calc(100% - 114px)');    
  });
}

function done() {
  $("#done-people").click(function() {
    $('.info-container').css('display', 'block');
    $('.edit-info-container').css('display', 'none');
    $('#numpad').css('display', 'none');
    $("#edit-modifications").css('display', 'block');
    $('.exclamation').css('display', 'block');
    $('.finalize-button').css('display', 'block');
    $('.content').css('margin-bottom', '50px');    
    $('.content').css('max-height', 'calc(100% - 114px)');
    $('.people-serving h5').replaceWith('<h5>Serves 4 people</h5>');
    $('.ingredients-list').replaceWith('<ul class = "ingredients-list"><li>2 avocado</li><li>2 egg yolk</li>'
                                        + '<div class = "conflicts demo"><li>1 cup heavy cream</li><img id = "sub-demo" class = "exclamation" src = "images/Exclamation.png"></div>'
                                        + '<li>2 clove garlic</li><li>1 lemon, juiced</li>'
                                        + '<div class = "conflicts"><li>1 cup parmesan cheese, grated</li><img class = "exclamation" src = "images/Exclamation.png"></div>'
                                        + '<div class = "conflicts"><li>6 pieces bacon</li><img class = "exclamation" src = "images/Exclamation.png"></div>'
                                        + '<li>1 pound spaghetti </li><li>2 tablespoon olive oil</li></ul>');
  });

  $("#done-sub").click(function() {
    $('#sub-demo').removeClass('selected-conflict');
    $('#sub-picker').css('display', 'none');
    $("#edit-people").css('display', 'block');
    $("#edit-modifications").css('display', 'block');
    $('.exclamation').css('display', 'block');
    $('#sub-demo').css('display', 'none');
    $('.finalize-button').css('display', 'block');
    $('.content').css('margin-bottom', '50px');    
    $('.content').css('max-height', 'calc(100% - 114px)');
    $('.conflicts.demo li').replaceWith('<li>2/3 cup soy milk & 1/3 cup olive oil</li>');
    $('.instructions-list').replaceWith('<ul class = "ingredients-list">'
                                        + '<li>Whisk soy milk and olive oil in a separate bowl.</li>'
                                        + '<li>Blend avocado, egg yolk, garlic, and lemon juice in a powerful blender or food processor. Pulse to blend and add soy milk/olive oil gradually. Blend the sauce until smooth and set aside.</li>'
                                        + '<li>Cut up strips of bacon and cook in a large pan. Set aside.</li>'
                                        + '<li>In a large pot, bring water to a boil and cook the spaghetti. Drain and coat with olive oil. Add sauce, bacon, parmesan, and salt/pepper, stirring until well combine. Enjoy!</li></ul>');
    $('.finalize-button').addClass('link');
    $('.finalize-button').addClass('slideleft');
    $('.finalize-button').attr('page-load', 'final-recipe');
    transitions();
  });
}

function modifyLifestyles() {
  $("#edit-modifications").click(function() {
    $(".lifestyles.modify").slideUp();
    $('#edit-modifications').fadeOut(500);
    setTimeout("$('#edit-modifications').css('display', 'none');", 200);
    $("#edit-people").css('display', 'none');
    $('.exclamation').css('display', 'none');
    $("#lifestyles-edit").slideDown();
    $('.finalize-button').css('display', 'none');
    if($('.remove').css('display') == 'none') {
      $('#lifestyles-edit').animate({height: '375px'});
      $('.recipe-modifications').animate({height: '375px'});
    }
    else {
      $('#lifestyles-edit').animate({height: '450px'});
      $('.recipe-modifications').animate({height: '450px'});
    }
  });

  $(".submit.green").click(function() {
    $(".lifestyles.modify").slideDown();
    $('#edit-modifications').fadeIn(500);
    setTimeout("$('#edit-modifications').css('display', 'block');", 200);
    $("#edit-people").css('display', 'block');
    $('.exclamation').css('display', 'block');
    $('.recipe-modifications').animate({height: '110px'});
    $('#lifestyles-edit').animate({height: '375px'});
    $("#lifestyles-edit").slideUp();
    $('.finalize-button').css('display', 'block');
    $('.remove').css('display', 'none');
  });
}

function warning() {
  $(document).on('click', '.finalize-button', function() {
    if($(".conflicts.demo li").text() == "1 cup heavy cream" || $(".conflicts.demo li").text() == "1/2 cup heavy cream") {
      setTimeout("$('.warning').css('display', 'block');", 5000);
      $(".warning").slideDown();
      setTimeout("$('.warning').fadeOut(2000);", 5000)
      setTimeout("$('.warning').css('display', 'none');", 10000);
    }
    else {
      $('#sub-demo').css('display', 'none');
    }
  });
}

function substitution() {
  $(document).on('click', '#sub-demo', function () {
    $('#sub-demo').addClass('selected-conflict');
    $('#sub-picker').css('display', 'block');
    $("#edit-people").css('display', 'none');
    $("#edit-modifications").css('display', 'none');
    $('.exclamation').css('display', 'none');
    $('.exclamation.selected-conflict').css('display', 'block');
    $('.finalize-button').css('display', 'none');
    var height = $("#sub-picker").height();
    $('.content').css('margin-bottom', height);    
    var subHeight = 64 + height;
    $('.content').css('max-height', 'calc(100% - ' + subHeight + 'px)');    
  });
}

function save() {
  $(document).on('click', '.save-button', function() {
    setTimeout("$('.save').css('display', 'block');", 5000);
    $(".save").slideDown();
    setTimeout("$('.save').fadeOut(2000);", 5000)
    setTimeout("$('.save').css('display', 'none');", 10000);
  });
}

function emailPopUp() {
  $(document).on('click', '.email-button', function() {
    $('.email-popup').fadeIn(2000);
    var height = $('#email-popup').height();
    var marginDifference = height-234;
    var margin = marginDifference/2;
    $('.email-choice').css('margin-top', margin);
    $('.email-choice').css('margin-bottom', margin);
  });
}

function email() {
  $(document).on('click', '#myself', function() {
    $('.email-popup').fadeOut(2000);
    setTimeout("$('.email').css('display', 'block');", 5000);
    setTimeout("$('.email').slideDown();", 3000);
    setTimeout("$('.email').fadeOut(2000);", 5000)
    setTimeout("$('.email').css('display', 'none');", 10000);
  });
  $(document).on('click', '#friend', function() {
    $('.email-popup').fadeOut(2000);
    setTimeout("$('.email').css('display', 'block');", 5000);
    setTimeout("$('.email').slideDown();", 3000);
    setTimeout("$('.email').fadeOut(2000);", 5000)
    setTimeout("$('.email').css('display', 'none');", 10000);
  });
  $(document).on('click', '#cancel', function() {
    $('.email-popup').fadeOut(2000);
  });
}

function editPopUp() {
  $(document).on('click', '.edit-recipe', function() {
    $('.edit-popup').fadeIn(2000);
    var height = $('#edit-popup').height();
    var marginDifference = height-234;
    var margin = marginDifference/2;
    $('.edit-choice').css('margin-top', margin);
    $('.edit-choice').css('margin-bottom', margin);
  });
}

function edit() {
  $(document).on('click', '#current', function() {
    $('.edit-popup').fadeOut(2000);
  });
  $(document).on('click', '#new', function() {
    $('.edit-popup').fadeOut(2000);
  });
  $(document).on('click', '#cancel', function() {
    $('.edit-popup').fadeOut(2000);
  });
}

function sharePopUp() {
  $(document).on('click', '.share-button', function() {
    $('.share-popup').fadeIn(2000);
    var height = $('#share-popup').height();
    var imageHeight = $('.share-image').height();
    var marginDifference = height-imageHeight;
    var margin = marginDifference/2;
    $('.share-image').css('margin-top', margin);
    $('.share-image').css('margin-bottom', margin);
  });
}

function share() {
  $(document).on('click', '.share-popup', function() {
    $('.share-popup').fadeOut(2000);
    setTimeout("$('.share').css('display', 'block');", 5000);
    setTimeout("$('.share').slideDown();", 3000);
    setTimeout("$('.share').fadeOut(2000);", 5000)
    setTimeout("$('.share').css('display', 'none');", 10000);
  });
}

function onboarding() {
  $(".onboarding-begin").click(function() {
    $('.onboarding-popup.first').fadeIn(1000);
    $('.onboarding-begin').css('display', 'none');
    $('.onboarding-cancel').css('display', 'block');
    $('.content').css('overflow-y', 'hidden');
});

  $(".onboarding-cancel").click(function() {
    $('.onboarding-popup.first').fadeOut(1000);
    $('.onboarding-popup.second').fadeOut(1000);
    $('.onboarding-popup.second-piece').fadeOut(1000);
    $('.onboarding-popup.third').fadeOut(1000);
    $('.onboarding-begin').css('display', 'block');
    $('.onboarding-cancel').css('display', 'none');
    $('.content').css('overflow-y', 'scroll');
  });

  $(".onboarding-button").click(function() {
    $('.onboarding-popup.first').fadeOut(1000);
    $('.onboarding-popup.second').fadeIn(1000);
    $('.onboarding-popup.second-piece').fadeIn(1000);
  });

  $(".onboarding2-button").click(function() {
    $('.onboarding-popup.second').fadeOut(1000);
    $('.onboarding-popup.second-piece').fadeOut(1000);
    $('.onboarding-popup.third').fadeIn(1000);
  });

  $(".onboarding3-button").click(function() {
    $('.onboarding-popup.first').fadeOut(1000);
    $('.onboarding-popup.second').fadeOut(1000);
    $('.onboarding-popup.second-piece').fadeOut(1000);
    $('.onboarding-popup.third').fadeOut(1000);
    $('.onboarding-begin').css('display', 'block');
    $('.onboarding-cancel').css('display', 'none');
    $('.content').css('overflow-y', 'scroll');
  });
}

function swipeDelete() {
  Swiped.init({
    query: '.delete div',
    right: 400,
    onOpen: function() {
        this.destroy(true)
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
  });
}

$(document).ready(function() {
  transitions();
  changeHearts();
  selectLifestyles();
  editLifestyles();
  search();
  uncheck();
  colexp();
});