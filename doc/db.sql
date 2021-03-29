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
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_menu`
--

LOCK TABLES `admin_menu` WRITE;
/*!40000 ALTER TABLE `admin_menu` DISABLE KEYS */;
INSERT INTO `admin_menu` VALUES (1,1,0,1,2,0,1,2,'/index','首页','shouye','desc','','2021-03-25 09:07:45','2021-03-25 08:58:37'),(2,1,0,2,1,0,1,1,'/member','会员','CPhezuo','desc','','2021-03-25 09:04:14','2021-03-25 08:58:58'),(4,1,0,4,1,0,1,2,'/order','订单','yemianliu','desc','','2021-03-25 09:10:17','2021-03-25 09:01:09'),(5,1,0,5,1,0,1,1,'/finance','财务','jinbi','','','2021-03-25 09:02:35','2021-03-25 09:02:35'),(6,1,0,6,1,0,1,1,'/sf','收付','fuwuguanli','','','2021-03-25 09:02:59','2021-03-25 09:02:59'),(7,1,0,7,1,0,1,1,'/setting','设置','kongzhizhongxin','','','2021-03-25 09:03:26','2021-03-25 09:03:26'),(8,1,0,1,1,2,1,1,'/member/index','会员首页','qunzu','desc','','2021-03-25 09:13:16','2021-03-25 09:13:05'),(10,1,0,1,1,7,1,1,'/setting/index','设置首页','shouye_o','','','2021-03-25 20:49:15','2021-03-25 20:49:15'),(11,1,0,2,1,7,1,1,'/setting/auth','权限管理','RectangleCopy173','','','2021-03-25 21:38:47','2021-03-25 20:50:10'),(12,1,0,1,1,1,0,1,'、','公共权限','','','','2021-03-25 20:53:34','2021-03-25 20:53:34'),(13,1,0,1,1,12,0,1,'/dev/user/menu','用户菜单获取','','','','2021-03-25 20:54:26','2021-03-25 20:54:26'),(14,1,0,1,1,11,1,1,'/setting/auth/group','角色管理','qunzu_o','平台角色管理','','2021-03-25 20:59:47','2021-03-25 20:59:47'),(15,1,0,2,1,11,1,1,'/setting/auth/menu','菜单配置','RectangleCopy51','系统菜单配置','','2021-03-25 21:01:25','2021-03-25 21:01:25'),(16,1,0,3,1,11,1,1,'/setting/auth/rule','权限配置','RectangleCopy176','分配访问权限','','2021-03-25 21:46:03','2021-03-25 21:02:05'),(17,1,0,1,1,15,0,1,'/dev/menu/fetch','菜单读取','','','','2021-03-25 21:04:10','2021-03-25 21:04:10'),(18,1,0,2,1,15,0,1,'/dev/menu/delete','删除菜单','','','','2021-03-25 21:04:33','2021-03-25 21:04:33'),(19,1,0,3,1,15,0,1,'/dev/menu/post','菜单修改','','','','2021-03-25 21:05:02','2021-03-25 21:05:02'),(20,1,0,4,1,15,0,1,'/dev/menu/order','顺序设置','','','','2021-03-25 21:05:36','2021-03-25 21:05:36'),(21,1,0,50,1,14,0,1,'/dev/role/fetch','角色读取','','','','2021-03-25 21:28:26','2021-03-25 21:28:26'),(22,1,0,50,1,14,0,1,'/dev/role/post','角色修改','','','','2021-03-25 21:28:44','2021-03-25 21:28:44'),(23,1,0,50,1,14,0,1,'/dev/role/menu','角色菜单','','','','2021-03-25 21:33:04','2021-03-25 21:33:04'),(24,1,0,50,1,12,0,1,'/dev/analysis/summary','数据汇总','','','','2021-03-26 09:20:21','2021-03-26 09:20:21'),(25,1,0,50,1,15,0,1,'/dev/role/grant','菜订授权','','','','2021-03-26 09:22:43','2021-03-26 09:22:43'),(26,1,0,50,1,12,0,1,'/dev/user/stat','用户金额信息','','','','2021-03-26 09:51:02','2021-03-26 09:51:02'),(27,1,0,2,1,2,1,1,'/member/user','账号管理','CPhezuo_o','商户账号信息维护','','2021-03-26 09:59:50','2021-03-26 09:58:03'),(28,1,0,1,1,27,1,1,'/member/biz','商户账号','jingliren','商户账号维护','','2021-03-27 09:02:10','2021-03-26 10:00:43'),(29,1,0,3,1,27,1,1,'/member/client','卡商账号','guanliyuanrenzheng','卡商账号管理','','2021-03-26 10:15:13','2021-03-26 10:03:58'),(30,1,0,2,1,27,1,1,'/member/agent','代理账号','cangku_cangneishicao','代理账号管理','','2021-03-27 16:19:54','2021-03-26 10:05:21'),(31,1,0,50,1,29,0,1,'/dev/user/post','账号创建','','','','2021-03-26 10:45:56','2021-03-26 10:45:56'),(32,1,0,50,1,29,0,1,'/dev/user/fetch','账号读取','','','','2021-03-26 10:46:50','2021-03-26 10:46:50'),(33,1,0,50,1,29,0,1,'/dev/user/delete','账号删除','','','','2021-03-26 11:32:20','2021-03-26 11:32:20'),(34,1,0,50,1,29,0,1,'/dev/user/status','状修设置','','','','2021-03-26 12:51:54','2021-03-26 12:51:54'),(35,1,0,50,1,29,0,1,'/dev/user/member','商户修改','','','','2021-03-27 19:18:51','2021-03-27 19:18:51'),(36,1,0,1,1,6,1,1,'/sf/index','收付首页','fuwuguanli','','','2021-03-27 20:44:26','2021-03-27 20:44:26'),(37,1,0,2,1,6,1,1,'/sf/','收付管理','fuwuguanli','','','2021-03-27 20:47:19','2021-03-27 20:44:58'),(38,1,0,3,1,6,1,1,'/sf','通道理管','renwuzhongxin','','','2021-03-27 20:47:35','2021-03-27 20:45:52'),(39,1,0,1,1,38,1,1,'/sf/bank','银行列表','dunpaibaoxianrenzheng','全局银行列表维护','','2021-03-27 20:51:55','2021-03-27 20:46:30'),(40,1,0,1,1,37,1,1,'/sf/mybank','卡片管理','fuwuguanli','用于充值/提现','','2021-03-28 09:56:40','2021-03-27 20:48:07'),(41,1,0,2,1,38,1,1,'/sf/channel','通道管理','jiazai_shuaxin','通道管理/状态控制','','2021-03-27 20:51:23','2021-03-27 20:49:06'),(42,1,0,3,1,37,1,1,'/sf/device','设备管理','zhuti_tiaosepan','App自动转账设备管理','','2021-03-28 09:55:13','2021-03-27 20:49:35'),(43,1,0,50,1,39,0,1,'/dev/bank/post','银行管理','','','','2021-03-27 21:18:42','2021-03-27 21:18:42'),(44,1,0,50,1,39,0,1,'/dev/bank/delete','银行删除','','','','2021-03-27 21:19:57','2021-03-27 21:19:05'),(45,1,0,50,1,39,0,1,'/dev/bank/fetch','银行读取','','','','2021-03-27 21:19:45','2021-03-27 21:19:45'),(46,1,0,50,1,39,0,1,'/dev/bank/status','修改状态','','','','2021-03-27 21:20:25','2021-03-27 21:20:25'),(47,1,0,50,1,41,0,1,'/dev/channel/post','数据维护','','','','2021-03-27 21:48:30','2021-03-27 21:48:30'),(48,1,0,50,1,41,0,1,'/dev/channel/fetch','数据读取','','','','2021-03-27 21:48:53','2021-03-27 21:48:53'),(49,1,0,50,1,41,0,1,'/dev/channel/delete','数据删除','','','','2021-03-27 21:49:05','2021-03-27 21:49:05'),(50,1,0,50,1,41,0,1,'/dev/channel/status','状态修改','','','','2021-03-27 21:49:19','2021-03-27 21:49:19'),(51,1,0,1,1,4,0,1,'/order/index','订单首页','shouye_o','','','2021-03-27 22:45:39','2021-03-27 22:45:28'),(53,1,0,2,1,4,1,1,'/order/admin','订单管理','yemianliu_o','收付订单列表','','2021-03-27 22:47:30','2021-03-27 22:47:30'),(54,1,0,1,1,53,1,1,'/order/list','代付订单','yemianliu_o','代付订单列表','','2021-03-27 22:48:50','2021-03-27 22:48:50'),(55,1,0,2,1,53,1,1,'/order/bank','代收订单','gerenxinxi','代收订单列表','','2021-03-27 22:50:05','2021-03-27 22:50:05'),(56,1,0,50,1,40,0,1,'/dev/card/post','数据维护','','','','2021-03-28 08:29:03','2021-03-28 08:29:03'),(57,1,0,50,1,40,0,1,'/dev/card/fetch','数据读取','','','','2021-03-28 08:29:28','2021-03-28 08:29:28'),(58,1,0,50,1,40,0,1,'/dev/card/delete','数据删除','','','','2021-03-28 08:29:37','2021-03-28 08:29:37'),(59,1,0,50,1,40,0,1,'/dev/card/status','状态修改','','','','2021-03-28 08:29:51','2021-03-28 08:29:51'),(60,1,0,2,1,37,1,1,'/sf/serve','收付业务','fuwuxunhuanguanli','用于代付/代收业务','','2021-03-28 09:55:23','2021-03-28 09:55:02'),(61,1,0,50,1,42,0,1,'/dev/device/post','数据维护','','','','2021-03-28 19:56:58','2021-03-28 19:56:58'),(62,1,0,50,1,42,0,1,'/dev/device/fetch','数据读取','','','','2021-03-28 19:57:23','2021-03-28 19:57:23'),(63,1,0,50,1,42,0,1,'/dev/device/delete','数据删除','','','','2021-03-28 19:57:33','2021-03-28 19:57:33'),(64,1,0,50,1,42,0,1,'/dev/device/status','状态修改','','','','2021-03-28 19:57:46','2021-03-28 19:57:46'),(65,1,0,3,1,7,1,1,'/setting','系统维护','shu','','','2021-03-29 08:18:21','2021-03-29 08:18:21'),(66,1,0,1,1,65,1,1,'/setting/version','版本管理','yingyongAPP_o','APP版本维护','','2021-03-29 08:19:39','2021-03-29 08:18:53'),(67,1,0,50,1,65,1,1,'/setting/action','操作日志','baocun','操作日志记录','','2021-03-29 08:19:28','2021-03-29 08:19:28'),(68,1,0,1,1,5,1,1,'/finance/index','财务首页','shouye_o','','','2021-03-29 09:08:29','2021-03-29 09:08:29'),(69,1,0,2,1,5,1,1,'/finance/navi','快捷向导','ding_o','','','2021-03-29 09:09:01','2021-03-29 09:09:01'),(70,1,0,1,1,69,1,1,'/finance/recharge','充值申请','jiekuan_o','充值申请/结果查询','','2021-03-29 09:10:50','2021-03-29 09:10:29'),(71,1,0,2,1,69,1,1,'/finance/withdrawal','提现申请','cunkuan_o','提现审批/拒绝/查询','','2021-03-29 09:18:32','2021-03-29 09:11:34'),(72,1,0,3,1,69,1,1,'/finance/transaction','账户流水','huobiliu_o','交易流水查询','','2021-03-29 09:12:41','2021-03-29 09:12:41');
/*!40000 ALTER TABLE `admin_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_role`
--

DROP TABLE IF EXISTS `admin_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_role` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(64) DEFAULT NULL COMMENT '名称',
  `icon` varchar(255) DEFAULT NULL COMMENT '图标',
  `desc` varchar(255) DEFAULT NULL COMMENT '描述',
  `status` bigint DEFAULT NULL COMMENT '状态',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_role`
--

LOCK TABLES `admin_role` WRITE;
/*!40000 ALTER TABLE `admin_role` DISABLE KEYS */;
INSERT INTO `admin_role` VALUES (1,'管理员',NULL,'拥有系统最高权限',1,'2021-03-25 08:54:41','2021-03-25 08:54:41'),(2,'代理',NULL,'可创建商户、卡商获取佣金',1,'2021-03-25 08:55:26','2021-03-25 08:55:26'),(3,'商户',NULL,'拥用手动、API下单权限',1,'2021-03-25 08:56:00','2021-03-25 08:56:00'),(4,'卡商',NULL,'收付卡号供应商',1,'2021-03-25 08:57:06','2021-03-25 08:56:41');
/*!40000 ALTER TABLE `admin_role` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=1362 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_role_menu`
--

LOCK TABLES `admin_role_menu` WRITE;
/*!40000 ALTER TABLE `admin_role_menu` DISABLE KEYS */;
INSERT INTO `admin_role_menu` VALUES (1263,1,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1264,12,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1265,13,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1266,26,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1267,24,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1268,4,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1269,51,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1270,53,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1271,54,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1272,55,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1273,5,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1274,68,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1275,69,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1276,70,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1277,71,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1278,72,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1279,36,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1280,37,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1281,40,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1282,58,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1283,59,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1284,56,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1285,57,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1286,60,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1287,42,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1288,64,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1289,61,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1290,62,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1291,63,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1292,6,4,'2021-03-29 10:14:52','2021-03-29 10:14:52'),(1293,1,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1294,12,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1295,13,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1296,26,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1297,24,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1298,2,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1299,8,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1300,27,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1301,28,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1302,30,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1303,29,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1304,33,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1305,32,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1306,31,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1307,34,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1308,35,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1309,4,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1310,51,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1311,53,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1312,54,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1313,55,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1314,5,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1315,68,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1316,69,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1317,70,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1318,71,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1319,72,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1320,6,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1321,36,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1322,37,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1323,40,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1324,58,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1325,59,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1326,56,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1327,57,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1328,60,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1329,42,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1330,64,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1331,61,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1332,62,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1333,63,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1334,38,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1335,39,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1336,46,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1337,45,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1338,44,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1339,43,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1340,41,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1341,50,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1342,49,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1343,48,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1344,47,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1345,7,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1346,10,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1347,11,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1348,14,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1349,21,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1350,22,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1351,23,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1352,15,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1353,17,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1354,18,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1355,19,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1356,20,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1357,25,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1358,16,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1359,65,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1360,66,1,'2021-03-29 10:16:38','2021-03-29 10:16:38'),(1361,67,1,'2021-03-29 10:16:38','2021-03-29 10:16:38');
/*!40000 ALTER TABLE `admin_role_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_bank`
--

DROP TABLE IF EXISTS `std_bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_bank` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(128) DEFAULT NULL COMMENT '银行名称',
  `code` varchar(128) DEFAULT NULL COMMENT '简码',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '建创时间',
  `version` varchar(128) DEFAULT NULL COMMENT 'App版本号',
  `status` bigint DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_bank`
--

LOCK TABLES `std_bank` WRITE;
/*!40000 ALTER TABLE `std_bank` DISABLE KEYS */;
INSERT INTO `std_bank` VALUES (1,'建设银行','CCB','2021-03-29 13:57:15','2021-03-27 21:28:34','1.0.1',1),(2,'中国银行','CCB','2021-03-29 13:57:09','2021-03-29 13:56:16','1.0.1',1);
/*!40000 ALTER TABLE `std_bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_bank_card`
--

DROP TABLE IF EXISTS `std_bank_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_bank_card` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_id` bigint DEFAULT '0' COMMENT '用户编号-&gt;std_user.id',
  `status` bigint DEFAULT '0' COMMENT '状态',
  `max` bigint DEFAULT '0' COMMENT '最大金额',
  `min` bigint DEFAULT '0' COMMENT '最小金额',
  `round_id` bigint DEFAULT '0' COMMENT '轮训编号',
  `bank_id` bigint DEFAULT '0' COMMENT '银行编号-&gt;std_bank.id',
  `type` bigint DEFAULT '0' COMMENT '卡片类型',
  `name` varchar(64) DEFAULT NULL COMMENT '卡片姓名',
  `code` varchar(128) DEFAULT NULL COMMENT '银行卡号',
  `login_pwd` varchar(64) DEFAULT NULL COMMENT '登录密码',
  `tran_pwd` varchar(64) DEFAULT NULL COMMENT '支付密码',
  `device_id` bigint DEFAULT '0' COMMENT '设备编号-&gt;std_device.id',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '建创时间',
  `balance` decimal(10,2) DEFAULT '0.00' COMMENT '卡片实际余额',
  `total` bigint DEFAULT '0' COMMENT '转账次数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_bank_card`
--

LOCK TABLES `std_bank_card` WRITE;
/*!40000 ALTER TABLE `std_bank_card` DISABLE KEYS */;
INSERT INTO `std_bank_card` VALUES (2,14,1,10000,1,0,1,3,'吴伟','6212251605000689122','123456','123456',11,'2021-03-29 18:01:07','2021-03-29 10:16:00',10000.00,0);
/*!40000 ALTER TABLE `std_bank_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_chain`
--

DROP TABLE IF EXISTS `std_chain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_chain` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_id` bigint DEFAULT '0' COMMENT '用户编号-&gt;std_user.id',
  `channel_id` bigint DEFAULT '0' COMMENT '通道编号-&gt;std_channel.id',
  `max` bigint DEFAULT '0' COMMENT '最大下单金额',
  `min` bigint DEFAULT '0' COMMENT '最小下单金额',
  `fee` bigint DEFAULT '0' COMMENT '单笔手续费',
  `rate` decimal(9,3) DEFAULT '0.000' COMMENT '通道费率',
  `update_at` datetime DEFAULT NULL COMMENT '更新时间',
  `create_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_chain`
--

LOCK TABLES `std_chain` WRITE;
/*!40000 ALTER TABLE `std_chain` DISABLE KEYS */;
/*!40000 ALTER TABLE `std_chain` ENABLE KEYS */;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_channel`
--

LOCK TABLES `std_channel` WRITE;
/*!40000 ALTER TABLE `std_channel` DISABLE KEYS */;
INSERT INTO `std_channel` VALUES (1,1,'代付','2021-03-27 22:01:07','2021-03-27 21:59:00'),(2,1,'代收','2021-03-27 22:01:07','2021-03-27 21:59:08');
/*!40000 ALTER TABLE `std_channel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_device`
--

DROP TABLE IF EXISTS `std_device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_device` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '手机设备',
  `user_id` bigint DEFAULT '0' COMMENT '用户编号-&gt;std_user.id',
  `status` bigint DEFAULT '0' COMMENT '状态',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '建创时间',
  `uuid` varchar(128) DEFAULT NULL COMMENT '设备硬件编号',
  `name` varchar(128) DEFAULT NULL COMMENT '设备别名',
  `rate` bigint DEFAULT '0' COMMENT '接单频率',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_device`
--

LOCK TABLES `std_device` WRITE;
/*!40000 ALTER TABLE `std_device` DISABLE KEYS */;
INSERT INTO `std_device` VALUES (11,1,1,'2021-03-29 17:26:46','2021-03-29 17:04:48','202103260324982156','设备别名-76322',20);
/*!40000 ALTER TABLE `std_device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_member`
--

DROP TABLE IF EXISTS `std_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_member` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(128) DEFAULT NULL COMMENT '商户名',
  `status` bigint DEFAULT NULL COMMENT '状态',
  `user_id` bigint DEFAULT NULL COMMENT '用户归属-&gt;std_user.id',
  `secret` varchar(255) DEFAULT NULL COMMENT '商户密钥',
  `whitelist` varchar(255) DEFAULT NULL COMMENT '白名单以豆号隔开',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `desc` varchar(255) DEFAULT NULL COMMENT '描述',
  `refer_id` bigint DEFAULT NULL COMMENT '代理编号-&gt;std_user.id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_member`
--

LOCK TABLES `std_member` WRITE;
/*!40000 ALTER TABLE `std_member` DISABLE KEYS */;
INSERT INTO `std_member` VALUES (1,'测试商户',NULL,20,'2b7e440d-1cf5-4fb6-b8b3-7a253aee518b','127.0.0.1','2021-03-27 22:37:24','2021-03-27 09:29:16',NULL,NULL);
/*!40000 ALTER TABLE `std_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_user`
--

DROP TABLE IF EXISTS `std_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_user` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `role_id` bigint DEFAULT NULL COMMENT '角色ID',
  `sex` bigint DEFAULT NULL COMMENT '性别',
  `prov` bigint DEFAULT NULL COMMENT '省市',
  `city` bigint DEFAULT NULL COMMENT '城市',
  `dist` bigint DEFAULT NULL COMMENT '区县',
  `status` bigint DEFAULT NULL COMMENT '状态',
  `refer_id` bigint DEFAULT NULL COMMENT '引用ID',
  `point` bigint DEFAULT NULL COMMENT '积分',
  `level` bigint DEFAULT NULL COMMENT '级别',
  `exp` bigint DEFAULT NULL COMMENT '经验值',
  `username` varchar(128) DEFAULT NULL COMMENT '账号',
  `password` varchar(128) DEFAULT NULL COMMENT '密码',
  `secret` varchar(255) DEFAULT NULL COMMENT '谷歌密钥',
  `unionid` varchar(128) DEFAULT NULL COMMENT '微信unionid',
  `openid` varchar(128) DEFAULT NULL COMMENT '微信openid',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `mobile` varchar(128) DEFAULT NULL COMMENT '电话',
  `email` varchar(128) DEFAULT NULL COMMENT '邮箱',
  `desc` varchar(255) DEFAULT NULL COMMENT '描述',
  `attach` varchar(512) DEFAULT NULL COMMENT '附件',
  `invite_code` varchar(6) DEFAULT NULL COMMENT '邀请码',
  `login_ip` varchar(32) DEFAULT NULL COMMENT '登录IP',
  `login_at` datetime DEFAULT NULL COMMENT '登录时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `birthady` datetime DEFAULT NULL COMMENT '用户日生',
  `health` bigint DEFAULT NULL COMMENT '生命值',
  `nickname` varchar(128) DEFAULT NULL COMMENT '昵称',
  `member_id` bigint DEFAULT NULL COMMENT '商户编号-&gt;std_member.id',
  `token` varchar(255) DEFAULT NULL COMMENT '用户token',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_user`
--

LOCK TABLES `std_user` WRITE;
/*!40000 ALTER TABLE `std_user` DISABLE KEYS */;
INSERT INTO `std_user` VALUES (1,1,NULL,NULL,NULL,NULL,1,NULL,NULL,0,NULL,'admin','e10adc3949ba59abbe56e057f20f883e',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'192.168.3.6','2021-03-29 11:10:07','2021-03-29 11:10:07',NULL,NULL,NULL,NULL,NULL,'946ae6b14eb744e7f56f31e57ecb2dbc'),(14,4,NULL,NULL,NULL,NULL,1,NULL,NULL,2,NULL,'ks-test','e10adc3949ba59abbe56e057f20f883e',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'429783','192.168.3.6','2021-03-29 10:16:58','2021-03-29 10:16:58','2021-03-26 22:53:14',NULL,NULL,NULL,NULL,'946ae6b14eb744e7f56f31e57ecb2dbc'),(20,3,NULL,NULL,NULL,NULL,1,NULL,NULL,2,NULL,'sh-test','0ca1ecdb968d1da788b772d4d000d416',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'218997','192.168.3.6','2021-03-27 16:38:38','2021-03-27 19:21:10','2021-03-27 09:29:16',NULL,NULL,NULL,NULL,'07304c8e24570f58d41d07be1fcf6515');
/*!40000 ALTER TABLE `std_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_user_balance`
--

DROP TABLE IF EXISTS `std_user_balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_user_balance` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_id` bigint DEFAULT '0' COMMENT '用户编号-&gt;std_user.id',
  `balance` decimal(18,6) DEFAULT '0.000000' COMMENT '余额',
  `frozen` decimal(18,6) DEFAULT '0.000000' COMMENT '冻结金额',
  `credit` decimal(18,6) DEFAULT '0.000000' COMMENT '额度',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_user_balance`
--

LOCK TABLES `std_user_balance` WRITE;
/*!40000 ALTER TABLE `std_user_balance` DISABLE KEYS */;
INSERT INTO `std_user_balance` VALUES (1,1,100.000000,200.000000,0.000000,NULL,NULL),(6,14,100.000000,200.000000,0.000000,'2021-03-26 22:53:14','2021-03-26 22:53:14'),(12,20,100.000000,200.000000,0.000000,'2021-03-27 09:29:16','2021-03-27 09:29:16');
/*!40000 ALTER TABLE `std_user_balance` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-29 18:49:52
