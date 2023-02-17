import Head from 'next/head';

export default function Profile() {
  return (
    <>
      <Head>
        <title>プロフィール</title>
      </Head>

      <main>
        <h1>
          木田川拓希
        </h1>

        <div>
          <p>
            こんにちは！
          </p>
          <p>
            4月から2年生になります。
          </p>
          <p>
            木田川拓希です。
          </p>
        </div>

        <div>
          <h2 className="blue">趣味</h2> 
          ゲームをすることです!
        </div>

        <div>
          <h2 className="blue">好きなもの</h2>
          カレーライスです!
        </div>

        <div>
          <h2 className="blue">好きな教科</h2>
          プログラミングが好きです！
        </div>
      </main>
    </>
  );
}