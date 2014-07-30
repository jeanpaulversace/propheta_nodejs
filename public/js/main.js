// Listen for form submit and render the chart view

$('form.search').submit( function (){
	window.searchQueryView = new SearchQueryView({
		el: $('.container')
	});
});

var es = new EventSource("/sse");
es.onmessage = function (event) {
  console.log(event.data);
};
