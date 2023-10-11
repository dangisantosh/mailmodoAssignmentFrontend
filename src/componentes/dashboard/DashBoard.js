import React from 'react';
import ReactJson from 'react-json-view';
import axios from 'axios';

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
  const [error1, setError1] = useState(null)
  const [data, setData] = useState([]);
 
  
  const queryStringify = (str)=>{
    const regex = /\$[A-Za-z_][A-Za-z0-9_]*:/g;
    if(str.match(regex))
      return str.replaceAll(regex, '"'+str.match(regex)[0].slice(0,str.match(regex)[0].length - 1)+'":');
    else return str;
}
  
  const handlePlayButtonClick = async () => {
    let query = document.getElementById('w3review').value;
    let query1;
    // console.log(query)
    if(!query || query?.length === 0){
      alert("Invalid Query")
    }
    try {
     query1 = queryStringify(query)
    } catch (error) {
      alert("Invalid Query")
    }
    
    if(!query1){
      alert("Invalid Query")
    }
    // const queryJSONString = JSON.string( query);
    try {
      const response = await axios.post(`https://frantic-clam-sweatsuit.cyclic.app/api/database/mongodb`,  {query: query1}   );
      const responseData = response.data;
      // const dataArray = Array.isArray(responseData) ? responseData : [responseData];
      console.log(responseData)
      setData(responseData);
      if(response.success === "false"){
        setError1(response.message)
      } // Set the data in your state
    } catch (error) {
      console.error('Error sending data to the backend:', error);
      alert("Invalid Request")
      setShowRaw(null);
      setShowItems(true);
      setData([]);
      
      
    }
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
  
  const sample = 
  {
    "_id": {
      "$oid": "6525c12bc5a4a83f0ea2c2c2"
    },
    "name": "Spider-Man 3",
    "leadStudio": "Sony",
    "rating": 61,
    "story": "Metamorphosis",
    "genre": "Action",
    "budget": "258",
    "profit": "58.57",
    "year": 2007
  }
  return (
    <>
        <div className='navbar'>
          <button className='play_btn' title="Play"onClick={handlePlayButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play" viewBox="0 0 14 16">
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
            </svg>
          </button>

        </div>
        
        <div className='top_section'>
        <form action="">
         
          <textarea type="JSON" className="input_field" id="w3review" name="w3review" ></textarea>
          
          
        </form>
        <div className='sample_doc'>
            <div className='sample_heading'>
              <h3>Sample Doc</h3>
            </div>
            <div className='inner_sample_doc'>
             
            
            <ReactJson src={sample} />
            </div>
          
          </div>
        </div>
        <div className='middle_section'>
            
           <button className='btn' onClick={handleShowItems} title='Data'>Items
              
           </button>
           <button className='btn' onClick={handleShowRaw} title='Raw Data'>Raw</button>
           <button className='btn' onClick={handleShowError} title='Error log'>Error</button>
        </div>
        <div className='bottom_section'>
          <div>
            {showItems && (
            <Items
              data={data}
              onItemClick={(_id, name) => {
                setSelectedItem({ _id });
              }}
            />)}
            {showError && <Error data = {error1}/>}
            {showRaw && <Raw data={data}/>}
          </div>
          <div style={{heigt: "40vh", width:"0.5%", backgroundColor:"black"}}></div>
          <div >
            <h3 style={{marginBottom:"5px"}}>JSON View of Data</h3>
          {selectedItem && (
            <ReactJson src={selectedItem} />
          )}
          </div>
        </div>
        
    </>
  )
}

export default DashBoard
