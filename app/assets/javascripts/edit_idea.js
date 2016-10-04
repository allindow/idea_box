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
    $title = $idea.children('#idea-title')
    $('body').bind('click keydown', $title, function(event){
      if (event.keyCode == 13){
        event.preventDefault();
        $(event.target).blur();
        $(event.target).text(truncate($(event.target).text()));
        updateTitle($(event.target));
      } else if (event.type == "click" && event.target.id != "idea-body"){
        $title.text(truncate($title.text()));
        updateTitle($title);
      }
    })
  })
}
function editBody(){
  $("#all-ideas").on("click", "#idea-body", function(){
    var $idea = $(this).closest(".idea")
    $body = $idea.children('#idea-body')
    $('body').bind('click keydown', $body, function(event){
      if (event.type == "keydown" && event.keyCode == 13){
        event.preventDefault();
        $(event.target).blur();
        $(event.target).text(truncate($(event.target).text()));
        updateBody($(event.target));
      } else if (event.type == "click" && event.target.id != "idea-body"){
        $body.text(truncate($body.text()));
        updateBody($body);
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
