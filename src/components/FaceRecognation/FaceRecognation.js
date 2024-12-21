import React from 'react';




const FaceRecognation = ({imageUrl}) => { //pure function
    return (
      <div className='center'>
        <div className='absolute mt2'>
        <img alt='' src={imageUrl} width='500px' height='auto'/>

</div>



       </div>
    );
}







export default FaceRecognation;