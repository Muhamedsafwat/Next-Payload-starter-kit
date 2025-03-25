import "./globals.css";

export const metadata = {
  title: "Title",
  description: "Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" data-theme="mytheme" className="bg-bg">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="antialiase">{children}</body>
    </html>
  );
}
