import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
