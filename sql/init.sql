/*

INITIALIZES A POSTGRES DATABASE INSTANCE

*/

CREATE TABLE Individual (
  individualId SERIAL IDENTITY PRIMARY KEY ,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE Address (
  addressId SERIAL IDENTITY PRIMARY KEY, 
  individualId NUMBER NOT NULL,
  type VARCHAR(255) NOT NULL,
  line1 VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zip VARCHAR(11) NOT NULL
);

INSERT INTO Individual (individualId, firstName, lastName, email) 
VALUES 
(1, 'John','Sanders','jsanders@gmail.com'),
(2, 'Paul','McKells','pMcKells@gmail.com'),
(3,'Nick','Sentorinni','nSentorinni@icloud.com')