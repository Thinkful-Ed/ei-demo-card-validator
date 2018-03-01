import React from 'react';

import isValid from './is-valid';

export default function Validity(props) {
    return (
        <output className="validity">
            {isValid(props.number) ? 'Valid' : 'Invalid'}
        </output>
    );
}
