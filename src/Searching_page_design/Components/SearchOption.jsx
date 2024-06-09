import React from 'react'
import './SearchOption.css'
const SearchOption = () => {
  return (
    <div>
        <h2 className="heading">Search your desire mass according to price ,place and facility</h2>
        
        <section className="search_section">
           
              <form id="searchForm">
                   <div className="row">
                   <div className="col-s-6 col-3">
                   <select id="priceInput">
                       <option value="">Select Price</option>
                       <option value="500-700">500-700</option>
                       <option value="700-1000">700-1000</option>
                       <option value="1000-1100">1000-1100</option>
                       <option value="1100-1200">1100-1200</option>
                       <option value="1200-1300">1200-1300</option>
                   </select>
                   </div>
              
                   <div className="col-s-6 col-3">
                   <select id="placeInput" >
                       <option value="">Select Place</option>
                       <option value="Binodpur">Binodpur</option>
                       <option value="Kajla">Kajla</option>
                       <option value="Mondoler mor">Mondoler mor</option>
                       <option value="Amjader Mor">Amjader Mor</option>
                       <option value="Bazar">Bazar</option>
                   </select>
                   </div>
              
                   <div className="col-s-6 col-3">
                   <select id="facilitySelect">
                       <option value="">Select Facility</option>
                       <option value="wifi">Bazar Korte Hobe</option>
                       <option value="parking">Parking</option>
                       <option value="kitchen">Kitchen</option>
                       <option value="Fresh water">Kitchen</option>
                   </select>
                   </div>
              
                   <div className="col-s-6 col-3">
                   <select id="BookingDate">
                       <option value="">Select Month</option>
                       <option value="January">January</option>
                       <option value="February">February</option>
                       <option value="March">March</option>
                       <option value="April">April</option>
                       <option value="May">May</option>
                       <option value="June">June</option>
                       <option value="July">July</option>
                       <option value="August">August</option>
                       <option value="Septembar">Septembar</option>
                       <option value="Octobar">Octobar</option>
                       <option value="November">November</option>
                       <option value="December">December</option>
                   </select>
                   </div>
                   </div>
               </form>
              
               <div className="search row">
                   <input type="submit" value="Search"></input>
               </div>
   
               <div className="results row" id="results">
                   {/* <!-- Hostel results will be displayed here --> */}
              </div>
      </section>
      <section className="display_section row">
        {/* <!-- <img src="images/5star-1.jpg"> --> */}
      </section>
    </div>
  )
}

export default SearchOption;
