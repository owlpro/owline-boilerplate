import { createTheme, ThemeProvider } from "@mui/material";
import { Direction } from "components/Direction";
import { Language } from "kernel/redux/main/interfaces";
import { RootState } from "kernel/redux/storage";
import { Layout } from "kernel/utils/interfaces";
import React, { Fragment, PureComponent } from 'react';
import { connect } from "react-redux";
// console.log(colors.primary)
const theme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: '#6200E8',
        },
    },
    typography: {
        fontFamily: "Roboto",
        button: {
            textTransform: 'none',
        }
    }
});

interface IndexLayout extends Layout {
    language: Language
}
/**
 * Base Layout
 * this layout used in all layouts
 */
class Index extends PureComponent<IndexLayout> {
    render() {
        return (
            <Fragment>
                <ThemeProvider theme={theme}>
                    <Direction dir={this.props.language.direction}>
                        {this.props.children}
                    </Direction>
                </ThemeProvider>
            </Fragment>
        )
    }
}


const mapStateToProps = (state: RootState) => ({
    language: state.main.language
})
export default connect(mapStateToProps)(Index);