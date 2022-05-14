import { Box } from '@mui/system';
import SiteFooter from 'components/layout/site/footer';
import SiteHeader from 'components/layout/site/header';
import MainLayout from "index";
import { Layout } from 'kernel/utils/interfaces';
import React, { Component, Fragment } from 'react';

class SiteLayout extends Component<Layout>  {
    render() {
        return (
            <MainLayout>
                <Fragment>
                    <Box pr={'170px'} pl={'170px'} className="site_layout_header_wrapper">
                        <SiteHeader />
                    </Box>
                    <Box pr={'170px'} pl={'170px'}>
                        {this.props.children}
                    </Box>
                    <Box pr={'170px'} pl={'170px'}>
                        <SiteFooter />
                    </Box>
                </Fragment>
            </MainLayout>
        )
    }
}

export default SiteLayout;
