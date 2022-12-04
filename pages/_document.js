import { Html, Head, Main, NextScript } from "next/document";

function Document() {
    return <Html lang="zh-CN">
        <Head>
            <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png"/>
        </Head>
        <body className='background-base foreground-base'>
            <Main />
            <NextScript />
        </body>
    </Html>
}

export default Document