import React from 'react'
import { connect } from 'react-redux'
import { setEdit } from '../../actions/actions'
import Button from '../button/button'
import './header.scss'

const Header=({setEdit, items, edit})=>
{
    const editTrue = () =>{setEdit(true)}
    const editFalse = () =>{setEdit(false)}

return(
        <header className='header'>
            <h2>Сегодня</h2>
                {!items.length  
                ?
                editFalse()  
                :
                <Button 
                onClick={edit ? editFalse : editTrue} 
                className='button button-edit' 
                buttonName={edit ? 'Отменить' : 'Править'}
                />
                }
        </header>
      )
}
const mapDispatchToProps = {setEdit}

const mapStateToProps=({items}) =>({...items})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
