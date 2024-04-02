"use client";
import { useAppContext } from "@/components/AppContext";
import ChatInput from "./ChatInput";
import Menu from "./Menu";
import MessageList from "./MessageList";
import Welcom from "./Welcom";

export default function Main() {
    const {
        state: { selectedChat },
    } = useAppContext();
    return (
        <div className="flex-1 relative">
            <main className="overflow-y-auto w-full h-full bg-cyan-300 text-red-900 dark:bg-cyan-800 dark:text-red-300">
                <Menu />
                {selectedChat && <Welcom />}
                <MessageList />
                <ChatInput />
            </main>{" "}
        </div>
    );
}
//主体组件
// type Props = {
//     dicker: number
// }
//参数类型
// export default function Main(props: Props){
//     return<main>主体内容: {props.dicker}</main>
// }

/*其他写法

export default function Main({counter}: {counter:dicker}){
    return<main>主体内容: {dicker}</main>
}
当前组件使用可以这样
*/
