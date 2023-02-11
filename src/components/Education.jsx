import '../styles.css/education.css'
const Education=()=>{
    return(
        <>
        <div className="section" id="education">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Education</div>
          <div className="card">
            <div className="row m-0">
              <div className="align-items-sm-center bg-primary col-md-3 d-flex" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-experience-header">
                  <p className='text-time'>2018 - 2022</p>
                  <div className="h5">Bachelor's Degree</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">System Engineer</div>
                  <p className="category">Corporación Universitaria Comfacauca (Unicomfacauca)</p>
                  <p>
                  The systems engineer at Unicomfacauca is skilled in problem-solving, has logical thinking abilities, and is capable of developing various types of applications, managing databases, and performing software analysis and architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Education;