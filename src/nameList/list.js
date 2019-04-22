import React, { Component, Fragment} from 'react'
import Item from './item'

class List extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            names: []
        }
    }
    render() {
        return (
            <Fragment>
                <label htmlFor="labelName">姓名: </label>
                <input
                    id="labelName"
                    value={this.state.name}
                    ref={inp => {this.inputRef = inp}}
                    onChange={this.changeValue.bind(this)}></input>
                    &nbsp;
                <button onClick={this.addName.bind(this)}> add </button>
                <div ref={div => {this.divRef = div}}>{
                    this.state.names.map((item, index) => {
                        return <Item
                                    key={index}
                                    content={item}
                                    index={index}
                                    delClick={this.delName.bind(this, index)}
                                />
                    })
                }</div>
            </Fragment>
        )
    }
    changeValue() {
        const {value} = this.inputRef
        this.setState(_ => ({
            name: value
        }))
    }
    addName() {
        const names = [...this.state.names, this.state.name]
        this.setState(_=> ({
            names: names,
            name: ''
        }), _=>{
            console.log(this.divRef.querySelectorAll('p').length)
        })
    }
    delName(i) {
        const names = [...this.state.names]
        names.splice(i,1)
        this.setState(_=> ({
            names: names
        }))
    }
}

export default List;