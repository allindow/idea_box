$(document).ready(function(){
  editIdea();
})

function editIdea(){
  $("#all-ideas").children('.idea').each(function(index, idea){
    $(idea).children('#idea-title,#idea-body').each(function(index, ideaElement){
      $(ideaElement).on('click', function(){
        var $idea = $(this).closest('.idea')
        $element = $(this)
        handleEvent($element)
      })
    })
  })
}

function handleEvent($element){
  $('body').on('click keydown', $element, function(event){
    if(event.type == "keydown" && event.keyCode == 13){
      event.preventDefault();
      $(event.target).blur();
      $(event.target).text(truncate($(event.target).text()));
      updateElement($element);
    } else if(event.type == "click" && event.target.id != $element.attr('id')){
      $element.text(truncate($element.text()));
      updateElement($element)
    }
  })
}

function updateElement(target){
  id = target.closest('.idea').data('id');
  var newText = target.text();
  if(target.attr('id') == 'idea-title'){
    postTitle(id, newText);
  } else {
    postBody(id, newText);
  }
}

function postTitle(id,newText){
  $.ajax({
    type: "put",
    url: "/api/v1/ideas/" + id,
    data: { title : newText }
  })
  .fail(handleError)
}

function postBody(id,newText){
  $.ajax({
    type: "put",
    url: "/api/v1/ideas/" + id,
    data: { body : newText }
  })
  .fail(handleError)
}
