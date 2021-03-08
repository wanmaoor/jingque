/*
 * @Description: 
 * @version: 
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import Link from 'next/link';
export default function FirstPost(){
  return (
    <>
      <Link href="/">
        <a>Go back to main page</a>
      </Link>
      <h1>First Post</h1>
    </>
  );
}