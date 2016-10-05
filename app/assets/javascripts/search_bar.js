$(document).ready(function(){
  filterIdeas();
})

function filterIdeas(){
  $('#idea_filter_all').on('keyup', function(){
    var $ideas = $('.idea')
    var currentData = this.value;
    
    $ideas.each(function(index, idea){
      $idea = $(idea);
      if ($idea.data('all').toLowerCase().indexOf(currentData.toLowerCase()) !== -1){
        $idea.show();
      } else {
        $idea.hide();
      }
    });
  });
}
