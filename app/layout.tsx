import type { Metadata } from "next";
import "@styles/globals.css";
import { poppins } from "./libs/font";
import CreateContextProvider from "./utils/context/createContextProvider";



export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Discover a user-friendly timeline platform. Easily create, organize, and share events with our intuitive interface. Enhance your storytelling with media integration and collaboration features. Your personalized timeline experience starts here. Join now!",
  keywords: [
    " timeline",
    "events",
    "storytelling",
    "media integration",
    "collaboration",
    "Personalized",
    "Visual Journey",
    "Timeline Platform",
    "Timeline Experience",
    "Seamless Experience",
    "User-Friendly",
    "Moment Capture",
    "Calendar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CreateContextProvider>
          {children}
        </CreateContextProvider>
      </body>
    </html>
  );
}
