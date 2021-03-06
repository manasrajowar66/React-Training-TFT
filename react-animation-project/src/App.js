import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import './App.css'
import Modal from './components/Modal/Modal'
import Backdrop from './components/Backdrop/Backdrop'
import List from './components/List/List'

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  }
  showModal = () => {
    this.setState({ modalIsOpen: true })
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />}
        <button
          className='Button'
          onClick={() => this.setState({ showBlock: !this.state.showBlock })}
        >
          Toggle
        </button>
        <br />
        <Transition in={this.state.showBlock} timeout={300} mountOnEnter unmountOnExit>
          {(state) => {
            const cssClasses = ['Block', state === 'entering' ? 'enterBlock' : state === 'exiting' ? 'exitBlock' : null]
            return (
              <div className={cssClasses.join(' ')}
              ></div>
            )
          }}
        </Transition>



        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModal.bind(this)}
        />


        <button className="Button" onClick={this.showModal.bind(this)}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    )
  }
}

export default App
