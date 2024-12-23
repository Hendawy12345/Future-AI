import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter  className='text-white text-center text-lg-start text-muted  bg-dark text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-dark text-white'>
        <div className='me-5 d-none d-lg-block  bg-dark text-white'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className=' bg-dark text-white'>
          <a href='https://www.facebook.com/hasan.hendawy.3?locale=ar_AR'
          target='_blank' rel='noopener noreferrer'
          className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://wa.me/201228045976" className='me-4 text-reset'
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDBIcon fab icon="whatsapp" />
          </a>
          <a href='https://www.linkedin.com/in/hasan-hendawy-08431a254/' 
          target="_blank"
          rel="noopener noreferrer"
          className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/dashboard'
          target="_blank"
          rel="noopener noreferrer"
          className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=' bg-dark text-white'>
        <MDBContainer className='text-center text-md-start mt-5  bg-dark text-white'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                FUTURE AI
              </h6>
              <p>
              Future AI will revolutionize industries, enhance human capabilities, drive innovation, and solve global challenges with ethical and transformative applications.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Skills</h6>
              <p>
                  HTML5 & CSS 3
              </p>
              <p>
                 Bootstrap
              </p>
              <p>
              JavaScript 
              </p>

              <p>
                  React js
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
              <a href='https://www.facebook.com/hasan.hendawy.3?locale=ar_AR'
          target='_blank' rel='noopener noreferrer'
          className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
             FaceBook
          </a>
              </p>
              <p>
              <a href="https://wa.me/201228045976" className='me-4 text-reset'
            target="_blank"
            rel="noopener noreferrer"
          >

            <MDBIcon fab icon="whatsapp" /> WhatsApp
          </a>
              </p>
              <p>
              <a href='https://www.linkedin.com/in/hasan-hendawy-08431a254/' 
          target="_blank"
          rel="noopener noreferrer"
          className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" /> Linkedin
          </a>
              </p>
              <p>
              <a href='https://github.com/dashboard'
          target="_blank"
          rel="noopener noreferrer"
          className='me-4 text-reset'>
            <MDBIcon fab icon="github" /> Github
          </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Egypt, Zag 
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="text-reset"
                target="_blank"
                rel="noopener noreferrer"
              >
                hendawyhasan56@gmail.com
              </a>
              </p>
              <p>
                <a href="tel:+201025074003" className="text-reset">
                  <MDBIcon icon="phone" className="me-3" /> (+20) 102 507 4003
                </a>
              </p>
              <p>
                <a href="tel:+201228045976" className="text-reset">
                  <MDBIcon icon="phone" className="me-3" /> (+20) 122 804 5976
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}