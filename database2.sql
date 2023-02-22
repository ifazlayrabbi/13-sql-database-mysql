
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