create schema database1;
use database1;

create table table1 (
	id int primary key,
    firstName varchar(30),
    lastName varchar(30),
    birthDate varchar(10)
);

insert into table1 values (01, 'Rahim', 'Mia', 1999);

select * from table1;