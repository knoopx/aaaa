import React from 'react'

export default class Row extends React.PureComponent {
  static propTypes = {
    flex: React.PropTypes.any
  }

  render() {
    const {flex, ...extraProps} = this.props
    return (
      <div {...extraProps} style={{flex, display: 'flex', flexDirection: 'row', minWidth: 0, ...extraProps.style}} />
    )
  }
}
