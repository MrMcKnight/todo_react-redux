import {ADD_ITEM,REMOVE_ITEM,EDIT_ITEM,EDIT_STATUS} from './actionTypes'

export function setEdit(edit) 
{
    return{
    type:EDIT_STATUS,
    payload:edit
    }
}

export function addItem(title)
{
    return{
        type:ADD_ITEM,
        payload:title
            }
}
export function removeItem (id) {
    return {
      type: REMOVE_ITEM,
      payload: id,
    }}
export function editItem (id,title)
{
    return{
        type:EDIT_ITEM,
        payload:{title,id}
    }
}