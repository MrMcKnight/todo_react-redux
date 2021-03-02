import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../actions/actions'
import Button from '../button/button'
import { closeModalWindow  } from '../features'
import Textarea from '../textarea/textarea'
import './modal-window.scss'

const ModalWindow=({addItem,saveItem,edit})=>
{
    
    const addItems = () =>
    {
        let textArea = document.querySelector('.textarea')
        !textArea.value
        ?
        textArea.classList.add('textarea-error')
        :
        addItem(textArea.value)
        textArea.value=""
    }
return(
        <div className="modal-window">
            <Textarea/>
            <div className="modal-window__buttons">
                <Button onClick={closeModalWindow} className='button button-close' buttonName='Закрыть'/>
                <Button onClick={edit?saveItem:addItems} className='button button-add' buttonName={edit?'Сохранить':'Добавить'}/>
            </div>
        </div>
        
    )
}
const mapStateToProps=({items})=>({...items})
const mapDispatchToProps = {addItem}
export default connect(mapStateToProps,mapDispatchToProps)(ModalWindow)