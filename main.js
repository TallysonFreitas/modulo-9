$(document).ready(function(){
    $("main div button").click(function(e){
        e.preventDefault();
        const valor = $("#tarefa").val()
        let span =$(`<a href='#'><span>${valor}</span></a>`)
        let li = $("<li></li>")
        
        
        $(valor).appendTo(span);
        $(span).appendTo(li)
        $(li).appendTo(`ul`)
        $(li).click(function(){
            $(this).toggleClass("done");
        })
        console.log(span)
    })

    
})

