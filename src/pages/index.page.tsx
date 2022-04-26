import { PayloadAction } from '@reduxjs/toolkit'
import CharacterItem from 'components/CharacterItem'
import { RouterProps } from 'kernel/utils/interfaces'
import { getCharactersAsync } from 'kernel/redux/characters/api'
import { Character, CharacterSuccessResponse } from 'kernel/redux/characters/interfaces'
import { AppDispatch, RootState, wrapper } from 'kernel/redux/storage'
import Link from 'next/link'
import React, { Component } from 'react'
import { connect } from 'react-redux'

interface IndexPageInterface extends RouterProps {
    get_characters: Function,
    character_data: Character[],
    character_process: boolean,
    ssr?: {
        characters?: Character[]
    }
}

class Index extends Component<IndexPageInterface> {


    componentDidMount() {
        // this.props.get_characters()
    }

    getCharacters = () => {
        const output = this.props.get_characters()
        output.then((e: PayloadAction<CharacterSuccessResponse>) => console.log("TRUE", e)).catch((e) => console.log(e))
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {/* {this.props.ssr.characters.map((character, index) => (
                    <CharacterItem key={index} {...character} />
                ))} */}
                {/* <div>resolvedUrl {this.props.character.get.process ? 'true' : 'false'}</div> */}
                <Link href="/foo">
                    <a>Foo</a>
                </Link>
                <button onClick={this.getCharacters}>GET CHARACTERS</button>
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
            // ssr: {
            //     characters: response.payload?.results,
            // }
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
// export default Index;
