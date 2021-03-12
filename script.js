$(function(){
  //クリックファンクション(表示)ばつボタン
  $('#question-show').click(function(){
    $('#question-modal').fadeIn();
  });

  //クリックファンクション（閉じる）
  $('.close-modal').click(function(){
    $('#question-modal').fadeOut();
  });

});
//日本写真スライドショー
const pics_src_jp = ["IMG_4341.jpg","IMG_9748.jpg"];
let num_jp = -1;


function slideshow_timer(){
  if (num_jp === 1){
    num_jp = 0;
  }
  else {
    num_jp ++;
  }
  document.getElementById("myJapanpic").src = pics_src_jp[num_jp];
}

setInterval(slideshow_timer, 2000);

//アメリカ写真スライドショー
const pics_src_us = ["IMG_0710.png","IMG_5135.jpg"];
let num_us = -1;


function slideshow_timer_us(){
  if (num_us === 1){
    num_us = 0;
  }
  else {
    num_us ++;
  }
  document.getElementById("myAmericapic").src = pics_src_us[num_us];
}

setInterval(slideshow_timer_us, 2000);

//カナダ写真スライドショー
const pics_src_ca = ["IMG_4393.jpg","IMG_1088.jpg"];
let num_ca = -1;


function slideshow_timer_ca(){
  if (num_ca === 1){
    num_ca = 0;
  }
  else {
    num_ca ++;
  }
  document.getElementById("myCanadapic").src = pics_src_ca[num_ca];
}

setInterval(slideshow_timer_ca, 2000);

//オーストラリア写真スライドショー
const pics_src_au = ["IMG_0084.jpg",""];
let num_au = -1;


function slideshow_timer_au(){
  if (num_au === 1){
    num_au = 0;
  }
  else {
    num_au ++;
  }
  document.getElementById("myAustraliapic").src = pics_src_au[num_au];
}

setInterval(slideshow_timer_au, 2000);
