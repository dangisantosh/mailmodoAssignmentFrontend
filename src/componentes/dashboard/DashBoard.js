import React from 'react';
import ReactJson from 'react-json-view'
import Items  from '../Items/Items';
import { useState  } from 'react';
import "./dashBoard.css"
import Error from '../Error/Error';
import Raw from '../Raw/Raw';
const DashBoard = () => {
  const [showItems, setShowItems] = useState(true);
  const [showRaw, setShowRaw] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [data, setData] = useState([]);
 
 
  

  const handlePlayButtonClick = ()=>{
    const newData = [
      {
        id: "5555",
        name: "New Item 1",
        partitionKey: "newKey1",
        data: "Data for item 1",
      },
      {
        id: "6666",
        name: "New Item 2",
        partitionKey: "newKey2",
        data: "Data for item 2",
      },
      // Add more data entries as needed
    ];
  
    setData(newData);
  }

  const handleShowItems = () => {
    setShowItems(true);
    setShowRaw(false);
    setShowError(false);
  }
  const handleShowRaw = ()=>{
    setShowRaw(true);
    setShowError(false);
    setShowItems(false);
  }
  const handleShowError = ()=>{
    setShowError(true);
    setShowItems(false);
    setShowRaw(false);
  }

  return (
    <>
        <div className='navbar'>
          <button className='play_btn'onClick={handlePlayButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play" viewBox="0 0 14 16">
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
            </svg>
          </button>
        
        </div>
        <div className=''>
        <form action="">
         
          <textarea className="input_field" id="w3review" name="w3review" ></textarea>
          
          
        </form>
        </div>
        <div className='middle_section'>
           <button className='btn' onClick={handleShowItems}>Items</button>
           <button className='btn' onClick={handleShowRaw}>Raw</button>
           <button className='btn' onClick={handleShowError}>Error</button>
        </div>
        <div className='bottom_section'>
          <div>
            {showItems && (
            <Items
              data={data}
              onItemClick={(id, partitionKey) => {
                setSelectedItem({ id, partitionKey });
              }}
            />)}
            {showError && <Error/>}
            {showRaw && <Raw/>}
          </div>
          <div style={{heigt: "40vh", width:"0.5%", backgroundColor:"black"}}></div>
          <div >
          {selectedItem && (
            <ReactJson src={selectedItem} />
          )}
          </div>
        </div>
        
    </>
  )
}

export default DashBoard
