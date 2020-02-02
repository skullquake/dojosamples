require(
	[
		'dojo/domReady!',
		'dojo/_base/declare',
		'dojo/_base/lang',
		'lnksys/logger',
		'lnksys/widget/dialog/Dialog',
		'lnksys/widget/toast/Toast',
		'dojo/request',
		'dojo/dom',
		'dojo/query',
		'dojo/parser',
		'dijit/Dialog',
		'dojo/NodeList-traverse',
		'dojo/NodeList-manipulate',
		'dojo/NodeList-html',

	],
	function(
		ready,
		declare,
		lang,
		logger,
		dlg,
		toast,
		request,
		dom,
		query,
		parser,
		Dialog
	){
		console.log('main:start');
		parser.parse();
		var t=new toast();
		//example0
		{
			var A={
				"ak0":"av0",
				"ak1":{
					"ak11":"av11",
					"ak12":"av12",
				}
			}
			query("#example0 #obja")
				.attr("innerHTML",JSON.stringify(A,0,' '))
			;
			var B={
				"bk1":{
					"bk11":"bv11",
					"bk12":"bv12"
				},
				"bk2":"bv3"
			}
			query("#example0 #objb")
				.attr("innerHTML",JSON.stringify(B,0,' '))
			;
			lang.mixin(B,A);
			query("#example0 #objmixinab")
				.attr("innerHTML",JSON.stringify(B,0,' '))
			;
		}
		//example1
		{
			var ObjA=declare(
				null,
				{
					"foo":"bar",
					constructor:function(){
					},
					destroy:function(){
					}
				}

			);
			var objA=new ObjA();
			var objB=new ObjA();
			declare.safeMixin(
				objB,
				{
					"baz":"qux"
				}
			);
			query("#example1 #obja")
				.attr(
					"innerHTML",
					JSON.stringify(
						{
							"foo":objA.foo,
							"baz":objA.baz
						},
						0,
						' '
					)
				)
			;
			query("#example1 #objsafemixinba")
				.attr(
					"innerHTML",
					JSON.stringify(
						{
							"foo":objB.foo,
							"bar":objB.baz
						},
						0,
						' '
					)
				)
			;
		}

		//example2
		{
			var ObjA=declare(
				null,
				{
					"foo":"bar",
					constructor:function(){
					},
					destroy:function(){
					}
				}

			);
			var objA=new ObjA();
			lang.extend(
				ObjA,
				{
					"baz":"qux"
				}
			);
			var objB=new ObjA();
			query("#example2 #obja")
				.attr(
					"innerHTML",
					JSON.stringify(
						{
							foo:objA.foo,
							bar:objA.bar
						},
						0,
						' '
					)
				)
			;
			query("#example2 #objextba")
				.attr(
					"innerHTML",
					JSON.stringify(
						{
							foo:objB.foo,
							bar:objB.bar
						},
						0,
						' '
					)
				)
			;
		}
		var d=new Dialog(
			{
				title: "The Dojo Toolkit",
				content: "This is the dialog content.",
				style: "width:200px;"
			}
		);
		d.show();
		console.log('main:end');
	}
);

