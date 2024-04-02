"use client";
import { Action, State, initState, reducer } from "@/reducer/AppReducer";

import {
    Dispatch,
    ReactNode,
    createContext,
    useReducer,
    useMemo,
    useContext,
} from "react";

//定义参数类型
type AppContextProps = {
    state: State;
    dispatch: Dispatch<Action>;
};
//用context api创建一个context
const AppContext = createContext<AppContextProps>(null!);

export function useAppContext() {
    return useContext(AppContext);
}

export default function AppContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, initState);
    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}
