import React, { Component } from "react";


class SponsoredEventForm extends Component {
  render() {
    return (
      <div className="container">
        <button className="back-button">&#8592;</button>
        <h2 className="title">
          Event Type : <span className="bold">Sponsored Event</span>
        </h2>
        <input type="text" placeholder="Event Name" className="input" />
        <select className="input">
          <option>Select Country</option>
        </select>
        <select className="input">
          <option>Select Scedule Type</option>
          <option>Create Into List</option>
          <option>Up Coming Event</option>
          <option>On-Going Event</option>
        </select>
        <select className="input">
          <option>Video</option>
        </select>
        <div className="image-upload">
          <p>Posters Display in Root</p>
          <div className="upload-box">Add Image</div>
        </div>
        <div className="image-upload">
          <p>Posters Display into Event</p>
          <div className="upload-box">Add Image</div>
        </div>
        <div className="date-range">
          <input type="datetime-local" className="input" />
          <span>To</span>
          <input type="datetime-local" className="input" />
        </div>
        <div className="image-upload">
          <p>Terms & Conditions</p>
          <div className="upload-box">Add Image</div>
        </div>
        <button className="create-button">Create Event</button>
        <button className="cancel-button">Cancel</button>
      </div>
    );
  }
}

export default SponsoredEventForm;
