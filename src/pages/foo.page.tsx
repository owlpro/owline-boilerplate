import { wrapper } from 'kernel/redux/storage'
import React, { Component } from 'react'

export default class Foo extends Component {
    render() {
        return (
            <div>foo.page</div>
        )
    }
}

export const getServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async () => {
    // console.log('here', e)
    // const res = await axios.get(`https://rickandmortyapi.com/api/character`)
    //   const data = res

    // const response = await dispatch(getCharactersAsync())

    return {
        props: {
            // ssr: {
            //     characters: response.payload?.results,
            // }
        }
    }
})
