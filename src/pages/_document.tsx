import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body className={`bg-cyan-200`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
