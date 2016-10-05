$(document).ready(function(){
  createIdea();
})

function createIdea(){
  $("#create-idea").on("click", function(){
    var ideaParams = {
        title: $("#idea-title").val(),
        body: $("#idea-body").val()
    }
    $.post("/api/v1/ideas", ideaParams)
    .then(createIdeaHTML)
    .then(renderIdea)
    .then(clearForm)
    .fail(handleError)
  })
}

function createIdeaHTML( ideaData ){
  return $("<div class='well idea' data-id='"
            + ideaData.id
            + "' data-quality='"
            + ideaData.quality
            + "' data-all='"
            + ideaData.title + " " + ideaData.body
            + "'><h3 id='idea-title' contentEditable='true'>"
            + ideaData.title
            + "</h3><p id='idea-body' contentEditable='true'>"
            + truncate(ideaData.body)
            +"</p>"
            + "<p id='quality'>Quality: "
            + ideaData.quality
            +"</p>"
            + "<button id='delete-idea' class='btn btn-default btn-xs'>Delete</button>"
            + "<button id='up-idea' class='btn btn-default btn-xs'><i class='fa fa-thumbs-o-up bigger' aria-hidden='true'></i></button>"
            + "<button id='down-idea' class='btn btn-default btn-xs'><i class='fa fa-thumbs-o-down bigger' aria-hidden='true'></i></button>"
          )
}


function renderIdea( ideaData ){
  $("#all-ideas").prepend(ideaData)
}

function clearForm(){
  $("#idea-title").val("");
  $("#idea-body").val("")
}

function truncate(string){
  if(string.length > 100){
    var trimmed = string.substring(0, 100);
    return trimmed.substring(0, Math.min(trimmed.length, trimmed.lastIndexOf(" "))) + "...";
  } else {
    return string;
  }
}



function handleError(error){console.log(error)}
