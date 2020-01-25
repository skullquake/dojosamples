<@ CPrintln("-> js/widgets/MyWidget/widget/MyWidget.js"); @>
define(
	[
		"dojo/_base/declare",
		"dijit/_WidgetBase",
		"dijit/_TemplatedMixin",
		"dojo/text!./templates/MyWidget.html"
	],
	function(
		declare,
		_WidgetBase,
		_TemplatedMixin,
		template
	){
		return declare(
			"MyWidget",
			[
				_WidgetBase,
				_TemplatedMixin
			],
			{
				templateString: template,
				constructor:function(params,srcNodeRef){
					console.log('widgets/MyWidget:constructor:start');
					console.log('widgets/MyWidget:constructor:end');
				},
				postCreate:function(){
					console.log('widgets/MyWidget:postCreate:start');
					console.log('widgets/MyWidget:postCreate:end');
				},
				/* manual build
				buildRendering:function(){
					console.log('widgets/MyWidget:buildRendering:start');
					console.log('widgets/MyWidget:buildRendering:end');
				},
				*/
				destroy:function(){
					console.log('widgets/MyWidget:destroy:start');
					console.log('widgets/MyWidget:destroy:end');
				}

			}
		);
	}
);
