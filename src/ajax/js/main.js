require(
	[
		'dojo/domReady!',
		//'lnksys/logger',
		'lnksys/widget/dialog/Dialog',
		'lnksys/widget/toast/Toast',
		'dojo/request',
		'dojo/dom',
		'dojo/query',
		'dojo/NodeList-traverse',
		'dojo/NodeList-manipulate',
		'dojo/NodeList-html'

	],
	function(
		ready,
		//logger,
		dlg,
		toast,
		request,
		dom,
		query
	){
		console.log('main:start');
		var t=new toast();
		//example0
		{
			query("#example0 #content")
				.attr('innerHTML','Loading...')
				.style('opacity','0.5')
				.addClass('alert')
			;
			request("/sjs/tables.html").then(
				function(text){
					query("#example0 #content")
						.attr('innerHTML',text)
						.style('white-space','pre')
						.style('opacity','1.0')
						.style('font-family','monospace')
						.addClass('alert-dark')
					;
				},
				function(error){
					console.error(error);
					query("#example0 #content")
						.attr('innerHTML',"An error occurred: " + error)
						.addClass('alert-danger')
					;
				}
			);
		}
		//example1
		{
			var content=query("#example1 #content");
			content
				.attr('innerHTML','Loading...')
				.style('opacity','0.5')
				.addClass('alert')
			;
			request.post(
				"/sjs/parameters.js",
				{
					sync:false,
					timeout:5000,
					method:"POST",
					query:{
						"KFoo":"QVFoo",
						"KBar":"QVBar",
						"KBaz":"QVBaz",
						"KQux":"QVQux",
						"KKlutz":"QVKlutz"
					},
					headers:{
						'Content-type':'application/json',
						'X-Foo':'HdrVFoo',
						'X-Bar':'HdrVBar',
						'X-Baz':'HdrVBaz',
						'X-Qux':'HdrVQux',
						'X-Klutz':'HdrVKlutz'
					},
					data:JSON.stringify({
						'dk0':'dv0',
						'dk1':['dv1_0','dv1_1']
					}),
					handleAs:'text'
				}
			).then(
				function(text){
					content
						.attr('innerHTML',text)
						.style('white-space','pre')
						.style('opacity','1.0')
						.style('font-family','monospace')
						.attr('class','')
						.addClass('alert alert-dark')
					;
				},
				function(error){
					console.error(error);
					content
						.attr('innerHTML',"An error occurred: " + error)
						.addClass('alert')
						.addClass('alert-danger')
					;
				}
			);
		}

		console.log('main:end');
	}
);

