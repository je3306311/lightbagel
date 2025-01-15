$(".search_category ul").hide();
$(".notice_select").click(function(){
    $(".search_category ul").toggle()
    $(".search_category span").toggleClass("turn")
});


function option1(){
    document.getElementById("select").innerHTML = '제목'
    $(".search_category ul").hide();
    $(".search_category span").toggleClass("turn")
}
function option2(){
    document.getElementById("select").innerHTML = '내용'
    $(".search_category ul").hide();
    $(".search_category span").toggleClass("turn")
}

// 게시판

$(".anser").hide();
$(".question").click(function(){
    $(this).next().slideToggle();
});


	$(".question").click(function(){
		$(this).children().children().children().children("img").toggleClass("turn");
	});

