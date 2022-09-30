// if #c-button is clicked
//   remove .hidden CSS class from #cornell-busses
//
// if #i-button is clicked
//   remove .hidden CSS #ithaca-busses
//
// if #o-button is clicked
//   remove .hidden CSS class from #other-busses

// if #c-button-less is clicked
//   add .hidden CSS class from #cornell-busses
//

// when #c-button is clicked then #cornell-busses are shown and the #c-less-button is revealed and the #c-button is hidden
$("#c-button").click(function(){
  $("#cornell-busses").removeClass('hidden');
  $("#c-less-button").removeClass('hidden');
  $("#c-button-hidden").addClass("hidden");

})

// c-less button is clicked and bot the #cornell-busses and the #c-less-button is hidden
$("#c-less-button").click(function(){
  $("#cornell-busses").addClass('hidden');
  $('#c-less-button').addClass("hidden");
  $("#c-button-hidden").removeClass("hidden");

})

// when #ci-button is clicked then #ithaca-busses are shown and the #i-less-button is revealed and the #i-button is hidden
$("#i-button").click(function(){
  $("#ithaca-busses").removeClass('hidden');
  $("#i-less-button").removeClass('hidden');
  $("#i-button-hidden").addClass("hidden");
})

// i-less button is clicked and bot the #ithaca-busses and the #i-less-button is hidden
$("#i-less-button").click(function(){
  $("#ithaca-busses").addClass('hidden');
  $('#i-less-button').addClass("hidden")
  $("#i-button-hidden").removeClass("hidden");
})


// when #o-button is clicked then #other-busses are shown and the #o-less-button is revealed and the #o-button is hidden
$("#o-button").click(function(){
  $("#other-busses").removeClass('hidden');
  $("#o-less-button").removeClass('hidden');
  $("#o-button-hidden").addClass("hidden");
})

// o-less button is clicked and bot the #other-busses and the #o-less-button is hidden
$("#o-less-button").click(function(){
  $("#other-busses").addClass('hidden');
  $('#o-less-button').addClass("hidden");
  $("#o-button-hidden").removeClass("hidden");
})
