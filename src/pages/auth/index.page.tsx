import { RouterProps } from 'kernel/utils/interfaces'
import React, { Component } from 'react'

interface AuthIndexInterface extends RouterProps {
}

export default class Auth extends Component<AuthIndexInterface> {

    componentDidMount() {
        this.props.router.push(this.props.router.pathname + "/signin")
        // console.log("auth index", this.props.router.push('signin'))
    }

    render() {
        return (
            <div>index.page</div>
        )
    }
}
