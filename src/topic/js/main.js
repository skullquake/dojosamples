require(
	[
		'lnksys/logger',
		'dojo/on',
		'dojo/topic',
		'dojo/dom-construct',
		'dojo/dom',
		'dojo/domReady!'

	],
	function(
		logger,
		on,
		topic,
		domConstruct,
		dom
	){
		console.log('main:start');
		var btn0=dom.byId("btn0");
		var btn1=dom.byId("btn1");
		var btn2=dom.byId("btn2");
		var btn3=dom.byId("btn3");
		var btnDropSubscriptions=dom.byId("btnDropSubscriptions");
		var msg=dom.byId("msg");
		on(
			btn0,
			"click",
			function() {
				topic.publish("setMsg", "#btn0 clicked.");
			}
		);
		on(
			btn1,
			"click",
			function() {
				topic.publish("setMsg", "#btn1 clicked.");
			}
		);
		on(
			btn2,
			"click",
			function() {
				topic.publish("setMsg", "#btn2 clicked.");
			}
		);
		on(
			btn3,
			"click",
			function() {
				topic.publish("setMsg", "#btn3 clicked.");
			}
		);
		on(
			btnDropSubscriptions,
			"click",
			function() {
				topic.publish("dropSubscriptions");
			}
		);
		var subscription=topic.subscribe(
			"setMsg",
			function(text){
				msg.innerHTML=text;
			}
		);
		var subscriptionDrop=topic.subscribe(
			"dropSubscriptions",
			function(text){
				topic.publish("setMsg", "Subscriptions Removed");
				subscriptionDrop.remove();
				subscription.remove();
			}
		);
		topic.publish("setMsg", "Make a selection.");
		console.log('main:end');
	}
);

