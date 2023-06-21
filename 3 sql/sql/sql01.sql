
create database db1;

drop table db1.student;
use db1;

create table Student(
	sId int,
    firstName varchar(50),
    lastName varchar(50),
    birthDate date,
    address varchar(50),
    primary key (sId));
    


insert into student 
	(sId, firstName, lastName, birthDate, address) 
	values(1001, 'Moin', 'Sarkar', '1996-01-01', 'Dhaka');
insert into student  
	values (1002, 'Saba', 'Maria', '2009-01-17', 'Rajshahi');
insert into student 
	values (1003, 'Sanzida', 'Mim', '1998-01-15', 'Pabna');
    
update student set birthDate = '1996-05-11' where (sId = '1001'); 


select * from student;
select * from student
where lastName in ('Sarkar', 'Maria') and sId>1001;

    
    
    
    
create table book(
	B_No int,
    B_Name varchar(50),
    B_Author varchar(50),
    B_Price int);

alter table book
	change column B_No bId int,
    change column B_Name bName varchar(50),
    change column B_Author bAuthor varchar(50),
    change column B_Price bPrice int,
    add primary key (bId);

insert into book(
	bId, bName, bAuthor, bPrice)
    values('101', 'Distributed Database', 'Ross', '700');
insert into book(
	bId, bName, bAuthor, bPrice)
    values('102', 'Database Concept', 'Ross', '570');
insert into book(
	bId, bName, bAuthor, bPrice)
    values('103', 'Discrete Mathematics', 'Kenneth H Rosen', '430');

update book set bPrice = '530' where (bId = '103');	

alter table book
	drop column bPrice;
alter table book
	add column bPrice varchar(50);
alter table book
	add column bPrice2 varchar(50) after bPrice;
insert into book (
	bId, bName, bAuthor, bPrice) values ('104', 'Network System', 'Mark H', '560');
insert into book (
	bId, bName, bAuthor, bPrice, bPrice2) values ('105', 'Network System', 'Mark H', '560', '550');
update book set bPrice = '450' where (bId = '101');
update book set bPrice = '550' where (bId = '102');
update book set bPrice = '400' where (bId = '103');

CREATE TABLE employee (
    eId INT,
    eName VARCHAR(50),
    eSalary INT,
    PRIMARY KEY (eId)
);
    
alter table employee add column eAddress varchar(50);

insert into employee (
	eId, eName, eSalary, eAddress) 
    values('1001', 'Rahim Mia', '25000', 'Mirpur, Dhaka');
    
insert into employee (
	eId, eName, eSalary, eAddress) values('1002', 'Rahim Mia', '25000', 'Mirpur, Dhaka');
    
update employee set eName = 'Karim' where (eId = '1002'); 
update employee set eSalary = '30000' where (eId = '1002');
update employee set eAddress = 'Rangpur' where (eId = 1002);

insert into employee values(1003, 'Rakib Mahmud', 30000, 'Banani, Dhaka');

select * from employee;

select eId from employee;
select eName from employee;
select eId, eName 
	from employee 
    order by eName desc;
select eId, eName 
	from employee 
    order by eName asc;
select * from  book;

select * from student;











