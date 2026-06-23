-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT');

-- CreateTable
CREATE TABLE "CustomerAuth" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerAuth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoogleAuthCustomer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GoogleAuthCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookAuthCustomer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FacebookAuthCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MicrosoftAuthCustomer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MicrosoftAuthCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppleAuthCustomer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppleAuthCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomerAuth_email_key" ON "CustomerAuth"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerAuth_username_key" ON "CustomerAuth"("username");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuthCustomer_email_key" ON "GoogleAuthCustomer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuthCustomer_username_key" ON "GoogleAuthCustomer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "FacebookAuthCustomer_email_key" ON "FacebookAuthCustomer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FacebookAuthCustomer_username_key" ON "FacebookAuthCustomer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "MicrosoftAuthCustomer_email_key" ON "MicrosoftAuthCustomer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MicrosoftAuthCustomer_username_key" ON "MicrosoftAuthCustomer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "AppleAuthCustomer_email_key" ON "AppleAuthCustomer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AppleAuthCustomer_username_key" ON "AppleAuthCustomer"("username");
