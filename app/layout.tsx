import type { Metadata } from "next";
import "@/styles/global.css";
import "@/styles/tailwind.css";

export const metadata: Metadata = {
    title: "Hargon App",
    description: "Hargon. Easy and Affordable credit solutions you can trust.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">{children}</body>
        </html>
    );
}

