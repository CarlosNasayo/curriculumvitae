import '../styles.css/Iimagecontainer.css'
const Imagecontainer=()=>{
   
    return(
        <>
         
        <div className='containerr' id='imagees'>
            
            <img className='photo' src={require('../assets/images/profile2.jpeg')} alt="" />
            <h2>Carlos Nasayó</h2>
            <h5>SYSTEM ENGINEER</h5>
            <h5>DEVELOPER</h5>
        </div>
        </>
       
    )
}
export default Imagecontainer;