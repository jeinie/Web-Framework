import React from "react";
import Color from "./Color";

const ColorList = function({colors=[], onRemoveColor=f=>f}) {
    return (
        <div>
            {colors.map(color =>
                <Color key={color.id} {...color}
                onRemove={onRemoveColor} />)}
        </div>
    )
}

export default ColorList;