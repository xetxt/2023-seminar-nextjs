import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js サンプルアプリ</title>
      </Head>

      <main>
        <h1>
          寿司食べにいきます
        </h1>

        <div className="container-row">
          <div className="border-box">
            <p>
              フロントエンドとは、ブラウザ上で動作する部分のことです。
            </p>
            <p>
              ブラウザに表示されるページは、Webサーバーから受け取った<br />
              HTMLやスクリプト（プログラム）などを元に、描画されます。
            </p>
            <img src="/dog.png" alt="犬" className="width-10rem" />
          </div>

          <div className="border-box">
            <p>
              バックエンド（サーバーサイド）とは、サーバー上で動作する部分のことです。
            </p>
            <p>
              クライアントからの要求を処理し、要求に沿ったデータを返します。
            </p>
            <img src="/cat.png" alt="猫" className="width-10rem" />
          </div>
        </div>

        <div className="margin-3rem" />

        <Link
          href="https://qiita.com/yudwig/items/db76f9b7567bc5842459"
          className="button-primary"
        >
          Next.jsを詳しく学びたい人はコチラから
        </Link>
      </main>
    </>
  );
}
