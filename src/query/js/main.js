require(
	[
		'dojo/domReady!',
		'lnksys/logger',
		'lnksys/widget/dialog/Dialog',
		'lnksys/widget/toast/Toast',
		'dojo/dom',
		'dojo/query',
		'dojo/NodeList-traverse',
		'dojo/NodeList-manipulate',
		'dojo/NodeList-html'

	],
	function(
		ready,
		logger,
		dlg,
		toast,
		dom,
		query
	){
		console.log('main:start');
		var t=new toast();
		//example0
		{
			var list=query("#example0 #content #list");
			var liOdd=query("#example0 #content #list li.odd");
			var liEven=query("#example0 #content #list li.even");
			var arrFader=[];
			var nelem=32;
			for(var i=0;i<nelem;i++){
				arrFader.push((1+Math.cos(i*Math.PI/nelem))/2);
			}
			var idxFader=0;
			liOdd
				.style(
					"width","33%"
				)
				.style(
					"text-align","center"
				)
			liEven
				.style(
					"width","33%"
				)
				.style(
					"text-align","center"
				)
			;

			function cycleStyle(){
				idxFader++;
				idxFader%=arrFader.length;
				var fade=arrFader[idxFader];
				liOdd
					.style(
						"opacity",fade
					)
					.style(
						"font-size",fade*48+"px"
					)
					.style(
						"margin-left",fade*33+"%"
					)
				;
				liEven
					.style(
						"opacity",1-fade
					)
					.style(
						"font-size",(1-fade)*48+"px"
					)
					.style(
						"margin-left",(1-fade)*33+"%"
					)
				;
				if(
					idxFader<arrFader.length-1
				)
					setTimeout(
						cycleStyle,
						50
					);
			}
			cycleStyle();
		}
		console.log('main:end');
	}
);

