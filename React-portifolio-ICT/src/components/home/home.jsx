import './style.css'

function Home() {

  return <>
    <div className="hero" id="about">
      <div className="row py-3">
        <div className="col-sm-12 col-md-8 col-lg-9">
          <h2>Hi there,</h2> 
          <h2>Welcome to my portfolio site.</h2>
          <br></br>
          <p className="about fs-4 mb-4">I'm passionate about technology and have used it to automate repetitive tasks, speed up daily
            activities, and support decision-makers. Apart from web developer my background also includes data analytics,
            data science, and six sigma project coordination.</p>
        </div>
        <div className="d-flex justify-content-center text-center col-sm-12 col-md-4 col-lg-3">
          <img src="./src/assets/Igor.jpg" alt="Igor picture"></img>
        </div>
      </div>
    </div>
</>
}

export default Home;