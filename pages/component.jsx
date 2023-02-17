import Head from 'next/head';

export default function Component() {
  return (
    <>
      <Head>
        <title>コンポーネント</title>
      </Head>

      <main>
        <DogBox />
        <DogBox />
        <DogBox />
      </main>
    </>
  );
}

function DogBox() {
  return (
    <div>
      <img src="/cat.png" alt="犬" className="width-10rem" />
      <p>猫最高！</p>
    </div>
  );
}
