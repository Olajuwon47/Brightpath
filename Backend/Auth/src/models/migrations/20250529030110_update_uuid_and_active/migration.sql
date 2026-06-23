/*
  Warnings:

  - The primary key for the `AppleAuthCustomer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CustomerAuth` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FacebookAuthCustomer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GoogleAuthCustomer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MicrosoftAuthCustomer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "AppleAuthCustomer" DROP CONSTRAINT "AppleAuthCustomer_pkey",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "AppleAuthCustomer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AppleAuthCustomer_id_seq";

-- AlterTable
ALTER TABLE "CustomerAuth" DROP CONSTRAINT "CustomerAuth_pkey",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CustomerAuth_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CustomerAuth_id_seq";

-- AlterTable
ALTER TABLE "FacebookAuthCustomer" DROP CONSTRAINT "FacebookAuthCustomer_pkey",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "FacebookAuthCustomer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FacebookAuthCustomer_id_seq";

-- AlterTable
ALTER TABLE "GoogleAuthCustomer" DROP CONSTRAINT "GoogleAuthCustomer_pkey",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "GoogleAuthCustomer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "GoogleAuthCustomer_id_seq";

-- AlterTable
ALTER TABLE "MicrosoftAuthCustomer" DROP CONSTRAINT "MicrosoftAuthCustomer_pkey",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MicrosoftAuthCustomer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MicrosoftAuthCustomer_id_seq";
