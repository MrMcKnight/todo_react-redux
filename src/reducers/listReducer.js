import {ADD_ITEM, EDIT_ITEM, EDIT_STATUS, REMOVE_ITEM} from '../actions/actionTypes'
import initialState from '../store/initialState'
     
 
 export const listReducer= (state = initialState, action) =>
 {
     switch(action.type)
     {
        case ADD_ITEM:
            return{...state, items:[
                ...state.items,
                {title:action.payload, id:state.items.length+1}] } //При удалении первых элементов ID начинает повторяться???
        case REMOVE_ITEM:
            return {...state, items:state.items.filter(({title}) => title !== action.payload)}
            //return {items:state.items.filter(({id}) => id !== action.payload)} -- Удаление по ID

        case EDIT_STATUS:
            return {...state, edit:action.payload}

        case EDIT_ITEM:
            const itemIndex = state.items.findIndex(({id})=> id===action.payload.id)
            state.items[itemIndex] = action.payload.title
            return{...state, items:[...state.items]}

         default: return state
     }
 }
