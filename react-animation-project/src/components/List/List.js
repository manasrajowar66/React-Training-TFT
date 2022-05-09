import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './List.css';

class List extends Component {
    state = {
        items: []
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: [...prevState.items, { id: Math.random().toString(), number: prevState.items.length + 1 }]
            };
        });
    }

    removeItemHandler = (selId) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item) => item.id !== selId)
            };
        });
    }

    render() {
        const listItems = this.state.items.map((item) => (
            <CSSTransition key={item.id} classNames="zoom" timeout={300}>
                <li
                    className="ListItem"
                    onClick={() => this.removeItemHandler(item.id)}>{item.number}
                </li>
            </CSSTransition>
        ));

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <TransitionGroup component="ul" className="List">
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;