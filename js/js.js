$(document).on('click', '.divTableCell', function() { //для подсвечивания классов и выведение списка циферок
  $('.divTableCell:not(this)').css("background-color", "");
  $(this).css("background-color", "#ff9625");

  var show = $(this).data('show');
  $(show).removeClass("hide").siblings().addClass("hide");

  var x = $(this).next("div[class$='Table']");
      $("div[class$='Table']").not(x).addClass("hide");

});

$(document).on('click', '.circle', function() {    //кружочки подсветка вывод
  $('.circle:not(this)').css("background-color", "");
  $(this).css("background-color", "#ff9625");

    var show = $(this).data('show');
    $(show).removeClass("hide").siblings().addClass("hide");

});



// навигация вкл выкл
function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}
