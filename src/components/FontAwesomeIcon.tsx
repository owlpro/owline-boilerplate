import React, { PureComponent } from 'react'

interface FontAwesomeIconInterface {
    icon?: string,
    size?: number,
    color?: string
}
export default class FontAwesomeIcon extends PureComponent<FontAwesomeIconInterface> {
    render() {
        return <i className={this.props.icon || "fa-duotone fa-question"} style={{ fontSize: this.props.size || 20, color: this.props.color || "#323232" }} />
    }
}
