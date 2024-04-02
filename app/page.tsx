"use client";
import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main";
import { useAppContext } from "@/components/AppContext";
//hello dick tsx代码 转化为react 两个路由方式app router和page router
//标签对 自封闭格式
export default function Home() {
    const {
        state: { themeMode },
    } = useAppContext();
    return (
        <div className={`${themeMode} h-full flex`}>
            <Navigation />
            <Main />
        </div>
    );
}
