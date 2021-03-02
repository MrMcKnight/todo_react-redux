import React from 'react'
import { connect } from 'react-redux'
import {removeItem,editItem,setEdit} from '../../actions/actions'
import Item from '../item/item'
import Button from '../button/button'
import ModalWindow from '../modal-window/modal-window'
import {showModalWindow,propsId,editItems, closeModalWindow } from '../features'


function TodoList({items,removeItem,editItem,setEdit,edit})
{
    let textArea = document.querySelector('.textarea')
    const openModalWindow = () =>
    {
        showModalWindow()
        setEdit(false)
    }
    
    
    return(
        <div className='todo-list'>
            {!items.length
            ?
            <div>Список задач пуст</div>
            :
            items.map((items, index)=>
                <Item 
                removeItem={ ()=>removeItem(items.title) } 
                // removeItem={ ()=>removeItem(items.id) } --Удаление по ID. При удалении по title удаляет одинаковые задачи???
                editItem={()=>{editItems(items.title, items.id)}}
                itemValue={items.title}
                key={index}/>
                )
            }
            <ModalWindow saveItem={()=>{editItem(propsId,{ title:textArea.value,id:propsId });closeModalWindow()}}/>
            <Button onClick={openModalWindow} className={'button button-create'}/>
        </div>
    )

}

const mapStateToProps=({items}) =>({...items})
const mapDispatchToProps={removeItem,editItem,setEdit}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)

// 