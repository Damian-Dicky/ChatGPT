//导航组件

import { useAppContext } from "@/components/AppContext";
import Button from "../../common/Button";
import { HiPlus } from "react-icons/hi";
import { LuPanelLeft } from "react-icons/lu";
import { ActionType } from "@/reducer/AppReducer";

export default function Navigation() {
    const { dispatch } = useAppContext();
    return (
        <div className="flex space-x-3">
            <Button
                icon={HiPlus}
                variant="outline"
                className="flex-1"
                onClick={() => {
                    dispatch({
                        type: ActionType.UPDATE,
                        field: "selectedChat",
                        value: null,
                    });
                }}
            >
                新建对话
            </Button>
            <Button
                icon={LuPanelLeft}
                variant="outline"
                onClick={() => {
                    dispatch({
                        type: ActionType.UPDATE,
                        field: "displayNavigation",
                        value: false,
                    });
                }}
            />
        </div>
    );
}