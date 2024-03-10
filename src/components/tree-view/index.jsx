import React from 'react'
import MenuList from './MenuList'
import './styles.css';

function TreeView({menus = []}) {
  return (
    <div className='tree-view-container'>
        <MenuList list={menus}/>
    </div>
  )
}

export default TreeView