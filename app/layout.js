import "./globals.css";
import { StoreProvider } from "@/lib/StoreProvider";

export const metadata = {
  title: "Adnan Khan",
  description: "Adnan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
