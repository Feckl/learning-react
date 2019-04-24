import React, { Component, Fragment } from 'react'

export default class Item extends Component {
    render() {
        return (
            <Fragment>
                <p>
                    {this.props.content}
                      &nbsp;
                    <button onClick={this.props.delClick}> del </button>
                </p>
            </Fragment>
        )
    }
}