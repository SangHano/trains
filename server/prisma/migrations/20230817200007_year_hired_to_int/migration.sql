/*
  Warnings:

  - Changed the type of `yearHired` on the `Conductor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Conductor" DROP COLUMN "yearHired",
ADD COLUMN     "yearHired" INTEGER NOT NULL;
