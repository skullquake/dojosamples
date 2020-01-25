//DBMSRegister("lnks", "driver=postgres", "username=postgres", "password=", "host=127.0.0.1:6000", "sslmode=disable");
DBMSRegister(
	"lnks",
	"driver=postgres",
	"username=test",
	"password=1",
	"host=127.0.0.1:6000",
	"sslmode=disable"
);
InvokeListener("0.0.0.0:1111");
/*MAPRoots("js/","./js");*/
MAPRoots("lib/","/data/data/com.termux/files/home/src/skullquake/dojosamples/src/lib");
MAPRoots("zippy/","/data/data/com.termux/files/home/src/skullquake/dojosamples/src/lib/test.zip");
//MAPRoots("asdf","http://localhost:1111");
MAPRoots("asdf","https://raw.githubusercontent.com/skullquake/lnksyssamples/master/src");
MAPRoots("art","https://inovosandbox-sandbox.mxapps.io/filesystem/public/art");
//MAPRoots("asdf","https://www.google.com");

