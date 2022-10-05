
import { parseBody } from 'next/dist/server/api-utils'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    //Custome Dokumen untuk memanggil index.js dan script next.js

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDocument;