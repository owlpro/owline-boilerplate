import MainLayout from "index";
import { Layout } from 'kernel/utils/interfaces';
import React, { Component, Fragment } from 'react';
class AuthLayout extends Component<Layout> {
    render() {
        return (
            <MainLayout>
                <Fragment>
                    <div>AuthLayout</div>
                    {this.props.children}
                </Fragment>
            </MainLayout>
        )
    }
}

export default AuthLayout;
