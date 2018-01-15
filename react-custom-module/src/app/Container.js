import React, { Component } from 'react'

class Container extends Component {

    render() {
        const { headline, subHeadline } = this.props
        return (
            <div>
                <h3>{headline}</h3>
                <h6>{subHeadline}</h6>
            </div >
        )
    }
}

export default Container