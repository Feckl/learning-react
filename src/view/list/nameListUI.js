import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

// 无状态组件
const NameListUI = props => {
  return (
    <Fragment>
      <div style={{ margin: 10, width: 400 }}>
        <Input
          placeholder="Place enter your name"
          style={{ width: 330, marginRight: 10 }}
          value={props.inputValue}
          onChange={props.enterName}/>
        <Button type="primary" onClick={props.addName}> Add </Button>
      </div>
      <List
        style={{width:400, margin:10}}
        bordered
        dataSource={props.nameList}
        renderItem={(item, index) => (
          <List.Item>
            { item }
            <Button type="danger"
              style={{float: "right", marginTop: '-5px'}}
              onClick={()=>props.delName(index)}> X </Button>
          </List.Item>
      )}/>
    </Fragment>
  )
}
export default NameListUI