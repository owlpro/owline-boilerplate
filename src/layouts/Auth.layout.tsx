import { Layout } from 'kernel/utils/interfaces';
import React, { Component, Fragment } from 'react';

class AuthLayout extends Component<Layout> {
    render() {
        return (
            <Fragment>
                <div>AuthLayout</div>
                {this.props.children}
            </Fragment>
        )
    }
}

export default AuthLayout;
