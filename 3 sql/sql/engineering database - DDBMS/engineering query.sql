use engineering;

select *
from emp, asg, proj
where emp.eNo = asg.eNo
and asg.pNo = proj.pNo
and eName != 'J. Doe'
and pName = 'CAD/CAM'
and (dur >= 12 or dur = 24);


select * from asg;

select eName
from emp, asg -- Cartesian Product
where emp.eNo=asg.eNo
and resp='Manager';

select eName
from emp natural join asg -- Natural Join 
where resp='Manager';



