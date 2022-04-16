import "kernel/prototypes/array";
import "kernel/prototypes/number";
import "kernel/prototypes/object";
import "kernel/prototypes/string";
import { NextComponentType } from 'next';
import React, { Component, Fragment } from 'react';
import { Provider as ReduxProvider } from "react-redux";
import { RouterProps } from '../interfaces/RouterProps';
import { store, wrapper } from '../kernel/redux/storage';

interface AppProps extends RouterProps {
    pageProps: any,
    Component: NextComponentType
    err: any
}

class App extends Component<AppProps> {
    render() {
        const { Component, pageProps, ...props }: { Component: NextComponentType, pageProps: any } = this.props;
        return (
            <Fragment>
                <ReduxProvider store={store}>
                    <Component {...pageProps} {...props} />
                </ReduxProvider>
            </Fragment>
        )
    }
}

export default wrapper.withRedux(App);
