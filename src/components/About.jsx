import '../styles.css/about.css'
const About=()=>{
    return(
        <div className="section " id="about">
        <div className="container">
          <div className="card " data-aos="fade-up" data-aos-offset="10">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">About</div>
                  <p>¡hello! My name is Carlos Mario </p>
                  <p>System engineer, with an emphasis on software development, databases and machine learning, I have skills to work both in a team and individually, I am characterized by being self-taught and constantly learning.
                  </p>
                  <p>
                    Student at <a className="credit" href="https://platzi.com/p/NasayoCarlos/"
                      target="_blank">Platzi</a></p>
                 
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card-body ">
                  <div className="h4 mt-0 title">Basic Information</div>
                  <div className="row">
                    <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                    <div className="col-sm-8">25</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                    <div className="col-sm-8">carlosnasayov@gmail.com</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Location:</strong></div>
                    <div className="col-sm-8">Popayán/Cali, Colombia</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Languages:</strong></div>
                    <div className="col-sm-8">Spanish, English</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default About;