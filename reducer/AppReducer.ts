import { Chat, Message } from "@/types/chat";
import { stat } from "fs";
export type State = {
    displayNavigation: boolean;
    themeMode: "dark" | "light";
    currentModel: string;
    messageList: Message[];
    streamingId: string;
    selectedChat?: Chat;
};
//更新属性的操作类型
export enum ActionType {
    UPDATE = "UPDATE",
    ADD_MESSAGE = "ADD_MESSAGE",
    UPDATE_MESSAGE = "UPDATE_MESSAGE",
    REMOVE_MESSAGE = "REMOVE_MESSAGE",
}
//更新操作的参数类型
//更新定义属性的操作类型 更新属性的参数类型 属性名 属性值
type MessageAction = {
    type:
        | ActionType.ADD_MESSAGE
        | ActionType.UPDATE_MESSAGE
        | ActionType.REMOVE_MESSAGE;
    message: Message;
};

type UpdateAction = {
    type: ActionType.UPDATE;
    field: string;
    value: any;
};
//组合在一起 对外统一的参数类型
export type Action = UpdateAction | MessageAction;

//默认状态值的定义
export const initState: State = {
    displayNavigation: true,
    themeMode: "light",
    currentModel: "gpt-35-turbo",
    messageList: [],
    streamingId: "",
};

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case ActionType.UPDATE:
            return { ...state, [action.field]: action.value };
        case ActionType.ADD_MESSAGE: {
            const messageList = state.messageList.concat([action.message]);
            return { ...state, messageList };
        }
        case ActionType.UPDATE_MESSAGE: {
            const messageList = state.messageList.map((message) => {
                if (message.id === action.message.id) {
                    return action.message;
                }
                return message;
            });
            return { ...state, messageList };
        }
        case ActionType.REMOVE_MESSAGE: {
            const messageList = state.messageList.filter((message) => {
                return message.id !== action.message.id;
            });
            return { ...state, messageList };
        }
        default:
            throw new Error();
    }
}
