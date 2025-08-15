CREATE TABLE mytable(
   title                    VARCHAR(7) NOT NULL PRIMARY KEY
  ,date                     VARCHAR(19) NOT NULL
  ,description              VARCHAR(4) NOT NULL
  ,products0id              INTEGER  NOT NULL
  ,products0serialNumber    INTEGER  NOT NULL
  ,products0isNew           BIT  NOT NULL
  ,products0photo           VARCHAR(14) NOT NULL
  ,products0title           VARCHAR(9) NOT NULL
  ,products0type            VARCHAR(8) NOT NULL
  ,products0specification   VARCHAR(15) NOT NULL
  ,products0guaranteestart  VARCHAR(19) NOT NULL
  ,products0guaranteeend    VARCHAR(19) NOT NULL
  ,products0price0value     INTEGER  NOT NULL
  ,products0price0symbol    VARCHAR(3) NOT NULL
  ,products0price0isDefault BIT  NOT NULL
  ,products0price1value     INTEGER  NOT NULL
  ,products0price1symbol    VARCHAR(3) NOT NULL
  ,products0price1isDefault BIT  NOT NULL
  ,products0order           INTEGER  NOT NULL
  ,products0date            VARCHAR(19) NOT NULL
  ,products1id              INTEGER  NOT NULL
  ,products1serialNumber    INTEGER  NOT NULL
  ,products1isNew           BIT  NOT NULL
  ,products1photo           VARCHAR(14) NOT NULL
  ,products1title           VARCHAR(9) NOT NULL
  ,products1type            VARCHAR(9) NOT NULL
  ,products1specification   VARCHAR(15) NOT NULL
  ,products1guaranteestart  VARCHAR(19) NOT NULL
  ,products1guaranteeend    VARCHAR(19) NOT NULL
  ,products1price0value     INTEGER  NOT NULL
  ,products1price0symbol    VARCHAR(3) NOT NULL
  ,products1price0isDefault BIT  NOT NULL
  ,products1price1value     INTEGER  NOT NULL
  ,products1price1symbol    VARCHAR(3) NOT NULL
  ,products1price1isDefault BIT  NOT NULL
  ,products1order           INTEGER  NOT NULL
  ,products1date            VARCHAR(19) NOT NULL
  ,products2id              INTEGER 
  ,products2serialNumber    INTEGER 
  ,products2isNew           BIT 
  ,products2photo           VARCHAR(14)
  ,products2title           VARCHAR(9)
  ,products2type            VARCHAR(9)
  ,products2specification   VARCHAR(15)
  ,products2guaranteestart  VARCHAR(19)
  ,products2guaranteeend    VARCHAR(19)
  ,products2price0value     INTEGER 
  ,products2price0symbol    VARCHAR(3)
  ,products2price0isDefault BIT 
  ,products2price1value     INTEGER 
  ,products2price1symbol    VARCHAR(3)
  ,products2price1isDefault BIT 
  ,products2order           BIT 
  ,products2date            VARCHAR(19)
);
INSERT INTO mytable(title,date,description,products0id,products0serialNumber,products0isNew,products0photo,products0title,products0type,products0specification,products0guaranteestart,products0guaranteeend,products0price0value,products0price0symbol,products0price0isDefault,products0price1value,products0price1symbol,products0price1isDefault,products0order,products0date,products1id,products1serialNumber,products1isNew,products1photo,products1title,products1type,products1specification,products1guaranteestart,products1guaranteeend,products1price0value,products1price0symbol,products1price0isDefault,products1price1value,products1price1symbol,products1price1isDefault,products1order,products1date,products2id,products2serialNumber,products2isNew,products2photo,products2title,products2type,products2specification,products2guaranteestart,products2guaranteeend,products2price0value,products2price0symbol,products2price0isDefault,products2price1value,products2price1symbol,products2price1isDefault,products2order,products2date) VALUES ('Order 1','2017-06-29 12:09:33','desc',1,1234,1,'pathToFile.jpg','Product 1','Monitors','Specification 1','2017-06-29 12:09:33','2017-06-29 12:09:33',100,'USD',0,2600,'UAH',1,1,'2017-06-29 12:09:33',5,12345678,1,'pathToFile.jpg','Product 1','Monitors','Specification 1','2017-06-29 12:09:33','2017-06-29 12:09:33',100,'USD',0,2600,'UAH',1,1,'2017-06-29 12:09:33',9,12345678901,1,'pathToFile.jpg','Product 1','Computers','Specification 1','2017-06-29 12:09:33','2017-06-29 12:09:33',100,'USD',0,2600,'UAH',1,1,'2017-06-29 12:09:33');
INSERT INTO mytable(title,date,description,products0id,products0serialNumber,products0isNew,products0photo,products0title,products0type,products0specification,products0guaranteestart,products0guaranteeend,products0price0value,products0price0symbol,products0price0isDefault,products0price1value,products0price1symbol,products0price1isDefault,products0order,products0date,products1id,products1serialNumber,products1isNew,products1photo,products1title,products1type,products1specification,products1guaranteestart,products1guaranteeend,products1price0value,products1price0symbol,products1price0isDefault,products1price1value,products1price1symbol,products1price1isDefault,products1order,products1date,products2id,products2serialNumber,products2isNew,products2photo,products2title,products2type,products2specification,products2guaranteestart,products2guaranteeend,products2price0value,products2price0symbol,products2price0isDefault,products2price1value,products2price1symbol,products2price1isDefault,products2order,products2date) VALUES ('Order 2','2017-06-29 12:09:33','desc',2,12345,1,'pathToFile.jpg','Product 1','Monitors','Specification 1','2017-06-29 12:09:33','2017-06-29 12:09:33',100,'USD',0,2600,'UAH',1,2,'2017-06-29 12:09:33',6,123456789,1,'pathToFile.jpg','Product 1','Monitors','Specification 1','2017-06-29 12:09:33','2017-06-29 12:09:33',100,'USD',0,2600,'UAH',1,2,'2017-06-29 12:09:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO mytable(title,date,description,products0id,products0serialNumber,products0isNew,products0photo,products0title,products0type,products0specification,products0guaranteestart,products0guaranteeend,products0price0value,products0price0symbol,products0price0isDefault,products0price1value,products0price1symbol,products0price1isDefault,products0order,products0date,products1id,products1serialNumber,products1isNew,products1photo,products1title,products1type,products1specification,products1guaranteestart,products1guaranteeend,products1price0value,products1price0symbol,products1price0isDefault,products1price1value,products1price1symbol,products1price1isDefault,products1order,products1date,products2id,products2serialNumber,products2isNew,products2photo,products2title,products2type,products2specification,products2guaranteestart,products2guaranteeend,products2price0value,products2price0symbol,products2price0isDefault,products2price1value,products2price1symbol,products2price1isDefault,products2order,products2date) VALUES ('Order 3','2017-06-29 12:09:33','desc',3,123456,1,'pathToFile.jpg','Product 1','Monitors','Specification 1','2017-06-29 12:09:33','2017-06-29 12:09:33',100,'USD',0,2600,'UAH',1,3,'2017-06-29 12:09:33',7,1234567890,1,'pathToFile.jpg','Product 1','Computers','Specification 1','2017-06-29 12:09:33','2017-06-29 12:09:33',100,'USD',0,2600,'UAH',1,3,'2017-06-29 12:09:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO mytable(title,date,description,products0id,products0serialNumber,products0isNew,products0photo,products0title,products0type,products0specification,products0guaranteestart,products0guaranteeend,products0price0value,products0price0symbol,products0price0isDefault,products0price1value,products0price1symbol,products0price1isDefault,products0order,products0date,products1id,products1serialNumber,products1isNew,products1photo,products1title,products1type,products1specification,products1guaranteestart,products1guaranteeend,products1price0value,products1price0symbol,products1price0isDefault,products1price1value,products1price1symbol,products1price1isDefault,products1order,products1date,products2id,products2serialNumber,products2isNew,products2photo,products2title,products2type,products2specification,products2guaranteestart,products2guaranteeend,products2price0value,products2price0symbol,products2price0isDefault,products2price1value,products2price1symbol,products2price1isDefault,products2order,products2date) VALUES ('Order 4','2017-06-29 12:09:33','desc',4,1234567,1,'pathToFile.jpg','Product 1','Monitors','Specification 1','2017-06-29 12:09:33','2017-06-29 12:09:33',100,'USD',0,2600,'UAH',1,4,'2017-06-29 12:09:33',8,12345678901,1,'pathToFile.jpg','Product 1','Monitors','Specification 1','2017-06-29 12:09:33','2017-06-29 12:09:33',100,'USD',0,2600,'UAH',1,4,'2017-06-29 12:09:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
