import React, { useState } from "react";
import Details from "./Details";
export default function Details1() {
    const [isLike, setIsLike] = useState(false);
    return (
         <div >
        
        <
        Details isLike = { isLike }
        setIsLike = { setIsLike }
        /> 
        
         </div >
    );
}