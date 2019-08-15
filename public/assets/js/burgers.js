$(".devour").click(function(){
    var burgerId = $(this).val()
    var url = "/api/burgers/"+burgerId
    $.ajax({
        method: "PUT",
        url: url,
        data: {devoured : true}
      }).then(function(){
          location.reload()
      })
})
$("#submit").click(function(event){
    event.preventDefault()
    var name = $("#burgerName").val()
    var newBurg = {
        burger_name: name, 
        devoured: 0
    }
    $.post( "/api/burgers",newBurg, function( data ) {
        location.reload()
      });
})