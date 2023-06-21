create database login_registration;
use login_registration;
drop table users;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `salt` text NOT NULL,
  `active` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1 ;

INSERT INTO `login_registration`.`users` (`id`, `username`, `password`, `first_name`, `last_name`, `contact`, `address`, `salt`, `active`) VALUES ('1', 'moin', '1234', 'Moin', 'Sarkar', '01781113433', 'Dhaka', '1', '1');

