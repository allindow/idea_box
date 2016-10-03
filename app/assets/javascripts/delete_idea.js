$(document).ready(function(){
  deleteIdea();
})

function deleteIdea(){
  $("#all-ideas").on("click", "#delete-idea", function(){
    var $idea = $(this).closest(".idea")
    $.ajax({
      url: "/api/v1/ideas/" + $idea.data('id'),
      type: "delete"
    })
    .then(function(){
      $idea.remove()
    })
    .fail(handleError)
  })
}

function handleError(error){console.log(error)}
