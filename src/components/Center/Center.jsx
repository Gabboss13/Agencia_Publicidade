import React, { Component } from 'react'
import { StyledCenter } from './Center'


export default class Center extends Component {
    render() {
        return (
            <StyledCenter>
                {this.props.children}
            </StyledCenter>
        )
    }
}