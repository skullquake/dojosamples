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
MAPRoots("lib/","/data/data/com.termux/files/home/src/skullquake/dojosamples/src/lib");
//MAPRoots("git","https://raw.githubusercontent.com/skullquake/dojosamples/master/src/dom/index.html");
MAPRoots("git","https://raw.githubusercontent.com/skullquake/dojosamples/master/src/dom/");
//MAPRoots("art","https://inovosandbox-sandbox.mxapps.io/filesystem/public/art");
//MAPRoots("asdf","https://www.google.com");

