import { Box } from '@mui/material'
import FinderWidget from 'widgets/finder.widget'
import { AppDispatch, RootState } from 'kernel/redux/storage'
import { RouterProps } from 'kernel/utils/interfaces'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { set_get_process } from 'kernel/redux/characters/slice'
import { Character } from 'kernel/redux/characters/interfaces'

interface IndexPageInterface extends RouterProps {
    set_get_process: Function,
    data: Character[]
}

class Index extends Component<IndexPageInterface> {

    componentDidMount() {
        this.props.set_get_process()
    }

    render() {
        console.log(this.props.data)
        return (
            <Box>
                {this.props.data.map((character, index) => (
                    <div key={index}>
                        {character.id}: {character.gender}
                    </div>
                ))}
            </Box>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    data: state.character.get.data
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    set_get_process: () => dispatch(set_get_process())
})



export default connect(mapStateToProps, mapDispatchToProps)(Index)
// export default Index;
