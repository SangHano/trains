/*
  Warnings:

  - Added the required column `state` to the `Station` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Station" ADD COLUMN     "state" VARCHAR(255) NOT NULL;
