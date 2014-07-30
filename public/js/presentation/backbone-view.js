(function () {
	window.SearchQueryView = Backbone.View.extend({
		initialize: function () {
            if ( !$(this.el).find('#linePlot').length ){
    			$(this.el).append('<br><br><hr><br><br><div id="linePlot" style="width:100%; height:400px;"></div><br><br><hr><br><br>')
                $('body').animate({ scrollTop: "400px", duration: "slow" });
            }
        },

		events: {
			'submit form.search': 'callChartGenerator'
		},

    callChartGenerator: function () {
        Charts.stubbedChartGenerator();

    }
	});

})();