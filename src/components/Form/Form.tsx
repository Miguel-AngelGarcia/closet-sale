import React from "react";

const Form = () => {
  /*The for attribute of the <label> tag should be 
    equal to the id attribute of the <input> element to
    bind them together.*/

  return (
    <div>
      <form autoComplete="on" className="w-[300px]">
        <div className="form-group">
          <label htmlFor="f_organization">Organization:</label>
          <input
            id="f_organization"
            name="f_organization"
            type="text"
            autoComplete="organization"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="f_email">Email:</label>
          <input
            id="f_email"
            name="f_email"
            type="email"
            autoComplete="email"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="f_given_name">First Name:</label>
          <input
            id="f_given_name"
            name="f_given_name"
            type="text"
            autoComplete="given-name"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="f_family_name">Last Name:</label>
          <input
            id="f_family_name"
            name="f_family_name"
            type="text"
            autoComplete="family-name"
            required
          ></input>
        </div>

        <div className="form-group test">
          <input
            id="f_tel"
            name="f_tel"
            type="tel"
            autoComplete="tel"
            className="form-control"
            placeholder="tel"
            required
          ></input>
          <label htmlFor="f_tel" className="form-label">
            Telephone:
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
