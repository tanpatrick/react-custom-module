import React, { Component } from 'react'
import { render } from 'react-dom'

import { Button, Container } from 'react-custom-module'

class App extends Component {

    render() {
        return (
            <div>
                <Container headline="Lorem Ipsum"
                    subHeadline="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." />
                <Button />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))