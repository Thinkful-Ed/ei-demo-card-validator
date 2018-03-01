import React from 'react';
import Input from './input';
import Validity from './validity';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 79927398713
        };
    }

    render() {
        return (
            <div className="card-validity">
                <Input
                    value={this.state.number}
                    onValueChange={value => this.setState({number: value})}
                />
                <Validity number={this.state.number} />
            </div>
        );
    }
}
