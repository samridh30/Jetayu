import React, { Component } from 'react'

export default class FooterComponent extends Component {
  render() {
    return (
      <div className='fixed-bottom'>
        <footer className="bg-dark text-muted fixed-bottom">
          <span className='fixed-bottom'> &#169; Jatayu, 2022 </span>
        </footer>
      </div>
    )
  }
}
