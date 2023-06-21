CREATE DATABASE `login`;
 
CREATE TABLE `login`.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

use login;
INSERT INTO `users` VALUES (1, "Moin", "5f4dcc3b5aa765d61d8327deb882cf99");

