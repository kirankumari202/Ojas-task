import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
	<div className='sidebar_profile'>
		<img src='https://wallpapers.com/images/featured/plain-blue-dmlktw5iuzdjvb7j.jpg' />
		<div className='profile_details'>
			<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU"/>
			<h4>Kiran Kumari</h4>
			<p>@testing</p>
		</div>
		<div>
		<div className='profile_status'>
		
	               <span className='status_number'>3</span><br></br>
			<span>Following</span>
			
		</div>
		<div className='profile_status'>
		
	               <span className='status_number'>0</span><br></br>
			<span>Followers</span>
			
		</div>
		</div>
		<div>
			<span className='new'>Find new people</span>
		</div>
	</div>
      
    </div>
  )
}

export default Sidebar
