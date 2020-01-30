<@
// curl -X POST -H "Content-type: application/jsonz" -H "X-foo: fooval" -d '{"asdf":"foo","qwer":["asdf":"fdsa","qwer":"rewq"]}' "http://localhost:1111/sjs/parameters.js?uk0=uv0&uk1=uv1"
CPrintln("parameters");
try{
	function printkeys(o){
		if(o!=null){
			out.Println("\ttype: "+typeof(o));
			Object.keys(o).forEach(function(k,kidx){
				out.Print('\t'+k+":"+typeof(o[k]));
				out.Print("\n");
			});
		}else{
			out.Println("NULL!");
		}
		out.Print('\n');
	}
	function parametersToJson(o){
		var ret={}
		Parameters().StandardKeys().forEach(function(k,kidx){
			ret[k]=Parameters().Parameter(k)[0];
		});
		return ret;
	}
        function getBody(){
		return request.RequestContent();
	}
	out.Println("----------------------------------------");
	out.Println("Parameters:");
	Parameters().StandardKeys().forEach(function(k,kidx){
		out.Println(k+":"+Parameters().Parameter(k)[0]);
	});
	out.Println("----------------------------------------");
	out.Println("Headers:");
	[
		"Content-type",
		"X-Foo",
		"X-Bar",
		"X-Baz",
		"X-Qux"
	].forEach(function(k,kidx){
		out.Println(
			k+":"+
			request.RequestHeaders().Get(k)
		);
	})
	out.Println("----------------------------------------");
	out.Println("Body:");
	out.Println(getBody());
	out.Println("----------------------------------------");
	//printkeys(Parameters())
}catch(e){
	out.Print(e.toString());
}
@>
