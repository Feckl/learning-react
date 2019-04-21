import React, { Component, Fragment } from 'react'

class NameList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    console.log('constructor')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  render() {
    console.log('render')
    return (
      <Fragment>
        <h1>Learning Lifecycle</h1>
        name: <input
                ref={inp => {this.nameRef = inp}}
                value={this.state.name}
                onChange={this.setName.bind(this)}></input>
      </Fragment>
    )
  }
  setName() {
    this.setState({
      name: this.nameRef.value
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    if (!'不允许props或者states变化') {
      console.log ('No entry')
      return false
    } else {
      console.log ('shouldComponentUpdate')
      return true
    }
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  
}
export default NameList