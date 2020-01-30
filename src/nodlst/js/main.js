require(
	[
		//'lnksys/logger',
		'lnksys/widget/dialog/Dialog',
		'lnksys/widget/toast/Toast',
		'dojo/dom',
		'dojo/dom-construct',
		'dojo/query',
		'dojo/on',
		'dojo/keys',
		'dojo/mouse',
		//'dojo/NodeList-traverse',
		'dojo/NodeList-data',
		'dojo/NodeList-dom',
		'dojo/NodeList-traverse',
		'dojo/NodeList-manipulate',
		'dojo/NodeList-html',
		'/js/testwidget.js',
		'dojo/domReady!'

	],
	function(
		//logger,
		dlg,
		toast,
		dom,
		domConstruct,
		query,
		on,
		keys,
		mouse,
		nodeListData,
		nodeListDom,
		nodeListTraverse,
		nodeListManipulate,
		nodeListHtml,
		testwidget
	){
		window.t=testwidget;
		console.log('main:start');
		var t=new toast();
		//example0
		{
			var nodes=null;
			nodes=query("#example0 li.fresh");
			nodes.on(
				"click",
				function(){
					t.toast(
						{
							text:'Fresh',
							loaderBg:"blue"
						}
					);
				}
			);
			nodes=query("#example0 li.dried");
			nodes.on(
				"click",
				function(){
					t.toast(
						{
							text:'Dried',
							loaderBg:"red"
						}
					);

				}
			);
		}
		//example1
		{
			var nodes=null;
			nodes=query("#example1 li.fresh:not(.dried)");
			nodes
				.addClass("badge-info")
				.attr("status","in stock")
				.on(
					"click",
					function(a){
						t.toast(
							{
								text:a.target.innerText+': In Stock',
								loaderBg:"blue"
							}
						);
					}
				)

			;
			nodes=query("#example1 li.dried:not(.fresh)");
			nodes
				.addClass("badge-danger")
				.attr("status","in stock")
				.on(
					"click",
					function(a){
						
						t.toast(
							{
								text:a.target.innerText+': Limited Stock',
								loaderBg:"orange"
							}
						);
					}
				)
			;
			nodes=query("#example1 li.fresh.dried");
			nodes
				.addClass("badge-warning")
				.attr("status","out of stock")
				.style("opacity","0.5")
				.on(
					"click",
					function(a){
						t.toast(
							{
								text:a.target.innerText+': Out of Stock',
								loaderBg:"red"
							}
						);
					}
				)

			;
		}
		//example2
		{
			query("#example2 li")
				.data(
					"updated",
					{
						date:new Date(),
						userdata:["foo","bar","baz"][Math.floor(Math.random()*3)]
					}
				)
				.on(
					"click",
					function(a){
						//acq data via dojo/NodeList-data, mapped to nodeListData for ctor
						var dataNode=new nodeListData(this);
						t.toast(
							{
								text:a.target.innerText+': date: '+JSON.stringify(dataNode.data("updated"),0,'\t'),
								loaderBg:"red"
							}
						);
						//upd data
						dataNode.data(
							"updated",
							{
								date:new Date(),
								userdata:["foo","bar","baz"][Math.floor(Math.random()*3)]
							}
						);
					}
				)
		}
		//example3
		{
			query("#example3 #item").on(
				"click",
				function(){
					nodeListDom(this)
						.closest("#groups")
						.query(".badge-dark")
						.removeClass("badge-dark")
					;
					//.removeClass('badge-info');
					nodeListDom(this).closest("#group")
						.addClass("badge-dark")
					;
					nodeListDom(this).children('span')
						.addClass("badge-warning")
					;
					t.toast(this.innerText+" selected");
				}
			);
		}
		//example4
		{
			query("#example4 #lstSrc li").on(
				"click",
				function(){
					var clone=query(this).clone();
					clone.removeClass('badge-info');
					clone.addClass('badge-'+['warning','info','danger','success','info'][Math.floor(Math.random()*5)]);
					clone.on(
						"click",
						function(){
							query("#example4 #lstTgt2").append(query(this).clone());
							query(this).remove();
						}
					);
					query("#example4 #lstTgt1").append(clone);
				}
			);
		}
		//example5
		{
			function addContent(){
				query("#example5 #content")
					.html(
						'<div data-dojo-props="msg:\''+Math.random()+'\'" data-dojo-type="TestWidget"></div>',
						{
							onBegin:function(){
								t.toast("onBegin");
								console.log(this.node);		//dom node
								console.log(this.content);	//textual
								//sample preprocess template
								query(this.node)
									.attr('timestamp',new Date())
								;
								this.inherited("onBegin",arguments);
							},
							onEnd:function(){
								t.toast("onEnd");
								this.inherited("onEnd",arguments);
							},
							parseContent:true
						}
					)
			}
			query("#example5 #btn")
				.on(
					"click",
					function(){
						addContent();
					}
				)
		}
		console.log('main:end');
	}
);

