import '../styles.css/experience.css'
const Experience=()=>{
    return(
        <>
        <div className="section" id="experience">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Work Experience</div>
          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-experience-header">
                  <p>February 2020 - Present</p>
                  <div className="h5">Unicomfacauca</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">Associate Specialist</div>
                  <p>Citrix ADC configuration and troubleshooting in platforms of high volume users/traffic. Support
                    with the manufacturer in English and Spanish.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-experience-header">
                  <p>November 2021 - February 2022</p>
                  <div className="h5">Unicomfacauca</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">Software Tester </div>
                  <p>Training in Portfolio of IT services,
                    support in surveying requirements. Site visits in
                    customer headquarters. Develop technical and
                    economic offers.</p>
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