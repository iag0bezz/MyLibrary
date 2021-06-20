import { defineState } from 'redux-localstore'
import produce from 'immer'

const initialState = defineState([])('content')

export default function cart(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CONTENT':
            return produce(state, draft => {
                const { content } = action

                draft.push(content)
            })
        case 'REMOVE_CONTENT':
            return produce(state, draft => {
                const index = draft.findIndex(content => content.id === action.contentId)

                if(index >= 0) {
                    draft[index].deleted = true
                }
            })
        case 'UPDATE_CONTENT':
            return produce(state, draft => {
                const index = draft.findIndex(content => content.id === action.contentId)

                const { content } = action

                if(index >= 0) {
                    draft[index].title = content.title
                    draft[index].synopsis = content.synopsis
                    draft[index].categories = content.categories
                    draft[index].image_url = content.image_url
                    draft[index].favorite = content.favorite
                    draft[index].deleted = false
                    draft[index].rating = content.rating
                }
            })
        default:
            return state
    }
}