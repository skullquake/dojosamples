require(
	[
		'lnksys/logger',
		'dojo/dom',
		'dojo/dom-construct',
		'dojo/on',
		'dojo/domReady!'

	],
	function(
		logger,
		dom,
		domConstruct,
		on,
		request
	){
		console.log('main:start');
		//querying
		{
			function setText(node,text){
				node=dom.byId(node);
				node.innerHTML=text;
			}
			var one=dom.byId("one");
			setText(one,"One has been set");
			setText("two","Two has been set");
		}
		//creation
		{
			var list=dom.byId("list");
			var three=dom.byId("three");
			domConstruct.create(
				"li",
				{
					innerHTML:"Size"
				},
				list
			);
			domConstruct.create(
				"li",
				{
					innerHTML:"Seven",
					className:"seven",
					style:{
						color:"#FF0000"
					}
				},
				list
			);
			domConstruct.create(
				"li",
				{
					innerHTML:"Three and a half",
					style:{
						color:"#FFFF00"
					}
				},
				three,
				"after"
			);
		}
		//placement
		{
			function moveFirst(){
				var list=dom.byId("list");
				var three=dom.byId("three");
				domConstruct.place(
					three,
					list,
					"first"
				);
			}
			on(dom.byId("moveFirst"),"click",moveFirst);
			function moveBeforeTwo(){
				var two=dom.byId("two");
				var three=dom.byId("three");
				domConstruct.place(
					three,
					two,
					"before"
				);
			}
			on(dom.byId("moveBeforeTwo"),"click",moveBeforeTwo);
			function moveBeforeTwo(){
				var two=dom.byId("two");
				var three=dom.byId("three");
				domConstruct.place(
					three,
					two,
					"before"
				);
			}
			on(dom.byId("moveBeforeTwo"),"click",moveBeforeTwo);
			function moveAfterFour(){
				var four=dom.byId("four");
				var three=dom.byId("three");
				domConstruct.place(
					three,
					four,
					"after"
				);
			}
			on(dom.byId("moveAfterFour"),"click",moveAfterFour);
			function moveLast(){
				var list=dom.byId("list");
				var three=dom.byId("three");
				domConstruct.place(
					three,
					list
				);
			}
			on(dom.byId("moveLast"),"click",moveLast);
			function destroyFirst(){
				var list=dom.byId("list");
				items=list.getElementsByTagName("li");
				if(items.length){
					domConstruct.destroy(items[0]);
				}
			}
			on(dom.byId("destroyFirst"),"click",destroyFirst);
			function destroyAll(){
				domConstruct.empty("list");
			}
			on(dom.byId("destroyAll"),"click",destroyAll);
		}


		console.log('main:end');
	}
);

