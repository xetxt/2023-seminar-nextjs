import Head from 'next/head';

export default function TutorialMap() {
  const fruits = ['いちご', 'メロン', 'ぶどう'];

  return (
    <>
      <Head>
        <title>mapチュートリアル</title>
      </Head>

      <main>
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
