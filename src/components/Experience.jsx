import '../styles.css/experience.css'
const Experience=()=>{
    return(
        <>
        <div className="section" id="experience">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Work Experience</div>
          <div className="card">
            <div className="row m-0">
              <div className="align-items-sm-center bg-primary col-md-3 d-flex prueba" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-experience-header">
                  <p>April 2022 - Present</p>
                  <div className="h5">CIAT</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">Software Developer</div>
                  <p>Conducting a comprehensive analysis of the requirements, design, and development of advanced climatic systems for the International Center for Tropical Agriculture and its associates, creating both frontend and backend web applications, and providing support for the Climate services of the Alliance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row m-0">
              <div className="align-items-sm-center bg-primary col-md-3 d-flex" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-experience-header">
                  <p>November 2021 - February 2022</p>
                  <div className="h5">Unicomfacauca</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">Software Tester </div>
                  <p>I conducted and documented frontend and backend tests for a coffee sales and export software, for a Colinnova (Colombia Innova) project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
        
        
    )
}
export default Experience;