import Head from 'next/head';

export default function MessageBox() {
  const messages = [
    'こんにちは！',
    'こんばんは！',
<<<<<<< HEAD
    'おはようございます！',
    'ありがとうございます！'
=======
    'おはようございます！'
>>>>>>> af2ae9f70d088f83a73f47b577327adbf7975e3f
  ];

  return (
    <>
      <Head>
        <title>メッセージボックス</title>
      </Head>

      <main>
        {messages.map((item) => (
          <Box
            message={item}
            key={item}
          />
        ))}
      </main>
    </>
  );
}

function Box({ message }) {
  return (
    <div className="border-box">
<<<<<<< HEAD
      <h2>メッセージしよう！</h2>
=======
      <h2>メッセージ</h2>
>>>>>>> af2ae9f70d088f83a73f47b577327adbf7975e3f

      <p>
        {message}
      </p>

      以上
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> af2ae9f70d088f83a73f47b577327adbf7975e3f
