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
            + "'><h3>Title: "
            + ideaData.title
            + "</h3><p>"
            + truncate(ideaData.body) + "..."
            +"</p>"
            + "<p>Quality: "
            + ideaData.quality
            +"</p>"
            + "<button id='delete-idea' class='btn btn-default btn-xs'>Delete</button>")
}

function renderIdea( ideaData ){
  $("#all-ideas").prepend(ideaData)
}

function clearForm(){
  $("#idea-title").val("");
  $("#idea-body").val("")
}

function truncate(string){
  var trimmed = string.substring(0, 100);
  return trimmed.substring(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")))
}

function handleError(error){console.log(error)}
