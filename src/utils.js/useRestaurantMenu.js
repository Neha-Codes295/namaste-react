import { useMemo } from "react";
import dummyMenu from "./dummyRestaurantMenu.json";

const useRestaurantMenu = (resId) => {
    return useMemo(() => {
        return {
            ...dummyMenu,
            info: {
                ...dummyMenu.info,
                id: resId != null ? String(resId) : dummyMenu.info.id,
            },
        };
    }, [resId]);
};

export default useRestaurantMenu;
