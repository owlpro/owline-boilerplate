import { Box } from '@mui/material'
import FinderWidget from 'widgets/finder.widget'
import { AppDispatch, RootState } from 'kernel/redux/storage'
import { RouterProps } from 'kernel/utils/interfaces'
import React, { Component } from 'react'
import { connect } from 'react-redux'

interface IndexPageInterface extends RouterProps {
}

class Index extends Component<IndexPageInterface> {


    render() {
        console.log(this.props)
        return (
            <Box>
                <FinderWidget />
            </Box>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
})



export default connect(mapStateToProps, mapDispatchToProps)(Index)
// export default Index;
