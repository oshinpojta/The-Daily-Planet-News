import React, { Component } from 'react'
import spinner from "../assets/Infinity.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt='Loading...'/>
      </div>
    )
  }
}
