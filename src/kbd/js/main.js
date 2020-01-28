require(
	[
		//'lnksys/logger',
		'lnksys/widget/dialog/Dialog',
		'lnksys/widget/toast/Toast',
		'dojo/dom',
		'dojo/query',
		'dojo/on',
		'dojo/keys',
		'dojo/NodeList-traverse',
		'dojo/domReady!'

	],
	function(
		//logger,
		dlg,
		toast,
		dom,
		query,
		on,
		keys
	){
		console.log('main:start');
		//example0
		{
			on(
				//dom.byId('input000'),
				query('#example0 #input000'),
				'keyup',
				function(event){
					var msg=event.keyCode
					console.log(msg);
					query('#example0 #msg')[0].innerHTML=msg;
				}
			);
		}
		//example1
		{
			var options=[
				"foo",
				"bar",
				"baz",
				"qux",
				"klutz"
			];
			var optionsidx=0;
			var optionsminidx=0;
			var optionsmaxidx=options.length-1;
			var msg=query('#example1 #msg')[0]
			query("#example1 input[type='text']")
			.on(
				"keydown",
				function(event){
					switch(event.keyCode){
						case keys.UP_ARROW:
							event.preventDefault();
							optionsidx++;
							optionsidx=optionsidx>optionsmaxidx?optionsmaxidx:optionsidx;
							msg.innerHTML='Hit Return';
							query("#example1 input[type='text']")[0].value=options[optionsidx];
							break;
						case keys.DOWN_ARROW:
							event.preventDefault();
							optionsidx--;
							optionsidx=optionsidx<optionsminidx?optionsminidx:optionsidx;
							msg.innerHTML='Hit Return';
							query("#example1 input[type='text']")[0].value=options[optionsidx];
							break;
						case keys.ENTER:
							event.preventDefault();
							msg.innerHTML="Selected: "+options[optionsidx];
							query("#example1 input[type='text']")[0].value=options[optionsidx];
							break;
						default:
							event.preventDefault();
							query("#example1 input[type='text']")[0].value=options[optionsidx];
							break;
					};
				}
			);
			//example2
			{
				var inputs=query("#example2 input");
				var inputsidx=0;
				var inputsminidx=0;
				var inputsmaxidx=inputs.length-1;
				var inputForm=query("#example2 #form0");
				on(
					inputForm[0],
					"keydown",
					function(event){
						var node=query.NodeList([event.target]);
						var nextNode;
						window.n=node;
						//on listens for the keydown events inside of the div node, on all the form elements
						switch(event.keyCode){
							case keys.DOWN_ARROW:
								event.preventDefault();
								inputsidx++;
								inputsidx=inputsidx>inputsmaxidx?inputsmaxidx:inputsidx;
								inputs[inputsidx].focus();
								break;
							case keys.UP_ARROW:
								event.preventDefault();
								inputsidx--;
								inputsidx=inputsidx<inputsminidx?inputsminidx:inputsidx;
								inputs[inputsidx].focus();
								break;
							case keys.HOME:
								event.preventDefault();
								inputsidx=0;
								inputs[inputsidx].focus();
								break;
							case keys.END:
								event.preventDefault();
								inputsidx=inputsmaxidx;
								inputs[inputsidx].focus();
								break;
							case keys.ENTER:
								event.preventDefault();
								var t=new Toast();
								inputs[inputsidx].value==''||
								inputs[inputsidx].value==null?
									t.toast(
										{
											text:"NO VALUE",
											loaderBg:'red'
										}
									)
									:
									t.toast(
										{
											text:inputs[inputsidx].value
										}
									)
								;
							default:
								break;
						};
					}
				);
			}
			msg.innerHTML="Please make a selection";
		}
		console.log('main:end');
	}
);

