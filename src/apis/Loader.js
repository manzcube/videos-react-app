import React from "react";

const Loader = () => {
    return (
        <div className="ui active dimmer" style={{height: '550px'}}>
            <div className="ui text loader">Waiting YOU to type something...</div>
        </div>
    )
}

export default Loader;