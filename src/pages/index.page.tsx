import { RouterProps } from 'interfaces/RouterProps'
import { Character, CharacterSuccessResponse } from 'kernel/redux/characters/interfaces'
import { getCharactersAsync } from 'kernel/redux/characters/slice'
import { AppDispatch, RootState, wrapper } from 'kernel/redux/storage'
import Link from 'next/link'
import React, { Component } from 'react'
import { connect } from 'react-redux'

interface IndexPageInterface extends RouterProps {
    get_characters: Function,
    character_data: Character[],
    character_process: boolean
}

class Index extends Component<IndexPageInterface> {


    componentDidMount() {
        // this.props.get_characters()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {/* {this.props.data.restules.map((character, index) => (
                    <CharacterItem key={index} {...character} />
                ))} */}
                <div>resolvedUrl {this.props.character.get.process ? 'true' : 'false'}</div>
                <Link href="/foo">
                    <a>Foo</a>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    ...state,
    character_data: state.character.get.data,
    character_process: state.character.get.process
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    get_characters: () => dispatch(getCharactersAsync()),
})

export const getServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async () => {
    // console.log('here', e)
    // const res = await axios.get(`https://rickandmortyapi.com/api/character`)
    //   const data = res

    const response = await dispatch(getCharactersAsync())

    return {
        props: {
            // character_data: response.payload.results,
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
// export default Index;
