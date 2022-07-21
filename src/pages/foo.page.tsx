import { getCharactersAsync } from 'kernel/redux/characters/api'
import { CharacterSuccessResponse } from 'kernel/redux/characters/interfaces'
import { wrapper } from 'kernel/redux/storage'
import axios from 'kernel/utils/axios'
import React, { Component } from 'react'

export default class Foo extends Component {
    render() {
        console.log(this.props)
        return (
            <div>foo.page</div>
        )
    }
}

// export const getServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async () => {
//     // console.log('here', e)
//     // const res = await axios.get(`https://rickandmortyapi.com/api/character`)
//     //   const data = res

//     const response = await dispatch(getCharactersAsync())
//     const data = response.payload;
//     return {
//         props: {
//             ssr: {
//                 characters: data,
//             }
//         }
//     }
// })
