import React from 'react'

const Menu = ( {title, menuObject} ) => {

  return (
    <div className='menuContainer'>
        <p className='title'>{title}</p>
        <ul>
            {
                menuObject && menuObject.map( menu => (
                    <li key={menu.id}>
                        <a href='#'>
                          <i>{menu.icon}</i>
                          <span>{menu.name}</span>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu
