require(
	[
		 'dojo/domReady!'
		,'lnksys/logger'
		,'dojo/query'
		//,'dojo/NodeList-traverse'
		,'dojo/NodeList-manipulate'
		//,'dojo/NodeList-html'
		,'/js/WidgetA.js'
		,'/js/WidgetB.js'
		,'/js/WidgetC.js'
	],
	function(
		 ready
		,logger
		,query
		//,nodeListTraverse
		,nodeListManipulate
		//,nodeListHtml
		,_WidgetA
		,_WidgetB
		,_WidgetC
	){
		console.log('main:start');
		//example0
		{
			try{
				var content=query("#example0 #content");
				var widgetA=new WidgetA();
				widgetA.set("msg","just a message");
				widgetA.placeAt(content[0]);
			}catch(e){
				var content=query("#example0 #content");
				content.attr('innerHTML','<div class="alert alert-danger">'+e.toString()+'</div>')
			};
		}
		//example1
		{
			try{
				var content=query("#example1 #content");
				var widgetB=new WidgetB();
				widgetB.set("msg","click me!");
				widgetB.placeAt(content[0]);
			}catch(e){
				var content=query("#example1 #content");
				content.attr('innerHTML','<div class="alert alert-danger">'+e.toString()+'</div>')
			};
		}
		//example2
		{
			try{
				var content=query("#example2 #content");
				var widgetC=new WidgetC();
				widgetC.set("msg","click me im different now!");
				widgetC.placeAt(content[0]);
			}catch(e){
				var content=query("#example1 #content");
				content.attr('innerHTML','<div class="alert alert-danger">'+e.toString()+'</div>')
			};
		}

		console.log('main:end');
	}
);

