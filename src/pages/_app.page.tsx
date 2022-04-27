import { RouterProps } from "kernel/utils/interfaces";
import "kernel/prototypes/array";
import "kernel/prototypes/number";
import "kernel/prototypes/object";
import "kernel/prototypes/string";
import { NextComponentType } from "next";
import React, { Component, Fragment } from 'react';
import { wrapper } from '../kernel/redux/storage';

interface AppProps extends RouterProps {
    pageProps: any,
    Component: NextComponentType
    err: any
}

class App extends Component<AppProps> {

    public render() {
        console.log(this.props)
        const { Component, pageProps, ...props } = this.props;
        return (
            <Fragment>
                <Component {...pageProps} {...props} />
            </Fragment>
        )
    }
}

export default wrapper.withRedux(App);
