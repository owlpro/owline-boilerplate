import { Box, Button, FormControl, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import FontAwesomeIcon from 'components/FontAwesomeIcon';
import { languages } from 'kernel/redux/main/data';
import { Language } from 'kernel/redux/main/interfaces';
import { set_language } from "kernel/redux/main/slice";
import { RootState } from 'kernel/redux/storage';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

interface SiteHeaderInterface {
    set_language: Function,
    language: Language
}

class SiteHeader extends PureComponent<SiteHeaderInterface> {

    state = {}

    onChangeLanguage = (event: SelectChangeEvent): void => {
        this.props.set_language(event.target.value)
    }

    render() {
        console.log("RENDER [SITE HEADER]", this.props)
        return (
            <Box mt={3} mb={3}>
                <Grid container>
                    <Grid item xs={2}>
                        <Typography fontSize={'31px'} fontWeight={600}>
                            eTriza
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Box display="flex" alignItems="center" justifyContent={"flex-end"}>
                            <Box mr={1}>
                                <Button variant="outlined" color="inherit">
                                    <Typography pt={'3px'}>
                                        IRT
                                    </Typography>
                                </Button>
                            </Box>
                            <Box mr={1}>
                                <Button variant="outlined" color="inherit">
                                    <Typography pt={'3px'} mr={1}>Reception Check</Typography>
                                    <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                </Button>
                            </Box>
                            <Box>
                                <Button variant="contained" color="primary" disableElevation>
                                    <Typography pt={'3px'} mr={1}>Login/Register</Typography>
                                    <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" color="#fff" />
                                </Button>
                            </Box>
                            <Box>
                                <FormControl sx={{ m: 1, minWidth: 68 }} size="small">
                                    <Select
                                        value={this.props.language.key}
                                        onChange={this.onChangeLanguage}
                                    >
                                        {languages.map((language, index) => (
                                            <MenuItem value={language.key} key={index}>{language.title}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    language: state.main.language
})
const mapDispatchToProps = { set_language }

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader);
