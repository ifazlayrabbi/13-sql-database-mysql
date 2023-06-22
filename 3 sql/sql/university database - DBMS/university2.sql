-- create schema university;
-- show databases;

create table barger (	
  id int,
  tot_item int not null check (tot_item > 10 and tot_item < 50),
  expiry_date date,
  building varchar(30),
  primary key (id),
  foreign key (building) references classroom (building)
);

insert into barger values (1, 49, "2023-12-20", "Painter");
insert into barger values (2, 11, "2023-12-20", "Painter");


select * from barger;
drop table barger;



create table Mentor (
  id int,
  dept varchar(30) not null,
  salary int not null check (salary > 40000),
  primary key (id)
);

insert into Mentor values (1, 'comp_science', 45000);
insert into Mentor values (2, 'biology', 41000);
insert into Mentor values (3, 'comp_science', 55000);
insert into Mentor values (4, 'biology', 49000);

select * from Mentor;

select dept, avg(salary) as avg_salary
from Mentor
group by dept;

select avg(salary)
from mentor;
