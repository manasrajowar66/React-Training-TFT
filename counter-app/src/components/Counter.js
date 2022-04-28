import { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <div className='counter'>
                {this.props.count}
            </div>
        )
    }
}


export default Counter;
