import React, {useState} from 'react';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import UploadIcon from '@mui/icons-material/Upload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "./css/feed.css"
import Post from './Post';




function Feed() {

	const [input, setInput] = useState();
        const submitPost=(e)=>{
		e.preventDefault();
		

}
  return (
    <div className='feed'>
	< div className='feed_input'>
	<div div className='feed_form'>
		<form onSubmit={submitPost}>
			<input type='text' placeholder='Create New Post' value={input} onChange={e=>setInput(e.target.value)}/>
			<input type='submit'/>
		</form>
	</div>
	<div className='feed_options'>
		<div className='option'>
			<PhotoSizeSelectActualIcon style={{color:'lightgreen'}}/>
			<span>Photo</span>
			 
		</div>
		<div className='option'>
			<PlayCircleIcon style={{color:'lightblue'}}/>
			<span>Video</span>
			 
		</div>
		<div className='option'>
			<UploadIcon style={{color:'red'}}/>
			<span>Attachment</span>
			 
		</div>
		<div className='option'>
			<CalendarMonthIcon style={{color:'yellow'}}/>
			<span>Schedule</span>
			 
		</div>
		</div>
	</div>
	<Post name="Kiran Kumari" description="@web developer" message=" this is kiran message" photourl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCH4nTux2uaR7vzoaMFF4QCvYG7Pw4a9Xhg&usqp=CAU"/>
	
      
    </div>
  )
}

export default Feed

