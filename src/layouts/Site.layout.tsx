import { Layout } from 'kernel/utils/interfaces';
import React, { Component, Fragment } from 'react'

class SiteLayout extends Component<Layout>  {
    render() {
        return (
            <Fragment>
                <div>Site.layout</div>
                {this.props.children}
            </Fragment>
        )
    }
}

export default SiteLayout;
