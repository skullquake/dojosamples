require(
	[
		'dojo/dom',
		'dojo/domReady!'
	],
	function(
		dom
	){
		console.log("--------------------");
		console.log('start');
		try{
			console.log($("#msg"));
			console.log(dom.byId("msg"));
			console.log(dojo.version);
			var nod=dom.byId("msg");
			nod.innerHTML='';
			nod.innerHTML+=JSON.stringify(dojo.version)+'<br/>';
			for(var i=0;i<32;i++){
				nod.innerHTML+=i+'<br/>';
			}
		}catch(e){
			console.error(e.toString());
		}
		console.log('end');
	}
);

