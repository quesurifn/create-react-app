import React, { Component } from 'react';

export class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
      this.props.history.listen((location, action) => {
        console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
        console.log(`The last navigation action was ${action}`)
    })
  }


  render() {
    return this.props.children
  }
}
