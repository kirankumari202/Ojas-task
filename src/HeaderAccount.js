import React from 'react'

function HeaderAccount({Icon, title}) {
  return (
    <div className='header_options'>
	<Icon></Icon>
	<span>{title}</span>
      
    </div>
  )
}

export default HeaderAccount
