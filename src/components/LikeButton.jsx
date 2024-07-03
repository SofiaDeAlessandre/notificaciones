import { Button } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BiLike } from "react-icons/bi";
export function LikeButton ({setArray, array}) {
    

    const handleChangeNotification = () => {
        const newNotification = {
            notificacion: "te dio un like",
            id: uuidv4(),
            visto: false,
        }
        const newArrayNotificaciones = [...array, newNotification]
        console.log(newArrayNotificaciones)
        setArray(newArrayNotificaciones)
    }

    return (
        
        <BiLike variant="text" onClick={handleChangeNotification} style={{color:"orange"}}></BiLike>
        
    )
}