import CharacterItem from 'components/CharacterItem'
import { RouterProps } from 'interfaces/RouterProps'
import { get_characters } from 'kernel/redux/characters/actions'
import { Character } from 'kernel/redux/characters/interfaces'
import { wrapper } from 'kernel/redux/storage'
import { State } from 'kernel/redux/types'
import Link from 'next/link'
import React, { Component } from 'react'
import { connect } from 'react-redux'

interface IndexPageInterface extends RouterProps {
    get_characters: Function,
    character_data: Character[],
    character_process: boolean
}

class Index extends Component<IndexPageInterface> {

    static getInitialProps = wrapper.getInitialPageProps(
        ({ dispatch }) =>
            async () => {
                await dispatch(get_characters());
            }
    );

    render() {
        console.log(this.props)
        return (
            <div>
                {/* {this.props.character_data.map((character, index) => (
                    <CharacterItem key={index} {...character} />
                ))} */}
                <Link href="/foo">
                    <a>Foo</a>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state: State) => ({
    character_data: state.character.get.data,
    character_process: state.character.get.process
})

const mapDispatchToProps = (dispatch: any) => ({
    get_characters: () => dispatch(get_characters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
// export default Index;
