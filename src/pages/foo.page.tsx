import Link from 'next/link'
import { NextRouter, withRouter } from 'next/router'
import React, { Component } from 'react'

interface WithRouterProps {
    router: NextRouter
}

interface MyComponentProps extends WithRouterProps { }

class Foo extends Component<MyComponentProps> {
    render() {
        console.log(this.props)
        return (
            <div>
                <Link href="/">
                    <a>Index</a>
                </Link>
            </div>
        )
    }
}

export default withRouter(Foo)
