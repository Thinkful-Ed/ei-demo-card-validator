import React from 'react';

export default function Input(props) {
    return (
        <form>
            <label for="textInput">Card number</label>
            <input
                type="text"
                id="textInput"
                onChange={e => props.onValueChange(e.target.value)}
                value={props.value}
            />
        </form>
    );
}
