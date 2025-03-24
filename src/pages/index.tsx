
import { Inter } from 'next/font/google'

const inter = Inter({ subsets : ['latin']});

export default function Home() {
  return (
    <main>
      <div>
        <p>
          Get started by editing&nbsp;
          <code>pages/index.tsx</code>
        </p>
        <div>
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">  // 현재 문서와 링크된 문서 사이의 연관관계를 명시
            // noreferrer : 사용자가 하이퍼링크를 클릭할 때 브라우저가 HTTP 리퍼러 헤더(referer header)를 전송해서는 안 됨을 나타냄.
            // noopener	: 하이퍼링크를 따라 연결되는 어떠한 브라우징 컨텍스트(browsing context)도 오프너(opener)여서는 안 됨을 나타냄.
          
          </a>

        </div>
      </div>

    </main>
  )
}

