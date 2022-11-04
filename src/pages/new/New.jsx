import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title}) => {
  const [file, setFile] = useState('');

  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file 
            ? URL.createObjectURL(file)
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/512px-Circle-icons-camera.svg.png"} /> 
            
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className='icon'/>
                </label>
                <input type="file" id="file"  style={{display: "none"}}
                  onChange={e=>setFile(e.target.files[0])} 
                />
              </div>
              
              
              {inputs.map((input)=>(
                <div className="formInput" key = {input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>    
              ))}
              <button>Send</button>
            </form>
            
          </div>
        </div>
      </div>      
    </div>
  )
}

export default New
