import React from 'react'
import { connect } from 'react-redux'
import './item.scss'



const Item=({itemValue,removeItem,editItem,edit})=>
(
    <div className='item'>
        
       
        {edit?
        <label className="item__label-edit">
            <span onClick={removeItem} className="item-delete"/>
            <span onClick={editItem} className='item__title'>{itemValue}</span>
        </label>
        :
        <label className="item__label">
            <input type="checkbox"/>
            <span className='item__title'>{itemValue}</span>
        </label>
    }
            
    </div>
)

const mapStateToProps = ({items}) =>({...items})

export default connect(mapStateToProps)(Item)



// {edit?
//     <label className="item__label-edit">
//     <span onClick={onClick} className="item-delete"/>
//     <span  className='item__title'>{itemValue}</span>
//     </label>
//     :
//     <label className="item__label">
//     <input  type="checkbox"/>
//     <span  className='item__title'>{itemValue}</span>
//     </label>
//     }


//  <label className={edit  ?  "item__label-edit"  :  "item__label"}>
//     {edit
//     ?
//     <span onClick={removeItem} className="item-delete"/>
//     :
//     <input type="checkbox"/>
//     }
//     <span onClick={}  className='item__title'>{itemValue}</span>
// </label> 