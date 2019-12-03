-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema vehicle_system
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vehicle_system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vehicle_system` DEFAULT CHARACTER SET utf8 ;
USE `vehicle_system` ;

-- -----------------------------------------------------
-- Table `vehicle_system`.`booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vehicle_system`.`booking` (
  `booking_id` INT(11) NOT NULL AUTO_INCREMENT,
  `booking_start_date` DATE NULL DEFAULT NULL,
  `booking_end_date` DATE NULL DEFAULT NULL,
  `booking_price` DECIMAL(20,0) NULL DEFAULT NULL,
  `booking_paid` TINYINT(1) NULL DEFAULT NULL,
  `booking_us_id` INT(11) NOT NULL,
  `booking_vh_id` INT(11) NOT NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `fk_booking_user1_idx` (`booking_us_id` ASC),
  INDEX `fk_booking_vehicle1_idx` (`booking_vh_id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 40
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `vehicle_system`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vehicle_system`.`role` (
  `ro_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ro_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vehicle_system`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vehicle_system`.`user` (
  `us_id` INT(11) NOT NULL AUTO_INCREMENT,
  `us_name` VARCHAR(60) NULL DEFAULT NULL,
  `us_password` VARCHAR(100) NULL DEFAULT NULL,
  `us_first_name` VARCHAR(45) NULL DEFAULT NULL,
  `us_last_name` VARCHAR(45) NULL DEFAULT NULL,
  `us_age` INT(11) NULL DEFAULT NULL,
  `us_gender` VARCHAR(45) NULL DEFAULT NULL,
  `us_number` VARCHAR(10) NULL DEFAULT NULL,
  `us_email` VARCHAR(45) NULL DEFAULT NULL,
  `us_approval` TINYINT(1) NULL DEFAULT NULL,
  `us_branch` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`us_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vehicle_system`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vehicle_system`.`user_role` (
  `ur_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ur_us_id` INT(11) NULL DEFAULT NULL,
  `ur_ro_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ur_id`),
  INDEX `fk_user_has_role_role1` (`ur_ro_id` ASC),
  INDEX `fk_user_has_role_user1` (`ur_us_id` ASC),
  CONSTRAINT `fk_user_has_role_role1`
    FOREIGN KEY (`ur_ro_id`)
    REFERENCES `vehicle_system`.`role` (`ro_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_role_user1`
    FOREIGN KEY (`ur_us_id`)
    REFERENCES `vehicle_system`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vehicle_system`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vehicle_system`.`vehicle` (
  `vehicle_id` INT(11) NOT NULL AUTO_INCREMENT,
  `vehicle_name` VARCHAR(45) NULL DEFAULT NULL,
  `vehicle_number` VARCHAR(45) NULL DEFAULT NULL,
  `vehicle_type` VARCHAR(45) NULL DEFAULT NULL,
  `vehicle_insurance_expiry_date` DATE NULL DEFAULT NULL,
  `vehicle_last_serviced_date` DATE NULL DEFAULT NULL,
  `vehicle_service_due_date` DATE NULL DEFAULT NULL,
  `vehicle_branch` VARCHAR(45) NULL DEFAULT NULL,
  `vehicle_active` TINYINT(1) NULL DEFAULT '1',
  `vehicle_image_url` VARCHAR(200) NULL DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFA5XGypCPbY_Fv4eHgA0Or3vXdRN6wK2h8PXZ-Qvyf8Vd8wTI',
  `vehicle_price` DECIMAL(10,0) NULL DEFAULT NULL,
  `vehicle_status` TINYINT(1) NULL DEFAULT '0',
  PRIMARY KEY (`vehicle_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
