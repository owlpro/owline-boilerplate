import { Box, Button, FormControl, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import FontAwesomeIcon from 'components/FontAwesomeIcon';
import React, { PureComponent } from 'react';

interface SiteHeaderInterface { }

class SiteHeader extends PureComponent<SiteHeaderInterface> {

    state = {
        language: 'en'
    }

    onChangeLanguage = (event: SelectChangeEvent) => {
        this.setState({ ...this.state, language: event.target.value })
    }

    render() {
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
                                        value={this.state.language}
                                        onChange={this.onChangeLanguage}
                                    >
                                        <MenuItem value={'en'}>EN</MenuItem>
                                        <MenuItem value={'fa'}>FA</MenuItem>
                                        <MenuItem value={'ar'}>AR</MenuItem>
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

export default SiteHeader;
