-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: sun
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
) ENGINE=InnoDB AUTO_INCREMENT=6424 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_role_menu`
--

LOCK TABLES `admin_role_menu` WRITE;
/*!40000 ALTER TABLE `admin_role_menu` DISABLE KEYS */;
INSERT INTO `admin_role_menu` VALUES (6050,1,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6051,12,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6052,13,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6053,24,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6054,26,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6055,83,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6056,84,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6057,85,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6058,104,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6059,112,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6060,113,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6061,54,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6062,87,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6063,88,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6064,89,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6065,128,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6066,68,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6067,72,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6068,82,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6069,4,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6070,53,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6071,5,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6072,69,2,'2021-10-17 20:36:38','2021-10-17 20:36:38'),(6149,1,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6150,12,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6151,13,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6152,24,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6153,26,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6154,83,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6155,84,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6156,85,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6157,104,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6158,112,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6159,113,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6160,51,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6161,54,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6162,55,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6163,97,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6164,87,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6165,88,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6166,89,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6167,128,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6168,68,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6169,72,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6170,82,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6171,4,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6172,53,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6173,5,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6174,69,3,'2021-10-17 21:13:18','2021-10-17 21:13:18'),(6269,1,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6270,12,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6271,13,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6272,24,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6273,26,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6274,83,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6275,84,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6276,85,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6277,104,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6278,112,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6279,113,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6280,131,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6281,2,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6282,8,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6283,27,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6284,28,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6285,98,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6286,99,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6287,100,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6288,101,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6289,102,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6290,103,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6291,29,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6292,31,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6293,32,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6294,33,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6295,34,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6296,35,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6297,73,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6298,95,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6299,96,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6300,93,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6301,129,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6302,4,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6303,51,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6304,53,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6305,54,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6306,55,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6307,97,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6308,87,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6309,88,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6310,89,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6311,128,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6312,94,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6313,90,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6314,91,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6315,130,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6316,127,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6317,5,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6318,68,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6319,69,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6320,70,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6321,74,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6322,75,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6323,76,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6324,77,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6325,71,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6326,78,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6327,79,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6328,80,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6329,81,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6330,72,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6331,82,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6332,118,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6333,119,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6334,120,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6335,121,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6336,6,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6337,36,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6338,37,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6339,60,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6340,56,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6341,57,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6342,58,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6343,59,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6344,86,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6345,92,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6346,40,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6347,41,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6348,47,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6349,48,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6350,49,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6351,50,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6352,39,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6353,43,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6354,44,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6355,45,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6356,46,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6357,122,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6358,123,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6359,124,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6360,125,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6361,126,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6362,7,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6363,10,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6364,11,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6365,14,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6366,21,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6367,22,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6368,23,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6369,15,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6370,17,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6371,18,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6372,19,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6373,20,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6374,25,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6375,16,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6376,65,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6377,66,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6378,114,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6379,115,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6380,67,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6381,116,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6382,117,1,'2021-10-18 20:34:52','2021-10-18 20:34:52'),(6383,1,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6384,12,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6385,13,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6386,24,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6387,26,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6388,83,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6389,84,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6390,85,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6391,104,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6392,112,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6393,113,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6394,131,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6395,132,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6396,51,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6397,54,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6398,87,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6399,88,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6400,89,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6401,128,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6402,68,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6403,72,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6404,82,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6405,36,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6406,60,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6407,56,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6408,57,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6409,58,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6410,59,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6411,86,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6412,92,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6413,122,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6414,123,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6415,124,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6416,125,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6417,126,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6418,4,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6419,53,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6420,5,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6421,69,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6422,6,4,'2021-10-20 23:00:33','2021-10-20 23:00:33'),(6423,37,4,'2021-10-20 23:00:33','2021-10-20 23:00:33');
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
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_menu`
--

LOCK TABLES `admin_menu` WRITE;
/*!40000 ALTER TABLE `admin_menu` DISABLE KEYS */;
INSERT INTO `admin_menu` VALUES (1,1,0,1,2,0,1,2,'/index','首页','shouye','desc','','2021-03-25 09:07:45','2021-03-25 08:58:37'),(2,1,0,2,1,0,1,1,'/member','会员','CPhezuo','desc','','2021-03-25 09:04:14','2021-03-25 08:58:58'),(4,1,0,4,1,0,1,2,'/order','订单','yemianliu','desc','','2021-03-25 09:10:17','2021-03-25 09:01:09'),(5,1,0,5,1,0,1,1,'/finance','财务','jinbi','','','2021-03-25 09:02:35','2021-03-25 09:02:35'),(6,1,0,6,1,0,1,1,'/sf','收付','fuwuguanli','','','2021-03-25 09:02:59','2021-03-25 09:02:59'),(7,1,0,7,1,0,1,1,'/setting','设置','kongzhizhongxin','','','2021-03-25 09:03:26','2021-03-25 09:03:26'),(8,1,0,1,1,2,1,1,'/member/index','会员首页','qunzu','desc','','2021-03-25 09:13:16','2021-03-25 09:13:05'),(10,1,0,1,1,7,1,1,'/setting/index','设置首页','shouye_o','','','2021-03-25 20:49:15','2021-03-25 20:49:15'),(11,1,0,2,1,7,1,1,'/setting/auth','权限管理','RectangleCopy173','','','2021-03-25 21:38:47','2021-03-25 20:50:10'),(12,1,0,1,1,1,0,1,'、','公共权限','','','','2021-03-25 20:53:34','2021-03-25 20:53:34'),(13,1,0,1,1,12,0,1,'/dev/user/menu','用户菜单获取','','','','2021-03-25 20:54:26','2021-03-25 20:54:26'),(14,1,0,1,1,11,1,1,'/setting/auth/group','角色管理','qunzu_o','平台角色管理','','2021-03-25 20:59:47','2021-03-25 20:59:47'),(15,1,0,2,1,11,1,1,'/setting/auth/menu','菜单配置','RectangleCopy51','系统菜单配置','','2021-03-25 21:01:25','2021-03-25 21:01:25'),(16,1,0,3,1,11,1,1,'/setting/auth/rule','权限配置','RectangleCopy176','分配访问权限','','2021-03-25 21:46:03','2021-03-25 21:02:05'),(17,1,0,1,1,15,0,1,'/dev/menu/fetch','菜单读取','','','','2021-03-25 21:04:10','2021-03-25 21:04:10'),(18,1,0,2,1,15,0,1,'/dev/menu/delete','删除菜单','','','','2021-03-25 21:04:33','2021-03-25 21:04:33'),(19,1,0,3,1,15,0,1,'/dev/menu/post','菜单修改','','','','2021-03-25 21:05:02','2021-03-25 21:05:02'),(20,1,0,4,1,15,0,1,'/dev/menu/order','顺序设置','','','','2021-03-25 21:05:36','2021-03-25 21:05:36'),(21,1,0,50,1,14,0,1,'/dev/role/fetch','角色读取','','','','2021-03-25 21:28:26','2021-03-25 21:28:26'),(22,1,0,50,1,14,0,1,'/dev/role/post','角色修改','','','','2021-03-25 21:28:44','2021-03-25 21:28:44'),(23,1,0,50,1,14,0,1,'/dev/role/menu','角色菜单','','','','2021-03-25 21:33:04','2021-03-25 21:33:04'),(24,1,0,50,1,12,0,1,'/dev/analysis/summary','数据汇总','','','','2021-03-26 09:20:21','2021-03-26 09:20:21'),(25,1,0,50,1,15,0,1,'/dev/role/grant','菜订授权','','','','2021-03-26 09:22:43','2021-03-26 09:22:43'),(26,1,0,50,1,12,0,1,'/dev/user/stat','用户金额信息','','','','2021-03-26 09:51:02','2021-03-26 09:51:02'),(27,1,0,2,1,2,1,1,'/member/user','账号管理','CPhezuo_o','商户账号信息维护','','2021-03-26 09:59:50','2021-03-26 09:58:03'),(28,1,0,1,1,27,1,1,'/member/biz','商户账号','jingliren','商户账号维护','','2021-03-27 09:02:10','2021-03-26 10:00:43'),(29,1,0,3,1,27,1,1,'/member/client','卡商账号','guanliyuanrenzheng','卡商账号管理','','2021-03-26 10:15:13','2021-03-26 10:03:58'),(31,1,0,50,1,29,0,1,'/dev/user/post','账号创建','','','','2021-03-26 10:45:56','2021-03-26 10:45:56'),(32,1,0,50,1,29,0,1,'/dev/user/fetch','账号读取','','','','2021-03-26 10:46:50','2021-03-26 10:46:50'),(33,1,0,50,1,29,0,1,'/dev/user/delete','账号删除','','','','2021-03-26 11:32:20','2021-03-26 11:32:20'),(34,1,0,50,1,29,0,1,'/dev/user/status','状修设置','','','','2021-03-26 12:51:54','2021-03-26 12:51:54'),(35,1,0,50,1,29,0,1,'/dev/user/member','商户修改','','','','2021-03-27 19:18:51','2021-03-27 19:18:51'),(36,1,0,1,1,6,1,1,'/sf/index','收付首页','fuwuguanli','','','2021-03-27 20:44:26','2021-03-27 20:44:26'),(37,1,0,2,1,6,1,1,'/sf/','收付管理','fuwuguanli','','','2021-03-27 20:47:19','2021-03-27 20:44:58'),(39,1,0,4,1,37,1,1,'/sf/bank','银行列表','dunpaibaoxianrenzheng','全局银行列表维护','','2021-08-04 11:21:37','2021-03-27 20:46:30'),(40,1,0,2,1,37,1,1,'/sf/mybank','充值提现','fuwuguanli','用于充值/提现','','2021-08-04 11:21:21','2021-03-27 20:48:07'),(41,1,0,3,1,37,1,1,'/sf/channel','通道管理','jiazai_shuaxin','通道管理/状态控制','','2021-08-04 11:21:32','2021-03-27 20:49:06'),(43,1,0,50,1,39,0,1,'/dev/bank/post','银行管理','','','','2021-03-27 21:18:42','2021-03-27 21:18:42'),(44,1,0,50,1,39,0,1,'/dev/bank/delete','银行删除','','','','2021-03-27 21:19:57','2021-03-27 21:19:05'),(45,1,0,50,1,39,0,1,'/dev/bank/fetch','银行读取','','','','2021-03-27 21:19:45','2021-03-27 21:19:45'),(46,1,0,50,1,39,0,1,'/dev/bank/status','修改状态','','','','2021-03-27 21:20:25','2021-03-27 21:20:25'),(47,1,0,50,1,41,0,1,'/dev/channel/post','数据维护','','','','2021-03-27 21:48:30','2021-03-27 21:48:30'),(48,1,0,50,1,41,0,1,'/dev/channel/fetch','数据读取','','','','2021-03-27 21:48:53','2021-03-27 21:48:53'),(49,1,0,50,1,41,0,1,'/dev/channel/delete','数据删除','','','','2021-03-27 21:49:05','2021-03-27 21:49:05'),(50,1,0,50,1,41,0,1,'/dev/channel/status','状态修改','','','','2021-03-27 21:49:19','2021-03-27 21:49:19'),(51,1,0,1,1,4,0,1,'/order/index','订单首页','shouye_o','','','2021-03-27 22:45:39','2021-03-27 22:45:28'),(53,1,0,2,1,4,1,1,'/order/admin','订单管理','yemianliu_o','收付订单列表','','2021-03-27 22:47:30','2021-03-27 22:47:30'),(54,1,0,1,1,53,1,1,'/order/list','代付订单','yemianliu_o','代付订单列表','','2021-03-27 22:48:50','2021-03-27 22:48:50'),(55,1,0,2,1,53,1,1,'/order/bank','代收订单','gerenxinxi','代收订单列表','','2021-03-27 22:50:05','2021-03-27 22:50:05'),(56,1,0,50,1,60,0,1,'/dev/card/post','数据维护','','','','2021-10-18 10:01:33','2021-03-28 08:29:03'),(57,1,0,50,1,60,0,1,'/dev/card/fetch','数据读取','','','','2021-10-18 10:02:49','2021-03-28 08:29:28'),(58,1,0,50,1,60,0,1,'/dev/card/delete','数据删除','','','','2021-10-18 10:02:33','2021-03-28 08:29:37'),(59,1,0,50,1,60,0,1,'/dev/card/status','状态修改','','','','2021-10-18 10:02:02','2021-03-28 08:29:51'),(60,1,0,1,1,37,1,1,'/sf/serve','卡片管理','fuwuxunhuanguanli','用于代付/代收业务','','2021-08-04 11:20:46','2021-03-28 09:55:02'),(61,1,0,50,1,42,0,1,'/dev/device/post','数据维护','','','','2021-03-28 19:56:58','2021-03-28 19:56:58'),(62,1,0,50,1,42,0,1,'/dev/device/fetch','数据读取','','','','2021-03-28 19:57:23','2021-03-28 19:57:23'),(63,1,0,50,1,42,0,1,'/dev/device/delete','数据删除','','','','2021-03-28 19:57:33','2021-03-28 19:57:33'),(64,1,0,50,1,42,0,1,'/dev/device/status','状态修改','','','','2021-03-28 19:57:46','2021-03-28 19:57:46'),(65,1,0,3,1,7,1,1,'/setting','系统维护','shu','','','2021-03-29 08:18:21','2021-03-29 08:18:21'),(66,1,0,1,1,65,1,1,'/setting/version','版本管理','yingyongAPP_o','APP版本维护','','2021-03-29 08:19:39','2021-03-29 08:18:53'),(67,1,0,50,1,65,1,1,'/setting/action','操作日志','baocun','操作日志记录','','2021-03-29 08:19:28','2021-03-29 08:19:28'),(68,1,0,1,1,5,1,1,'/finance/index','财务首页','shouye_o','','','2021-03-29 09:08:29','2021-03-29 09:08:29'),(69,1,0,2,1,5,1,1,'/finance/navi','快捷向导','ding_o','','','2021-03-29 09:09:01','2021-03-29 09:09:01'),(70,1,0,1,1,69,1,1,'/finance/recharge','充值申请','jiekuan_o','充值申请/结果查询','','2021-03-29 09:10:50','2021-03-29 09:10:29'),(71,1,0,2,1,69,1,1,'/finance/withdrawal','提现申请','cunkuan_o','提现审批/拒绝/查询','','2021-03-29 09:18:32','2021-03-29 09:11:34'),(72,1,0,3,1,69,1,1,'/finance/transaction','账户流水','huobiliu_o','交易流水查询','','2021-03-29 09:12:41','2021-03-29 09:12:41'),(73,1,0,50,1,29,0,1,'/dev/chain/post','商户通道','','','','2021-03-30 14:54:23','2021-03-30 14:54:23'),(74,1,0,50,1,70,0,1,'/dev/recharge/post','数据维护','','','','2021-03-31 09:24:46','2021-03-31 09:24:46'),(75,1,0,50,1,70,0,1,'/dev/recharge/fetch','数据读取','','','','2021-03-31 09:25:18','2021-03-31 09:25:18'),(76,1,0,50,1,70,0,1,'/dev/recharge/delete','数据删除','','','','2021-04-01 09:40:00','2021-03-31 09:25:34'),(77,1,0,50,1,70,0,1,'/dev/recharge/status','状态修改','','','','2021-03-31 09:25:48','2021-03-31 09:25:48'),(78,1,0,50,1,71,0,1,'/dev/withdrawal/post','数据维护','','','','2021-04-01 09:38:09','2021-04-01 09:38:09'),(79,1,0,50,1,71,0,1,'/dev/withdrawal/fetch','数据读取','','','','2021-04-01 09:38:30','2021-04-01 09:38:30'),(80,1,0,50,1,71,0,1,'/dev/withdrawal/delete','数据删除','','','','2021-04-01 09:40:30','2021-04-01 09:38:38'),(81,1,0,50,1,71,0,1,'/dev/withdrawal/status','状态修改','','','','2021-04-01 09:39:00','2021-04-01 09:39:00'),(82,1,0,50,1,72,0,1,'/dev/balance/fetch','数据读取','','','','2021-04-01 10:39:02','2021-04-01 10:39:02'),(83,1,0,50,1,12,0,1,'/dev/user/goauth','谷歌绑定','','','','2021-04-01 12:24:32','2021-04-01 12:24:32'),(84,1,0,50,1,12,0,1,'/dev/user/modifypwd','修改密码','','','','2021-04-01 13:21:43','2021-04-01 13:20:53'),(85,1,0,50,1,12,0,1,'/dev/user/reset','用户重置','','','','2021-04-01 13:34:58','2021-04-01 13:34:58'),(86,1,0,50,1,60,0,1,'/dev/card/bind','卡片绑定','','','','2021-04-01 21:03:56','2021-04-01 21:03:56'),(87,1,0,50,1,53,0,1,'/dev/order/','公有权限','','','','2021-04-02 09:30:17','2021-04-02 09:29:57'),(88,1,0,50,1,87,0,1,'/dev/order/fetch','读取','','','','2021-04-02 09:30:36','2021-04-02 09:30:36'),(89,1,0,50,1,87,0,1,'/dev/order/post','下单','','','','2021-09-10 16:50:03','2021-04-02 10:07:31'),(90,1,0,50,1,94,0,1,'/dev/order/finish','确认收款','','','','2021-09-10 16:49:07','2021-04-03 09:29:27'),(91,1,0,50,1,94,0,1,'/dev/order/fail','付款失败','','','','2021-09-10 16:49:30','2021-04-03 12:25:01'),(92,1,0,50,1,60,0,1,'/dev/bank/fetch','银行列表','','','','2021-10-18 10:01:20','2021-04-04 15:11:06'),(93,1,0,50,1,27,1,1,'/member/admin','管理员账号','gerentouxiang','管理员账号维护','','2021-04-06 10:33:48','2021-04-06 10:31:39'),(94,1,0,50,1,53,0,1,'/dev/order/fresh','私有权限','','','','2021-04-07 11:18:23','2021-04-07 11:17:24'),(95,1,0,50,1,29,0,1,'/dev/agent/limit','费率限制','','','','2021-04-09 12:54:14','2021-04-09 12:54:14'),(96,1,0,50,1,29,0,1,'/dev/agent/post','费率设置','','','','2021-04-09 14:30:11','2021-04-09 14:30:11'),(97,1,0,50,1,55,0,1,'/dev/order/pay','手动下单','','','','2021-04-10 09:18:40','2021-04-10 09:18:40'),(98,1,0,50,1,28,0,1,'/dev/user/post','商户创建','','','','2021-04-10 14:58:18','2021-04-10 14:58:18'),(99,1,0,50,1,28,0,1,'/dev/user/fetch','商户读取','','','','2021-04-10 14:58:50','2021-04-10 14:58:50'),(100,1,0,50,1,28,0,1,'/dev/channel/fetch','通道读取','','','','2021-04-10 15:01:02','2021-04-10 15:01:02'),(101,1,0,50,1,28,0,1,'/dev/user/member','会员维护','','','','2021-04-10 16:50:53','2021-04-10 16:50:53'),(102,1,0,50,1,28,0,1,'/dev/agent/fetch','代理费率读取','','','','2021-04-10 17:09:03','2021-04-10 17:09:03'),(103,1,0,50,1,28,0,1,'/dev/chain/post','费率设置','','','','2021-04-10 17:59:43','2021-04-10 17:59:43'),(104,1,0,50,1,12,0,1,'/dev/order/read','消息读取','','','','2021-04-12 17:05:38','2021-04-12 17:05:38'),(107,1,0,50,1,106,0,1,'/dev/alipay/post','数据维护','','','','2021-04-15 19:51:39','2021-04-15 19:09:19'),(108,1,0,50,1,106,0,1,'/dev/alipay/fetch','数据读取','','','','2021-04-15 19:51:46','2021-04-15 19:09:39'),(109,1,0,50,1,106,0,1,'/dev/alipay/delete','数据删除','','','','2021-04-15 19:51:51','2021-04-15 19:09:56'),(110,1,0,50,1,106,0,1,'/dev/alipay/status','状态修改','','','','2021-04-15 19:51:56','2021-04-15 19:10:08'),(111,1,0,50,1,105,0,1,'/dev/order/alipay','手动下单','','','','2021-04-15 21:17:22','2021-04-15 21:17:22'),(112,1,0,50,1,12,0,1,'/dev/order/out','数据导出','','','','2021-04-17 12:19:23','2021-04-17 12:19:23'),(113,1,0,50,1,12,0,1,'/dev/balance/out','流水导出','','','','2021-04-17 15:30:29','2021-04-17 15:30:29'),(114,1,0,50,1,66,0,1,'/dev/version/post','数据维护','','','','2021-04-25 10:59:47','2021-04-25 10:59:47'),(115,1,0,50,1,66,0,1,'/dev/version/fetch','数据读取','','','','2021-04-25 11:00:09','2021-04-25 11:00:09'),(116,1,0,50,1,67,0,1,'/dev/system/delete','清空日志','','','','2021-08-04 11:13:11','2021-08-04 11:13:11'),(117,1,0,50,1,67,0,1,'/dev/system/fetch','日志读取','','','','2021-08-04 11:14:03','2021-08-04 11:14:03'),(118,1,0,50,1,69,1,1,'/finance/stat','数据统计','chizi','卡商收入、成功率统计','','2021-08-26 10:51:15','2021-08-26 10:51:15'),(119,1,0,50,1,118,0,1,'/dev/analysis/stat','查询','','','','2021-08-26 10:51:36','2021-08-26 10:51:36'),(120,1,0,50,1,69,1,1,'/finance/card','卡片统计','jinbi','卡片收支统计','','2021-08-26 10:52:13','2021-08-26 10:52:13'),(121,1,0,50,1,120,0,1,'/dev/card/stat','卡片数据统计','','','','2021-08-26 10:52:33','2021-08-26 10:52:33'),(122,1,0,50,1,37,1,1,'/sf/qrcode','钱包地址','meiyuan','钱包地址','','2021-09-08 21:19:10','2021-09-08 21:19:10'),(123,1,0,50,1,122,0,1,'/dev/alipay/fetch','数据读取','','','','2021-09-09 09:24:07','2021-09-09 09:24:07'),(124,1,0,50,1,122,0,1,'/dev/alipay/post','数据维护','','','','2021-09-09 09:24:45','2021-09-09 09:24:45'),(125,1,0,50,1,122,0,1,'/dev/alipay/delete','数据删除','','','','2021-09-09 09:24:59','2021-09-09 09:24:59'),(126,1,0,50,1,122,0,1,'/dev/alipay/status','状态修改','','','','2021-09-09 09:25:15','2021-09-09 09:25:15'),(127,1,0,50,1,53,1,1,'/order/usdt','USDT订单','meiyuan','USDT订单','','2021-09-10 10:41:31','2021-09-10 10:41:14'),(128,1,0,50,1,87,0,1,'/dev/order/alipay','usdt下单','','','','2021-09-11 08:45:35','2021-09-11 08:45:35'),(129,1,0,50,1,27,1,1,'/member/agent','代理账号','jingliren','代理账号列表','','2021-10-06 19:36:18','2021-10-06 19:35:45'),(130,1,0,50,1,94,0,1,'/dev/order/mod','修改金额','','','','2021-10-08 14:44:39','2021-10-08 14:44:39'),(131,1,0,50,1,12,0,1,'/dev/user/child','下级读取','','','','2021-10-18 20:28:51','2021-10-18 20:28:51'),(132,1,0,50,1,12,0,1,'/dev/user/balance','实时余额','','','','2021-10-20 22:59:32','2021-10-20 22:59:32');
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

-- Dump completed on 2021-10-20 23:01:03
