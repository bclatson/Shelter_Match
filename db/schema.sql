DROP DATABASE IF EXISTS match_db;

CREATE DATABASE match_db;
 
USE DATABASE match_db;

CREATE TABLE dogs (
     id INT PRIMARY KEY,
     dogs_name VARCHAR (30) NOT NULL,
     dogs_age DECIMAL, 
     dogs_size VARCHAR (30) NOT NULL,
    dogs_breed VARCHAR (40) NOT NULL,
 );

 CREATE TABLE potentialowners (
     id INT PRIMARY KEY,
     potentialowners_name VARCHAR (255) NOT NULL,
     email VARCHAR (255) NOT NULL,
 );

 CREATE TABLE owners (
    id INT PRIMARY KEY,
    potentialowners_name VARCHAR (255) NOT NULL,
    dogs_id INT,
 );