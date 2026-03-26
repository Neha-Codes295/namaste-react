import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        // failing due to cors error
        // but this is a good way of writing code 
        const data  = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;

}

export default useRestaurantMenu;