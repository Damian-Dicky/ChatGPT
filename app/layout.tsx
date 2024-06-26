import AppContextProvider from "@/components/AppContext";
import EventBusContextProvider from "@/components/EventBusContent";
import "@/styles/globals.css";
import "@/styles/markdown.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Damian Dicky",
    description: "Generated by create next app",
}; // 标题

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        //根目录下的layout文件才能使用html标签
        <html lang="en">
            <body>
                <AppContextProvider>
                    <EventBusContextProvider>
                        {children}
                    </EventBusContextProvider>
                </AppContextProvider>
            </body>
        </html>
    );
}
