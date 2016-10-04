$(document).ready(function(){
  editIdea();
})

function editIdea(){
  editTitle();
  editBody();
}

function editTitle(){
  $("#all-ideas").on("click", "#idea-title", function(){
    var $idea = $(this).closest(".idea")
    var $title = $idea.children('#idea-title')
    $('body').on('keydown', $title, function(event){
      if (event.keyCode == 13){
        event.preventDefault();
        $(event.target).blur();
        $(event.target).text(truncate($(event.target).text()));
        updateTitle($(event.target));
      }
    })
  })
}
function editBody(){
  $("#all-ideas").on("click", "#idea-body", function(){
    var $idea = $(this).closest(".idea")
    var $body = $idea.children('#idea-body')
    $('body').on('keydown', $body, function(event){
      if (event.keyCode == 13){
        event.preventDefault();
        $(event.target).blur();
        $(event.target).text(truncate($(event.target).text()));
        updateBody($(event.target));
      }
    })
  })
}

function updateTitle(target){
  var id = target.closest('.idea').data('id');
  var newTitle = target.text();
  $.ajax({
    type: "put",
    url: "/api/v1/ideas/" + id,
    data: { title : newTitle }
  })
  .fail(handleError)
}

function updateBody(target){
  var id = target.closest('.idea').data('id');
  var newBody = target.text();
  $.ajax({
    type: "put",
    url: "/api/v1/ideas/" + id,
    data: { body : newBody }
  })
  .fail(handleError)
}

function handleError(error){console.log(error)}
