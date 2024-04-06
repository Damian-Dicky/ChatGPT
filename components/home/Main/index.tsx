"use client";
import { useAppContext } from "@/components/AppContext";
import ChatInput from "./ChatInput";
import Menu from "./Menu";
import MessageList from "./MessageList";
import Welcom from "./Welcome";

export default function Main() {
    const {
        state: { selectedChat },
    } = useAppContext();
    return (
        <div className="flex-1 relative">
            <main className="overflow-y-auto w-full h-full bg-cyan-300 text-red-900 dark:bg-cyan-800 dark:text-red-300">
                <Menu />
                {!selectedChat && <Welcom />}
                <MessageList />
                <ChatInput />
            </main>{" "}
        </div>
    );
}
