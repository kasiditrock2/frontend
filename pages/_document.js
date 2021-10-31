import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import Link from "next/link";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <div>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <title>Datavase management</title>
                        <div>
                        
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" />
                            <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
                            <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                            <link rel="stylesheet" href="dist/css/adminlte.min.css" />
                            <link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css" />
                            <link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css" />
                            <link rel="stylesheet" href="plugins/datatables-buttons/css/buttons.bootstrap4.min.css" />

                            <Script type="text/javascript" src="plugins/datatables/jquery.dataTables.min.js"></Script>
                            <Script type="text/javascript" src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></Script>
                            <Script type="text/javascript" src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></Script>
                            <Script type="text/javascript" src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></Script>
                            <Script type="text/javascript" src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></Script>
                            <Script type="text/javascript" src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></Script>
                            <Script type="text/javascript" src="plugins/jszip/jszip.min.js"></Script>
                            <Script type="text/javascript" src="plugins/pdfmake/pdfmake.min.js"></Script>
                            <Script type="text/javascript" src="plugins/pdfmake/vfs_fonts.js"></Script>
                            <Script type="text/javascript" src="plugins/datatables-buttons/js/buttons.html5.min.js"></Script>
                            <Script type="text/javascript" src="plugins/datatables-buttons/js/buttons.print.min.js"></Script>
                            <Script type="text/javascript" src="plugins/datatables-buttons/js/buttons.colVis.min.js"></Script>
                            <Script type="text/javascript" src="js/DataTable.js"></Script>
                    
                        </div>


                    </div>
                </Head>
                <body className="hold-transition sidebar-mini layout-fixed">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
