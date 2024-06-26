//导航组件

import { useAppContext } from "@/components/AppContext";
import Button from "../../common/Button";
import { MdLightMode, MdDarkMode, MdInfo } from "react-icons/md";
import { LuPanelLeft } from "react-icons/lu";
import { ActionType } from "@/reducer/AppReducer";

export default function Navigation() {
    const {
        state: { themeMode },
        dispatch,
    } = useAppContext();
    return (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between">
            <Button
                icon={themeMode === "dark" ? MdDarkMode : MdLightMode}
                variant="text"
                onClick={() => {
                    dispatch({
                        type: ActionType.UPDATE,
                        field: "themeMode",
                        value: themeMode === "dark" ? "light" : "dark",
                    });
                }}
            ></Button>
            <Button icon={MdInfo} variant="text" />
        </div>
    );
}
