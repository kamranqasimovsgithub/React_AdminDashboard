import React from 'react'
import  './single.scss'
import Sidebar from  '../../components/sidebar/Sidebar'
import Navbar from  '../../components/navbar/Navbar'
import Chart from  '../../components/chart/Chart'
import List from  '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>     
      <div className="singleContainer">
        <Navbar/>       
        <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img 
                src="https://www.panopoulossalons.com/wp-content/uploads/2017/10/premium-david-style-classic-cut-3x4.jpg" 
                alt=""  
                className='itemImg'
                />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className='itemKey'>Email:</span>
                    <span className='itemValue'>johndoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Phone:</span>
                    <span className='itemValue'>+1 234 56 78 90</span>
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Adress:</span>
                    <span className='itemValue'>Elton street 24</span>
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Country:</span>
                    <span className='itemValue'>USA</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className="right">
              <Chart title="Last 6 months(Revenue)" aspect={ 3/ 1}  />
            </div>
          </div>
          <div className="bottom">            
            <h1 className="title">Last Transactions</h1>
            <List />
          </div>
        </div>
    </div>
)}

export default Single;