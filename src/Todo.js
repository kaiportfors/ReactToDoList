import React, {Component} from 'react'


export default class Todo extends Component {

  render() {
    let {id, todo, onRemove,} = this.props

    return(
      <li>{todo} <button onClick = {() => onRemove(id)}>Delete</button></li>

    )
  }
}
