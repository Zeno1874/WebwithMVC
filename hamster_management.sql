USE hamster_management;

CREATE TABLE `newHamsters` (
  `hamster_id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '仓鼠ID',
  `hamster_uuid` NVARCHAR(36) NOT NULL COMMENT '仓鼠UUID',
  `name` NVARCHAR(50) COMMENT '名称',
  `age` INT COMMENT '年龄',
  `gender` NVARCHAR(10) COMMENT '性别',
  `species` NVARCHAR(50) COMMENT '种类',
  `color` NVARCHAR(50) COMMENT '颜色',
  `weight` DECIMAL(5, 2) COMMENT '重量(克)',
  `price` DECIMAL(10, 2) COMMENT '价格(元)',
  `inventory` NVARCHAR(50) COMMENT '库存',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`hamster_id`),
  UNIQUE KEY `uk_hamsters_uuid` (`hamster_uuid`)
) COMMENT='仓鼠信息表';


CREATE TABLE `newFeedingRecords` (
  `feeding_id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '喂养记录ID',
  `feeding_uuid` NVARCHAR(36) NOT NULL COMMENT '喂养UUID',
  `hamster_uuid` NVARCHAR(36) NOT NULL COMMENT '仓鼠UUID',
  `feed_time` TIMESTAMP COMMENT '喂养时间',
  `food_type` NVARCHAR(50) COMMENT '食物类型',
  `quantity` DECIMAL(5,2) COMMENT '食物数量',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`feeding_id`),
  UNIQUE KEY `uk_feedingrecords_uuid` (`feeding_uuid`),
  KEY `idx_hamster_uuid` (`hamster_uuid`),
  CONSTRAINT `fk_feedingrecords_hamsters` FOREIGN KEY (`hamster_uuid`) REFERENCES `newHamsters` (`hamster_uuid`)
) COMMENT='喂养记录表';

CREATE TABLE `HamsterProducts` (
  `product_id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '产品ID',
  `product_uuid` VARCHAR(36) NOT NULL COMMENT '产品UUID',
  `name` VARCHAR(100) COMMENT '产品名称',
  `category` VARCHAR(100) COMMENT '产品类别',
  `price` DECIMAL(10, 2) COMMENT '产品价格(元)',
  `stock_quantity` INT COMMENT '库存数量',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `uk_product_uuid` (`product_uuid`)
) COMMENT='仓鼠用品表';

CREATE TABLE `Users` (
  `user_id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `user_uuid` VARCHAR(36) NOT NULL COMMENT '用户UUID',
  `email` VARCHAR(255) NOT NULL COMMENT '电子邮件地址',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `uk_user_uuid` (`user_uuid`),
  UNIQUE KEY `uk_user_email` (`email`)
) COMMENT='用户信息表';

CREATE TABLE `UserSubscriptions` (
  `subscription_id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '订阅ID',
  `subscription_uuid` VARCHAR(36) NOT NULL COMMENT '订阅UUID',
  `user_uuid` VARCHAR(36) NOT NULL COMMENT '用户UUID',
  `subscription_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '订阅日期',
  `status` VARCHAR(20) NOT NULL COMMENT '订阅状态',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`subscription_id`),
  UNIQUE KEY `uk_subscription_uuid` (`subscription_uuid`),
  KEY `idx_user_uuid` (`user_uuid`),
  CONSTRAINT `fk_usersubscriptions_users` FOREIGN KEY (`user_uuid`) REFERENCES `Users` (`user_uuid`)
) COMMENT='用户订阅表';


