$(function () {
    $(document).on('touchstart', function () { });
    let second = 15;
    let score = 0;
    let timer;
    let counter;
    let num = 0;
    let clickable = false;
    let num2 = 0;


    $('.play>.time_area>div>span').animate({width:"100%"},second);

    function randomTarget() {
        $('.play_area>div').off('click');

        num = Math.floor(Math.random() * 7);
        $('.i' + num).addClass('circle')

        num2 = Math.floor(Math.random() * 3) + 1;
        $('.circle').append($('<img src="img/g' + num2 + '.png" alt="">'));

        setTimeout(function () {
            $('.circle').find('img').remove();
            $('.play_area>div').filter('.circle').removeClass('circle');
        }, 600);
        $('.i' + num).on('click', function () {
            if (num2 == 1) {
                score += 100;
                $('.play>.scores>.score2').text(score);
                clickable = false;
            } else if (num2 == 2) {
                score -= 100;
                $('.play>.scores>.score2').text(score);
                clickable = false;
            } else {
                score += 200;
                $('.play>.scores>.score2').text(score);
                clickable = false;
            }
        });
    }
    timer = setInterval(randomTarget, 800);

    function countdown() {
        second--;
        $('.time').text(second);
        if (second == 0) {
            clearInterval(counter);
            clearInterval(timer);
            $('.play').hide();
            $('.time_area>div').removeClass('on');
            if (score >= 1200) {
                $('.end').show();
                $('.end').find('.score2').text(score);

               // $('.play>.time_area>div>span').toggleClass('on')
                
            } else {
                $('.end2').show();
                $('.end2').find('.score2').text(score);

              // $('.play>.time_area>div>span').toggleClass('on');              
            }
        }
    }
    counter = setInterval(countdown, 1000);

    $('.again').on('click', function () {
        console.log('clk')
        second = 15;
        score = 0;
        num = 0;
        clickable = false;
       

        setTimeout(function () {
            $('.play>.time_area>div>span').stop().width(0).animate({width:"100%"},second);
            $('.play').show();
            $('.play').find('.score2').text(score);
            $('.play').find('.time').text(second);
            $('.end').hide();
            $('.end2').hide();
            timer = setInterval(randomTarget, 800);
            counter = setInterval(countdown, 1000);
        },100);
    });
});
