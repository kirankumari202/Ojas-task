import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import HeaderAccount from './HeaderAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function header() {
  return (
    <div className='header'>
	<div className='header_left'>
		<div className='header_logo'>
			<img src="https://cdn-icons-png.flaticon.com/128/733/733579.png"/>

		</div>
		<div className='header_search'>
			<SearchIcon />
                        <input type='text' placeholder='Explore'/>
		</div>
	</div>
	<div className='header_right'>
		<HeaderAccount Icon={AccountCircleIcon} title="Kiran Kumari" />
		

	</div>

      
    </div>
  )
}

export default header
