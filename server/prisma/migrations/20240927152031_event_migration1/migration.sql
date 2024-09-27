-- CreateTable
CREATE TABLE "event_table" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "trainer" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "venue" TEXT NOT NULL,

    CONSTRAINT "event_table_pkey" PRIMARY KEY ("id")
);
