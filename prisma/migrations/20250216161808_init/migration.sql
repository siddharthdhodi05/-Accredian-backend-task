-- CreateTable
CREATE TABLE `Referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `yourName` VARCHAR(191) NOT NULL,
    `friendsName` VARCHAR(191) NOT NULL,
    `friendsEmail` VARCHAR(191) NOT NULL,
    `friendsPhone` VARCHAR(191) NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
