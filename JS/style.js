//ハンバーガーメニュー

const jsHamburger = document.getElementById('js-hamburger');
//buttonタグ（ハンバーガーボタン）を定数として定義

const body = document.body;
//body全体を定数として定義

const spHeaderMenu = document.getElementById('js-global-menu');
//ハンバーガーメニューを定数として定義

jsHamburger.addEventListener('click',function(){
  //ハンバーガーボタンをクリックした時に
  body.classList.toggle('is-drawerActive')
  //bodyに is-drawerActive というクラスを付与する（divツールで見たときに動かしているのかわかりやすくするために付与？）
  if(this.getAttribute('aria-expanded')== 'false'){
    //もし、buttonタグが aria-expanded=false（抱擁する要素（メニュー）が縮んでいるよ）という要素を持っていたら、＝メニューが閉じていたら
    this.setAttribute('aria-expanded','true');
    //buttonタグに aria-expanded=true（メニューが開いているよ）という要素を付与します➤CSSに影響
    spHeaderMenu.style.visibility ="visible";
    //ハンバーガーメニューにvisibility（視認性）というCSSを付与し、値をvisible（見える）にする
    spHeaderMenu.setAttribute('area-hidden','false')
    //ハンバーガーメニューにarea-hidden=false（要素を隠さない）を付与する
  }else{
    //もし、buttonタグがaria-expanded=false（抱擁する要素が父んでいるよ）という要素をもっていなかった場合＝メニューが開いていたら
    this.setAttribute('aria-expanded','false');
    //buttonタグにメニューが閉じているよという要素を付与して、➤CSSに影響
    spHeaderMenu.style.visibility ="hidden";
    //ハンバーガーメニューをかくして
    spHeaderMenu.setAttribute('area-hidden','true')
    //ハンバーガーメニューに隠れてますという要素を付与する
  };
});

//ふわっと表示

AOS.init();

//Google form
$(document).ready(function () {

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