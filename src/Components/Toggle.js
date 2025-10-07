
import React, { Component } from 'react'

class Toggle extends Component {
    constructor() {
        super()

        this.state = {
            isVisible: false

        }
    }

    toggle() {
        this.setState({ isVisible: !this.state.isVisible })
    }

    render() {
        return (
            <div >
                <style>
                    {`
            button{
            font-size:30px;
            background-color:black;
            color:white;
            }
            
            `}
                </style>

                
                {this.state.isVisible ? (
                    <h2>This is a Hidden Message</h2>
                ) : null}

                <button onClick={() => this.toggle()}>
                    Show/Hide
                </button>

            </div>
        )
    }
}

export default Toggle;


