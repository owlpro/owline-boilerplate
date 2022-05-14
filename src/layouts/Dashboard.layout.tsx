import MainLayout from "index";
import { Layout } from 'kernel/utils/interfaces';
import React, { Component, Fragment } from 'react';

class DashboardLayout extends Component<Layout>  {
    render() {
        return (
            <MainLayout>
                <Fragment>
                    <div>DashboardLayout</div>
                    {this.props.children}
                </Fragment>
            </MainLayout>
        )
    }
}

export default DashboardLayout;
