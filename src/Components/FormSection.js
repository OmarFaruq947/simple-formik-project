import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import MyTextInput from "./FromSlice/MyTextInput";

const FormSection = () => {
  return (
    <>
      <Formik

        initialValues={{
          fullName: '',
          phone: '',
          email: '',
          fax: '',
          StreetAddress: '',
          city: '',
          region: '',
          Postal: '',
          country: '',
          courseCode: '',
          date: '',
          location: '',
          subject: '',
          message: '',
        }}

        validationSchema={Yup.object({
          fullName: Yup.string().max(15, "Must be 15 characters or less").required('required'),
          phone: Yup.string()
            .max(11, "number is short must be 11 digit").required('required'),
          email: Yup.string().email("Invalid email address").required('required'),
          fax: Yup.string().required('required'),
          StreetAddress: Yup.string().required('required'),
          city: Yup.string().required('required'),
          region: Yup.string().required('required'),
          postal: Yup.number().required('required'),
          country: Yup.string().required('required'),
          courseCode: Yup.string().max(15, "Must be 15 characters"),
          date: Yup.date().nullable().min(new Date(1900, 0, 1)),
          location: Yup.string().required('required'),
          subject: Yup.string().required('required'),
          message: Yup.string().max(250, 'must be 250 character').required('required'),
        })}

        onSubmit={(values,{ setSubmitting }) => {
          console.log("hello")
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 40);
        }}
      >
        <Form name="contactForm">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">

                <MyTextInput
                  label="fullName"
                  name="fullName"
                  type="text"
                  placeholder="fullName"
                  className="form-control"
                />

              </div>
              <div className="form-group">

                <MyTextInput
                  label="phone"
                  name="phone"
                  type="number"
                  placeholder="Phone"
                  className="form-control"
                />

              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">

                <MyTextInput
                  label="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  className="form-control"
                />

              </div>
              <div className="form-group">

                <MyTextInput
                  label="fax"
                  name="fax"
                  type="text"
                  placeholder="fax"
                  className="form-control"
                />

              </div>
            </div>

            <div className="item">
              <p>Address</p>

              <MyTextInput
                label="StreetAddress"
                name="StreetAddress"
                type="text"
                className="form-control"
                placeholder="Street address"
              />

              <div className="row">
                <div className="col-md-6 form-group">

                  <MyTextInput
                    label="city"
                    name="city"
                    type="text"
                    className="form-control form-group"
                    placeholder="city"
                  />

                  <MyTextInput
                    label="region"
                    name="region"
                    type="text"
                    className="form-control form-group"
                    placeholder="region"
                  />

                </div>

                <div className="col-md-6 form-group">

                  <MyTextInput
                    label="Postal"
                    name="Postal"
                    type="text"
                    className="form-control form-group"
                    placeholder="Postal / Zip code"
                  />

                  <select>
                    <option
                      className="form-control"
                      label="country"
                      name="country"
                      type="text"
                    >
                      Country
                    </option>
                    <option value="1">Russia</option>
                    <option value="2">Germany</option>
                    <option value="3">France</option>
                    <option value="4">Armenia</option>
                    <option value="5">USA</option>
                  </select>

                </div>
              </div>
            </div>

            <p>Course Details</p>

            <div className="row">
              <div className="col-md-6">

                <MyTextInput
                  label="courseCode"
                  name="courseCode"
                  type="text"
                  className="form-control form-group"
                  placeholder="Course code"
                />

              </div>

              <div className="col-md-6">

                <MyTextInput
                  label="date"
                  name="date"
                  type="date"
                  className="form-control form-group"
                  placeholder="date"
                />

                <i className="fas fa-calendar-alt"></i>
              </div>
            </div>

            <div className="item">
              
              <MyTextInput
                label="location"
                name="location"
                type="text"
                placeholder="Location"
                className="form-control form-group"
              />

            </div>

            <div className="col-md-12">
              <div className="form-group">

                <MyTextInput
                  label="subject"
                  name="subject"
                  type="text"
                  placeholder="subject"
                  className="form-control form-group"
                />

              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">

                <MyTextInput
                  label="message"
                  name="message"
                  type="text"
                  placeholder="message"
                  className="form-control"
                  cols="20"
                  rows="3"
                ></MyTextInput>
                
              </div>
            </div>
            <div className="col-md-12 align-middle">
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FormSection;
