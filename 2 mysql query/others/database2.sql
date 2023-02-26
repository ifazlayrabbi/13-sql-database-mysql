
show databases;
show tables;

create database database2;
use database2;

create table notes (
    id int primary key AUTO_INCREMENT,
    title varchar(255) not null,
    contents text not null,
    created TIMESTAMP not null default now()
);

insert into notes (title, contents) values
('title1', 'describes, how to play cricket'),
('title2', 'describes, how to play football');

select * from notes;
delete from notes where id=4;
delete from notes where id in (7, 20, 25); -- delete only three rows 7, 20 and 25.
delete from notes where id between 7 and 20;  -- delete all from 7 to 20.

