import MainLayout from "index";
import { Layout } from 'kernel/utils/interfaces';
import { Component, Fragment } from 'react';

class SiteLayout extends Component<Layout>  {
    render() {
        return (
            <MainLayout>
                <Fragment>
                    harchi inja bezaram miad to hame page haye site
                    {this.props.children}
                </Fragment>
            </MainLayout>
        )
    }
}

export default SiteLayout;
