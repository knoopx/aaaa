import React from 'react'
import classNames from 'classnames'

import buttonStyles from './button.scss'
import styles from './button-group.scss'

export default class ButtonGroup extends React.Component {
  renderButton(child) {
    return React.cloneElement(child, {className: classNames(buttonStyles.default, styles.button)})
  }

  render() {
    return <div className={styles.default} {...this.props}>{React.Children.map(this.props.children, this.renderButton)}</div>
  }
}
