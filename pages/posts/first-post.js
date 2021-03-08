/*
 * @Description:
 * @version:
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Link href="/">
        <a>Go back to main page</a>
      </Link>
      <h1>First Post</h1>
    </Layout>
  );
}
