drop schema university;
create schema university;

create database university;
drop database university;
use university;


select * from advisor;
select * from department;

select dept_name, avg(salary)
from instructor
group by dept_name;

select avg(salary)
from instructor;

select dept_name, count(distinct id) as instructor_count
from instructor natural join teaches
where semester= 'spring' and year = 2010
group by dept_name;

select *
from instructor natural join teaches;

select count(distinct id) as instructor_count, dept_name
from instructor natural join teaches
where semester="spring" and year= 2010
group by dept_name;
use university;

select dept_name, avg(salary) as avg_salary
from instructor
group by dept_name
having avg(salary)>42000
order by avg_salary desc, dept_name asc;

select *
from takes natural join student;

select course_id, avg(tot_cred)
from takes natural join student
where year = 2009
group by course_id
having count(id)>=2;

select sum(salary)
from instructor;

use moin;
create table price
	(name varchar(15),
     pric decimal(5,0));
     
insert into price values ("Mango", 5);
insert into price values ("Guava", 4);
insert into price values ("Banana", 0);
insert into price values ("Pineapple", 3);

select avg(pric)
from price;






/*
Set membership/ Nested sub-queries (in, not in) - clause */


use university;

select distinct course_id
from section
where semester = 'fall' and year = 2009 and 
	course_id in (select course_id 
				  from section
                  where semester = 'spring' and year = 2010);
                  
(select course_id
 from section
 where semester = 'fall' and year = 2009)
 union
(select course_id
 from section
 where semester = 'spring' and year = 2010);

 
select distinct course_id
from section
where semester = 'fall' and year = 2009 and 
	course_id not in (select course_id 
				  from section
                  where semester = 'spring' and year = 2010);

select distinct course_id
from takes
where semester = 'fall' and year = 2009 and 
	course_id not in (select course_id 
				  from takes
                  where semester = 'spring' and year = 2010);
                  
select name
from instructor
where name not in ('mozart', 'einstein');


select distinct course_id
from teaches
where id=10101;

select course_id
from teaches
where id=83821;

select count(distinct id)
from takes
where course_id in (select distinct course_id
					from teaches
					where id=10101);


select count(distinct id)
from takes
where (course_id, sec_id, semester, year) in (select course_id, sec_id, semester, year
											  from teaches
											  where id=10101);
                                              
select course_id, sec_id, semester, year
from teaches
where id=10101;

use university;

select dept_name, name
from instructor;

select dept_name, salary
from instructor
where dept_name = 'comp. sci.';


select distinct i.salary
from instructor as I, instructor as M
where m.dept_name = 'comp. sci.' and i.salary>m.salary
order by i.salary desc, i.name asc;

-- greater than at least one (> some)
select distinct salary
from instructor
where salary > some (select salary
					 from instructor
                     where dept_name = 'comp. sci.')
                     order by salary desc;

-- greater than all (> all)                     
select salary
from instructor
where salary > all (select salary
					 from instructor
                     where dept_name = 'comp. sci.')
                     order by salary desc;

-- intersect (= some)
select salary
from instructor
where salary = some (select salary
					 from instructor
                     where dept_name = 'comp. sci.')
                     order by salary desc;

-- except (<> all)
select salary
from instructor
where salary <> all (select salary
					 from instructor
                     where dept_name = 'comp. sci.')
                     order by salary desc;


/* select departmet who has the highest average salary */
select dept_name
from instructor
group by dept_nameclassroominstructor
having avg(salary) >= all (select avg(salary)
					   from instructor
                       group by dept_name);


select *
from student as s join takes as t
on s.id = t.id;

select *
from student as s, takes as t
where s.id = t.id;

select *
from student natural join takes;
use university;


select *
from student natural left outer join takes;

select id
from student natural left outer join takes
where course_id is null;


select *
from takes natural right outer join student;

select * 
from takes natural join student;


select *
from 
	(select *
	 from student
	 where dept_name='comp. sci.') as A
natural full outer join
	(select *
	 from takes
	 where semester='spring' and year=2009) as B;


select *
from student natural left outer join takes;

select *
from student left outer join takes
on student.id = takes.id;

select *
from student join takes
on student.id = takes.id;

select *
from student join takes using (id);     -- natural join

select *
from student, takes
where student.id = takes.id;

select *
from instructor natural join teaches natural join course;
select *
from (instructor natural join teaches) join course using (course_id);
select *
from (instructor join teaches using (id)) join course using (course_id);


select *
from instructor natural join teaches, course
where teaches.course_id=course.course_id;

select id, name, dept_name
from instructor;



select course.course_id, sec_id, building, room_number, semester, year
from course, section
where course.course_id = section.course_id
	and dept_name = 'comp. sci.'
    and semester = 'fall'
    and year = 2009
union
(select course.course_id, sec_id, building, room_number, semester, year
from course, section
where course.course_id = section.course_id
	and dept_name = 'comp. sci.'
    and semester = 'spring'
    and year = 2010);


create view faculty as 
select id, name, dept_name
from instructor;


create view physics_fall_2009 as 
select course.course_id, sec_id, building, room_number
from course, section
where course.course_id = section.course_id
	and dept_name = 'physics'
    and semester = 'fall'
    and year = 2009;









