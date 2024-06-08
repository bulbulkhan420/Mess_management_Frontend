import './BackgroundImageMassInfo.css'
const BackgroundImageMassInfo = () => {
  return (
    <>
    <hr className='clear'/>
        <div className="row">
        <div className="col-9">
            <header className="heading-section">
            <div>
                    <button className="heading-btn">
                        Edit background
                    </button>
            </div>
            </header>
        </div>
        <div className="col-3">
            <section>
                <img className="profile-photo" src="C:\Users\HP\Desktop\Mess_management_Frontend\src\Mess_Profile_pages\images\food4.jpg"/>
            </section>
            <section className="profile">
              
                  <div className="profile_info">
                    <h1>Sokhina Villa</h1>
                    <h3>Total Available Seat : 30</h3>
                    <h3>Total Seat : 140</h3>
                  </div>
                  <div className="p-btn">
                    <button className="profile-btn">
                        Edit Profile
                    </button>
                  </div>
            </section>
        </div>
        </div>
        </>
  )
}

export default BackgroundImageMassInfo
