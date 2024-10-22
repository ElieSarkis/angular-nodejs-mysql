CREATE DATABASE  IF NOT EXISTS `cities_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cities_db`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: cities_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `name_native` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `continent` varchar(45) NOT NULL,
  `latitude` varchar(45) NOT NULL,
  `longitude` varchar(45) NOT NULL,
  `population` int NOT NULL,
  `founded` int NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Sydney','Sydney','Australia','Australia','-33.865143','151.209900',5312000,1788,'cities/1704732608587.png'),(2,'New York City','New York City','USA','North America','40.730610','-73.935242',8419000,1624,'cities/1704732669971.png'),(3,'Madrid','Madrid','Spain','Europe','40.416775','-3.703790',3223000,1083,'cities/1704733504245.png'),(4,'Moscow','Москва','Russia','Europe','55.751244','37.618423',11920000,1147,'cities/1704458661110.png'),(5,'Tokyo','東京','Japan','Asia','35.652832','139.839478',13960000,1603,'cities/1704458677869.png'),(6,'Lagos','Lagos','Nigeria','Africa','6.465422','3.406448',14800000,1914,'cities/1704458695626.png'),(7,'Sao Paulo','São Paulo','Brazil','South America','-23.533773','-46.625290',12330000,1554,'cities/1704458708056.png'),(8,'Munich','München','Germany','Europe','48.137154','11.576124',1472000,1158,'cities/1704534397390.png');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `landmarks`
--

DROP TABLE IF EXISTS `landmarks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `landmarks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city_id` int DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `landmarks_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `landmarks`
--

LOCK TABLES `landmarks` WRITE;
/*!40000 ALTER TABLE `landmarks` DISABLE KEYS */;
INSERT INTO `landmarks` VALUES (1,1,'Sydney Opera House'),(2,1,'Sydney Harbour Bridge'),(3,1,'Queen Victoria Building'),(4,2,'Chrysler Building'),(5,2,'Brooklyn Bridge'),(6,2,'Madison Square Garden'),(7,3,'Royal Palace'),(8,3,'Plaza Mayor'),(9,3,'Plaza de Cibeles'),(10,4,'Saint Basil\'s Cathedral'),(11,4,'Kremlin'),(12,4,'Bolshoi Theatre'),(13,5,'Meji Shrine'),(14,5,'Asakusa'),(15,5,'Tokyo Skytree'),(16,6,'Iga Idungaran'),(17,6,'Freedom Park'),(18,6,'The Cathedral Church of Christ'),(19,7,'Mosteiro De Sao Bento'),(20,7,'Italian Building'),(21,7,'Farol Santander'),(22,8,'Bavaria statue'),(23,8,'Marienplatz'),(24,8,'ottonova office');
/*!40000 ALTER TABLE `landmarks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-08 20:34:48
