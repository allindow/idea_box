$(document).ready(function(){
  thumbsUp();
  thumbsDown();
})

function thumbsUp(){
  $("#all-ideas").on("click", "#up-idea", function(){
    var $idea = $(this).closest(".idea")
    var newQuality = upQuality($idea.data('quality'))
    $.ajax({
      type: "put",
      url: "/api/v1/ideas/" + $idea.data('id'),
      data: { quality : newQuality }
    })
    .then(renderNewQuality($idea, newQuality))
    .fail(handleError)
  })
}

function thumbsDown(){
  $("#all-ideas").on("click", "#down-idea", function(){
    var $idea = $(this).closest(".idea")
    var newQuality = downQuality($idea.data('quality'))
    $.ajax({
      type: "put",
      url: "/api/v1/ideas/" + $idea.data('id'),
      data: { quality : newQuality }
    })
    .then(renderNewQuality($idea, newQuality))
    .fail(handleError)
  })
}


function upQuality(quality){
  if (quality === "swill") {
    return "plausible";
  } else {
    return "genius";
  };
}

function renderNewQuality(idea, quality){
 idea.children('#quality').text("Quality: " + quality );
 idea.data('quality', quality)
}


function downQuality(quality){
  if(quality === "genius") {
    return "plausible";
  } else {
    return "swill";
  };
}

function handleError(error){console.log(error)}
