import './style.css'

function Contact() {

  return <>
    <div className="" id="contact">
      <div className="row align-items-center py-3">
        <div className="pt-5 text-start col-sm-12 col-md-12 col-lg-6">
          <p className="fs-4 label-cust">Get in touch...</p>
          <div className="mb-3">
            <label for="NameInput" className="form-label label-cust">Your Name</label>
            <input type="text" className="form-control" id="NameInput" placeholder="What's your name?"></input>
          </div>
          <div className="mb-3">
            <label for="emailInput" className="form-label label-cust">Your Email</label>
            <input type="email" className="form-control" id="emailInput" placeholder="What's your email?"></input>
          </div>
          <div className="mb-3">
            <label for="messageTextarea" className="form-label label-cust">Your Message</label>
            <textarea className="form-control" id="messageTextarea" rows="5"></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn bt-cust mb-3">Send</button>
          </div>
        </div>
        <div className="container-fluid fs-4 col-sm-12 col-md-12 col-lg-6">
          <br></br>
          <ul className="justify-content-center list-group list-group-horizontal list-unstyled">
            <li>
              <a href="https://www.linkedin.com/in/igor-chieppe-traspadini/?locale=en_US" target="_blank"
                rel='noreferrer noopener' role="button" aria-label="linkedin link">
                <img className="mx-2 me-4"
                  src="./src/assets/3116886_design_linkedin_material_business_connection_icon.png">
                </img>
              </a>
            </li>
            <li>
              <a href="https://github.com/IgorTraspadini" target="_blank" rel='noreferrer noopener' role="button"
                aria-label="github link">
                <img className="mx-2 me-4"
                  src="./src/assets/764974_github_media_social_square_icon.png">
                </img>
              </a>
            </li>
            <li>
              <a href="mailto: igorchieppe@hotmail.com" target="_blank" rel='noreferrer noopener' role="button"
                aria-label="link to email">
                <img class="mx-2 me-4"
                  src="./src/assets/email.png">
                </img>
              </a>
            </li>
            <li>
              <a class="nav-link" href="./src/assets/Igor_CV.pdf" target="_blank" rel='noreferrer noopener' role="button"
              aria-label="resume pdf">
                <img class="mx-2 me-4" width="50px"
                  src="./src/assets/CV.png">
                </img>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </>
}

export default Contact;