import { Layout } from 'kernel/utils/interfaces';
import React, { Component, Fragment } from 'react'

class DashboardLayout extends Component<Layout>  {
    render() {
        return (
            <Fragment>
                <div>DashboardLayout</div>
                {this.props.children}
            </Fragment>
        )
    }
}

export default DashboardLayout;
