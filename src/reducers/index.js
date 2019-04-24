const stateDefault = {
    inputValue: '',
    nameList: []
}

export default (state = stateDefault, action) => {
    if (action.type === 'enter-name'){
        return Object.assign(state,{inputValue: action.value})
    }
    if (action.type === 'add-name'){
        let nameAdd = Object.assign(state, {})
        nameAdd.nameList.push(nameAdd.inputValue)
        nameAdd.inputValue = ''
        return nameAdd
    }
    if (action.type === 'del-name'){
        let nameDeled = Object.assign(state, {})
        nameDeled.nameList.splice(action.index, 1)
        return nameDeled
    }
    return state
}