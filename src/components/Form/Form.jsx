import React from 'react';
import 'bulma/css/bulma.css';

const FormDemo = () => (
  <div className="FormContainer">
    <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter your Name"
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            required
            role="email-input"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Question</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Enter your question"
            required></textarea>
        </div>
      </div>

      <div className="control">
        <button className="button is-primary" style={{ marginTop: '10px' }}
        role="submit-button">
        


          Send
        </button>
      </div>
    </form>
  </div>
);

export default FormDemo;
