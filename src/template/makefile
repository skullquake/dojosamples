GO=go
SRC=./srv.go
BIN=./srv
DBPATH	= ./db
SRVPORT = 1111
DBPORT	= 6000
DBHOST	= 127.0.0.1
DBNAM	= test
DBUSRNAM= test
DBUSRPAS= 1
DBUSRROL= NOSUPERUSER
BAKROT=./bak
BAKDIR=$(BAKROT)/$(DIRNAM)
ERRLOG=./log/err.log
LOGFMT="%Y%m%d_%H%M_%S_%3N"
LODTSTDUR=10s
$(BIN): $(SRC)
	$(GO)\
		build\
		-o $(BIN)\
		$(SRC)
.phony:clean 
clean:
	rm -r ./log/* 
	rm -r $(BIN)
.phony:		\
	run	\
	dbrm	\
	dbmk	\
	dbinit	\
	dbstop	\
	dbpsql	\
	dbsize	\
	dbdrop \
	backup \
	clean 
./db/postmaster.pid:./db
	make dbstart
./db:
	make dbmk
run: $(BIN) ./db  dbinit ./db//postmaster.pid
	mkdir -p ./log
	$(eval DIRNAM=$(shell date +"%Y%m%d%H%M%S%3N"))
	$(BIN) 2> ./log/err_$(DIRNAM).log
dbmk: 
	initdb \
		$(DBPATH)
	cp ./res/db/* $(DBPATH)
dbdrop:
	printf "DROP DATABASE $(DBNAM);"|\
		psql \
		-h $(DBHOST) \
		-p $(DBPORT) \
		postgres
dbinit:dbstart
	printf "create database $(DBNAM);CREATE USER $(DBUSRNAM) WITH PASSWORD '$(DBUSRNAM)' CREATEDB;ALTER USER $(DBUSRNAM) WITH $(DBUSRROL);GRANT ALL PRIVILEGES ON SCHEMA public TO $(DBUSRNAM);"|\
		psql \
		-h $(DBHOST) \
		-p $(DBPORT) \
		postgres
dbrm:
	rm \
		-r $(DBPATH)
dbstart:./db
	pg_ctl \
		-D $(DBPATH) \
		-o "-p $(DBPORT)" \
		start
dbstop:
	pg_ctl \
		-D $(DBPATH) \
		-o "-p $(DBPORT)" \
		stop 
dbpsql: ./db/postmaster.pid
	psql \
		-h $(DBHOST) \
		-p $(DBPORT) \
		$(DBNAM)
dbpsqlusr:
	psql \
		-h $(DBHOST) \
		-p $(DBPORT) \
		-U test \
		$(DBNAM)
dbvacuum:
	printf "vacuum full;"|\
		psql \
		-h $(DBHOST) \
		-p $(DBPORT) \
		$(DBNAM)
dbsize:
	printf "\
		select pg_database_size('$(DBNAM)'),pg_size_pretty( pg_database_size('$(DBNAM)'));\
		"|\
		psql \
		-h $(DBHOST) \
		-p $(DBPORT) \
		$(DBNAM)
sjs_dbinit:
	@curl\
                -X GET\
                http://localhost:1111/sjs/dbinit.js
sjs_dbdrop:
	@curl\
                -X GET\
                http://localhost:1111/sjs/dbdrop.js

lodtst_all:lodtst_goja lodtst_addresource lodtst_formdata lodtst_db_query lodtst_db_exec
	echo $@
$(eval TIMESTAMP= $(shell date +$(LOGFMT)))
$(eval REPORTDIR= ./log/lodtst/$(TIMESTAMP))
lodtst_dir:
	@mkdir -p $(REPORTDIR)
lodtst_goja: lodtst_dir
	echo $@
	$(eval REPORTFILE= $(REPORTDIR)/$@.json)
	@bombardier\
		-m GET\
		-d $(LODTSTDUR)\
		http://localhost:$(SRVPORT)/tst/lod/goja.js\
		-o j\
		-p r\
		|jq '.'\
		> $(REPORTFILE)
	@cat $(REPORTFILE)
lodtst_addresource: lodtst_dir
	echo $@
	$(eval REPORTFILE= $(REPORTDIR)/$@.json)
	@bombardier\
		-m GET\
		-d $(LODTSTDUR)\
		http://localhost:$(SRVPORT)/tst/lod/fib.js\
		-o j\
		-p r\
		|jq '.'\
		> $(REPORTFILE)
	@cat $(REPORTFILE)
lodtst_formdata: lodtst_dir
	echo $@
	$(eval REPORTFILE= $(REPORTDIR)/$@.json)
	@bombardier\
		-d $(LODTSTDUR)\
		-m POST\
		-H "Content-type: multipart/form-data; boundary=1234567890"\
		-b 'foo=bar;\r\nbaz=qux\r\n'\
		http://localhost:$(SRVPORT)/tst/parameters.html\
		-o j\
		-p r\
		|jq '.'\
		> $(REPORTFILE)
	@cat $(REPORTFILE)
lodtst_db_query: lodtst_dir
	echo $@
	$(eval REPORTFILE= $(REPORTDIR)/$@.json)
	@bombardier\
		-d $(LODTSTDUR)\
		-m POST\
		-H "Content-type: application/json"\
		-b '{"cmd":"ls"}'\
		http://localhost:$(SRVPORT)/xaspost.js\
		-o j\
		-p r\
		|jq '.'\
		> $(REPORTFILE)
	@cat $(REPORTFILE)
lodtst_db_exec: lodtst_dir
	echo $@
	$(eval REPORTFILE= $(REPORTDIR)/$@.json)
	@bombardier\
		-d $(LODTSTDUR)\
		-m POST\
		-H "Content-type: application/json"\
		-b '{"cmd":"ls"}'\
		http://localhost:$(SRVPORT)/xaspost.js\
		-o j\
		-p r\
		|jq '.'\
		> $(REPORTFILE)
	@cat $(REPORTFILE)
backup:
	$(eval DIRNAM= $(shell date +"%Y%m%d%H%M%S%3N"))
	@printf "Backing up to $(DIRNAM)..."
	@cp -r ./js $(BAKDIR)
	@cp -r ./sjs $(BAKDIR)
	@printf "done\n"
	@#7z a -t7z -m0=lzma2 -mx=9 -mfb=64 -md=1024m -ms=on $(BAKDIR).7z $(BAKDIR)




