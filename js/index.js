// Meun Btn
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  if (this.className == 'on') this.classList.remove('on');
  else this.classList.add('on');
});


// Loading

$(()=>{
    $("html , body").animate({scrollTop:"0"} ,100) 
    $(".loader").fadeOut(2000 , ()=>{
        $(".loading").slideUp(1000 , ()=>{
            $("body").css("overflow" , "auto")
            $(".loading").remove()
        });
    })
})

// SideNavbar
$(".openNav").on("click" , ()=>{
    $("#leftMenu").toggleClass("open")
    $(".openNav").toggleClass("close")
})



// Scroll

$("#leftMenu a").on("click" , (e)=>{
    let link = $(e.target).attr("href")
    let secOffset = $(link).offset().top - 60
    $("html , body").animate({scrollTop:secOffset} , 200) 
    console.log("hiii");
})

// Acordion

$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


// Counter
$(window).on("load" , ()=>{
    counter("26 july 2024 17:00:00")
})
function counter(time){
    let future = new Date(time)
    let now = new Date()
    timeDifference = (future.getTime() - now.getTime()) / 1000
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)
    setInterval(()=>{
        counter(time)
    }, 1000);
}


// text
let max = 100
$("textarea").keyup((e)=>{
    let length = e.target.value.length
    let amount = max -length
    if(amount<= 0 ){
        $("#chars").text("your available character finished");
    }else{
        $("#chars").text(amount);
    }
})



