import { Box } from '@mui/system';
import SiteFooter from 'components/site/layout/footer';
import SiteHeader from 'components/site/layout/header';
import { Layout } from 'kernel/utils/interfaces';
import React, { Component, Fragment } from 'react';

class SiteLayout extends Component<Layout>  {
    render() {
        return (
            <Fragment>
                <Box pr={'170px'} pl={'170px'}>
                    <SiteHeader />
                    <div>Site.layout</div>
                    {this.props.children}
                    <SiteFooter />
                </Box>
            </Fragment>
        )
    }
}

export default SiteLayout;
