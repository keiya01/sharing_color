import * as React from 'react';

export interface ColorProps {
    color: string,
    body: string
}

const ColorListItem: React.FC<ColorProps> = ({ color, body }) => {
    return (
        <div>
            <p>{`${color} : ${body}`}</p>
        </div>
    )
}

export default ColorListItem;