import loader from "../../../assets/images/loader.gif";
import React from "react";

type preloaderType = {

}

let Preloader = (props: preloaderType) => {
    return (
    <div>
        <img src={loader} width="100" height="100"/>
    </div>
    )
}

export default Preloader