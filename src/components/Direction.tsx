import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Box, Direction as DirectionType } from "@mui/material";
import { Layout } from 'kernel/utils/interfaces';
import { PureComponent } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

interface DirectionInterface extends Layout {
    dir: DirectionType
}

export class Direction extends PureComponent<DirectionInterface>  {
    render() {
        return (
            <Box dir={this.props.dir || 'ltr'}>
                {this.props.dir == "rtl" ? (
                    <CacheProvider value={cacheRtl}>{this.props.children}</CacheProvider>
                ) : this.props.children}
            </Box>
        );
    }
}