-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Pon 31. čec 2023, 19:23
-- Verze serveru: 10.4.27-MariaDB
-- Verze PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `vf_mymovieplan`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `admins`
--

CREATE TABLE `admins` (
  `aid` int(11) NOT NULL COMMENT 'admin ID',
  `adminname` varchar(30) NOT NULL COMMENT 'admin name',
  `adminpassword` varchar(30) NOT NULL COMMENT 'admin password'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `admins`
--

INSERT INTO `admins` (`aid`, `adminname`, `adminpassword`) VALUES
(1, 'admin', 'admin123');

-- --------------------------------------------------------

--
-- Struktura tabulky `genres`
--

CREATE TABLE `genres` (
  `genre` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `genres`
--

INSERT INTO `genres` (`genre`) VALUES
('Animation'),
('Comedy'),
('Drama'),
('Fantasy'),
('Horror'),
('Romance'),
('Thriller');

-- --------------------------------------------------------

--
-- Struktura tabulky `items`
--

CREATE TABLE `items` (
  `iid` int(11) NOT NULL COMMENT 'purchased item ID',
  `mid` int(11) NOT NULL COMMENT 'movie ID',
  `amount` int(11) NOT NULL COMMENT 'number of tickets',
  `ticketprice` int(11) NOT NULL COMMENT '1 ticket price',
  `pid` int(11) NOT NULL COMMENT 'purchase ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `items`
--

INSERT INTO `items` (`iid`, `mid`, `amount`, `ticketprice`, `pid`) VALUES
(3, 4, 2, 13, 9),
(4, 5, 2, 10, 9),
(11, 5, 2, 10, 12),
(22, 7, 2, 12, 19),
(23, 8, 2, 12, 19),
(24, 9, 2, 12, 19);

-- --------------------------------------------------------

--
-- Struktura tabulky `languages`
--

CREATE TABLE `languages` (
  `language` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `languages`
--

INSERT INTO `languages` (`language`) VALUES
('CZ'),
('DE'),
('EN'),
('FR'),
('IT');

-- --------------------------------------------------------

--
-- Struktura tabulky `movies`
--

CREATE TABLE `movies` (
  `mid` int(11) NOT NULL COMMENT 'movie ID',
  `moviename` varchar(100) NOT NULL COMMENT 'movie name',
  `language` varchar(10) NOT NULL COMMENT 'movie language',
  `ticketprice` double NOT NULL COMMENT 'movie ticket price',
  `description` varchar(500) NOT NULL COMMENT 'movie description',
  `imageurl` varchar(300) NOT NULL COMMENT 'movie image URL',
  `genre` varchar(10) NOT NULL COMMENT 'movie genre',
  `moviedate` date NOT NULL COMMENT 'movie date',
  `movietime` varchar(10) NOT NULL COMMENT 'movie time',
  `movieenabled` tinyint(1) NOT NULL COMMENT 'movie status (enabled/disabled)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `movies`
--

INSERT INTO `movies` (`mid`, `moviename`, `language`, `ticketprice`, `description`, `imageurl`, `genre`, `moviedate`, `movietime`, `movieenabled`) VALUES
(1, 'Forrest Gump', 'EN', 15, 'The history of the United States from the 1950s to the \'70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.', 'https://m.media-amazon.com/images/M/MV5BNjhmZmNmNTYtMmQ5MC00ZmZhLTk0YzMtYWZiNTlmMjM1ZDhjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg', 'Drama', '2023-08-08', '20:00', 1),
(2, 'Frozen', 'EN', 12, 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.', 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg', 'Animation', '2023-08-12', '14:00', 0),
(4, 'Shrek', 'DE', 13, 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.', 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg', 'Animation', '2023-08-09', '17:00', 1),
(5, 'Pretty Woman', 'IT', 10, 'A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.', 'https://m.media-amazon.com/images/M/MV5BNTRkNDRmM2UtMzNmZi00YTc1LWE5YTctNGRkNGM2NjVkMDMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg', 'Romance', '2023-08-19', '20:00', 1),
(7, 'Harry Potter and the Sorcerer\'s Stone', 'CZ', 12, 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.', 'https://m.media-amazon.com/images/M/MV5BMTRkNjNiZTgtZjcxNC00Y2UzLWE4YjctOGI3MGM2OTI3ZGJkXkEyXkFqcGdeQXVyNTg3Njg4ODI@._V1_.jpg', 'Fantasy', '2023-08-04', '17:00', 1),
(8, 'Harry Potter and the Chamber of Secrets', 'CZ', 12, 'An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.', 'https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg', 'Fantasy', '2023-08-11', '17:00', 1),
(9, 'Harry Potter and the Prisoner of Azkaban', 'CZ', 12, 'Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.', 'https://1411022294.rsc.cdn77.org/wp-content/uploads/2020/11/7VTALkqjG40vby3uVIsp03d7yXy.jpg', 'Fantasy', '2023-08-18', '17:00', 1);

-- --------------------------------------------------------

--
-- Struktura tabulky `purchases`
--

CREATE TABLE `purchases` (
  `pid` int(11) NOT NULL COMMENT 'purchase ID',
  `purchasedate` date NOT NULL DEFAULT current_timestamp() COMMENT 'purchase date',
  `createdby` varchar(30) NOT NULL COMMENT 'purchase created by',
  `totalprice` int(11) NOT NULL COMMENT 'total purchase price'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `purchases`
--

INSERT INTO `purchases` (`pid`, `purchasedate`, `createdby`, `totalprice`) VALUES
(9, '2023-07-29', 'JohnDoe', 46),
(12, '2023-07-30', 'MarySue', 20),
(19, '2023-07-31', 'MarySue', 72);

-- --------------------------------------------------------

--
-- Struktura tabulky `users`
--

CREATE TABLE `users` (
  `uid` int(11) NOT NULL COMMENT 'user ID',
  `username` varchar(30) NOT NULL COMMENT 'user nickname',
  `fname` varchar(30) NOT NULL COMMENT 'user first name',
  `lname` varchar(30) NOT NULL COMMENT 'user last name',
  `email` varchar(50) NOT NULL COMMENT 'user email',
  `userpassword` varchar(30) NOT NULL COMMENT 'user password'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `users`
--

INSERT INTO `users` (`uid`, `username`, `fname`, `lname`, `email`, `userpassword`) VALUES
(1, 'JohnDoe', 'John', 'Doe', 'j.doe@gmail.com', 'john123'),
(2, 'MarySue', 'Mary', 'Sue', 'm.sue@gmail.com', 'mary123'),
(3, 'testingAccount', 'Testing', 'Account', 'testing.account@gmail.com', 'testing123'),
(5, 'name2023.07.31.17.12.17', 'register', 'positive', 'register.positive@gmail.com', 'negative123'),
(6, 'name2023.07.31.17.58.02', 'register', 'positive', 'register.positive@gmail.com', 'negative123');

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`aid`);

--
-- Indexy pro tabulku `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`genre`);

--
-- Indexy pro tabulku `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`iid`),
  ADD KEY `items_ibfk_1` (`pid`),
  ADD KEY `mid` (`mid`);

--
-- Indexy pro tabulku `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`language`);

--
-- Indexy pro tabulku `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`mid`);

--
-- Indexy pro tabulku `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`pid`);

--
-- Indexy pro tabulku `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `admins`
--
ALTER TABLE `admins`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'admin ID', AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `items`
--
ALTER TABLE `items`
  MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'purchased item ID', AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pro tabulku `movies`
--
ALTER TABLE `movies`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'movie ID', AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pro tabulku `purchases`
--
ALTER TABLE `purchases`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'purchase ID', AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pro tabulku `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'user ID', AUTO_INCREMENT=7;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `purchases` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
