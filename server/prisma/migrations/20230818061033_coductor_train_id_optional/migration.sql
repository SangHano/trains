-- DropForeignKey
ALTER TABLE "Conductor" DROP CONSTRAINT "Conductor_trainId_fkey";

-- AlterTable
ALTER TABLE "Conductor" ALTER COLUMN "trainId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Conductor" ADD CONSTRAINT "Conductor_trainId_fkey" FOREIGN KEY ("trainId") REFERENCES "Train"("id") ON DELETE SET NULL ON UPDATE CASCADE;
