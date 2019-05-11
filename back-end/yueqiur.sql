-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2017-11-07 18:41:54
-- 服务器版本： 5.5.48-log
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yueqiur`
--

-- --------------------------------------------------------

--
-- 表的结构 `comments`
--

CREATE TABLE `comments` (
  `C_Id` int(11) NOT NULL,
  `C_create_userId` int(11) NOT NULL,
  `C_related_roomId` int(11) NOT NULL,
  `C_content` varchar(255) NOT NULL,
  `C_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `comments`
--

INSERT INTO `comments` (`C_Id`, `C_create_userId`, `C_related_roomId`, `C_content`, `C_date`) VALUES
(1, 3, 5, '你好，我要参加', '2017-10-04 16:10:44'),
(2, 3, 5, '你好，我要参加', '2017-10-04 16:10:44'),
(3, 3, 5, '你好，我要参加么', '2017-10-04 16:10:53'),
(4, 3, 6, '你好', '2017-10-04 16:18:08'),
(5, 3, 8, '你好', '2017-10-04 18:19:18'),
(6, 3, 9, '一定去', '2017-10-04 18:40:30'),
(7, 3, 9, '一定去', '2017-10-04 18:41:04'),
(8, 3, 10, '我要去，咱们哪里碰面？', '2017-10-06 05:23:43'),
(9, 5, 10, '就食堂门口吧～', '2017-10-06 05:24:35'),
(10, 3, 10, '好哒～', '2017-10-06 05:25:44'),
(11, 5, 11, '我女孩，带我一个行么？', '2017-10-06 05:30:11'),
(12, 3, 11, '来吧，就随意踢一踢，强度不大', '2017-10-06 05:31:29'),
(13, 5, 11, '恩恩，那到时候见～', '2017-10-06 05:32:26'),
(14, 5, 11, '恩恩，玩得开心～', '2017-10-06 05:56:34'),
(15, 3, 12, '你好，我想去参加～', '2017-10-06 06:12:17'),
(16, 5, 12, '恩恩，到时候集合，注意佩戴头盔等护具～', '2017-10-06 06:13:11'),
(17, 5, 15, '我要去～用不用带球拍或者球的？', '2017-10-06 06:45:11'),
(18, 3, 15, '不用，我这里有多的。', '2017-10-06 06:45:43'),
(19, 5, 15, '好的～', '2017-10-06 06:46:07'),
(20, 5, 11, '恩', '2017-10-06 15:38:46'),
(21, 5, 15, '恩', '2017-10-06 15:41:05'),
(22, 5, 12, '准时参加哦', '2017-10-06 15:47:07'),
(23, 5, 14, '有没有大佬教我', '2017-10-06 15:52:51'),
(24, 5, 14, '我也想学', '2017-10-06 16:11:05'),
(25, 5, 16, '我可以呦～', '2017-10-06 16:30:46'),
(26, 3, 16, '那好啊，操场见哦', '2017-10-06 16:31:30');

-- --------------------------------------------------------

--
-- 表的结构 `players`
--

CREATE TABLE `players` (
  `P_Id` int(11) NOT NULL,
  `P_join_userId` int(11) NOT NULL,
  `P_join_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `P_join_room_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `players`
--

INSERT INTO `players` (`P_Id`, `P_join_userId`, `P_join_date`, `P_join_room_Id`) VALUES
(1, 1, '2017-10-01 12:28:48', 1),
(2, 1, '2017-10-03 06:56:10', 5),
(3, 3, '2017-10-04 16:12:09', 5),
(4, 3, '2017-10-04 16:12:18', 1),
(5, 3, '2017-10-04 16:17:18', 6),
(6, 1, '2017-10-04 18:16:32', 7),
(7, 3, '2017-10-04 18:18:58', 8),
(8, 3, '2017-10-04 18:19:32', 7),
(9, 3, '2017-10-04 18:32:02', 9),
(10, 5, '2017-10-06 05:22:46', 10),
(11, 3, '2017-10-06 05:25:50', 10),
(12, 3, '2017-10-06 05:29:11', 11),
(13, 5, '2017-10-06 05:29:39', 11),
(14, 6, '2017-10-06 05:47:01', 11),
(15, 6, '2017-10-06 05:47:09', 10),
(16, 6, '2017-10-06 05:47:42', 7),
(17, 5, '2017-10-06 05:56:49', 9),
(18, 5, '2017-10-06 06:11:31', 12),
(19, 3, '2017-10-06 06:13:58', 12),
(20, 3, '2017-10-06 06:27:08', 13),
(21, 3, '2017-10-06 06:35:26', 14),
(22, 3, '2017-10-06 06:44:24', 15),
(23, 5, '2017-10-06 06:46:11', 15),
(24, 5, '2017-10-06 15:45:34', 6),
(25, 3, '2017-10-06 16:30:10', 16),
(26, 5, '2017-10-06 16:30:49', 16),
(27, 6, '2017-10-08 19:58:02', 15),
(28, 6, '2017-10-10 07:48:11', 12),
(29, 6, '2017-10-28 01:38:59', 16),
(30, 6, '2017-10-28 01:39:12', 13);

-- --------------------------------------------------------

--
-- 表的结构 `rooms`
--

CREATE TABLE `rooms` (
  `R_Id` int(11) NOT NULL,
  `R_owner_Id` int(11) NOT NULL,
  `R_type` varchar(255) NOT NULL,
  `R_capacity` int(2) NOT NULL,
  `R_place` varchar(255) NOT NULL,
  `R_Date` datetime NOT NULL,
  `R_image` varchar(1000) NOT NULL,
  `R_intro` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `rooms`
--

INSERT INTO `rooms` (`R_Id`, `R_owner_Id`, `R_type`, `R_capacity`, `R_place`, `R_Date`, `R_image`, `R_intro`) VALUES
(1, 1, '篮球', 6, '望星篮球场', '2017-10-02 10:17:24', './upload/20171003/d935dc32c5b9b90b06f4ec6fbf40c773.jpg', '快来啊'),
(5, 1, '羽毛球', 12, '望星', '2017-10-03 10:15:00', './assets/defaultIMG.svg', '来一起打球吧'),
(6, 3, '篮球', 6, '望星体育场', '2017-10-01 00:00:00', 'https://wx.97qingnian.com/upload/20171005/0d58ef11e1418af6ed547672db3fa78c.jpg', '一起玩'),
(7, 1, '排球', 12, '12', '2017-12-01 00:00:00', 'https://wx.97qingnian.com/upload/20171005/3202874cb13da1ef401b81317671be7e.jpg', 'Rrr'),
(8, 3, '篮球', 2, '体育馆', '2017-01-01 00:02:00', 'https://wx.97qingnian.com/upload/20171005/8613f54c0818d5f917ad58b1659e2682.jpg', '篮球'),
(9, 3, '篮球', 3, '体育馆', '2017-01-07 00:02:00', 'https://wx.97qingnian.com/upload/20171005/2e3d7cb6ee7889fe6e027df2ee0d0435.jpg', '跑步'),
(10, 5, '篮球', 3, '望星体育场', '2017-10-10 18:00:00', 'https://wx.97qingnian.com/upload/20171006/9595feb4072ab30e94928f990726f589.jpg', '晚上有一起跑步的么？'),
(11, 3, '篮球', 11, '软件园足球场', '2017-10-12 15:00:00', 'https://wx.97qingnian.com/upload/20171006/203f4489f84e6d3ab4aa5ab653506334.jpg', '好久没踢球了，有约的么？'),
(12, 5, '篮球', 3, '东苑体育馆', '2017-10-11 13:20:00', 'https://wx.97qingnian.com/upload/20171006/af2e0d3f9991220c2c6bc92c9b7d4c50.jpg', '东苑体院集合，骑行去白洋淀～'),
(13, 3, '篮球', 5, '西苑体育馆', '2017-10-16 13:23:00', 'https://wx.97qingnian.com/upload/20171006/df3eb1fc9318176727bd81dc94132854.jpg', '老哥们出来打球啦'),
(14, 3, '篮球', 3, '网球场', '2017-10-15 15:15:00', 'https://wx.97qingnian.com/upload/20171006/25c53a23036385deb1d24c77d3455698.jpg', '有没有网球打得好的，来教教我'),
(15, 3, '篮球', 3, '羽毛球馆', '2017-10-25 17:19:00', 'https://wx.97qingnian.com/upload/20171006/706826025ee3c0e60d8a185009eeb2b7.jpg', '有没有周末打羽毛球的？约起来～'),
(16, 3, '篮球', 3, '学校跑道', '2017-10-16 14:14:00', 'https://wx.97qingnian.com/upload/20171007/d1755fb0e0caa3a0d3ee4ef0bd98b672.jpg', '有没有人陪我跑一个半马～');

-- --------------------------------------------------------

--
-- 表的结构 `Users`
--

CREATE TABLE `Users` (
  `U_Id` int(11) UNSIGNED NOT NULL,
  `U_name` varchar(255) NOT NULL,
  `U_phone` varchar(14) NOT NULL,
  `U_pwd` varchar(255) NOT NULL,
  `U_tall` int(3) NOT NULL,
  `U_weight` int(3) NOT NULL,
  `U_gender` enum('男','女') NOT NULL DEFAULT '男',
  `U_head` varchar(255) NOT NULL DEFAULT './assets/head.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Users`
--

INSERT INTO `Users` (`U_Id`, `U_name`, `U_phone`, `U_pwd`, `U_tall`, `U_weight`, `U_gender`, `U_head`) VALUES
(1, '万千钧', '13347320707', 'wqj9705', 178, 135, '男', './assets/head.jpg'),
(3, '南风入巷', '13752388512', '123456', 175, 70, '男', 'https://wx.97qingnian.com/upload/20171003/2DD19814D2287728B6F833D01AE07E77.jpg'),
(5, '在路上', '13651357092', '123456', 165, 45, '女', './assets/head.jpg'),
(6, 'dshut', '13502069731', '123321', 172, 60, '男', './assets/head.jpg'),
(7, '用户A', '13718327199', '123456', 175, 80, '男', './assets/head.jpg'),
(8, 'lit', '12345678909', '123456', 180, 80, '男', './assets/head.jpg'),
(9, 'lit', '12345678901', '123456', 180, 80, '男', './assets/head.jpg'),
(10, 'lit', '12345678902', '123456', 180, 80, '男', './assets/head.jpg'),
(11, '123', '123', '123', 123, 123, '男', './assets/head.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`C_Id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`P_Id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`R_Id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`U_Id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `comments`
--
ALTER TABLE `comments`
  MODIFY `C_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- 使用表AUTO_INCREMENT `players`
--
ALTER TABLE `players`
  MODIFY `P_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- 使用表AUTO_INCREMENT `rooms`
--
ALTER TABLE `rooms`
  MODIFY `R_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- 使用表AUTO_INCREMENT `Users`
--
ALTER TABLE `Users`
  MODIFY `U_Id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
