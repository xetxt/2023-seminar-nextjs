import Head from 'next/head';

export default function TutorialMap() {
  const fruits = ['いちご', 'メロン', 'ぶどう'];

  return (
    <>
      <Head>
        <title>mapチュートリアル</title>
      </Head>

      <main>
<<<<<<< HEAD
        {fruits.map((item) => (
          <p key={item}>
            {item}
          </p>
        ))}
      </main>
    </>
  );
}
=======
        {/* {fruits.map((item) => (
          <p key={item}>
            {item}さん
          </p>
        ))} */}

        <p>
          いちごさん
        </p>
        <p>
          メロンさん
        </p>
        <p>
          ぶどうさん
        </p>
      </main>
    </>
  );
}
>>>>>>> af2ae9f70d088f83a73f47b577327adbf7975e3f
