-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'CANCELED';

-- AlterTable
ALTER TABLE "mail" RENAME COLUMN "title" TO "subject";
