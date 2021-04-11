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
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_menu`
--

LOCK TABLES `admin_menu` WRITE;
/*!40000 ALTER TABLE `admin_menu` DISABLE KEYS */;
INSERT INTO `admin_menu` VALUES (1,1,0,1,2,0,1,2,'/index','首页','shouye','desc','','2021-03-25 09:07:45','2021-03-25 08:58:37'),(2,1,0,2,1,0,1,1,'/member','会员','CPhezuo','desc','','2021-03-25 09:04:14','2021-03-25 08:58:58'),(4,1,0,4,1,0,1,2,'/order','订单','yemianliu','desc','','2021-03-25 09:10:17','2021-03-25 09:01:09'),(5,1,0,5,1,0,1,1,'/finance','财务','jinbi','','','2021-03-25 09:02:35','2021-03-25 09:02:35'),(6,1,0,6,1,0,1,1,'/sf','收付','fuwuguanli','','','2021-03-25 09:02:59','2021-03-25 09:02:59'),(7,1,0,7,1,0,1,1,'/setting','设置','kongzhizhongxin','','','2021-03-25 09:03:26','2021-03-25 09:03:26'),(8,1,0,1,1,2,1,1,'/member/index','会员首页','qunzu','desc','','2021-03-25 09:13:16','2021-03-25 09:13:05'),(10,1,0,1,1,7,1,1,'/setting/index','设置首页','shouye_o','','','2021-03-25 20:49:15','2021-03-25 20:49:15'),(11,1,0,2,1,7,1,1,'/setting/auth','权限管理','RectangleCopy173','','','2021-03-25 21:38:47','2021-03-25 20:50:10'),(12,1,0,1,1,1,0,1,'、','公共权限','','','','2021-03-25 20:53:34','2021-03-25 20:53:34'),(13,1,0,1,1,12,0,1,'/dev/user/menu','用户菜单获取','','','','2021-03-25 20:54:26','2021-03-25 20:54:26'),(14,1,0,1,1,11,1,1,'/setting/auth/group','角色管理','qunzu_o','平台角色管理','','2021-03-25 20:59:47','2021-03-25 20:59:47'),(15,1,0,2,1,11,1,1,'/setting/auth/menu','菜单配置','RectangleCopy51','系统菜单配置','','2021-03-25 21:01:25','2021-03-25 21:01:25'),(16,1,0,3,1,11,1,1,'/setting/auth/rule','权限配置','RectangleCopy176','分配访问权限','','2021-03-25 21:46:03','2021-03-25 21:02:05'),(17,1,0,1,1,15,0,1,'/dev/menu/fetch','菜单读取','','','','2021-03-25 21:04:10','2021-03-25 21:04:10'),(18,1,0,2,1,15,0,1,'/dev/menu/delete','删除菜单','','','','2021-03-25 21:04:33','2021-03-25 21:04:33'),(19,1,0,3,1,15,0,1,'/dev/menu/post','菜单修改','','','','2021-03-25 21:05:02','2021-03-25 21:05:02'),(20,1,0,4,1,15,0,1,'/dev/menu/order','顺序设置','','','','2021-03-25 21:05:36','2021-03-25 21:05:36'),(21,1,0,50,1,14,0,1,'/dev/role/fetch','角色读取','','','','2021-03-25 21:28:26','2021-03-25 21:28:26'),(22,1,0,50,1,14,0,1,'/dev/role/post','角色修改','','','','2021-03-25 21:28:44','2021-03-25 21:28:44'),(23,1,0,50,1,14,0,1,'/dev/role/menu','角色菜单','','','','2021-03-25 21:33:04','2021-03-25 21:33:04'),(24,1,0,50,1,12,0,1,'/dev/analysis/summary','数据汇总','','','','2021-03-26 09:20:21','2021-03-26 09:20:21'),(25,1,0,50,1,15,0,1,'/dev/role/grant','菜订授权','','','','2021-03-26 09:22:43','2021-03-26 09:22:43'),(26,1,0,50,1,12,0,1,'/dev/user/stat','用户金额信息','','','','2021-03-26 09:51:02','2021-03-26 09:51:02'),(27,1,0,2,1,2,1,1,'/member/user','账号管理','CPhezuo_o','商户账号信息维护','','2021-03-26 09:59:50','2021-03-26 09:58:03'),(28,1,0,1,1,27,1,1,'/member/biz','商户账号','jingliren','商户账号维护','','2021-03-27 09:02:10','2021-03-26 10:00:43'),(29,1,0,3,1,27,1,1,'/member/client','卡商账号','guanliyuanrenzheng','卡商账号管理','','2021-03-26 10:15:13','2021-03-26 10:03:58'),(30,1,0,2,1,27,1,1,'/member/agent','代理账号','cangku_cangneishicao','代理账号管理','','2021-03-27 16:19:54','2021-03-26 10:05:21'),(31,1,0,50,1,29,0,1,'/dev/user/post','账号创建','','','','2021-03-26 10:45:56','2021-03-26 10:45:56'),(32,1,0,50,1,29,0,1,'/dev/user/fetch','账号读取','','','','2021-03-26 10:46:50','2021-03-26 10:46:50'),(33,1,0,50,1,29,0,1,'/dev/user/delete','账号删除','','','','2021-03-26 11:32:20','2021-03-26 11:32:20'),(34,1,0,50,1,29,0,1,'/dev/user/status','状修设置','','','','2021-03-26 12:51:54','2021-03-26 12:51:54'),(35,1,0,50,1,29,0,1,'/dev/user/member','商户修改','','','','2021-03-27 19:18:51','2021-03-27 19:18:51'),(36,1,0,1,1,6,1,1,'/sf/index','收付首页','fuwuguanli','','','2021-03-27 20:44:26','2021-03-27 20:44:26'),(37,1,0,2,1,6,1,1,'/sf/','收付管理','fuwuguanli','','','2021-03-27 20:47:19','2021-03-27 20:44:58'),(38,1,0,3,1,6,1,1,'/sf','通道理管','renwuzhongxin','','','2021-03-27 20:47:35','2021-03-27 20:45:52'),(39,1,0,1,1,38,1,1,'/sf/bank','银行列表','dunpaibaoxianrenzheng','全局银行列表维护','','2021-03-27 20:51:55','2021-03-27 20:46:30'),(40,1,0,1,1,37,1,1,'/sf/mybank','卡片管理','fuwuguanli','用于充值/提现','','2021-03-28 09:56:40','2021-03-27 20:48:07'),(41,1,0,2,1,38,1,1,'/sf/channel','通道管理','jiazai_shuaxin','通道管理/状态控制','','2021-03-27 20:51:23','2021-03-27 20:49:06'),(42,1,0,3,1,37,1,1,'/sf/device','设备管理','zhuti_tiaosepan','App自动转账设备管理','','2021-03-28 09:55:13','2021-03-27 20:49:35'),(43,1,0,50,1,39,0,1,'/dev/bank/post','银行管理','','','','2021-03-27 21:18:42','2021-03-27 21:18:42'),(44,1,0,50,1,39,0,1,'/dev/bank/delete','银行删除','','','','2021-03-27 21:19:57','2021-03-27 21:19:05'),(45,1,0,50,1,39,0,1,'/dev/bank/fetch','银行读取','','','','2021-03-27 21:19:45','2021-03-27 21:19:45'),(46,1,0,50,1,39,0,1,'/dev/bank/status','修改状态','','','','2021-03-27 21:20:25','2021-03-27 21:20:25'),(47,1,0,50,1,41,0,1,'/dev/channel/post','数据维护','','','','2021-03-27 21:48:30','2021-03-27 21:48:30'),(48,1,0,50,1,41,0,1,'/dev/channel/fetch','数据读取','','','','2021-03-27 21:48:53','2021-03-27 21:48:53'),(49,1,0,50,1,41,0,1,'/dev/channel/delete','数据删除','','','','2021-03-27 21:49:05','2021-03-27 21:49:05'),(50,1,0,50,1,41,0,1,'/dev/channel/status','状态修改','','','','2021-03-27 21:49:19','2021-03-27 21:49:19'),(51,1,0,1,1,4,0,1,'/order/index','订单首页','shouye_o','','','2021-03-27 22:45:39','2021-03-27 22:45:28'),(53,1,0,2,1,4,1,1,'/order/admin','订单管理','yemianliu_o','收付订单列表','','2021-03-27 22:47:30','2021-03-27 22:47:30'),(54,1,0,1,1,53,1,1,'/order/list','代付订单','yemianliu_o','代付订单列表','','2021-03-27 22:48:50','2021-03-27 22:48:50'),(55,1,0,2,1,53,1,1,'/order/bank','代收订单','gerenxinxi','代收订单列表','','2021-03-27 22:50:05','2021-03-27 22:50:05'),(56,1,0,50,1,40,0,1,'/dev/card/post','数据维护','','','','2021-03-28 08:29:03','2021-03-28 08:29:03'),(57,1,0,50,1,40,0,1,'/dev/card/fetch','数据读取','','','','2021-03-28 08:29:28','2021-03-28 08:29:28'),(58,1,0,50,1,40,0,1,'/dev/card/delete','数据删除','','','','2021-03-28 08:29:37','2021-03-28 08:29:37'),(59,1,0,50,1,40,0,1,'/dev/card/status','状态修改','','','','2021-03-28 08:29:51','2021-03-28 08:29:51'),(60,1,0,2,1,37,1,1,'/sf/serve','收付业务','fuwuxunhuanguanli','用于代付/代收业务','','2021-03-28 09:55:23','2021-03-28 09:55:02'),(61,1,0,50,1,42,0,1,'/dev/device/post','数据维护','','','','2021-03-28 19:56:58','2021-03-28 19:56:58'),(62,1,0,50,1,42,0,1,'/dev/device/fetch','数据读取','','','','2021-03-28 19:57:23','2021-03-28 19:57:23'),(63,1,0,50,1,42,0,1,'/dev/device/delete','数据删除','','','','2021-03-28 19:57:33','2021-03-28 19:57:33'),(64,1,0,50,1,42,0,1,'/dev/device/status','状态修改','','','','2021-03-28 19:57:46','2021-03-28 19:57:46'),(65,1,0,3,1,7,1,1,'/setting','系统维护','shu','','','2021-03-29 08:18:21','2021-03-29 08:18:21'),(66,1,0,1,1,65,1,1,'/setting/version','版本管理','yingyongAPP_o','APP版本维护','','2021-03-29 08:19:39','2021-03-29 08:18:53'),(67,1,0,50,1,65,1,1,'/setting/action','操作日志','baocun','操作日志记录','','2021-03-29 08:19:28','2021-03-29 08:19:28'),(68,1,0,1,1,5,1,1,'/finance/index','财务首页','shouye_o','','','2021-03-29 09:08:29','2021-03-29 09:08:29'),(69,1,0,2,1,5,1,1,'/finance/navi','快捷向导','ding_o','','','2021-03-29 09:09:01','2021-03-29 09:09:01'),(70,1,0,1,1,69,1,1,'/finance/recharge','充值申请','jiekuan_o','充值申请/结果查询','','2021-03-29 09:10:50','2021-03-29 09:10:29'),(71,1,0,2,1,69,1,1,'/finance/withdrawal','提现申请','cunkuan_o','提现审批/拒绝/查询','','2021-03-29 09:18:32','2021-03-29 09:11:34'),(72,1,0,3,1,69,1,1,'/finance/transaction','账户流水','huobiliu_o','交易流水查询','','2021-03-29 09:12:41','2021-03-29 09:12:41'),(73,1,0,50,1,29,0,1,'/dev/chain/post','商户通道','','','','2021-03-30 14:54:23','2021-03-30 14:54:23'),(74,1,0,50,1,70,0,1,'/dev/recharge/post','数据维护','','','','2021-03-31 09:24:46','2021-03-31 09:24:46'),(75,1,0,50,1,70,0,1,'/dev/recharge/fetch','数据读取','','','','2021-03-31 09:25:18','2021-03-31 09:25:18'),(76,1,0,50,1,70,0,1,'/dev/recharge/delete','数据删除','','','','2021-04-01 09:40:00','2021-03-31 09:25:34'),(77,1,0,50,1,70,0,1,'/dev/recharge/status','状态修改','','','','2021-03-31 09:25:48','2021-03-31 09:25:48'),(78,1,0,50,1,71,0,1,'/dev/withdrawal/post','数据维护','','','','2021-04-01 09:38:09','2021-04-01 09:38:09'),(79,1,0,50,1,71,0,1,'/dev/withdrawal/fetch','数据读取','','','','2021-04-01 09:38:30','2021-04-01 09:38:30'),(80,1,0,50,1,71,0,1,'/dev/withdrawal/delete','数据删除','','','','2021-04-01 09:40:30','2021-04-01 09:38:38'),(81,1,0,50,1,71,0,1,'/dev/withdrawal/status','状态修改','','','','2021-04-01 09:39:00','2021-04-01 09:39:00'),(82,1,0,50,1,72,0,1,'/dev/balance/fetch','数据读取','','','','2021-04-01 10:39:02','2021-04-01 10:39:02'),(83,1,0,50,1,12,0,1,'/dev/user/goauth','谷歌绑定','','','','2021-04-01 12:24:32','2021-04-01 12:24:32'),(84,1,0,50,1,12,0,1,'/dev/user/modifypwd','修改密码','','','','2021-04-01 13:21:43','2021-04-01 13:20:53'),(85,1,0,50,1,12,0,1,'/dev/user/reset','用户重置','','','','2021-04-01 13:34:58','2021-04-01 13:34:58'),(86,1,0,50,1,60,0,1,'/dev/card/bind','卡片绑定','','','','2021-04-01 21:03:56','2021-04-01 21:03:56'),(87,1,0,50,1,53,0,1,'/dev/order/','公有权限','','','','2021-04-02 09:30:17','2021-04-02 09:29:57'),(88,1,0,50,1,87,0,1,'/dev/order/fetch','读取','','','','2021-04-02 09:30:36','2021-04-02 09:30:36'),(89,1,0,50,1,88,0,1,'/dev/order/post','下单','','','','2021-04-02 10:07:31','2021-04-02 10:07:31'),(90,1,0,50,1,87,0,1,'/dev/order/finish','确认收款','','','','2021-04-03 09:29:27','2021-04-03 09:29:27'),(91,1,0,50,1,87,0,1,'/dev/order/fail','付款失败','','','','2021-04-03 12:25:01','2021-04-03 12:25:01'),(92,1,0,50,1,40,0,1,'/dev/bank/fetch','银行列表','','','','2021-04-04 15:12:01','2021-04-04 15:11:06'),(93,1,0,50,1,27,1,1,'/member/admin','管理员账号','gerentouxiang','管理员账号维护','','2021-04-06 10:33:48','2021-04-06 10:31:39'),(94,1,0,50,1,53,0,1,'/dev/order/fresh','私有权限','','','','2021-04-07 11:18:23','2021-04-07 11:17:24'),(95,1,0,50,1,29,0,1,'/dev/agent/limit','费率限制','','','','2021-04-09 12:54:14','2021-04-09 12:54:14'),(96,1,0,50,1,29,0,1,'/dev/agent/post','费率设置','','','','2021-04-09 14:30:11','2021-04-09 14:30:11'),(97,1,0,50,1,55,0,1,'/dev/order/pay','手动下单','','','','2021-04-10 09:18:40','2021-04-10 09:18:40'),(98,1,0,50,1,28,0,1,'/dev/user/post','商户创建','','','','2021-04-10 14:58:18','2021-04-10 14:58:18'),(99,1,0,50,1,28,0,1,'/dev/user/fetch','商户读取','','','','2021-04-10 14:58:50','2021-04-10 14:58:50'),(100,1,0,50,1,28,0,1,'/dev/channel/fetch','通道读取','','','','2021-04-10 15:01:02','2021-04-10 15:01:02'),(101,1,0,50,1,28,0,1,'/dev/user/member','会员维护','','','','2021-04-10 16:50:53','2021-04-10 16:50:53'),(102,1,0,50,1,28,0,1,'/dev/agent/fetch','代理费率读取','','','','2021-04-10 17:09:03','2021-04-10 17:09:03'),(103,1,0,50,1,28,0,1,'/dev/chain/post','费率设置','','','','2021-04-10 17:59:43','2021-04-10 17:59:43');
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
) ENGINE=InnoDB AUTO_INCREMENT=3475 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_role_menu`
--

LOCK TABLES `admin_role_menu` WRITE;
/*!40000 ALTER TABLE `admin_role_menu` DISABLE KEYS */;
INSERT INTO `admin_role_menu` VALUES (2940,1,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2941,12,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2942,13,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2943,85,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2944,84,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2945,83,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2946,24,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2947,26,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2948,2,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2949,8,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2950,27,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2951,28,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2952,30,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2953,29,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2954,73,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2955,96,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2956,95,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2957,31,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2958,32,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2959,33,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2960,34,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2961,35,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2962,93,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2963,4,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2964,51,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2965,53,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2966,54,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2967,55,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2968,94,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2969,87,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2970,91,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2971,90,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2972,88,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2973,89,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2974,5,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2975,68,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2976,69,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2977,70,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2978,74,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2979,75,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2980,76,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2981,77,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2982,71,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2983,78,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2984,81,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2985,80,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2986,79,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2987,72,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2988,82,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2989,6,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2990,36,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2991,37,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2992,40,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2993,92,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2994,56,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2995,57,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2996,58,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2997,59,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2998,60,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(2999,86,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3000,42,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3001,61,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3002,62,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3003,63,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3004,64,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3005,38,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3006,39,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3007,45,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3008,43,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3009,44,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3010,46,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3011,41,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3012,47,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3013,48,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3014,49,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3015,50,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3016,7,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3017,10,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3018,11,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3019,14,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3020,21,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3021,22,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3022,23,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3023,15,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3024,17,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3025,18,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3026,19,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3027,20,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3028,25,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3029,16,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3030,65,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3031,66,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3032,67,1,'2021-04-09 14:30:38','2021-04-09 14:30:38'),(3033,1,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3034,12,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3035,13,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3036,85,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3037,84,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3038,83,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3039,24,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3040,26,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3041,4,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3042,51,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3043,53,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3044,54,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3045,55,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3046,97,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3047,87,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3048,91,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3049,90,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3050,88,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3051,89,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3052,94,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3053,5,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3054,68,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3055,69,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3056,70,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3057,76,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3058,77,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3059,75,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3060,74,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3061,71,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3062,78,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3063,81,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3064,79,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3065,80,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3066,72,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3067,82,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3068,36,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3069,40,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3070,92,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3071,56,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3072,57,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3073,58,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3074,59,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3075,6,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3076,37,3,'2021-04-10 09:19:29','2021-04-10 09:19:29'),(3416,1,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3417,12,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3418,13,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3419,85,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3420,84,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3421,83,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3422,24,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3423,26,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3424,8,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3425,28,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3426,103,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3427,98,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3428,99,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3429,100,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3430,101,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3431,102,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3432,4,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3433,51,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3434,53,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3435,54,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3436,55,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3437,97,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3438,87,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3439,88,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3440,89,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3441,90,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3442,91,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3443,94,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3444,68,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3445,75,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3446,76,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3447,74,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3448,80,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3449,79,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3450,78,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3451,72,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3452,82,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3453,36,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3454,37,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3455,40,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3456,92,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3457,56,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3458,57,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3459,58,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3460,59,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3461,60,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3462,86,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3463,42,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3464,61,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3465,62,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3466,63,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3467,64,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3468,2,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3469,27,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3470,5,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3471,69,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3472,70,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3473,71,4,'2021-04-10 18:00:41','2021-04-10 18:00:41'),(3474,6,4,'2021-04-10 18:00:41','2021-04-10 18:00:41');
/*!40000 ALTER TABLE `admin_role_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_agent`
--

DROP TABLE IF EXISTS `std_agent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_agent` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `channel_id` bigint DEFAULT '0' COMMENT '通道编号-&gt;std_channel.id',
  `owner_id` bigint DEFAULT '0' COMMENT '归属id',
  `parent_id` bigint DEFAULT '0' COMMENT '上级id',
  `status` bigint DEFAULT '0' COMMENT '状态',
  `user_id` bigint DEFAULT '0' COMMENT '用户编号-&gt;std_user.id',
  `rate` decimal(10,4) DEFAULT '0.0000' COMMENT '费率',
  `fee` decimal(10,0) DEFAULT '0' COMMENT '单笔费用',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '建创时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_agent`
--

LOCK TABLES `std_agent` WRITE;
/*!40000 ALTER TABLE `std_agent` DISABLE KEYS */;
INSERT INTO `std_agent` VALUES (7,1,0,0,0,14,0.0050,1,'2021-04-10 17:37:11','2021-04-10 17:37:11'),(8,2,0,0,0,14,0.0050,0,'2021-04-10 17:37:30','2021-04-10 17:37:30');
/*!40000 ALTER TABLE `std_agent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_balance`
--

DROP TABLE IF EXISTS `std_balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_balance` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_id` bigint DEFAULT '0' COMMENT '用户编号-&gt;std_user.id',
  `status` bigint DEFAULT '0' COMMENT '状态',
  `refer_id` bigint DEFAULT '0' COMMENT '引用id',
  `type` bigint DEFAULT '0' COMMENT '类型',
  `before` decimal(18,6) DEFAULT '0.000000' COMMENT '变化前',
  `amount` decimal(18,6) DEFAULT '0.000000' COMMENT '金额',
  `after` decimal(18,6) DEFAULT '0.000000' COMMENT '变化后',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '建创时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=206 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_balance`
--

LOCK TABLES `std_balance` WRITE;
/*!40000 ALTER TABLE `std_balance` DISABLE KEYS */;
INSERT INTO `std_balance` VALUES (200,36,2,102,3,9897.368000,100.000000,9797.368000,'2021-04-11 17:16:06','2021-04-11 17:14:19'),(201,36,2,102,3,9797.368000,1.600000,9795.768000,'2021-04-11 17:16:06','2021-04-11 17:14:19'),(202,14,2,102,5,10000005.121000,0.100000,10000005.221000,'2021-04-11 17:16:06','2021-04-11 17:15:04'),(203,14,2,102,5,10000005.221000,1.500000,10000006.721000,'2021-04-11 17:16:06','2021-04-11 17:15:04'),(204,36,1,102,4,9795.768000,100.000000,9895.768000,'2021-04-11 17:16:06','2021-04-11 17:16:06'),(205,36,1,102,4,9895.768000,1.600000,9897.368000,'2021-04-11 17:16:06','2021-04-11 17:16:06');
/*!40000 ALTER TABLE `std_balance` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_bank`
--

LOCK TABLES `std_bank` WRITE;
/*!40000 ALTER TABLE `std_bank` DISABLE KEYS */;
INSERT INTO `std_bank` VALUES (1,'建设银行','CCB','2021-04-08 20:56:18','2021-03-27 21:28:34','5.0.3',1),(2,'中国银行','BOC','2021-04-08 20:55:56','2021-03-29 13:56:16','6.11.1',1),(3,'工商银行','ICBC','2021-04-08 20:56:28','2021-04-07 21:47:45','6.1.0.3.0',1),(4,'农业银行','ABC','2021-04-08 20:56:10','2021-04-07 21:48:09','6.0.0',1),(5,'招商银行','CMB','2021-04-07 21:48:27','2021-04-07 21:48:27','1.0.1',1),(6,'中国邮政储蓄银行','PSBC','2021-04-07 21:49:09','2021-04-07 21:49:09','1.0.1',1);
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
  `refer_id` bigint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_bank_card`
--

LOCK TABLES `std_bank_card` WRITE;
/*!40000 ALTER TABLE `std_bank_card` DISABLE KEYS */;
INSERT INTO `std_bank_card` VALUES (5,14,1,10000,1,35,2,4,'张三','6212251605000689122','123','123',15,'2021-04-11 17:14:19','2021-04-07 19:21:07',100.00,0,20),(6,0,1,0,0,0,1,1,'1323','6212251605000689122',NULL,NULL,0,'2021-04-10 14:48:05','2021-04-08 13:53:49',0.00,0,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_chain`
--

LOCK TABLES `std_chain` WRITE;
/*!40000 ALTER TABLE `std_chain` DISABLE KEYS */;
INSERT INTO `std_chain` VALUES (9,20,1,100,1,1,0.006,'2021-04-09 19:56:00','2021-04-09 19:56:00'),(10,20,2,100,1,1,0.006,'2021-04-09 19:56:00','2021-04-09 19:56:00'),(11,35,1,1,1,1,0.008,'2021-04-10 17:44:28','2021-04-10 17:44:28'),(12,36,1,1000,1,1,0.006,'2021-04-11 13:32:07','2021-04-11 13:32:07'),(13,36,2,1000,1,1,0.006,'2021-04-11 13:32:07','2021-04-11 13:32:07');
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
INSERT INTO `std_channel` VALUES (1,1,'代付','2021-04-02 10:31:35','2021-03-27 21:59:00'),(2,1,'代收','2021-03-27 22:01:07','2021-03-27 21:59:08');
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_device`
--

LOCK TABLES `std_device` WRITE;
/*!40000 ALTER TABLE `std_device` DISABLE KEYS */;
INSERT INTO `std_device` VALUES (15,14,1,'2021-04-07 19:26:57','2021-04-07 19:26:57','202103260324982156','设备别名-63516',30);
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_member`
--

LOCK TABLES `std_member` WRITE;
/*!40000 ALTER TABLE `std_member` DISABLE KEYS */;
INSERT INTO `std_member` VALUES (1,'测试商户',1,20,'8db5ef5a-dce6-425c-b8f2-73bc65e15dc2','192.168.3.6','2021-04-04 14:59:37','2021-03-27 09:29:16',NULL,NULL),(12,'dl-test',1,36,'1ae5549f-f12e-4fea-81de-16896c8245f3','dl-test','2021-04-11 13:30:42','2021-04-10 17:57:49',NULL,NULL);
/*!40000 ALTER TABLE `std_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_order`
--

DROP TABLE IF EXISTS `std_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_order` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `channel_id` bigint DEFAULT '0' COMMENT '通道ID',
  `type` bigint DEFAULT '0' COMMENT '订单类型',
  `status` bigint DEFAULT '0' COMMENT '订单状态',
  `upload` bigint DEFAULT '0' COMMENT '凭证上传',
  `amount` decimal(10,2) DEFAULT '0.00' COMMENT '订单金额',
  `agency` decimal(10,4) DEFAULT '0.0000',
  `fee` decimal(10,2) DEFAULT '0.00' COMMENT '手续费',
  `agent_id` bigint DEFAULT '0' COMMENT '代理编号->std_agent.id',
  `user_id` bigint DEFAULT '0' COMMENT '订单属于用户',
  `out_trade_no` varchar(64) NOT NULL COMMENT '商户订单ID',
  `notify_url` varchar(255) DEFAULT NULL COMMENT '回调地址',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `expire_at` datetime DEFAULT NULL COMMENT '过期时间',
  `pay_time` datetime DEFAULT NULL COMMENT '支时间',
  `pay_name` varchar(64) DEFAULT NULL COMMENT '付款人性名',
  `notify_count` bigint DEFAULT '0' COMMENT '回调通知次数',
  `pay_account` varchar(128) DEFAULT NULL COMMENT '付款账号',
  `refund_at` datetime DEFAULT NULL COMMENT '退款时间',
  `desc` varchar(255) DEFAULT NULL COMMENT '备注',
  `receive_name` varchar(64) DEFAULT NULL COMMENT '收款人姓名',
  `receive_account` varchar(64) DEFAULT NULL COMMENT '收款账号',
  `receive_bank` varchar(64) DEFAULT NULL COMMENT '收款银行',
  `client_id` bigint DEFAULT '0' COMMENT '卡商编号->std_user.id',
  `card_id` bigint DEFAULT '0' COMMENT '银行卡编号->std_bank_card.id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `out_trade_no` (`out_trade_no`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_order`
--

LOCK TABLES `std_order` WRITE;
/*!40000 ALTER TABLE `std_order` DISABLE KEYS */;
INSERT INTO `std_order` VALUES (102,1,0,6,0,100.00,0.1000,1.60,14,36,'621225','http://192.168.3.189:8080/pub/account/test','2021-04-11 17:16:06','2021-04-11 17:14:19',NULL,NULL,NULL,0,NULL,NULL,'test','张三','6212251605000689122','招商',14,5);
/*!40000 ALTER TABLE `std_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_recharge`
--

DROP TABLE IF EXISTS `std_recharge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_recharge` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_id` bigint DEFAULT '0' COMMENT '用户编号-&gt;std_user.id',
  `status` bigint DEFAULT '0' COMMENT '状态',
  `upload` varchar(255) DEFAULT NULL COMMENT '凭证地址',
  `bank_id` bigint DEFAULT '0' COMMENT '银行卡编号-&gt;std_bank_card.id',
  `amount` decimal(10,2) DEFAULT '0.00' COMMENT '金额',
  `bill_id` bigint DEFAULT '0' COMMENT '账单编号-&gt;std_biil.id',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '建创时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_recharge`
--

LOCK TABLES `std_recharge` WRITE;
/*!40000 ALTER TABLE `std_recharge` DISABLE KEYS */;
INSERT INTO `std_recharge` VALUES (4,1,1,NULL,6,100.00,0,'2021-04-08 14:16:36','2021-04-08 13:56:05');
/*!40000 ALTER TABLE `std_recharge` ENABLE KEYS */;
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
  `parent_id` bigint DEFAULT '0',
  `channel_id` bigint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_user`
--

LOCK TABLES `std_user` WRITE;
/*!40000 ALTER TABLE `std_user` DISABLE KEYS */;
INSERT INTO `std_user` VALUES (1,1,NULL,NULL,NULL,NULL,1,NULL,NULL,2,NULL,'admin','e10adc3949ba59abbe56e057f20f883e','FPXI5HSB6Q7FIQVKW4XC4R7IF6XS32HV',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'192.168.3.6','2021-04-11 13:31:05','2021-04-11 13:31:05',NULL,NULL,NULL,NULL,NULL,'8eb95d3c9b9abf81c1094b80649e4fb6',0,0),(14,4,NULL,NULL,NULL,NULL,1,20,NULL,2,NULL,'ks-test','e10adc3949ba59abbe56e057f20f883e','TBG3DMD2WRT44HPK5TZH35KSZEJ54MCG',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'429783','192.168.3.6','2021-04-11 09:44:28','2021-04-11 09:44:28','2021-03-26 22:53:14',NULL,NULL,NULL,NULL,'8eb95d3c9b9abf81c1094b80649e4fb6',34,0),(20,3,NULL,NULL,NULL,NULL,1,NULL,NULL,2,NULL,'sh-test','e10adc3949ba59abbe56e057f20f883e','KNBKOEPWCR72VJXVKQUSLIZ2ENNTXACY',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'218997','192.168.3.6','2021-04-10 20:01:36','2021-04-10 20:01:36','2021-03-27 09:29:16',NULL,NULL,NULL,NULL,'8eb95d3c9b9abf81c1094b80649e4fb6',0,0),(25,2,NULL,NULL,NULL,NULL,1,NULL,NULL,2,NULL,'test','5929c100ec50ffba319707781b431441',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'517805',NULL,NULL,'2021-04-06 10:37:16','2021-04-06 10:37:16',NULL,NULL,NULL,NULL,NULL,0,0),(28,1,NULL,NULL,NULL,NULL,1,NULL,NULL,2,NULL,'root','e10adc3949ba59abbe56e057f20f883e',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'844567',NULL,NULL,'2021-04-09 18:03:47','2021-04-09 18:03:47',NULL,NULL,NULL,NULL,NULL,0,0),(36,3,NULL,NULL,NULL,NULL,1,NULL,NULL,2,NULL,'dl-test','0f0a2aade4697917f7d3755e41a858af',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'276217','192.168.3.6','2021-04-11 13:30:49','2021-04-11 13:30:49','2021-04-10 17:57:49',NULL,NULL,NULL,NULL,'509defbd1328c635710add610a552228',14,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_user_balance`
--

LOCK TABLES `std_user_balance` WRITE;
/*!40000 ALTER TABLE `std_user_balance` DISABLE KEYS */;
INSERT INTO `std_user_balance` VALUES (1,1,9999100.000000,200.000000,0.000000,'2021-04-08 14:19:58',NULL),(6,14,10000006.721000,200.000000,500.000000,'2021-04-11 17:15:04','2021-03-26 22:53:14'),(12,20,10998806.138000,200.000000,0.000000,'2021-04-10 11:41:21','2021-03-27 09:29:16'),(17,25,0.000000,0.000000,0.000000,'2021-04-06 10:37:16','2021-04-06 10:37:16'),(20,28,0.000000,0.000000,0.000000,'2021-04-09 18:03:47','2021-04-09 18:03:47'),(28,36,9897.368000,0.000000,0.000000,'2021-04-11 17:16:06','2021-04-10 17:57:49');
/*!40000 ALTER TABLE `std_user_balance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `std_withdrawal`
--

DROP TABLE IF EXISTS `std_withdrawal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `std_withdrawal` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_id` bigint DEFAULT '0' COMMENT '用户编号-&gt;std_user.id',
  `status` bigint DEFAULT '0' COMMENT '状态',
  `upload` varchar(255) DEFAULT NULL COMMENT '凭证地址',
  `bank_id` bigint DEFAULT '0' COMMENT '银行卡编号-&gt;std_bank_card.id',
  `amount` decimal(10,2) DEFAULT '0.00' COMMENT '金额',
  `bill_id` bigint DEFAULT '0' COMMENT '账单编号-&gt;std_biil.id',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `created_at` datetime DEFAULT NULL COMMENT '建创时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `std_withdrawal`
--

LOCK TABLES `std_withdrawal` WRITE;
/*!40000 ALTER TABLE `std_withdrawal` DISABLE KEYS */;
INSERT INTO `std_withdrawal` VALUES (6,1,1,NULL,6,1000.00,0,'2021-04-08 14:21:50','2021-04-08 14:19:58');
/*!40000 ALTER TABLE `std_withdrawal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-11 17:33:01
