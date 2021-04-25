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
) ENGINE=InnoDB AUTO_INCREMENT=4717 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_role_menu`
--

LOCK TABLES `admin_role_menu` WRITE;
/*!40000 ALTER TABLE `admin_role_menu` DISABLE KEYS */;
INSERT INTO `admin_role_menu` VALUES (4433,1,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4434,12,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4435,13,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4436,24,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4437,26,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4438,83,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4439,84,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4440,85,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4441,104,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4442,112,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4443,113,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4444,2,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4445,8,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4446,27,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4447,28,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4448,98,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4449,99,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4450,100,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4451,101,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4452,102,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4453,103,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4454,29,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4455,31,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4456,32,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4457,33,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4458,34,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4459,35,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4460,73,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4461,95,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4462,96,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4463,93,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4464,4,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4465,51,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4466,53,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4467,54,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4468,55,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4469,97,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4470,105,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4471,111,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4472,87,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4473,88,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4474,89,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4475,90,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4476,91,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4477,94,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4478,5,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4479,68,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4480,69,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4481,70,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4482,74,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4483,75,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4484,76,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4485,77,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4486,71,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4487,78,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4488,79,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4489,80,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4490,81,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4491,72,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4492,82,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4493,6,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4494,36,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4495,37,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4496,40,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4497,56,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4498,57,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4499,58,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4500,59,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4501,92,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4502,60,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4503,86,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4504,42,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4505,61,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4506,62,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4507,63,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4508,64,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4509,106,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4510,107,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4511,108,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4512,109,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4513,110,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4514,38,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4515,39,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4516,43,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4517,44,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4518,45,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4519,46,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4520,41,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4521,47,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4522,48,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4523,49,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4524,50,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4525,7,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4526,10,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4527,11,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4528,14,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4529,21,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4530,22,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4531,23,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4532,15,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4533,17,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4534,18,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4535,19,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4536,20,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4537,25,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4538,16,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4539,65,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4540,66,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4541,67,1,'2021-04-17 15:30:40','2021-04-17 15:30:40'),(4597,1,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4598,12,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4599,13,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4600,24,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4601,26,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4602,83,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4603,84,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4604,85,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4605,104,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4606,112,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4607,113,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4608,8,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4609,28,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4610,98,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4611,99,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4612,100,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4613,101,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4614,102,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4615,103,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4616,4,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4617,51,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4618,53,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4619,54,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4620,55,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4621,97,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4622,105,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4623,111,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4624,87,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4625,88,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4626,89,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4627,90,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4628,91,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4629,94,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4630,5,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4631,68,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4632,69,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4633,70,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4634,74,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4635,75,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4636,76,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4637,77,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4638,71,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4639,78,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4640,79,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4641,80,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4642,81,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4643,72,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4644,82,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4645,36,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4646,37,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4647,40,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4648,56,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4649,57,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4650,58,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4651,59,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4652,92,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4653,60,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4654,86,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4655,42,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4656,61,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4657,62,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4658,63,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4659,64,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4660,106,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4661,107,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4662,108,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4663,109,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4664,110,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4665,2,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4666,27,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4667,6,4,'2021-04-17 15:32:14','2021-04-17 15:32:14'),(4668,1,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4669,12,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4670,13,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4671,24,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4672,26,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4673,83,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4674,84,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4675,85,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4676,104,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4677,112,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4678,113,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4679,4,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4680,51,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4681,53,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4682,54,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4683,55,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4684,97,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4685,105,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4686,111,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4687,87,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4688,88,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4689,89,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4690,90,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4691,91,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4692,94,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4693,5,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4694,68,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4695,69,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4696,70,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4697,74,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4698,75,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4699,76,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4700,77,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4701,71,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4702,78,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4703,79,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4704,80,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4705,81,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4706,72,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4707,82,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4708,36,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4709,40,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4710,56,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4711,57,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4712,58,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4713,59,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4714,92,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4715,6,3,'2021-04-23 18:33:17','2021-04-23 18:33:17'),(4716,37,3,'2021-04-23 18:33:17','2021-04-23 18:33:17');
/*!40000 ALTER TABLE `admin_role_menu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-24 14:07:01