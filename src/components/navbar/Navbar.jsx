import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import image from './img/image.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            
          </div>
          <div className="item">
            <DarkModeIcon className='icon'/>
            
          </div>
          <div className="item">
            <FullscreenIcon className='icon'/>
            
          </div>
          <div className="item">
            <MarkChatUnreadIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon'/>            
            <div className="counter">2</div>
          
          </div>
          <div className="item">
            <img 
              src={image} 
              alt="" 
              className='avatar'
            />            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
