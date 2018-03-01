import React from 'react';
import Input from './input';
import Validity from './validity';

export default function App() {
    return (
        <div className="card-validity">
            <Input />
            <Validity number={79927398713} />
        </div>
    );
}
