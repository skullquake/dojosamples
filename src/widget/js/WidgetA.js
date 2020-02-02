<@ CPrintln("/js/WidgetA"); @>
define(
	[
		 "dojo/_base/declare"
		,"dijit/_WidgetBase"
		,"dijit/_TemplatedMixin"
		,"dijit/parser"
		,"dojo/on"
		,"dojo/_base/lang"
		,"dojo/ready"
	],
	function(
		declare,
		_WidgetBase,
		_TemplatedMixin,
		parser,
		on,
		lang,
		ready
	){
		declare(
			"WidgetA",
			[
				_WidgetBase,
				_TemplatedMixin
			],
			{
				//central container, autopopulated
				domNode:null,
				//html template
				templateString:'<div class="alert" data-dojo-attach-point="msgNode"></div>',
				//initialize widget data from both default and run-time values
				constructor:function(){
					this.log("constructor");
					//this.inherited(arguments);
				},
				postscript:function(){
					this.log("postscript");
					this.inherited(arguments);
				},
				postMixInProperties:function(){
					this.log("postMixInProperties");
					this.inherited(arguments);
				},
				buildRendering:function(){
					this.log("buildRendering");
					this.inherited(arguments);
				},
				//fired after all props are set, prior to DOM frag[s] DOC loading
				postCreate:function(){
					this.log("postCreate");
					//setup handles
					this.inherited(arguments);
				},
				//handle processing after DOM frag[s] are loaded in DOC
				//call manually when instantiating programatically
				startup:function(){
					this.log("startup")
					this.inherited(arguments);
				},
				//advisable to call destroyRecursive in programmatic mode
				destroyRecursive:function(){
					this.warn("destroyRecursive")
					this.inherited(arguments);
				},
				destroyDescendeants:function(){
					this.warn("destroyDescendeants")
					this.inherited(arguments);
				},
				//central destruction method
				destroy:function(){
					this.warn("destroy")
					this.inherited(arguments);
				},
				uninitialize:function(){
					this.warn("uninitialize")
					this.inherited(arguments);
				},
				destroyRendering:function(){
					this.warn("destroyRendering")
					this.inherited(arguments);
				},
				//user fields
				foo:null,
				msg:'no message',
				//user field foo setters/getters
				//  standard interaction allowing computation, frag updates, and pub/sub
				_setFooAttr:function(val){
					console.warn("_setFooAttr")
						//och pattern
					this.ochFooAttr(this.foo,val);
					this.foo=val
					return this.foo;
				},
					//och pattern
				ochFooAttr:function(oldVal,newVal){
					console.warn("ochFooAttr()")
					if(oldVal==newVal)
						console.warn("ochFooAttr():SAME");
					else
						console.warn("ochFooAttr():DIFFERENT");
				},
				_getFooAttr:function(){
					return this.foo;
				},
				//user field setters/getters
				_setMsgAttr:{
					node:'msgNode',
					type:'innerHTML'
				},
				msgClass:"alert alert-dark",
				_setMsgClassAttr:{
					node:'msgNode',
					type:'class'
				},
				log:function(a){
					console.log(((this.id==null||this.id=="")?"NO ID YET":this.id)+":"+a.toString());
				},
				warn:function(a){
					console.warn(((this.id==null||this.id=="")?"NO ID YET":this.id)+":"+a.toString());
				},
				error:function(a){
					console.error(((this.id==null||this.id=="")?"NO ID YET":this.id)+":"+a.toString());
				},
				debug:function(a){
					console.debug(((this.id==null||this.id=="")?"NO ID YET":this.id)+":"+a.toString());
				}
			}
		);
		ready(function(){
			dojo.parser.parse();
		});
	}
);
