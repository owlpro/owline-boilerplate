import "assets/icons/fontawesome6.1.1-pro/css/all.min.css";
import "kernel/prototypes/array";
import "kernel/prototypes/number";
import "kernel/prototypes/object";
import "kernel/prototypes/string";
import { RouterProps } from "kernel/utils/interfaces";
import AuthLayout from "layouts/Auth.layout";
import DashboardLayout from "layouts/Dashboard.layout";
import SiteLayout from "layouts/Site.layout";
import { NextComponentType } from "next";
import React, { Component, ElementType, Fragment } from 'react';
import { wrapper } from '../kernel/redux/storage';


interface AppProps extends RouterProps {
    pageProps: any,
    Component: NextComponentType
    err: any
}

class App extends Component<AppProps> {

    private getLayout = () => {
        const layouts: { [key: string]: ElementType } = {
            "/dashboard": DashboardLayout,
            "/auth": AuthLayout,
            "/": SiteLayout
        }
        for (const path in layouts) {
            if (this.props.router.pathname.startsWith(path)) {
                return layouts[path]
            }
        }

        return SiteLayout;

    }

    public render() {
        console.log(this.props.router.pathname.startsWith('/dashboard'))
        const Layout = this.getLayout();

        console.log(Layout)

        const { Component, pageProps, ...props } = this.props;
        return (
            <Fragment>
                <Layout>
                    <Component {...pageProps} {...props} />
                </Layout>
            </Fragment>
        )
    }
}

export default wrapper.withRedux(App);
