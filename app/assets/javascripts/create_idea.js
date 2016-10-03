$(document).ready(function(){
  createIdea();
)}

function createIdea(){
  $("create-idea").on("click", function(){
    var ideaParams = {
      idea: {
        title: $("idea-title").val(),
        body: $("idea-body").val()
      }
    }
    
  })
}
