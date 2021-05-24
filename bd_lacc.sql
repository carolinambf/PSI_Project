-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2021 at 10:36 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_lacc`
--

-- --------------------------------------------------------

--
-- Table structure for table `anexos`
--

CREATE TABLE `anexos` (
  `idAnexo` int(11) NOT NULL,
  `ficheiro` varchar(255) NOT NULL,
  `interacoes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `interacoes`
--

CREATE TABLE `interacoes` (
  `idInteracoes` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `idade` int(11) DEFAULT NULL,
  `descricao` varchar(255) NOT NULL,
  `contactoUser` varchar(255) NOT NULL,
  `Interacoescol` varchar(45) DEFAULT NULL,
  `Latitude` double NOT NULL,
  `Longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `moderadores`
--

CREATE TABLE `moderadores` (
  `idModeradores` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cargo` enum('Irmã','Outro') NOT NULL,
  `contacto` varchar(255) NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anexos`
--
ALTER TABLE `anexos`
  ADD PRIMARY KEY (`idAnexo`),
  ADD KEY `interacoes` (`interacoes`);

--
-- Indexes for table `interacoes`
--
ALTER TABLE `interacoes`
  ADD PRIMARY KEY (`idInteracoes`);

--
-- Indexes for table `moderadores`
--
ALTER TABLE `moderadores`
  ADD PRIMARY KEY (`idModeradores`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anexos`
--
ALTER TABLE `anexos`
  MODIFY `idAnexo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `interacoes`
--
ALTER TABLE `interacoes`
  MODIFY `idInteracoes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `moderadores`
--
ALTER TABLE `moderadores`
  MODIFY `idModeradores` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `anexos`
--
ALTER TABLE `anexos`
  ADD CONSTRAINT `anexos_ibfk_1` FOREIGN KEY (`interacoes`) REFERENCES `interacoes` (`idInteracoes`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
