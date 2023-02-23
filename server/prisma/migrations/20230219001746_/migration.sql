-- CreateTable
CREATE TABLE "Alunos" (
    "id" TEXT NOT NULL,
    "firtName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "grade" INTEGER[],
    "create_at" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Alunos_pkey" PRIMARY KEY ("id")
);
