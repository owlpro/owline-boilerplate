import { Box, Button, Typography } from '@mui/material'
import FontAwesomeIcon from 'components/FontAwesomeIcon'
import React, { Component, Fragment } from 'react'

interface FinderWidgetInterface {

}

export default class FinderWidget extends Component<FinderWidgetInterface> {
    state = {}
    sections = [
        { value: 'hotel', label: 'Hotel', icon: <FontAwesomeIcon size={17} icon="fa-solid fa-bed" /> },
        { value: 'hotel', label: 'Hotel', icon: <FontAwesomeIcon size={17} icon="fa-solid fa-bed" /> },
        { value: 'hotel', label: 'Hotel', icon: <FontAwesomeIcon size={17} icon="fa-solid fa-bed" /> },
        { value: 'hotel', label: 'Hotel', icon: <FontAwesomeIcon size={17} icon="fa-solid fa-bed" /> },
    ]

    onSelectSection = (section: any) => () => {
        console.log(section)
    }

    render() {
        return (
            <Fragment>
                <Box>
                    {this.sections.map((section, key) => (
                        <Button variant="outlined" key={key} onClick={this.onSelectSection(section)}>
                            {section.icon}
                            <Typography ml={1}>{section.label}</Typography>
                        </Button>
                    ))}
                </Box>
            </Fragment>
        )
    }
}
