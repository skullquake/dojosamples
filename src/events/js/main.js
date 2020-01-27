require(
	[
		'dojo/on',
		'dojo/dom',
		'dojo/dom-attr',
		'dojo/dom-style',
		'dojo/mouse',
		'dojo/_base/lang',
		'dojo/query',
		'dojo/domReady!'

	],
	function(
		on,
		dom,
		domAttr,
		domStyle,
		mouse,
		lang,
		query
	){
		console.log('main:start');
		//add events
		{
			var myButton=dom.byId("myButton");
			var myDiv=dom.byId("myDiv");
			on(
				myButton,
				"click",
				function(evt){
					domStyle.set(
						myDiv,
						"backgroundColor",
						"#FF0000"
					);
				}
			);
			on(
				myDiv,
				mouse.enter,
				function(evt){
					domStyle.set(
						myDiv,
						"backgroundColor",
						"#FFFF00"
					);
				}
			);
			on(
				myDiv,
				mouse.leave,
				function(evt){
					domStyle.set(
						myDiv,
						"backgroundColor",
						"unset"
					);
				}
			);
		}
		//remove events
		{
			var myButton2=dom.byId("myButton2");
			var myDiv2=dom.byId("myDiv2");
			var handleMyButton2=on(
				myButton2,
				"click",
				function(evt){
					domStyle.set(
						myDiv2,
						"backgroundColor",
						"#FF0000"
					);
					var handleMyDiv2Enter=on(
						myDiv2,
						mouse.enter,
						function(evt){
							domStyle.set(
								myDiv2,
								"backgroundColor",
								"#FFFF00"
							);
							handleMyDiv2Enter.remove();
						}
					);
					var handleMyDiv2Leave=on(
						myDiv2,
						mouse.leave,
						function(evt){
							domStyle.set(
								myDiv2,
								"backgroundColor",
								"unset"
							);
							handleMyDiv2Leave.remove();
						}
					);
					handleMyButton2.remove();
				}
			);
		}
		//on.once (same as above)
		{
			var myButton3=dom.byId("myButton3");
			var myDiv3=dom.byId("myDiv3");
			on.once(
				myButton3,
				"click",
				function(evt){
					domStyle.set(
						myDiv3,
						"backgroundColor",
						"#FF0000"
					);
					on.once(
						myDiv3,
						mouse.enter,
						function(evt){
							domStyle.set(
								myDiv3,
								"backgroundColor",
								"#FFFF00"
							);
						}
					);
					on.once(
						myDiv3,
						mouse.leave,
						function(evt){
							domStyle.set(
								myDiv3,
								"backgroundColor",
								"unset"
							);
						}
					);
				}
			);
		}
		//lang.hitch for context
		{
			var myButton4=dom.byId("myButton4");
			var myDiv4=dom.byId("myDiv4");
			this.color1="#FF0000"
			this.color2="#FFFF00"
			this.color3="#00FF00"
			on.once(
				myButton4,
				"click",
				lang.hitch(this,function(evt){
					//context is now parent...
					domStyle.set(
						myDiv4,
						"backgroundColor",
						this.color1//enabling access to this
					);
					on.once(
						myDiv4,
						mouse.enter,
						lang.hitch(this,function(evt){
							//context is now parent...
							domStyle.set(
								myDiv4,
								"backgroundColor",
								this.color2//enabling access to this
							);
						})
					);
					on.once(
						myDiv4,
						mouse.leave,
						lang.hitch(this,function(evt){
							//context is now parent...
							domStyle.set(
								myDiv4,
								"backgroundColor",
								this.color3//enabling access to this
							);
						})
					);
				})
			);
		}
		//nodelist click
		{
			var msg=query("#msg")[0];
			var count=0;
			var maxcount=4;
			window.msg=msg;
			//query.on returns an array of handles to manipulate later on
			var handles=query("#nodelist>button").on("click",function(){
				console.log("fire executed");
				if(count>maxcount){
					console.log('removing handles');
					///like this...
					//handles.forEach(function(h,hidx){h.remove()});
					//or like this
					handles.remove();
					domAttr.set(msg,"innerHTML","handles removed");
				}else{
					domAttr.set(msg,"innerHTML",this.id+"["+(maxcount-count)+" clicks left]");
					count++;
				}
			});
		}
		//event delegation
		{
			var msg=query("#msgEvtDel")[0];
			var nod=dom.byId("nodelistEvtDel")
			var count=0;
			var maxcount=4;
			//required: dojo/query (used by on)
			//note first and second argument, a node, and a query
			//this then is event delegation
			var handles=on(nod,"#clickMe:click",function(){
				console.log("fire executed");
				if(count>maxcount){
					console.log('removing handles');
					///like this...
					//handles.forEach(function(h,hidx){h.remove()});
					//or like this
					handles.remove();
					domAttr.set(msg,"innerHTML","handles removed");
				}else{
					domAttr.set(msg,"innerHTML",this.id+"["+(maxcount-count)+" clicks left]");
					count++;
				}
			});
		}

		console.log('main:end');
	}
);

