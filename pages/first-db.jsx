import { PrismaClient } from '@prisma/client';

export async function getServerSideProps() {
  // データベースに接続
  const prisma = new PrismaClient();

  // プロフィールテーブルをすべて取得
  const result = await prisma.profiles.findMany();

  return {
    props: {
      name: result[0].name
    }
  };
}

export default function FirstDb({ name }) {
  return (
    <main>
      データベースには「{name}」が入っています。
    </main>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> af2ae9f70d088f83a73f47b577327adbf7975e3f
