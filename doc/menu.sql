-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: pay
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
) ENGINE=InnoDB AUTO_INCREMENT=5363 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_role_menu`
--

LOCK TABLES `admin_role_menu` WRITE;
/*!40000 ALTER TABLE `admin_role_menu` DISABLE KEYS */;
INSERT INTO `admin_role_menu` VALUES (4597,1,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4598,12,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4599,13,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4600,24,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4601,26,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4602,83,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4603,84,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4604,85,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4605,104,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4606,112,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4607,113,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4608,8,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4609,28,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4610,98,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4611,99,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4612,100,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4613,101,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4614,102,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4615,103,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4616,4,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4617,51,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4618,53,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4619,54,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4620,55,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4621,97,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4622,105,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4623,111,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4624,87,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4625,88,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4626,89,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4627,90,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4628,91,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4629,94,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4630,5,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4631,68,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4632,69,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4633,70,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4634,74,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4635,75,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4636,76,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4637,77,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4638,71,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4639,78,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4640,79,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4641,80,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4642,81,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4643,72,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4644,82,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4645,36,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4646,37,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4647,40,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4648,56,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4649,57,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4650,58,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4651,59,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4652,92,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4653,60,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4654,86,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4655,42,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4656,61,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4657,62,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4658,63,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4659,64,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4660,106,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4661,107,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4662,108,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4663,109,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4664,110,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4665,2,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4666,27,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4667,6,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(5205,1,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5206,12,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5207,13,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5208,24,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5209,26,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5210,83,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5211,84,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5212,85,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5213,104,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5214,112,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5215,113,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5216,2,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5217,8,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5218,27,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5219,28,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5220,98,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5221,99,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5222,100,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5223,101,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5224,102,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5225,103,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5226,29,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5227,31,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5228,32,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5229,33,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5230,34,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5231,35,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5232,73,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5233,95,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5234,96,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5235,93,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5236,122,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5237,4,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5238,51,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5239,53,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5240,54,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5241,55,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5242,97,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5243,87,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5244,88,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5245,89,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5246,90,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5247,91,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5248,94,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5249,5,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5250,68,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5251,69,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5252,70,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5253,74,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5254,75,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5255,76,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5256,77,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5257,71,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5258,78,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5259,79,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5260,80,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5261,81,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5262,72,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5263,82,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5264,118,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5265,119,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5266,120,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5267,121,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5268,6,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5269,36,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5270,37,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5271,60,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5272,86,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5273,40,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5274,56,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5275,57,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5276,58,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5277,59,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5278,92,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5279,41,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5280,47,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5281,48,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5282,49,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5283,50,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5284,39,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5285,43,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5286,44,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5287,45,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5288,46,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5289,7,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5290,10,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5291,11,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5292,14,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5293,21,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5294,22,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5295,23,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5296,15,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5297,17,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5298,18,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5299,19,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5300,20,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5301,25,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5302,16,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5303,65,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5304,66,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5305,114,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5306,115,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5307,67,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5308,116,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5309,117,1,'2021-09-02 20:40:34','2021-09-02 20:40:34'),(5338,1,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5339,12,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5340,13,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5341,24,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5342,26,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5343,83,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5344,84,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5345,85,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5346,104,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5347,112,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5348,113,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5349,123,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5350,51,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5351,54,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5352,55,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5353,97,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5354,88,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5355,89,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5356,72,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5357,82,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5358,4,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5359,53,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5360,87,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5361,5,3,'2021-09-03 10:16:12','2021-09-03 10:16:12'),(5362,69,3,'2021-09-03 10:16:12','2021-09-03 10:16:12');
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
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_menu`
--

LOCK TABLES `admin_menu` WRITE;
/*!40000 ALTER TABLE `admin_menu` DISABLE KEYS */;
INSERT INTO `admin_menu` VALUES (1,1,0,1,2,0,1,2,'/index','首页','shouye','desc','','2021-03-25 09:07:45','2021-03-25 08:58:37'),(2,1,0,2,1,0,1,1,'/member','会员','CPhezuo','desc','','2021-03-25 09:04:14','2021-03-25 08:58:58'),(4,1,0,4,1,0,1,2,'/order','订单','yemianliu','desc','','2021-03-25 09:10:17','2021-03-25 09:01:09'),(5,1,0,5,1,0,1,1,'/finance','财务','jinbi','','','2021-03-25 09:02:35','2021-03-25 09:02:35'),(6,1,0,6,1,0,1,1,'/sf','收付','fuwuguanli','','','2021-03-25 09:02:59','2021-03-25 09:02:59'),(7,1,0,7,1,0,1,1,'/setting','设置','kongzhizhongxin','','','2021-03-25 09:03:26','2021-03-25 09:03:26'),(8,1,0,1,1,2,1,1,'/member/index','会员首页','qunzu','desc','','2021-03-25 09:13:16','2021-03-25 09:13:05'),(10,1,0,1,1,7,1,1,'/setting/index','设置首页','shouye_o','','','2021-03-25 20:49:15','2021-03-25 20:49:15'),(11,1,0,2,1,7,1,1,'/setting/auth','权限管理','RectangleCopy173','','','2021-03-25 21:38:47','2021-03-25 20:50:10'),(12,1,0,1,1,1,0,1,'、','公共权限','','','','2021-03-25 20:53:34','2021-03-25 20:53:34'),(13,1,0,1,1,12,0,1,'/dev/user/menu','用户菜单获取','','','','2021-03-25 20:54:26','2021-03-25 20:54:26'),(14,1,0,1,1,11,1,1,'/setting/auth/group','角色管理','qunzu_o','平台角色管理','','2021-03-25 20:59:47','2021-03-25 20:59:47'),(15,1,0,2,1,11,1,1,'/setting/auth/menu','菜单配置','RectangleCopy51','系统菜单配置','','2021-03-25 21:01:25','2021-03-25 21:01:25'),(16,1,0,3,1,11,1,1,'/setting/auth/rule','权限配置','RectangleCopy176','分配访问权限','','2021-03-25 21:46:03','2021-03-25 21:02:05'),(17,1,0,1,1,15,0,1,'/dev/menu/fetch','菜单读取','','','','2021-03-25 21:04:10','2021-03-25 21:04:10'),(18,1,0,2,1,15,0,1,'/dev/menu/delete','删除菜单','','','','2021-03-25 21:04:33','2021-03-25 21:04:33'),(19,1,0,3,1,15,0,1,'/dev/menu/post','菜单修改','','','','2021-03-25 21:05:02','2021-03-25 21:05:02'),(20,1,0,4,1,15,0,1,'/dev/menu/order','顺序设置','','','','2021-03-25 21:05:36','2021-03-25 21:05:36'),(21,1,0,50,1,14,0,1,'/dev/role/fetch','角色读取','','','','2021-03-25 21:28:26','2021-03-25 21:28:26'),(22,1,0,50,1,14,0,1,'/dev/role/post','角色修改','','','','2021-03-25 21:28:44','2021-03-25 21:28:44'),(23,1,0,50,1,14,0,1,'/dev/role/menu','角色菜单','','','','2021-03-25 21:33:04','2021-03-25 21:33:04'),(24,1,0,50,1,12,0,1,'/dev/analysis/summary','数据汇总','','','','2021-03-26 09:20:21','2021-03-26 09:20:21'),(25,1,0,50,1,15,0,1,'/dev/role/grant','菜订授权','','','','2021-03-26 09:22:43','2021-03-26 09:22:43'),(26,1,0,50,1,12,0,1,'/dev/user/stat','用户金额信息','','','','2021-03-26 09:51:02','2021-03-26 09:51:02'),(27,1,0,2,1,2,1,1,'/member/user','账号管理','CPhezuo_o','商户账号信息维护','','2021-03-26 09:59:50','2021-03-26 09:58:03'),(28,1,0,1,1,27,1,1,'/member/biz','商户账号','jingliren','商户账号维护','','2021-03-27 09:02:10','2021-03-26 10:00:43'),(29,1,0,3,1,27,1,1,'/member/client','卡商账号','guanliyuanrenzheng','卡商账号管理','','2021-03-26 10:15:13','2021-03-26 10:03:58'),(31,1,0,50,1,29,0,1,'/dev/user/post','账号创建','','','','2021-03-26 10:45:56','2021-03-26 10:45:56'),(32,1,0,50,1,29,0,1,'/dev/user/fetch','账号读取','','','','2021-03-26 10:46:50','2021-03-26 10:46:50'),(33,1,0,50,1,29,0,1,'/dev/user/delete','账号删除','','','','2021-03-26 11:32:20','2021-03-26 11:32:20'),(34,1,0,50,1,29,0,1,'/dev/user/status','状修设置','','','','2021-03-26 12:51:54','2021-03-26 12:51:54'),(35,1,0,50,1,29,0,1,'/dev/user/member','商户修改','','','','2021-03-27 19:18:51','2021-03-27 19:18:51'),(36,1,0,1,1,6,1,1,'/sf/index','收付首页','fuwuguanli','','','2021-03-27 20:44:26','2021-03-27 20:44:26'),(37,1,0,2,1,6,1,1,'/sf/','收付管理','fuwuguanli','','','2021-03-27 20:47:19','2021-03-27 20:44:58'),(39,1,0,4,1,37,1,1,'/sf/bank','银行列表','dunpaibaoxianrenzheng','全局银行列表维护','','2021-08-04 11:21:37','2021-03-27 20:46:30'),(40,1,0,2,1,37,1,1,'/sf/mybank','充值提现','fuwuguanli','用于充值/提现','','2021-08-04 11:21:21','2021-03-27 20:48:07'),(41,1,0,3,1,37,1,1,'/sf/channel','通道管理','jiazai_shuaxin','通道管理/状态控制','','2021-08-04 11:21:32','2021-03-27 20:49:06'),(43,1,0,50,1,39,0,1,'/dev/bank/post','银行管理','','','','2021-03-27 21:18:42','2021-03-27 21:18:42'),(44,1,0,50,1,39,0,1,'/dev/bank/delete','银行删除','','','','2021-03-27 21:19:57','2021-03-27 21:19:05'),(45,1,0,50,1,39,0,1,'/dev/bank/fetch','银行读取','','','','2021-03-27 21:19:45','2021-03-27 21:19:45'),(46,1,0,50,1,39,0,1,'/dev/bank/status','修改状态','','','','2021-03-27 21:20:25','2021-03-27 21:20:25'),(47,1,0,50,1,41,0,1,'/dev/channel/post','数据维护','','','','2021-03-27 21:48:30','2021-03-27 21:48:30'),(48,1,0,50,1,41,0,1,'/dev/channel/fetch','数据读取','','','','2021-03-27 21:48:53','2021-03-27 21:48:53'),(49,1,0,50,1,41,0,1,'/dev/channel/delete','数据删除','','','','2021-03-27 21:49:05','2021-03-27 21:49:05'),(50,1,0,50,1,41,0,1,'/dev/channel/status','状态修改','','','','2021-03-27 21:49:19','2021-03-27 21:49:19'),(51,1,0,1,1,4,0,1,'/order/index','订单首页','shouye_o','','','2021-03-27 22:45:39','2021-03-27 22:45:28'),(53,1,0,2,1,4,1,1,'/order/admin','订单管理','yemianliu_o','收付订单列表','','2021-03-27 22:47:30','2021-03-27 22:47:30'),(54,1,0,1,1,53,1,1,'/order/list','代付订单','yemianliu_o','代付订单列表','','2021-03-27 22:48:50','2021-03-27 22:48:50'),(55,1,0,2,1,53,1,1,'/order/bank','代收订单','gerenxinxi','代收订单列表','','2021-03-27 22:50:05','2021-03-27 22:50:05'),(56,1,0,50,1,40,0,1,'/dev/card/post','数据维护','','','','2021-03-28 08:29:03','2021-03-28 08:29:03'),(57,1,0,50,1,40,0,1,'/dev/card/fetch','数据读取','','','','2021-03-28 08:29:28','2021-03-28 08:29:28'),(58,1,0,50,1,40,0,1,'/dev/card/delete','数据删除','','','','2021-03-28 08:29:37','2021-03-28 08:29:37'),(59,1,0,50,1,40,0,1,'/dev/card/status','状态修改','','','','2021-03-28 08:29:51','2021-03-28 08:29:51'),(60,1,0,1,1,37,1,1,'/sf/serve','卡片管理','fuwuxunhuanguanli','用于代付/代收业务','','2021-08-04 11:20:46','2021-03-28 09:55:02'),(61,1,0,50,1,42,0,1,'/dev/device/post','数据维护','','','','2021-03-28 19:56:58','2021-03-28 19:56:58'),(62,1,0,50,1,42,0,1,'/dev/device/fetch','数据读取','','','','2021-03-28 19:57:23','2021-03-28 19:57:23'),(63,1,0,50,1,42,0,1,'/dev/device/delete','数据删除','','','','2021-03-28 19:57:33','2021-03-28 19:57:33'),(64,1,0,50,1,42,0,1,'/dev/device/status','状态修改','','','','2021-03-28 19:57:46','2021-03-28 19:57:46'),(65,1,0,3,1,7,1,1,'/setting','系统维护','shu','','','2021-03-29 08:18:21','2021-03-29 08:18:21'),(66,1,0,1,1,65,1,1,'/setting/version','版本管理','yingyongAPP_o','APP版本维护','','2021-03-29 08:19:39','2021-03-29 08:18:53'),(67,1,0,50,1,65,1,1,'/setting/action','操作日志','baocun','操作日志记录','','2021-03-29 08:19:28','2021-03-29 08:19:28'),(68,1,0,1,1,5,1,1,'/finance/index','财务首页','shouye_o','','','2021-03-29 09:08:29','2021-03-29 09:08:29'),(69,1,0,2,1,5,1,1,'/finance/navi','快捷向导','ding_o','','','2021-03-29 09:09:01','2021-03-29 09:09:01'),(70,1,0,1,1,69,1,1,'/finance/recharge','充值申请','jiekuan_o','充值申请/结果查询','','2021-03-29 09:10:50','2021-03-29 09:10:29'),(71,1,0,2,1,69,1,1,'/finance/withdrawal','提现申请','cunkuan_o','提现审批/拒绝/查询','','2021-03-29 09:18:32','2021-03-29 09:11:34'),(72,1,0,3,1,69,1,1,'/finance/transaction','账户流水','huobiliu_o','交易流水查询','','2021-03-29 09:12:41','2021-03-29 09:12:41'),(73,1,0,50,1,29,0,1,'/dev/chain/post','商户通道','','','','2021-03-30 14:54:23','2021-03-30 14:54:23'),(74,1,0,50,1,70,0,1,'/dev/recharge/post','数据维护','','','','2021-03-31 09:24:46','2021-03-31 09:24:46'),(75,1,0,50,1,70,0,1,'/dev/recharge/fetch','数据读取','','','','2021-03-31 09:25:18','2021-03-31 09:25:18'),(76,1,0,50,1,70,0,1,'/dev/recharge/delete','数据删除','','','','2021-04-01 09:40:00','2021-03-31 09:25:34'),(77,1,0,50,1,70,0,1,'/dev/recharge/status','状态修改','','','','2021-03-31 09:25:48','2021-03-31 09:25:48'),(78,1,0,50,1,71,0,1,'/dev/withdrawal/post','数据维护','','','','2021-04-01 09:38:09','2021-04-01 09:38:09'),(79,1,0,50,1,71,0,1,'/dev/withdrawal/fetch','数据读取','','','','2021-04-01 09:38:30','2021-04-01 09:38:30'),(80,1,0,50,1,71,0,1,'/dev/withdrawal/delete','数据删除','','','','2021-04-01 09:40:30','2021-04-01 09:38:38'),(81,1,0,50,1,71,0,1,'/dev/withdrawal/status','状态修改','','','','2021-04-01 09:39:00','2021-04-01 09:39:00'),(82,1,0,50,1,72,0,1,'/dev/balance/fetch','数据读取','','','','2021-04-01 10:39:02','2021-04-01 10:39:02'),(83,1,0,50,1,12,0,1,'/dev/user/goauth','谷歌绑定','','','','2021-04-01 12:24:32','2021-04-01 12:24:32'),(84,1,0,50,1,12,0,1,'/dev/user/modifypwd','修改密码','','','','2021-04-01 13:21:43','2021-04-01 13:20:53'),(85,1,0,50,1,12,0,1,'/dev/user/reset','用户重置','','','','2021-04-01 13:34:58','2021-04-01 13:34:58'),(86,1,0,50,1,60,0,1,'/dev/card/bind','卡片绑定','','','','2021-04-01 21:03:56','2021-04-01 21:03:56'),(87,1,0,50,1,53,0,1,'/dev/order/','公有权限','','','','2021-04-02 09:30:17','2021-04-02 09:29:57'),(88,1,0,50,1,87,0,1,'/dev/order/fetch','读取','','','','2021-04-02 09:30:36','2021-04-02 09:30:36'),(89,1,0,50,1,88,0,1,'/dev/order/post','下单','','','','2021-04-02 10:07:31','2021-04-02 10:07:31'),(90,1,0,50,1,87,0,1,'/dev/order/finish','确认收款','','','','2021-04-03 09:29:27','2021-04-03 09:29:27'),(91,1,0,50,1,87,0,1,'/dev/order/fail','付款失败','','','','2021-04-03 12:25:01','2021-04-03 12:25:01'),(92,1,0,50,1,40,0,1,'/dev/bank/fetch','银行列表','','','','2021-04-04 15:12:01','2021-04-04 15:11:06'),(93,1,0,50,1,27,1,1,'/member/admin','管理员账号','gerentouxiang','管理员账号维护','','2021-04-06 10:33:48','2021-04-06 10:31:39'),(94,1,0,50,1,53,0,1,'/dev/order/fresh','私有权限','','','','2021-04-07 11:18:23','2021-04-07 11:17:24'),(95,1,0,50,1,29,0,1,'/dev/agent/limit','费率限制','','','','2021-04-09 12:54:14','2021-04-09 12:54:14'),(96,1,0,50,1,29,0,1,'/dev/agent/post','费率设置','','','','2021-04-09 14:30:11','2021-04-09 14:30:11'),(97,1,0,50,1,55,0,1,'/dev/order/pay','手动下单','','','','2021-04-10 09:18:40','2021-04-10 09:18:40'),(98,1,0,50,1,28,0,1,'/dev/user/post','商户创建','','','','2021-04-10 14:58:18','2021-04-10 14:58:18'),(99,1,0,50,1,28,0,1,'/dev/user/fetch','商户读取','','','','2021-04-10 14:58:50','2021-04-10 14:58:50'),(100,1,0,50,1,28,0,1,'/dev/channel/fetch','通道读取','','','','2021-04-10 15:01:02','2021-04-10 15:01:02'),(101,1,0,50,1,28,0,1,'/dev/user/member','会员维护','','','','2021-04-10 16:50:53','2021-04-10 16:50:53'),(102,1,0,50,1,28,0,1,'/dev/agent/fetch','代理费率读取','','','','2021-04-10 17:09:03','2021-04-10 17:09:03'),(103,1,0,50,1,28,0,1,'/dev/chain/post','费率设置','','','','2021-04-10 17:59:43','2021-04-10 17:59:43'),(104,1,0,50,1,12,0,1,'/dev/order/read','消息读取','','','','2021-04-12 17:05:38','2021-04-12 17:05:38'),(107,1,0,50,1,106,0,1,'/dev/alipay/post','数据维护','','','','2021-04-15 19:51:39','2021-04-15 19:09:19'),(108,1,0,50,1,106,0,1,'/dev/alipay/fetch','数据读取','','','','2021-04-15 19:51:46','2021-04-15 19:09:39'),(109,1,0,50,1,106,0,1,'/dev/alipay/delete','数据删除','','','','2021-04-15 19:51:51','2021-04-15 19:09:56'),(110,1,0,50,1,106,0,1,'/dev/alipay/status','状态修改','','','','2021-04-15 19:51:56','2021-04-15 19:10:08'),(111,1,0,50,1,105,0,1,'/dev/order/alipay','手动下单','','','','2021-04-15 21:17:22','2021-04-15 21:17:22'),(112,1,0,50,1,12,0,1,'/dev/order/out','数据导出','','','','2021-04-17 12:19:23','2021-04-17 12:19:23'),(113,1,0,50,1,12,0,1,'/dev/balance/out','流水导出','','','','2021-04-17 15:30:29','2021-04-17 15:30:29'),(114,1,0,50,1,66,0,1,'/dev/version/post','数据维护','','','','2021-04-25 10:59:47','2021-04-25 10:59:47'),(115,1,0,50,1,66,0,1,'/dev/version/fetch','数据读取','','','','2021-04-25 11:00:09','2021-04-25 11:00:09'),(116,1,0,50,1,67,0,1,'/dev/system/delete','清空日志','','','','2021-08-04 11:13:11','2021-08-04 11:13:11'),(117,1,0,50,1,67,0,1,'/dev/system/fetch','日志读取','','','','2021-08-04 11:14:03','2021-08-04 11:14:03'),(118,1,0,50,1,69,1,1,'/finance/stat','数据统计','chizi','卡商收入、成功率统计','','2021-08-26 10:51:15','2021-08-26 10:51:15'),(119,1,0,50,1,118,0,1,'/dev/analysis/stat','查询','','','','2021-08-26 10:51:36','2021-08-26 10:51:36'),(120,1,0,50,1,69,1,1,'/finance/card','卡片统计','jinbi','卡片收支统计','','2021-08-26 10:52:13','2021-08-26 10:52:13'),(121,1,0,50,1,120,0,1,'/dev/card/stat','卡片数据统计','','','','2021-08-26 10:52:33','2021-08-26 10:52:33'),(122,1,0,50,1,27,1,1,'/member/agent','代理账号','jingliren','代理账号列表','','2021-09-02 20:41:09','2021-09-02 20:40:25'),(123,1,0,50,1,12,0,1,'/dev/channel/fetch','通道读取','','','','2021-09-03 10:15:11','2021-09-03 10:15:11');
/*!40000 ALTER TABLE `admin_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_channel`
--

DROP TABLE IF EXISTS `std_channel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_channel` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `status` bigint DEFAULT NULL COMMENT '状态',
  `name` varchar(128) DEFAULT NULL COMMENT '名称',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `ip` varchar(256) DEFAULT NULL,
  `rate` decimal(10,5) DEFAULT '0.00000',
  `url` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_channel`
--

LOCK TABLES `std_channel` WRITE;
/*!40000 ALTER TABLE `std_channel` DISABLE KEYS */;
INSERT INTO `std_channel` VALUES (1,1,'代付','2021-04-02 10:31:35','2021-03-27 21:59:00',NULL,0.00000,NULL),(2,2,'代收','2021-09-03 18:40:04','2021-03-27 21:59:08',NULL,0.00000,NULL),(3,2,'支付宝','2021-09-03 18:40:04','2021-04-15 20:31:43',NULL,0.00000,NULL),(4,1,'xj微信慢充','2021-09-03 09:00:36','2021-09-03 09:00:36','1',1.00000,'http://www.bbxopay.com/Pay_Index.html'),(5,1,'xj支付宝大额扫码','2021-09-03 09:01:36','2021-09-03 09:00:48','1',1.00000,'http://www.bbxopay.com/Pay_Index.html'),(6,1,'xj复制转卡','2021-09-03 09:01:41','2021-09-03 09:01:01','1',1.00000,'http://www.bbxopay.com/Pay_Index.html'),(7,1,'xj银联网关','2021-09-03 09:01:46','2021-09-03 09:01:14','1',1.00000,'http://www.bbxopay.com/Pay_Index.html'),(8,1,'xj微信话费扫码','2021-09-03 09:01:55','2021-09-03 09:01:29','1',1.00000,'http://www.bbxopay.com/Pay_Index.html'),(9,1,'鑫鑫卡转卡','2021-09-04 10:57:01','2021-09-03 14:39:44','35.241.66.216',1.00000,'http://zpay.website/pay/order'),(10,2,'鑫鑫支付宝银行卡','2021-09-03 18:40:14','2021-09-03 18:27:47','1',1.00000,'http://zpay.website/pay/order'),(11,2,'鑫鑫微信银行卡','2021-09-03 18:40:14','2021-09-03 18:31:07','1',1.00000,'http://zpay.website/pay/order'),(12,1,'公主支付宝话费','2021-09-04 10:53:22','2021-09-04 10:49:18','47.241.160.169',1.00000,'https://mch.gongzhuzf.com/cashier/pay'),(13,1,'公主微信油卡','2021-09-04 10:53:16','2021-09-04 10:49:56','47.241.160.169',1.00000,'https://mch.gongzhuzf.com/cashier/pay'),(14,1,'公主支付宝原生','2021-09-04 10:53:12','2021-09-04 10:50:24','47.241.160.169',1.00000,'https://mch.gongzhuzf.com/cashier/pay'),(15,1,'公主京东快捷','2021-09-04 10:53:09','2021-09-04 10:50:44','47.241.160.169',1.00000,'https://mch.gongzhuzf.com/cashier/pay');
/*!40000 ALTER TABLE `std_channel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-04 11:46:46
