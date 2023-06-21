
create database engineering;
use engineering;

drop table proj;
drop table pay;
drop table emp;
drop table asg;
    

create table proj
	(pNo		varchar(2),
     pName		varchar(20),
	 budget		numeric(6,0),
     loc 		varchar(10),
	 primary key (pNo)
	);
    
create table pay
	(title		varchar(15),
	 sal		numeric(5,0),
	 primary key (title)
	);
 
create table emp
	(eNo		varchar(2),
     eName		varchar(10),
	 title		varchar(15),
	 primary key (eNo),
     foreign key (title) references pay (title)
		on delete set null
	);
    
create table asg
	(eNo		varchar(2),
     pNo		varchar(2),
     resp		varchar(15),
	 dur		numeric(2,0),
	 primary key (eNo, pNo),
     foreign key (eNo) references emp (eNo)
		on delete cascade,
	 foreign key (pNo) references proj (pNo)
		on delete cascade
	);
    

