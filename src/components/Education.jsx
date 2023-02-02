import '../styles.css/education.css'
const Education=()=>{
    return(
        <>
        <div className="section" id="experience">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Education</div>
          <div className="card">
            <div className="row m-0">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-experience-header">
                  <p>2018 - 2022</p>
                  <div className="h5">CIAT</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">Software Developer</div>
                  <p className="category">Corporación Universitaria Comfacauca (Unicomfacauca)</p>
                  <p>Conducting a comprehensive analysis of the requirements, design, and development of advanced climatic systems for the International Center for Tropical Agriculture and its associates, creating both frontend and backend web applications, and providing support for the Climate services of the Alliance.</p>
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