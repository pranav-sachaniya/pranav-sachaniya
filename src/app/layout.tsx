import type { Metadata } from "next";
import { inter, interDisplay } from "@/lib/fonts";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/layout/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Cross | Creative Developer & Designer",
  description: "I craft digital experiences that merge thoughtful design with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-bg-primary text-text-primary">
        <Providers>
          <div className="flex w-full min-h-screen">
            <Sidebar />
            <div className="flex-1 lg:ml-[280px] min-w-0 w-full">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
