CREATE TABLE `test_model`
(
  `id`          int(11) NOT NULL AUTO_INCREMENT,
  `name`        varchar(255) DEFAULT NULL,
  `age`         int(11)      DEFAULT NULL,
  `modify_time` datetime     DEFAULT NULL,
  `create_time` datetime     DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8;


  insert into     `test_model`(`id`,`name`,`age`,`modify_time`,`create_time`) values(1,'李四',18,'2019-03-04 09:52:09','2019-03-04 09:52:11');
