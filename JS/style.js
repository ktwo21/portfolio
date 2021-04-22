
//ふわっと表示

AOS.init();


$(document).ready(function () {

  // //ハンバーガーメニュー
  $('#js-hamburger').on('click',function(){
    $('body').toggleClass('active')
    if($('#js-hamburger').attr('aria-expanded')=='false'){
      $(this).attr('aria-expanded','true');
      $('.sp-global-menu').attr('area-hidden','false').css('visibility','visible');
    }else{
      $(this).attr('aria-expanded','false');
      $('.sp-global-menu').attr('area-hidden','true').css('visibility','hidden');
    }
  })
  $('.hamburger-list').on('click',function(){
    $('body').toggleClass('active')
      $('#js-hamburger').attr('aria-expanded','false');
      $('.sp-global-menu').attr('area-hidden','true').css('visibility','hidden');
    
  })


  //Google form
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSerOw_iY5xE481T73CP_rfC1kD2ulyun8NhViVMRN4OItnnvw/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});