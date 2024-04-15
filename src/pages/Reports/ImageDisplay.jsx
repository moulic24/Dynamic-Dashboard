import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import tml from '../../images/tml-dark.png';

function ImageDisplay() {
    const { a } = useParams();
    const navigate =useNavigate();

    const imageurl=`http://localhost:5000/images/${localStorage.token}/${a}`
    
    console.log(imageurl)

    const downloadImage = () => {
        window.open(`http://localhost:5000/download/${localStorage.token}/${a}`, '_self');
      };
      



  return (
    <>
      <div style={{backgroundColor:'#1B254B',height:'100vh',padding:'30px'}}>
        <img src={tml} alt='tml' style={{height:'60px',width:'80px',cursor:'pointer'}} onClick={()=>navigate('/reports')} />
        <div className='image-btn'>
            <img src={imageurl} alt='stud'  className='stud_img'/>
            <button className='download-btn' onClick={downloadImage} >Download</button>
        </div>
      </div>
    </>
  )
}

export default ImageDisplay
