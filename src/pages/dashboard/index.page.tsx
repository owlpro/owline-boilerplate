import Link from 'next/link'
import React, { Component, Fragment } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <div>Dashboard.page</div>
                <Link href={"/auth"}>
                    AUTH
                </Link>
            </Fragment>
        )
    }
}

