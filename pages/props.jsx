import Head from 'next/head';

export default function Props() {
  return (
    <>
      <Head>
        <title>コンポーネント</title>
      </Head>

      <main>
        <DogBox message="犬だいすき！" />
        <DogBox message="猫もだいすき！" />
        <DogBox message="どっちもだいすき！" />
      </main>
    </>
  );
}

function DogBox({ message }) {
  return (
    <div>
      <img src="/dog.png" alt="犬" className="width-10rem" />
      <p>{message}</p>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> af2ae9f70d088f83a73f47b577327adbf7975e3f
