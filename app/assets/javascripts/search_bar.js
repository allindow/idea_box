$(document).ready(function(){
  filterIdeas();
})

function filterIdeas(){
  $ideas = $('.idea')
  $('#idea_filter_all').on('keyup', function(){
    var currentData = this.value;

    $ideas.each(function(index, idea){
      debugger
      $idea = $(idea);
      if ($idea.data('all').toLowerCase().indexOf(currentData.toLowerCase()) !== -1){
        $idea.show();
      } else {
        $idea.hide();
      }
    });
  });
}
