import React, { Component } from 'react'
import Hoc from './hocs/Hoc';


class HocExtender extends Component {
    render() {
        return (
            <div>
                This is my wrapped component!!!!
            </div>
        );
    }
}

HocExtender = Hoc(HocExtender);

export default HocExtender;