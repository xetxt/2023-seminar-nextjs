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
<<<<<<< HEAD
      <img src="/dog.png" alt="犬" className="width-10rem" />
      <p>犬最高！</p>
    </div>
  );
}
=======
      <img src="/cat.png" alt="犬" className="width-10rem" />
      <p>猫最高！</p>
    </div>
  );
}
>>>>>>> af2ae9f70d088f83a73f47b577327adbf7975e3f
