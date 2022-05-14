import "assets/icons/fontawesome6.1.1-pro/css/all.min.css";
import "assets/sass/loader.scss";
import "kernel/prototypes/array";
import "kernel/prototypes/number";
import "kernel/prototypes/object";
import "kernel/prototypes/string";
import { RouterProps } from "kernel/utils/interfaces";
import AuthLayout from "layouts/Auth.layout";
import DashboardLayout from "layouts/Dashboard.layout";
import SiteLayout from "layouts/Site.layout";
import { NextComponentType } from "next";
import React, { Component, ElementType } from 'react';
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
        const { Component, pageProps, ...props } = this.props;
        const Layout = this.getLayout();
        console.log("pageProps",props)
        return (
            <Layout>
                <Component {...pageProps} {...props} />
            </Layout>
        )
    }
}

export default wrapper.withRedux(App);
