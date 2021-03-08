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
let pics_src = ["IMG_4341.jpg","IMG_9748.jpg"];
let num = -1;


function slideshow_timer(){
  if (num === 1){
    num = 0;
  }
  else {
    num ++;
  }
  document.getElementById("myJapanpic").src = pics_src[num];
}

setInterval(slideshow_timer, 2000);

//アメリカ写真スライドショー
