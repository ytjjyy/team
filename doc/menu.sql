-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: daifu
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_role_menu`
--

DROP TABLE IF EXISTS `std_secret`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_secret` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `channel_id` bigint DEFAULT NULL COMMENT '',
  `fixed` bigint DEFAULT NULL COMMENT '',
  `mchid` varchar(1024) DEFAULT NULL COMMENT '描述',
  `secret` varchar(1024) DEFAULT NULL COMMENT '描述',
  `url` varchar(1024) DEFAULT NULL COMMENT '描述',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `std_mobile` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `channel_id` bigint DEFAULT NULL COMMENT '',
  `type` bigint DEFAULT NULL COMMENT '',
  `status` bigint DEFAULT NULL COMMENT '',
  `amount` decimal(10,2) DEFAULT NULL COMMENT '',
  `mobile` varchar(128) DEFAULT NULL COMMENT '',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_role_menu`
--

LOCK TABLES `admin_role_menu` WRITE;
/*!40000 ALTER TABLE `admin_role_menu` DISABLE KEYS */;
INSERT INTO `admin_role_menu` VALUES (7360,1,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7361,12,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7362,13,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7363,24,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7364,26,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7365,83,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7366,84,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7367,85,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7368,104,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7369,112,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7370,113,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7371,131,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7372,132,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7373,133,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7374,134,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7375,135,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7376,136,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7377,137,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7378,139,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7379,140,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7380,51,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7381,54,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7382,55,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7383,87,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7384,88,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7385,89,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7386,97,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7387,68,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7388,72,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7389,82,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7390,4,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7391,53,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7392,5,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7393,69,3,'2022-02-15 13:26:32','2022-02-15 13:26:32'),(7845,1,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7846,12,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7847,13,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7848,24,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7849,26,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7850,83,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7851,84,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7852,85,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7853,104,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7854,112,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7855,113,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7856,131,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7857,132,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7858,133,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7859,134,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7860,135,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7861,136,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7862,137,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7863,139,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7864,140,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7865,2,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7866,8,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7867,27,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7868,28,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7869,98,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7870,99,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7871,100,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7872,101,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7873,102,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7874,103,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7875,142,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7876,93,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7877,129,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7878,141,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7879,29,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7880,31,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7881,32,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7882,33,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7883,34,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7884,35,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7885,73,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7886,95,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7887,96,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7888,4,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7889,51,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7890,53,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7891,54,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7892,55,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7893,87,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7894,88,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7895,89,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7896,97,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7897,94,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7898,90,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7899,91,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7900,130,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7901,138,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7902,5,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7903,68,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7904,69,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7905,72,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7906,82,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7907,118,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7908,119,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7909,120,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7910,121,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7911,6,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7912,36,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7913,37,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7914,60,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7915,56,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7916,57,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7917,58,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7918,59,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7919,86,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7920,92,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7921,41,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7922,47,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7923,48,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7924,49,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7925,50,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7926,39,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7927,43,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7928,44,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7929,45,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7930,46,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7931,143,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7932,144,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7933,145,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7934,146,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7935,147,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7936,148,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7937,7,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7938,10,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7939,11,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7940,14,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7941,21,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7942,22,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7943,23,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7944,15,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7945,17,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7946,18,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7947,19,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7948,20,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7949,25,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7950,16,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7951,65,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7952,66,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7953,114,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7954,115,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7955,67,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7956,116,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(7957,117,1,'2022-03-08 12:15:16','2022-03-08 12:15:16'),(8277,1,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8278,12,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8279,13,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8280,24,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8281,26,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8282,83,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8283,84,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8284,85,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8285,104,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8286,112,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8287,113,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8288,131,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8289,132,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8290,133,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8291,134,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8292,135,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8293,136,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8294,137,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8295,139,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8296,140,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8297,149,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8298,150,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8299,4,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8300,51,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8301,53,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8302,54,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8303,55,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8304,87,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8305,88,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8306,89,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8307,97,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8308,94,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8309,90,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8310,91,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8311,130,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8312,138,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8313,72,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8314,82,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8315,60,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8316,56,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8317,57,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8318,58,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8319,59,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8320,86,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8321,92,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8322,5,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8323,69,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8324,6,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8325,37,4,'2022-10-26 11:09:10','2022-10-26 11:09:10'),(8326,1,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8327,12,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8328,13,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8329,24,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8330,26,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8331,83,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8332,84,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8333,85,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8334,104,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8335,112,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8336,113,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8337,131,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8338,132,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8339,133,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8340,134,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8341,135,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8342,136,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8343,137,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8344,139,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8345,140,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8346,149,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8347,150,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8348,99,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8349,100,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8350,101,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8351,102,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8352,51,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8353,54,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8354,55,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8355,87,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8356,88,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8357,89,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8358,97,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8359,72,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8360,82,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8361,2,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8362,27,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8363,28,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8364,4,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8365,53,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8366,5,2,'2022-11-10 21:14:35','2022-11-10 21:14:35'),(8367,69,2,'2022-11-10 21:14:35','2022-11-10 21:14:35');
/*!40000 ALTER TABLE `admin_role_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_menu`
--

DROP TABLE IF EXISTS `admin_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_menu` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `status` bigint DEFAULT NULL COMMENT '状态',
  `type` bigint DEFAULT NULL COMMENT '类型',
  `order_id` bigint DEFAULT NULL COMMENT '排序id',
  `target` bigint DEFAULT NULL COMMENT '打开方式',
  `parent_id` bigint DEFAULT NULL COMMENT '上级ID',
  `is_navi` bigint DEFAULT NULL COMMENT '导航',
  `show` bigint DEFAULT NULL COMMENT '显示',
  `path` varchar(255) DEFAULT NULL COMMENT '请求路径',
  `name` varchar(128) DEFAULT NULL COMMENT '菜单名称',
  `icon` varchar(255) DEFAULT NULL COMMENT '菜单图标',
  `desc` varchar(255) DEFAULT NULL COMMENT '描述',
  `args` varchar(255) DEFAULT NULL COMMENT '参数',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_menu`
--

LOCK TABLES `admin_menu` WRITE;
/*!40000 ALTER TABLE `admin_menu` DISABLE KEYS */;
INSERT INTO `admin_menu` VALUES (1,1,0,1,2,0,1,2,'/index','首页','shouye','desc','','2021-03-25 09:07:45','2021-03-25 08:58:37'),(2,1,0,2,1,0,1,1,'/member','会员','CPhezuo','desc','','2021-03-25 09:04:14','2021-03-25 08:58:58'),(4,1,0,4,1,0,1,2,'/order','订单','yemianliu','desc','','2022-10-26 11:07:44','2021-03-25 09:01:09'),(5,1,0,5,1,0,1,1,'/finance','财务','jinbi','','','2021-03-25 09:02:35','2021-03-25 09:02:35'),(6,1,0,6,1,0,1,1,'/sf','收付','fuwuguanli','','','2021-03-25 09:02:59','2021-03-25 09:02:59'),(7,1,0,7,1,0,1,1,'/setting','设置','kongzhizhongxin','','','2021-03-25 09:03:26','2021-03-25 09:03:26'),(8,1,0,1,1,2,1,1,'/member/index','会员首页','qunzu','desc','','2021-03-25 09:13:16','2021-03-25 09:13:05'),(10,1,0,1,1,7,1,1,'/setting/index','设置首页','shouye_o','','','2021-03-25 20:49:15','2021-03-25 20:49:15'),(11,1,0,2,1,7,1,1,'/setting/auth','权限管理','RectangleCopy173','','','2021-03-25 21:38:47','2021-03-25 20:50:10'),(12,1,0,1,1,1,0,1,'、','公共权限','','','','2021-03-25 20:53:34','2021-03-25 20:53:34'),(13,1,0,1,1,12,0,1,'/dev/user/menu','用户菜单获取','','','','2021-03-25 20:54:26','2021-03-25 20:54:26'),(14,1,0,1,1,11,1,1,'/setting/auth/group','角色管理','qunzu_o','平台角色管理','','2021-03-25 20:59:47','2021-03-25 20:59:47'),(15,1,0,2,1,11,1,1,'/setting/auth/menu','菜单配置','RectangleCopy51','系统菜单配置','','2021-03-25 21:01:25','2021-03-25 21:01:25'),(16,1,0,3,1,11,1,1,'/setting/auth/rule','权限配置','RectangleCopy176','分配访问权限','','2021-03-25 21:46:03','2021-03-25 21:02:05'),(17,1,0,1,1,15,0,1,'/dev/menu/fetch','菜单读取','','','','2021-03-25 21:04:10','2021-03-25 21:04:10'),(18,1,0,2,1,15,0,1,'/dev/menu/delete','删除菜单','','','','2021-03-25 21:04:33','2021-03-25 21:04:33'),(19,1,0,3,1,15,0,1,'/dev/menu/post','菜单修改','','','','2021-03-25 21:05:02','2021-03-25 21:05:02'),(20,1,0,4,1,15,0,1,'/dev/menu/order','顺序设置','','','','2021-03-25 21:05:36','2021-03-25 21:05:36'),(21,1,0,50,1,14,0,1,'/dev/role/fetch','角色读取','','','','2021-03-25 21:28:26','2021-03-25 21:28:26'),(22,1,0,50,1,14,0,1,'/dev/role/post','角色修改','','','','2021-03-25 21:28:44','2021-03-25 21:28:44'),(23,1,0,50,1,14,0,1,'/dev/role/menu','角色菜单','','','','2021-03-25 21:33:04','2021-03-25 21:33:04'),(24,1,0,50,1,12,0,1,'/dev/analysis/summary','数据汇总','','','','2021-03-26 09:20:21','2021-03-26 09:20:21'),(25,1,0,50,1,15,0,1,'/dev/role/grant','菜订授权','','','','2021-03-26 09:22:43','2021-03-26 09:22:43'),(26,1,0,50,1,12,0,1,'/dev/user/stat','用户金额信息','','','','2021-03-26 09:51:02','2021-03-26 09:51:02'),(27,1,0,2,1,2,1,1,'/member/user','账号管理','CPhezuo_o','商户账号信息维护','','2021-03-26 09:59:50','2021-03-26 09:58:03'),(28,1,0,1,1,27,1,1,'/member/biz','商户账号','jingliren','商户账号维护','','2021-03-27 09:02:10','2021-03-26 10:00:43'),(29,1,0,60,1,27,0,2,'/member/client','公有权限','guanliyuanrenzheng','卡商账号管理','','2022-02-17 15:32:03','2021-03-26 10:03:58'),(31,1,0,50,1,29,0,1,'/dev/user/post','账号创建','','','','2021-03-26 10:45:56','2021-03-26 10:45:56'),(32,1,0,50,1,29,0,1,'/dev/user/fetch','账号读取','','','','2021-03-26 10:46:50','2021-03-26 10:46:50'),(33,1,0,50,1,29,0,1,'/dev/user/delete','账号删除','','','','2021-03-26 11:32:20','2021-03-26 11:32:20'),(34,1,0,50,1,29,0,1,'/dev/user/status','状修设置','','','','2021-03-26 12:51:54','2021-03-26 12:51:54'),(35,1,0,50,1,29,0,1,'/dev/user/member','商户修改','','','','2021-03-27 19:18:51','2021-03-27 19:18:51'),(36,1,0,1,1,6,1,1,'/sf/index','收付首页','fuwuguanli','','','2021-03-27 20:44:26','2021-03-27 20:44:26'),(37,1,0,2,1,6,1,1,'/sf/','收付管理','fuwuguanli','','','2021-03-27 20:47:19','2021-03-27 20:44:58'),(39,1,0,4,1,37,1,1,'/sf/bank','银行列表','dunpaibaoxianrenzheng','全局银行列表维护','','2021-08-04 11:21:37','2021-03-27 20:46:30'),(41,1,0,3,1,37,1,1,'/sf/channel','通道管理','jiazai_shuaxin','通道管理/状态控制','','2021-08-04 11:21:32','2021-03-27 20:49:06'),(43,1,0,50,1,39,0,1,'/dev/bank/post','银行管理','','','','2021-03-27 21:18:42','2021-03-27 21:18:42'),(44,1,0,50,1,39,0,1,'/dev/bank/delete','银行删除','','','','2021-03-27 21:19:57','2021-03-27 21:19:05'),(45,1,0,50,1,39,0,1,'/dev/bank/fetch','银行读取','','','','2021-03-27 21:19:45','2021-03-27 21:19:45'),(46,1,0,50,1,39,0,1,'/dev/bank/status','修改状态','','','','2021-03-27 21:20:25','2021-03-27 21:20:25'),(47,1,0,50,1,41,0,1,'/dev/channel/post','数据维护','','','','2021-03-27 21:48:30','2021-03-27 21:48:30'),(48,1,0,50,1,41,0,1,'/dev/channel/fetch','数据读取','','','','2021-03-27 21:48:53','2021-03-27 21:48:53'),(49,1,0,50,1,41,0,1,'/dev/channel/delete','数据删除','','','','2021-03-27 21:49:05','2021-03-27 21:49:05'),(50,1,0,50,1,41,0,1,'/dev/channel/status','状态修改','','','','2021-03-27 21:49:19','2021-03-27 21:49:19'),(51,1,0,1,1,4,0,1,'/order/index','订单首页','shouye_o','','','2021-03-27 22:45:39','2021-03-27 22:45:28'),(53,1,0,2,1,4,1,1,'/order/admin','订单管理','yemianliu_o','收付订单列表','','2021-03-27 22:47:30','2021-03-27 22:47:30'),(54,1,0,1,1,53,1,1,'/order/list','代付订单','yemianliu_o','代付订单列表','','2021-03-27 22:48:50','2021-03-27 22:48:50'),(55,1,0,2,1,53,1,1,'/order/bank','代收订单','gerenxinxi','代收订单列表','','2021-03-27 22:50:05','2021-03-27 22:50:05'),(56,1,0,50,1,60,0,1,'/dev/card/post','数据维护','','','','2021-10-18 10:01:33','2021-03-28 08:29:03'),(57,1,0,50,1,60,0,1,'/dev/card/fetch','数据读取','','','','2021-10-18 10:02:49','2021-03-28 08:29:28'),(58,1,0,50,1,60,0,1,'/dev/card/delete','数据删除','','','','2021-10-18 10:02:33','2021-03-28 08:29:37'),(59,1,0,50,1,60,0,1,'/dev/card/status','状态修改','','','','2021-10-18 10:02:02','2021-03-28 08:29:51'),(60,1,0,1,1,37,1,1,'/sf/serve','收付管理','fuwuxunhuanguanli','用于代付/代收业务','','2022-02-16 20:28:53','2021-03-28 09:55:02'),(61,1,0,50,1,42,0,1,'/dev/device/post','数据维护','','','','2021-03-28 19:56:58','2021-03-28 19:56:58'),(62,1,0,50,1,42,0,1,'/dev/device/fetch','数据读取','','','','2021-03-28 19:57:23','2021-03-28 19:57:23'),(63,1,0,50,1,42,0,1,'/dev/device/delete','数据删除','','','','2021-03-28 19:57:33','2021-03-28 19:57:33'),(64,1,0,50,1,42,0,1,'/dev/device/status','状态修改','','','','2021-03-28 19:57:46','2021-03-28 19:57:46'),(65,1,0,3,1,7,1,1,'/setting','系统维护','shu','','','2021-03-29 08:18:21','2021-03-29 08:18:21'),(66,1,0,1,1,65,1,1,'/setting/version','版本管理','yingyongAPP_o','APP版本维护','','2021-03-29 08:19:39','2021-03-29 08:18:53'),(67,1,0,50,1,65,1,1,'/setting/action','操作日志','baocun','操作日志记录','','2021-03-29 08:19:28','2021-03-29 08:19:28'),(68,1,0,1,1,5,1,1,'/finance/index','财务首页','shouye_o','','','2021-03-29 09:08:29','2021-03-29 09:08:29'),(69,1,0,2,1,5,1,1,'/finance/navi','快捷向导','ding_o','','','2021-03-29 09:09:01','2021-03-29 09:09:01'),(72,1,0,3,1,69,1,1,'/finance/transaction','账户流水','huobiliu_o','交易流水查询','','2021-03-29 09:12:41','2021-03-29 09:12:41'),(73,1,0,50,1,29,0,1,'/dev/chain/post','商户通道','','','','2021-03-30 14:54:23','2021-03-30 14:54:23'),(74,1,0,50,1,70,0,1,'/dev/recharge/post','数据维护','','','','2021-03-31 09:24:46','2021-03-31 09:24:46'),(75,1,0,50,1,70,0,1,'/dev/recharge/fetch','数据读取','','','','2021-03-31 09:25:18','2021-03-31 09:25:18'),(76,1,0,50,1,70,0,1,'/dev/recharge/delete','数据删除','','','','2021-04-01 09:40:00','2021-03-31 09:25:34'),(77,1,0,50,1,70,0,1,'/dev/recharge/status','状态修改','','','','2021-03-31 09:25:48','2021-03-31 09:25:48'),(78,1,0,50,1,71,0,1,'/dev/withdrawal/post','数据维护','','','','2021-04-01 09:38:09','2021-04-01 09:38:09'),(79,1,0,50,1,71,0,1,'/dev/withdrawal/fetch','数据读取','','','','2021-04-01 09:38:30','2021-04-01 09:38:30'),(80,1,0,50,1,71,0,1,'/dev/withdrawal/delete','数据删除','','','','2021-04-01 09:40:30','2021-04-01 09:38:38'),(81,1,0,50,1,71,0,1,'/dev/withdrawal/status','状态修改','','','','2021-04-01 09:39:00','2021-04-01 09:39:00'),(82,1,0,50,1,72,0,1,'/dev/balance/fetch','数据读取','','','','2021-04-01 10:39:02','2021-04-01 10:39:02'),(83,1,0,50,1,12,0,1,'/dev/user/goauth','谷歌绑定','','','','2021-04-01 12:24:32','2021-04-01 12:24:32'),(84,1,0,50,1,12,0,1,'/dev/user/modifypwd','修改密码','','','','2021-04-01 13:21:43','2021-04-01 13:20:53'),(85,1,0,50,1,12,0,1,'/dev/user/reset','用户重置','','','','2021-04-01 13:34:58','2021-04-01 13:34:58'),(86,1,0,50,1,60,0,1,'/dev/card/bind','卡片绑定','','','','2021-04-01 21:03:56','2021-04-01 21:03:56'),(87,1,0,50,1,53,0,1,'/dev/order/','公有权限','youjian','','','2022-01-20 09:36:14','2021-04-02 09:29:57'),(88,1,0,50,1,87,0,1,'/dev/order/fetch','读取','','','','2021-04-02 09:30:36','2021-04-02 09:30:36'),(89,1,0,50,1,87,0,1,'/dev/order/post','代付下单','','','','2022-01-20 09:35:44','2021-04-02 10:07:31'),(90,1,0,50,1,94,0,1,'/dev/order/finish','确认收款','','','','2021-09-10 16:49:07','2021-04-03 09:29:27'),(91,1,0,50,1,94,0,1,'/dev/order/fail','付款失败','','','','2021-09-10 16:49:30','2021-04-03 12:25:01'),(92,1,0,50,1,60,0,1,'/dev/bank/fetch','银行列表','','','','2021-10-18 10:01:20','2021-04-04 15:11:06'),(93,1,0,50,1,27,1,1,'/member/admin','管理员账号','gerentouxiang','管理员账号维护','','2021-04-06 10:33:48','2021-04-06 10:31:39'),(94,1,0,50,1,53,0,1,'/dev/order/fresh','私有权限','youjian','','','2022-01-20 09:36:26','2021-04-07 11:17:24'),(95,1,0,50,1,29,0,1,'/dev/agent/limit','费率限制','','','','2021-04-09 12:54:14','2021-04-09 12:54:14'),(96,1,0,50,1,29,0,1,'/dev/agent/post','费率设置','','','','2021-04-09 14:30:11','2021-04-09 14:30:11'),(97,1,0,50,1,87,0,1,'/dev/order/pay','代收下单','','','','2022-01-20 09:35:52','2021-04-10 09:18:40'),(98,1,0,50,1,28,0,1,'/dev/user/post','商户创建','','','','2021-04-10 14:58:18','2021-04-10 14:58:18'),(99,1,0,50,1,28,0,1,'/dev/user/fetch','商户读取','','','','2021-04-10 14:58:50','2021-04-10 14:58:50'),(100,1,0,50,1,28,0,1,'/dev/channel/fetch','通道读取','','','','2021-04-10 15:01:02','2021-04-10 15:01:02'),(101,1,0,50,1,28,0,1,'/dev/user/member','会员维护','','','','2021-04-10 16:50:53','2021-04-10 16:50:53'),(102,1,0,50,1,28,0,1,'/dev/agent/fetch','代理费率读取','','','','2021-04-10 17:09:03','2021-04-10 17:09:03'),(103,1,0,50,1,28,0,1,'/dev/chain/post','费率设置','','','','2021-04-10 17:59:43','2021-04-10 17:59:43'),(104,1,0,50,1,12,0,1,'/dev/order/read','消息读取','','','','2021-04-12 17:05:38','2021-04-12 17:05:38'),(107,1,0,50,1,106,0,1,'/dev/alipay/post','数据维护','','','','2021-04-15 19:51:39','2021-04-15 19:09:19'),(108,1,0,50,1,106,0,1,'/dev/alipay/fetch','数据读取','','','','2021-04-15 19:51:46','2021-04-15 19:09:39'),(109,1,0,50,1,106,0,1,'/dev/alipay/delete','数据删除','','','','2021-04-15 19:51:51','2021-04-15 19:09:56'),(110,1,0,50,1,106,0,1,'/dev/alipay/status','状态修改','','','','2021-04-15 19:51:56','2021-04-15 19:10:08'),(111,1,0,50,1,105,0,1,'/dev/order/alipay','手动下单','','','','2021-04-15 21:17:22','2021-04-15 21:17:22'),(112,1,0,50,1,12,0,1,'/dev/order/out','数据导出','','','','2021-04-17 12:19:23','2021-04-17 12:19:23'),(113,1,0,50,1,12,0,1,'/dev/balance/out','流水导出','','','','2021-04-17 15:30:29','2021-04-17 15:30:29'),(114,1,0,50,1,66,0,1,'/dev/version/post','数据维护','','','','2021-04-25 10:59:47','2021-04-25 10:59:47'),(115,1,0,50,1,66,0,1,'/dev/version/fetch','数据读取','','','','2021-04-25 11:00:09','2021-04-25 11:00:09'),(116,1,0,50,1,67,0,1,'/dev/system/delete','清空日志','','','','2021-08-04 11:13:11','2021-08-04 11:13:11'),(117,1,0,50,1,67,0,1,'/dev/system/fetch','日志读取','','','','2021-08-04 11:14:03','2021-08-04 11:14:03'),(118,1,0,50,1,69,1,1,'/finance/stat','数据统计','chizi','卡商收入、成功率统计','','2021-08-26 10:51:15','2021-08-26 10:51:15'),(119,1,0,50,1,118,0,1,'/dev/analysis/stat','查询','','','','2021-08-26 10:51:36','2021-08-26 10:51:36'),(120,1,0,50,1,69,1,1,'/finance/card','卡片统计','jinbi','卡片收支统计','','2021-08-26 10:52:13','2021-08-26 10:52:13'),(121,1,0,50,1,120,0,1,'/dev/card/stat','卡片数据统计','','','','2021-08-26 10:52:33','2021-08-26 10:52:33'),(123,1,0,50,1,122,0,1,'/dev/alipay/fetch','数据读取','','','','2021-09-09 09:24:07','2021-09-09 09:24:07'),(124,1,0,50,1,122,0,1,'/dev/alipay/post','数据维护','','','','2021-09-09 09:24:45','2021-09-09 09:24:45'),(125,1,0,50,1,122,0,1,'/dev/alipay/delete','数据删除','','','','2021-09-09 09:24:59','2021-09-09 09:24:59'),(126,1,0,50,1,122,0,1,'/dev/alipay/status','状态修改','','','','2021-09-09 09:25:15','2021-09-09 09:25:15'),(129,1,0,50,1,27,1,1,'/member/agent','代理账号','jingliren','代理账号列表','','2021-10-06 19:36:18','2021-10-06 19:35:45'),(130,1,0,50,1,94,0,1,'/dev/order/mod','修改金额','','','','2021-10-08 14:44:39','2021-10-08 14:44:39'),(131,1,0,50,1,12,0,1,'/dev/user/child','下级读取','','','','2021-10-18 20:28:51','2021-10-18 20:28:51'),(132,1,0,50,1,12,0,1,'/dev/user/balance','实时余额','','','','2021-10-20 22:59:32','2021-10-20 22:59:32'),(133,1,0,50,1,12,0,1,'/dev/card/query','卡片查询','','','','2021-10-21 16:12:35','2021-10-21 16:12:35'),(134,1,0,50,1,12,0,1,'/dev/chain/fetch','费率查询','','','','2021-10-22 11:23:14','2021-10-22 11:23:14'),(135,1,0,50,1,134,0,1,'/dev/chain/post','添加费率','','','','2021-10-22 19:47:43','2021-10-22 19:47:43'),(136,1,0,50,1,12,0,1,'/dev/order/cert','凭证上传','','','','2021-10-23 16:52:33','2021-10-23 16:52:33'),(137,1,0,50,1,12,0,1,'/dev/user/money','保证金转入转出','','','','2021-10-26 20:37:30','2021-10-26 20:37:30'),(138,1,0,50,1,94,0,1,'/dev/order/dist','手动分配卡商','','','','2021-10-29 22:14:58','2021-10-29 22:14:58'),(139,1,0,50,1,12,0,1,'/dev/channel/fetch','通道读取','','','','2021-11-21 15:29:00','2021-11-21 15:29:00'),(140,1,0,50,1,12,0,1,'/dev/user/fee','收益转出','','','','2022-01-23 23:41:51','2022-01-23 23:41:51'),(141,1,0,50,1,27,1,1,'/member/level','下级管理','biaoqing_xiao','下级用户','','2022-02-17 15:37:38','2022-02-17 15:28:13'),(142,1,0,3,1,27,1,1,'/member/client','卡商账号','guanliyuanrenzheng','卡商账号管理','','2022-02-17 15:33:21','2022-02-17 15:29:30'),(144,1,0,50,1,143,0,1,'/dev/card/post','数据维护','','','','2022-03-08 12:13:31','2022-03-08 12:13:31'),(145,1,0,50,1,143,0,1,'/dev/card/fetch','数据读取','','','','2022-03-08 12:13:54','2022-03-08 12:13:54'),(146,1,0,50,1,143,0,1,'/dev/card/delete','数据删除','','','','2022-03-08 12:14:17','2022-03-08 12:14:17'),(147,1,0,50,1,143,0,1,'/dev/card/status','状态修改','','','','2022-03-08 12:14:39','2022-03-08 12:14:39'),(148,1,0,50,1,143,0,1,'/dev/bank/fetch','银行读取','','','','2022-03-08 12:15:03','2022-03-08 12:15:03'),(149,1,0,50,1,12,0,1,'/dev/order/fork','卡商抢单','','','','2022-10-01 13:51:59','2022-10-01 13:51:59'),(150,1,0,50,1,12,0,1,'/dev/user/team','收益读取','','','','2022-10-26 11:08:04','2022-10-26 11:08:04');
/*!40000 ALTER TABLE `admin_menu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-11 19:40:51
