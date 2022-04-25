import React, { Component } from 'react'

export default class FooterComponent extends Component {
  render() {
    return (
      <div className='align-bottom'>
        <footer className="bg-dark text-muted text-center pb-3 pt-3 mt-auto">
          <span> &#169; Jatayu, 2022 </span>
        </footer>
      </div>
    )
  }
}
