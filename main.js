$(document).ready(function(){
    $("main div button").click(function(e){
        e.preventDefault();
        const tarefa = $("#tarefa").val()
        const item = $(`<li><a href="#">${tarefa}</a></li>`)
        $(item).appendTo("main ul")
        $(item).fadeIn(300)
    })
    
})



$("a").click(function(){
    $(this).css("text-decoration","line-through")
    console.log("oi")
    $("a").attr("text-decoration","line-through")
})