-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: vehicle_system
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (5,'2017-03-15','2017-03-15',34653463456,0,6,6),(38,'2019-12-26','2019-12-27',330,1,1,5);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'USER'),(2,'ADMIN');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','user','1',21,'Male','9898767654','user@gmail.com',1,'Hyderabad'),(2,'admin','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','admin',NULL,22,'Male','9898767654','admin@gmail.com',1,'Hyderabad'),(6,'user3','$2a$10$QKOApoRx4Gg.NqJ7CjI4RuayxR4Bj3tm6VnFHgmiKR1ulmUWfDH/y','user','3',31,'Male','9898767654','user@gmail.com',1,'Hyderabad'),(8,'usera','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','user','four',23,'Male','1234567','user@gmail.com',1,'Hyderabad'),(9,'userb','$2a$10$G4YfgETzlnToZnLm0aCXaOIPlFAtzTymTOdBUEj.mpvPX6tkhoNfm','user','b',21,'Male','1234567898','as@gmail.com',1,'chennai');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,1,1),(2,2,2),(6,6,1),(8,8,1),(9,9,1);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (4,'Honda City','TS 09 C 6678','Hatchback Car','2017-03-15','2017-03-15','2017-03-15','Hyderabad',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_0nXUrkY6M7k3jhMZ6j73jahyThbcyfNt1-OxhdhuU2eifdYt',200,0),(5,'Xuv 500','TS 09 C 6676','SUV Car','2017-03-15','2017-03-15','2017-03-15','Gachibowli',1,'https://wheels.iconmagazine.it/content/uploads/2018/09/Mahindra-XUV500.jpg',330,1),(6,'Scorpio','TS 09 C 6656','SUV Car','2017-03-15','2017-03-15','2017-03-15','Gachibowli',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj6PvhArvAMi2TM3c6Lj5xARQ4xuSmrB2QPuxQ1f3u9NltzBnB',320,1),(8,'Hyundai i20','TS 09 C 6564','Sedan Car','2019-10-10','2019-10-10','2019-10-10','Hitech city',1,'https://images.financialexpress.com/2019/10/9-16.jpg?w=420&h=280&imflag=true',210,0),(9,'Maruti suzuki Swift','TS 09 C 6500','Sedan Car','2019-10-10','2019-10-10','2019-10-10','Hitech city',0,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-qUcYCATg5LyMONdlVVs9V4O-v36-O_oPjVbCoMLhur-YKor6',250,0),(11,'Renault Duster','TS 09 C 6600','SUV Car','1970-01-01','1970-01-01','1970-01-01','Hitech',0,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPesC9fK58iXLaXNH14z5Orx2_TY3hTvaYQ-cpzIqrDVDF6nf6',310,0),(12,'Renault Duster','TS 09 C 6600','SUV Car','1970-01-01','1970-01-01','1970-01-01','Hitech',0,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPesC9fK58iXLaXNH14z5Orx2_TY3hTvaYQ-cpzIqrDVDF6nf6',310,0);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-03 10:07:43
