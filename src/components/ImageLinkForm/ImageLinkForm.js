import React from 'react';
import './ImageLinkForm.css'





const ImageLinkForm = ({onInputCahnege , onButtonSubmit}) => { //pure function 
    return (
        <div>
       <p className='f3'>  {/* we add center in app.css */}
        {'THis Magic Brain will detact faces in your pictures , Git it a try '}
        </p> 
        <div className='center'> 
            <div className='form center pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type= 'tex' onChange={onInputCahnege}/>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}>Detect</button>
            </div>   
       </div>
        </div>
    );
}







export default ImageLinkForm;