import { Html, Head, Main, NextScript } from "next/document";

function Document() {
    return <Html lang="zh-CN">
        <Head>
            <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png"/>
        </Head>
        <body className='bg-neutral-100 dark:bg-neutral-900'>
            <Main />
            <NextScript />
        </body>
    </Html>
}

export default Document