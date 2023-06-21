
create database database1;

drop table employee;
create table databemployeease1.employee(
	empId int primary key,
    firstName varchar(50), 
    lastName varchar(50),
    birthDate date,
    sex varchar(1),
    salary int,
    supervisorId int,
    branchId int
);

select * from employee;
    
create table branch(
	branchId int primary key,
    branchName varchar(30),
    managerId int,
    managerStart date,
    foreign key (managerId) references employee(empId) on delete set null
);
select * from branch; 

  

alter table employee
	add foreign key (branchId) references branch(branchId) on delete set null,
	add foreign key (supervisorId) references employee(empId) on delete set null;
select * from employee;

create table clients(
	clientId int primary key,
    clientName varchar(50),
    branchId int,
    foreign key (branchId) references branch(branchId) on delete set null
);
select * from  clients;

create table works_with(
	empId int,
    clientId int,
    totalSales int,
    primary key (empId, clientId),
    foreign key (empId) references employee(empId) on delete cascade,
    foreign key (clientId) references clients(clientId) on delete cascade
);
    
    
create table branch_supplier(
	branchId int,
    branchName varchar(30),
    supplyType varchar(30),
    primary key (branchId, branchName),
    foreign key (branchId) references branch(branchId) on delete cascade
);




