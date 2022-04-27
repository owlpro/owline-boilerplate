import { Character } from 'kernel/redux/characters/interfaces';
import React, { Component, ReactNode } from 'react';


class CharacterItem extends Component<Character> {

    componentDidMount() {
        console.log(this.props)
    }

    render(): ReactNode {
        return (
            <div>{this.props.name}</div>
        )
    }
}
export default CharacterItem;
