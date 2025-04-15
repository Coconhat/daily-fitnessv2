import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  title: "Daily Fitness Gym",
  description:
    "Discover Daily Fitness Gym in Lipa City – your destination for top-tier fitness equipment, certified trainers, and a comfortable, air-conditioned environment. Achieve your health and fitness goals. Join us today.",
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
