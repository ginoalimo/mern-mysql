--Table tasks
CREATE TABLE tasks (
    id int primary key auto_increment,
    title varchar(200) not null,
    description varchar(300),
    done boolean not null default 0,
    createAt timestamp not null default current_timestamp
);