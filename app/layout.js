import "./globals.css";

export const metadata = {
  title: "Adnan Khan",
  description: "Adnan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
