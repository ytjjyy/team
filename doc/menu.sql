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

DROP TABLE IF EXISTS `admin_role_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_role_menu` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `menu_id` bigint DEFAULT NULL COMMENT '菜单编号-&gt;std_menu.id',
  `role_id` bigint DEFAULT NULL COMMENT '角色编号-&gt;std_role.id',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5572 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_role_menu`
--

LOCK TABLES `admin_role_menu` WRITE;
/*!40000 ALTER TABLE `admin_role_menu` DISABLE KEYS */;
INSERT INTO `admin_role_menu` VALUES (4668,1,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4669,12,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4670,13,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4671,24,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4672,26,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4673,83,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4674,84,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4675,85,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4676,104,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4677,112,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4678,113,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4679,4,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4680,51,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4681,53,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4682,54,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4683,55,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4684,97,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4685,105,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4686,111,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4687,87,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4688,88,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4689,89,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4690,90,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4691,91,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4692,94,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4693,5,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4694,68,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4695,69,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4696,70,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4697,74,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4698,75,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4699,76,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4700,77,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4701,71,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4702,78,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4703,79,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4704,80,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4705,81,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4706,72,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4707,82,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4708,36,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4709,40,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4710,56,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4711,57,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4712,58,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4713,59,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4714,92,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4715,6,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4716,37,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(5308,1,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5309,12,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5310,13,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5311,24,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5312,26,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5313,83,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5314,84,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5315,85,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5316,104,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5317,112,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5318,113,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5319,8,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5320,29,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5321,31,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5322,32,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5323,33,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5324,34,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5325,35,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5326,73,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5327,95,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5328,96,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5329,120,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5330,4,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5331,51,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5332,53,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5333,54,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5334,55,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5335,97,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5336,105,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5337,111,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5338,87,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5339,88,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5340,89,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5341,90,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5342,91,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5343,94,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5344,5,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5345,68,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5346,69,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5347,70,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5348,74,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5349,75,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5350,76,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5351,77,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5352,71,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5353,78,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5354,79,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5355,80,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5356,81,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5357,72,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5358,82,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5359,118,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5360,119,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5361,36,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5362,37,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5363,40,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5364,56,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5365,57,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5366,58,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5367,59,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5368,92,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5369,60,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5370,86,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5371,116,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5372,42,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5373,61,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5374,62,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5375,63,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5376,64,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5377,106,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5378,107,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5379,108,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5380,109,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5381,110,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5382,2,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5383,27,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5384,6,4,'2021-05-08 10:03:33','2021-05-08 10:03:33'),(5419,1,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5420,12,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5421,13,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5422,24,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5423,26,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5424,83,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5425,84,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5426,85,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5427,104,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5428,112,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5429,113,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5430,8,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5431,28,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5432,98,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5433,99,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5434,100,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5435,101,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5436,102,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5437,103,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5438,36,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5439,40,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5440,56,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5441,57,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5442,58,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5443,59,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5444,92,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5445,106,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5446,107,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5447,108,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5448,109,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5449,110,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5450,2,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5451,27,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5452,6,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5453,37,2,'2021-05-17 12:53:02','2021-05-17 12:53:02'),(5454,1,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5455,12,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5456,13,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5457,24,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5458,26,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5459,83,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5460,84,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5461,85,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5462,104,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5463,112,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5464,113,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5465,2,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5466,8,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5467,27,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5468,28,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5469,98,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5470,99,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5471,100,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5472,101,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5473,102,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5474,103,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5475,29,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5476,31,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5477,32,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5478,33,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5479,34,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5480,35,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5481,73,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5482,95,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5483,96,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5484,120,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5485,117,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5486,93,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5487,4,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5488,51,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5489,53,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5490,54,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5491,55,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5492,97,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5493,105,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5494,111,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5495,87,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5496,88,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5497,89,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5498,90,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5499,91,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5500,94,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5501,5,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5502,68,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5503,69,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5504,70,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5505,74,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5506,75,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5507,76,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5508,77,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5509,71,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5510,78,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5511,79,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5512,80,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5513,81,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5514,72,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5515,82,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5516,118,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5517,119,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5518,6,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5519,36,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5520,37,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5521,40,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5522,56,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5523,57,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5524,58,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5525,59,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5526,92,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5527,60,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5528,86,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5529,116,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5530,42,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5531,61,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5532,62,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5533,63,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5534,64,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5535,106,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5536,107,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5537,108,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5538,109,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5539,110,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5540,38,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5541,39,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5542,43,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5543,44,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5544,45,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5545,46,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5546,41,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5547,47,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5548,48,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5549,49,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5550,50,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5551,7,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5552,10,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5553,11,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5554,14,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5555,21,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5556,22,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5557,23,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5558,15,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5559,17,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5560,18,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5561,19,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5562,20,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5563,25,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5564,16,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5565,65,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5566,66,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5567,114,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5568,115,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5569,67,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5570,121,1,'2021-05-22 17:18:02','2021-05-22 17:18:02'),(5571,122,1,'2021-05-22 17:18:02','2021-05-22 17:18:02');
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
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_menu`
--

LOCK TABLES `admin_menu` WRITE;
/*!40000 ALTER TABLE `admin_menu` DISABLE KEYS */;
INSERT INTO `admin_menu` VALUES (1,1,0,1,2,0,1,2,'/index','首页','shouye','desc','','2021-03-25 09:07:45','2021-03-25 08:58:37'),(2,1,0,2,1,0,1,1,'/member','会员','CPhezuo','desc','','2021-03-25 09:04:14','2021-03-25 08:58:58'),(4,1,0,4,1,0,1,2,'/order','订单','yemianliu','desc','','2021-03-25 09:10:17','2021-03-25 09:01:09'),(5,1,0,5,1,0,1,1,'/finance','财务','jinbi','','','2021-03-25 09:02:35','2021-03-25 09:02:35'),(6,1,0,6,1,0,1,1,'/sf','收付','fuwuguanli','','','2021-03-25 09:02:59','2021-03-25 09:02:59'),(7,1,0,7,1,0,1,1,'/setting','设置','kongzhizhongxin','','','2021-03-25 09:03:26','2021-03-25 09:03:26'),(8,1,0,1,1,2,1,1,'/member/index','会员首页','qunzu','desc','','2021-03-25 09:13:16','2021-03-25 09:13:05'),(10,1,0,1,1,7,1,1,'/setting/index','设置首页','shouye_o','','','2021-03-25 20:49:15','2021-03-25 20:49:15'),(11,1,0,2,1,7,1,1,'/setting/auth','权限管理','RectangleCopy173','','','2021-03-25 21:38:47','2021-03-25 20:50:10'),(12,1,0,1,1,1,0,1,'、','公共权限','','','','2021-03-25 20:53:34','2021-03-25 20:53:34'),(13,1,0,1,1,12,0,1,'/dev/user/menu','用户菜单获取','','','','2021-03-25 20:54:26','2021-03-25 20:54:26'),(14,1,0,1,1,11,1,1,'/setting/auth/group','角色管理','qunzu_o','平台角色管理','','2021-03-25 20:59:47','2021-03-25 20:59:47'),(15,1,0,2,1,11,1,1,'/setting/auth/menu','菜单配置','RectangleCopy51','系统菜单配置','','2021-03-25 21:01:25','2021-03-25 21:01:25'),(16,1,0,3,1,11,1,1,'/setting/auth/rule','权限配置','RectangleCopy176','分配访问权限','','2021-03-25 21:46:03','2021-03-25 21:02:05'),(17,1,0,1,1,15,0,1,'/dev/menu/fetch','菜单读取','','','','2021-03-25 21:04:10','2021-03-25 21:04:10'),(18,1,0,2,1,15,0,1,'/dev/menu/delete','删除菜单','','','','2021-03-25 21:04:33','2021-03-25 21:04:33'),(19,1,0,3,1,15,0,1,'/dev/menu/post','菜单修改','','','','2021-03-25 21:05:02','2021-03-25 21:05:02'),(20,1,0,4,1,15,0,1,'/dev/menu/order','顺序设置','','','','2021-03-25 21:05:36','2021-03-25 21:05:36'),(21,1,0,50,1,14,0,1,'/dev/role/fetch','角色读取','','','','2021-03-25 21:28:26','2021-03-25 21:28:26'),(22,1,0,50,1,14,0,1,'/dev/role/post','角色修改','','','','2021-03-25 21:28:44','2021-03-25 21:28:44'),(23,1,0,50,1,14,0,1,'/dev/role/menu','角色菜单','','','','2021-03-25 21:33:04','2021-03-25 21:33:04'),(24,1,0,50,1,12,0,1,'/dev/analysis/summary','数据汇总','','','','2021-03-26 09:20:21','2021-03-26 09:20:21'),(25,1,0,50,1,15,0,1,'/dev/role/grant','菜订授权','','','','2021-03-26 09:22:43','2021-03-26 09:22:43'),(26,1,0,50,1,12,0,1,'/dev/user/stat','用户金额信息','','','','2021-03-26 09:51:02','2021-03-26 09:51:02'),(27,1,0,2,1,2,1,1,'/member/user','账号管理','CPhezuo_o','商户账号信息维护','','2021-03-26 09:59:50','2021-03-26 09:58:03'),(28,1,0,1,1,27,1,1,'/member/biz','商户账号','jingliren','商户账号维护','','2021-03-27 09:02:10','2021-03-26 10:00:43'),(29,1,0,3,1,27,1,1,'/member/client','卡商账号','guanliyuanrenzheng','卡商账号管理','','2021-03-26 10:15:13','2021-03-26 10:03:58'),(31,1,0,50,1,29,0,1,'/dev/user/post','账号创建','','','','2021-03-26 10:45:56','2021-03-26 10:45:56'),(32,1,0,50,1,29,0,1,'/dev/user/fetch','账号读取','','','','2021-03-26 10:46:50','2021-03-26 10:46:50'),(33,1,0,50,1,29,0,1,'/dev/user/delete','账号删除','','','','2021-03-26 11:32:20','2021-03-26 11:32:20'),(34,1,0,50,1,29,0,1,'/dev/user/status','状修设置','','','','2021-03-26 12:51:54','2021-03-26 12:51:54'),(35,1,0,50,1,29,0,1,'/dev/user/member','商户修改','','','','2021-03-27 19:18:51','2021-03-27 19:18:51'),(36,1,0,1,1,6,1,1,'/sf/index','收付首页','fuwuguanli','','','2021-03-27 20:44:26','2021-03-27 20:44:26'),(37,1,0,2,1,6,1,1,'/sf/','收付管理','fuwuguanli','','','2021-03-27 20:47:19','2021-03-27 20:44:58'),(38,1,0,3,1,6,1,1,'/sf','通道理管','renwuzhongxin','','','2021-03-27 20:47:35','2021-03-27 20:45:52'),(39,1,0,1,1,38,1,1,'/sf/bank','银行列表','dunpaibaoxianrenzheng','全局银行列表维护','','2021-03-27 20:51:55','2021-03-27 20:46:30'),(40,1,0,1,1,37,1,1,'/sf/mybank','卡片管理','fuwuguanli','用于充值/提现','','2021-03-28 09:56:40','2021-03-27 20:48:07'),(41,1,0,2,1,38,1,1,'/sf/channel','通道管理','jiazai_shuaxin','通道管理/状态控制','','2021-03-27 20:51:23','2021-03-27 20:49:06'),(42,1,0,3,1,37,1,1,'/sf/device','设备管理','zhuti_tiaosepan','App自动转账设备管理','','2021-03-28 09:55:13','2021-03-27 20:49:35'),(43,1,0,50,1,39,0,1,'/dev/bank/post','银行管理','','','','2021-03-27 21:18:42','2021-03-27 21:18:42'),(44,1,0,50,1,39,0,1,'/dev/bank/delete','银行删除','','','','2021-03-27 21:19:57','2021-03-27 21:19:05'),(45,1,0,50,1,39,0,1,'/dev/bank/fetch','银行读取','','','','2021-03-27 21:19:45','2021-03-27 21:19:45'),(46,1,0,50,1,39,0,1,'/dev/bank/status','修改状态','','','','2021-03-27 21:20:25','2021-03-27 21:20:25'),(47,1,0,50,1,41,0,1,'/dev/channel/post','数据维护','','','','2021-03-27 21:48:30','2021-03-27 21:48:30'),(48,1,0,50,1,41,0,1,'/dev/channel/fetch','数据读取','','','','2021-03-27 21:48:53','2021-03-27 21:48:53'),(49,1,0,50,1,41,0,1,'/dev/channel/delete','数据删除','','','','2021-03-27 21:49:05','2021-03-27 21:49:05'),(50,1,0,50,1,41,0,1,'/dev/channel/status','状态修改','','','','2021-03-27 21:49:19','2021-03-27 21:49:19'),(51,1,0,1,1,4,0,1,'/order/index','订单首页','shouye_o','','','2021-03-27 22:45:39','2021-03-27 22:45:28'),(53,1,0,2,1,4,1,1,'/order/admin','订单管理','yemianliu_o','收付订单列表','','2021-03-27 22:47:30','2021-03-27 22:47:30'),(54,1,0,1,1,53,1,1,'/order/list','代付订单','yemianliu_o','代付订单列表','','2021-03-27 22:48:50','2021-03-27 22:48:50'),(55,1,0,2,1,53,1,1,'/order/bank','代收订单','gerenxinxi','代收订单列表','','2021-03-27 22:50:05','2021-03-27 22:50:05'),(56,1,0,50,1,40,0,1,'/dev/card/post','数据维护','','','','2021-03-28 08:29:03','2021-03-28 08:29:03'),(57,1,0,50,1,40,0,1,'/dev/card/fetch','数据读取','','','','2021-03-28 08:29:28','2021-03-28 08:29:28'),(58,1,0,50,1,40,0,1,'/dev/card/delete','数据删除','','','','2021-03-28 08:29:37','2021-03-28 08:29:37'),(59,1,0,50,1,40,0,1,'/dev/card/status','状态修改','','','','2021-03-28 08:29:51','2021-03-28 08:29:51'),(60,1,0,2,1,37,1,1,'/sf/serve','收付业务','fuwuxunhuanguanli','用于代付/代收业务','','2021-03-28 09:55:23','2021-03-28 09:55:02'),(61,1,0,50,1,42,0,1,'/dev/device/post','数据维护','','','','2021-03-28 19:56:58','2021-03-28 19:56:58'),(62,1,0,50,1,42,0,1,'/dev/device/fetch','数据读取','','','','2021-03-28 19:57:23','2021-03-28 19:57:23'),(63,1,0,50,1,42,0,1,'/dev/device/delete','数据删除','','','','2021-03-28 19:57:33','2021-03-28 19:57:33'),(64,1,0,50,1,42,0,1,'/dev/device/status','状态修改','','','','2021-03-28 19:57:46','2021-03-28 19:57:46'),(65,1,0,3,1,7,1,1,'/setting','系统维护','shu','','','2021-03-29 08:18:21','2021-03-29 08:18:21'),(66,1,0,1,1,65,1,1,'/setting/version','版本管理','yingyongAPP_o','APP版本维护','','2021-03-29 08:19:39','2021-03-29 08:18:53'),(67,1,0,50,1,65,1,1,'/setting/action','操作日志','baocun','操作日志记录','','2021-03-29 08:19:28','2021-03-29 08:19:28'),(68,1,0,1,1,5,1,1,'/finance/index','财务首页','shouye_o','','','2021-03-29 09:08:29','2021-03-29 09:08:29'),(69,1,0,2,1,5,1,1,'/finance/navi','快捷向导','ding_o','','','2021-03-29 09:09:01','2021-03-29 09:09:01'),(70,1,0,1,1,69,1,1,'/finance/recharge','充值申请','jiekuan_o','充值申请/结果查询','','2021-03-29 09:10:50','2021-03-29 09:10:29'),(71,1,0,2,1,69,1,1,'/finance/withdrawal','提现申请','cunkuan_o','提现审批/拒绝/查询','','2021-03-29 09:18:32','2021-03-29 09:11:34'),(72,1,0,3,1,69,1,1,'/finance/transaction','账户流水','huobiliu_o','交易流水查询','','2021-03-29 09:12:41','2021-03-29 09:12:41'),(73,1,0,50,1,29,0,1,'/dev/chain/post','商户通道','','','','2021-03-30 14:54:23','2021-03-30 14:54:23'),(74,1,0,50,1,70,0,1,'/dev/recharge/post','数据维护','','','','2021-03-31 09:24:46','2021-03-31 09:24:46'),(75,1,0,50,1,70,0,1,'/dev/recharge/fetch','数据读取','','','','2021-03-31 09:25:18','2021-03-31 09:25:18'),(76,1,0,50,1,70,0,1,'/dev/recharge/delete','数据删除','','','','2021-04-01 09:40:00','2021-03-31 09:25:34'),(77,1,0,50,1,70,0,1,'/dev/recharge/status','状态修改','','','','2021-03-31 09:25:48','2021-03-31 09:25:48'),(78,1,0,50,1,71,0,1,'/dev/withdrawal/post','数据维护','','','','2021-04-01 09:38:09','2021-04-01 09:38:09'),(79,1,0,50,1,71,0,1,'/dev/withdrawal/fetch','数据读取','','','','2021-04-01 09:38:30','2021-04-01 09:38:30'),(80,1,0,50,1,71,0,1,'/dev/withdrawal/delete','数据删除','','','','2021-04-01 09:40:30','2021-04-01 09:38:38'),(81,1,0,50,1,71,0,1,'/dev/withdrawal/status','状态修改','','','','2021-04-01 09:39:00','2021-04-01 09:39:00'),(82,1,0,50,1,72,0,1,'/dev/balance/fetch','数据读取','','','','2021-04-01 10:39:02','2021-04-01 10:39:02'),(83,1,0,50,1,12,0,1,'/dev/user/goauth','谷歌绑定','','','','2021-04-01 12:24:32','2021-04-01 12:24:32'),(84,1,0,50,1,12,0,1,'/dev/user/modifypwd','修改密码','','','','2021-04-01 13:21:43','2021-04-01 13:20:53'),(85,1,0,50,1,12,0,1,'/dev/user/reset','用户重置','','','','2021-04-01 13:34:58','2021-04-01 13:34:58'),(86,1,0,50,1,60,0,1,'/dev/card/bind','卡片绑定','','','','2021-04-01 21:03:56','2021-04-01 21:03:56'),(87,1,0,50,1,53,0,1,'/dev/order/','公有权限','','','','2021-04-02 09:30:17','2021-04-02 09:29:57'),(88,1,0,50,1,87,0,1,'/dev/order/fetch','读取','','','','2021-04-02 09:30:36','2021-04-02 09:30:36'),(89,1,0,50,1,88,0,1,'/dev/order/post','下单','','','','2021-04-02 10:07:31','2021-04-02 10:07:31'),(90,1,0,50,1,87,0,1,'/dev/order/finish','确认收款','','','','2021-04-03 09:29:27','2021-04-03 09:29:27'),(91,1,0,50,1,87,0,1,'/dev/order/fail','付款失败','','','','2021-04-03 12:25:01','2021-04-03 12:25:01'),(92,1,0,50,1,40,0,1,'/dev/bank/fetch','银行列表','','','','2021-04-04 15:12:01','2021-04-04 15:11:06'),(93,1,0,50,1,27,1,1,'/member/admin','管理员账号','gerentouxiang','管理员账号维护','','2021-04-06 10:33:48','2021-04-06 10:31:39'),(94,1,0,50,1,53,0,1,'/dev/order/fresh','私有权限','','','','2021-04-07 11:18:23','2021-04-07 11:17:24'),(95,1,0,50,1,29,0,1,'/dev/agent/limit','费率限制','','','','2021-04-09 12:54:14','2021-04-09 12:54:14'),(96,1,0,50,1,29,0,1,'/dev/agent/post','费率设置','','','','2021-04-09 14:30:11','2021-04-09 14:30:11'),(97,1,0,50,1,55,0,1,'/dev/order/pay','手动下单','','','','2021-04-10 09:18:40','2021-04-10 09:18:40'),(98,1,0,50,1,28,0,1,'/dev/user/post','商户创建','','','','2021-04-10 14:58:18','2021-04-10 14:58:18'),(99,1,0,50,1,28,0,1,'/dev/user/fetch','商户读取','','','','2021-04-10 14:58:50','2021-04-10 14:58:50'),(100,1,0,50,1,28,0,1,'/dev/channel/fetch','通道读取','','','','2021-04-10 15:01:02','2021-04-10 15:01:02'),(101,1,0,50,1,28,0,1,'/dev/user/member','会员维护','','','','2021-04-10 16:50:53','2021-04-10 16:50:53'),(102,1,0,50,1,28,0,1,'/dev/agent/fetch','代理费率读取','','','','2021-04-10 17:09:03','2021-04-10 17:09:03'),(103,1,0,50,1,28,0,1,'/dev/chain/post','费率设置','','','','2021-04-10 17:59:43','2021-04-10 17:59:43'),(104,1,0,50,1,12,0,1,'/dev/order/read','消息读取','','','','2021-04-12 17:05:38','2021-04-12 17:05:38'),(105,1,0,3,1,53,1,1,'/order/alipay','支付宝','jingliren','支付宝收款','','2021-04-15 19:07:01','2021-04-15 18:18:32'),(106,1,0,3,1,37,1,1,'/sf/qrcode','支付宝','jingliren','支付宝管理','','2021-04-15 18:55:45','2021-04-15 18:44:40'),(107,1,0,50,1,106,0,1,'/dev/alipay/post','数据维护','','','','2021-04-15 19:51:39','2021-04-15 19:09:19'),(108,1,0,50,1,106,0,1,'/dev/alipay/fetch','数据读取','','','','2021-04-15 19:51:46','2021-04-15 19:09:39'),(109,1,0,50,1,106,0,1,'/dev/alipay/delete','数据删除','','','','2021-04-15 19:51:51','2021-04-15 19:09:56'),(110,1,0,50,1,106,0,1,'/dev/alipay/status','状态修改','','','','2021-04-15 19:51:56','2021-04-15 19:10:08'),(111,1,0,50,1,105,0,1,'/dev/order/alipay','手动下单','','','','2021-04-15 21:17:22','2021-04-15 21:17:22'),(112,1,0,50,1,12,0,1,'/dev/order/out','数据导出','','','','2021-04-17 12:19:23','2021-04-17 12:19:23'),(113,1,0,50,1,12,0,1,'/dev/balance/out','流水导出','','','','2021-04-17 15:30:29','2021-04-17 15:30:29'),(114,1,0,50,1,66,0,1,'/dev/version/post','数据维护','','','','2021-04-25 10:59:47','2021-04-25 10:59:47'),(115,1,0,50,1,66,0,1,'/dev/version/fetch','数据读取','','','','2021-04-25 11:00:09','2021-04-25 11:00:09'),(116,1,0,50,1,60,0,1,'/dev/user/fetch','商户读取','','','','2021-04-25 15:44:40','2021-04-25 15:44:40'),(117,1,0,3,1,27,1,1,'/member/agent','代理账号','jingliren','代理账号列表','','2021-04-25 16:36:11','2021-04-25 16:31:33'),(118,1,0,4,1,69,1,1,'/finance/stat','数据统计','chizi','卡商收入、成功率统计','','2021-04-28 09:25:26','2021-04-28 09:22:52'),(119,1,0,50,1,118,0,1,'/dev/analysis/stat','查询','','','','2021-04-28 09:34:37','2021-04-28 09:34:37'),(120,1,0,50,1,29,0,1,'/dev/channel/fetch','通道读取','','','','2021-05-08 10:03:10','2021-05-08 10:03:10'),(121,1,0,50,1,67,0,1,'/dev/system/fetch','读取数据','','','','2021-05-22 17:17:53','2021-05-22 17:16:50'),(122,1,0,50,1,67,0,1,'/dev/system/delete','删数数据','','','','2021-05-22 17:17:39','2021-05-22 17:17:39');
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

-- Dump completed on 2021-05-22 19:21:44
