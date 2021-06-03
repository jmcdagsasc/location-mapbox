import Document, { Html, Head, Main, NextScript } from "next/document";

class FarmazoneDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <meta
          name="viewport"
          content="initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.js"></script>
        <body>
          <Main />
          <script src="https://www.paypal.com/sdk/js?currency=MXN&client-id=Ab6Y15dqay1zLlqAkk2YZik05jto6wmoB_J5ILBPkZgEDqIZ5-km5ZHqyagG8RKuQ7zGQclIiH1_4wUl"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default FarmazoneDocument;
