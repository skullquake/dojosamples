GO=go
SRC=./srv.go
BIN=./srv
DBPATH	= ./db
DBPORT	= 6000
DBHOST	= 127.0.0.1
DBNAM	= test
DBUSRNAM= test
DBUSRPAS= 1
DBUSRROL= NOSUPERUSER
BAKROT=./bak
BAKDIR=$(BAKROT)/$(DIRNAM)
ERRLOG=./log/err.log
$(BIN): $(SRC)
	$(GO)\
		build\
		-o $(BIN)\
		$(SRC)
.phony:clean
clean:
	rm $(BIN)
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
dbrm:./db
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
dbpsql:
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
