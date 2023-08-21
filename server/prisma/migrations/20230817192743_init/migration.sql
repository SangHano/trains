-- CreateTable
CREATE TABLE "Train" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "range" INTEGER NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "fuelType" VARCHAR(255) NOT NULL,

    CONSTRAINT "Train_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conductor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "yearHired" TIMESTAMP(3) NOT NULL,
    "trainId" INTEGER NOT NULL,

    CONSTRAINT "Conductor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Conductor" ADD CONSTRAINT "Conductor_trainId_fkey" FOREIGN KEY ("trainId") REFERENCES "Train"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
