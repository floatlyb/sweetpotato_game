$(function(){
   $(document).on('touchstart',function(){});
   let second=15;
   let score=0;
   let timer;
   let counter;
   let num=0;
   let clickable=false;
   let num2=0;
   
   /*
   function randomTarget(){
      num=Math.floor(Math.random()*7);
      $('.i'+num).find('img').stop().fadeIn(100).delay(600).fadeOut(100);
      clickable=true;
   }
   
   timer=setInterval(randomTarget,800);
   */
   function randomTarget(){
      $('.play_area>div').off('click');

      num=Math.floor(Math.random()*7);
      $('.i'+num).addClass('circle')
      num2=Math.floor(Math.random()*3)+1;
      $('.circle').append($('<img src="img/g'+num2+'.png" alt="">'));
      setTimeout(function(){
         $('.circle').find('img').remove();
         $('.play_area>div').filter('.circle').removeClass('circle');
      },600);
      $('.i'+num).on('click',function(){
         console.log("clk")
         if(num2==1){
            score+=100;
            $('.play>.scores>.score2').text(score);
            clickable=false;
         }else if(num2==2){
            score-=100;
            $('.play>.scores>.score2').text(score);
            clickable=false;
         }else{
            score+=200;
            $('.play>.scores>.score2').text(score);
         }
      });

   }
   timer=setInterval(randomTarget,800);
 
   /*
   $('.play_area>div>img').on('click',function(){
      console.log("clk")
      if(num2==1){
         score+=100;
         $('.play>.scores>.score2').text(score);
         clickable=false;
      }else if(num2==2){
         score-=100;
         $('.play>.scores>.score2').text(score);
         clickable=false;
      }else{
         score+=200;
         $('.play>.scores>.score2').text(score);
      }
   });
   */
   /*
   function countdown(){
      second--;
      $('.time').text(second);
      if(second==0){
         clearInterval(counter);
         clearInterval(timer);
         $('.play').hide();
         $('.end').show();
         $('.end').find('.score2').text(score*100);
      }else if(score<=1200{
         $('.end').show();
         $('.end').find('.score2').text(score*100);
      }else{
         $('.end2').show();
         $('.end2').find('.score2').text(score*100);
      }
   }
   counter=setInterval(countdown,1000);
   
   $('.end>.again,'.end').on('click',function(){
      second=15;
      score=0;
      num=0;
      clickable=false;
      timer=setInterval(randomTarget,800);
      counter=setInterval(countdown,1000);
      $('.play').show();
      $('.end').hide();
   });
   */
});

