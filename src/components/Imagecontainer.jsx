import '../styles.css/Iimagecontainer.css'
const Imagecontainer=()=>{
   
    return(
        <>
         
        <div className='containerr' id='imagees'>
            
            <img className='photo' src={require('../assets/images/profile.jpeg')} alt="" />
            <h2>Carlos Nasayó</h2>
            <h5>SYSTEMS ENGINEER</h5>
        </div>
        </>
       
    )
}
export default Imagecontainer;