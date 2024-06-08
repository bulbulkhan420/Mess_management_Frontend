
import './MapAndContactUs.css'
const MapAndContactUs = () => {
  return (
    <div>
        {/* <!-- contact starts here  --> */}
        <section id="contact-section">                   
            <div className="row">
            <div className="col-7 col-s-7">
                        <iframe className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.945448178661!2d91.90112830144764!3d24.89984233395701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054aeedc809bb%3A0x60b5f614c843a3bf!2sTilagor%2C%20Sylhet%2C%20Bangladesh!5e0!3m2!1sen!2sfi!4v1603751552543!5m2!1sen!2sfi"
                            frameBorder="0" style={{border:0}} allowfullscreen="" aria-hidden="false"
                            tabIndex="0">
                         </iframe>
                   
            </div>      
                        <div className="contact-details col-5 col-s-5">
                            <h3>Contact Details</h3> <br/>

                            <div>
                                <h5>Mass Management System</h5>
                                <address>
                                    192 London Avenue,
                                    Binodpur Bazar,
                                    Rajshahi
                                </address> <br/>
                            </div>

                            <div>
                                <h5>Phone : </h5>
                                <p>+8801722888596</p><br/>
                            </div>
                            <div>
                                <h5>Opening hours :</h5>
                                <p>
                                    Tue-Sun: 5PM to 11PM <br/>
                                    Inc. Bank Holidays<br/>
                                    online in available 24/7.
                                </p>
                            </div>
                        </div>
            </div>
    </section>
    </div>
  )
}

export default MapAndContactUs
