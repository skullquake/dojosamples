DBMSRegister(
	"lnks",
	"driver=postgres",
	"username=test",
	"password=test",
	//"database=mx7235",//can ommit
	"database=test",//can ommit
	"host=127.0.0.1:6000",
	"sslmode=disable"
);
InvokeListener("0.0.0.0:1111");
MAPRoots("/","/data/data/com.termux/files/home/src/skullquake/dojosamples/src/oops");
MAPRoots("lib/","/data/data/com.termux/files/home/src/skullquake/dojosamples/src/lib");
MAPRoots("sjs/","/data/data/com.termux/files/home/src/skullquake/dojosamples/src/lib/sjs");
MAPRoots("zippy/","/data/data/com.termux/files/home/src/skullquake/dojosamples/src/lib/test.zip");
