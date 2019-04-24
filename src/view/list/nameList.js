import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import Store from '../../store'

// learning 存储
class NameList extends Component {
  constructor(props){
    super(props)
    this.state = Store.getState()
    Store.subscribe(this.changeName.bind(this))
  }
  render() {
    return (
      <Fragment>
        <div style={{ margin: 10, width: 400 }}>
          <Input
            placeholder="Place enter your name"
            style={{ width: 330, marginRight: 10 }}
            value={this.state.inputValue}
            onChange={this.enterName.bind(this)}/>
          <Button type="primary" onClick={this.addName.bind(this)}> Add </Button>
        </div>
        <List
          style={{width:400, margin:10}}
          bordered
          dataSource={this.state.nameList}
          renderItem={(item, index) => (
            <List.Item>
              { item }
              <Button type="danger" onClick={this.delName.bind(this, index)} style={{float: "right", marginTop: '-5px'}}>X</Button>
            </List.Item>
        )}/>
      </Fragment>
    )
  }
  enterName(e){
    Store.dispatch({
      type: 'enter-name',
      value: e.target.value
    })
  }
  changeName(){
    this.setState(Store.getState())
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