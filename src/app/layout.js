import Link from 'next/link'
import './globals.css'
import { Btn } from './Btn';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  var res = await fetch("http://localhost:3333/userList", {next : {revalidate : 0}}); // 캐시를 저장하지 않겠다고 명시
  var list = await res.json();
  return (
    <html lang="en">
      <body>
        <h1>공통영역</h1>
        <ol>
          {/* view 주소에 값을 구분할 수 있는 파라미터를 보내준다(pk) */}
          {
            list.map( m =>{
              return <li key={m.id}><Link href={`/view/${m.id}`}>{m.name}</Link></li>
            })
          }
        </ol>

        {children}

        <Btn></Btn>
      </body>
    </html>
  )
}