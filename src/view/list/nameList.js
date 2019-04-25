import React, { Component } from 'react'
import Store from '../../store'
import NameListUI from './nameListUI'

// learning 存储
class NameList extends Component {
  constructor(props){
    super(props)
    this.state = Store.getState()
    Store.subscribe(this.changeName.bind(this))
  }
  render() {
    return (
      <NameListUI
        inputValue={this.state.inputValue}
        nameList={this.state.nameList}
        enterName={this.enterName}
        addName={this.addName}
        delName={this.delName}/>
    )
  }
  changeName(){
    this.setState(Store.getState())
  }
  enterName(e){
    Store.dispatch({
      type: 'enter-name',
      value: e.target.value
    })
  }
  addName(){
    Store.dispatch({
      type: 'add-name'
    })
  }
  delName(index){
    Store.dispatch({
      type: 'del-name',
      index
    })
  }
}
export default NameList