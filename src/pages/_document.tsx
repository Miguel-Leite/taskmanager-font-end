import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* <link rel="shortcut icon" href="favicon.png" type="image/png" /> */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Asap:wght@500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

          {/* <title>Moveit</title> */}
        </Head>
        <body className="bg-dark-600 text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}