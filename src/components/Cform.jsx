import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Cform = () => {
  return (
    <div className=" container  flex flex-col items-center my-20 font-roboto ">
      <h1 className="text-4xl md:text-6xl font-black md:border-b-[16px] border-b-8 border-margin md:max-w-[368px] max-w-[220px]">
        Contact Form
      </h1>
      <Formik
        initialValues={{
          name: "",
          afterSchoolProgram: "",
          tripType: "round-trip",
          servicePeriod: "entire-school-year",
          startDate: "",
          serviceDays: [],
          pickUpTime: "3:00 PM",
          pickUpLocation: "After School Program",
          pickUpAddress: "",
          pickUpCity: "Sugar Land",
          dropOffTime: "",
          dropOffLocation: "",
          dropOffAddress: "",
          dropOffCity: "Sugar Land",
          phone: "",
          email: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          afterSchoolProgram: Yup.string().required("Required"),
          startDate: Yup.date()
            .min(new Date(), "Start date must be today or later")
            .required("Required"),
          serviceDays: Yup.array()
            .of(
              Yup.string().oneOf([
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
              ])
            )
            .required("Required"),
          pickUpTime: Yup.string().required("Required"),
          pickUpAddress: Yup.string().required("Required"),
          phone: Yup.string()
            .matches(
              /^\+?(\d{1,2}\s?1?\-?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/i,
              "Phone number is not valid"
            )
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="w-full mt-20  ">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Contact Name
                </label>
                <Field
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="afterSchoolProgram"
                >
                  After School Program Name
                </label>
                <Field
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="afterSchoolProgram"
                  type="text"
                  name="afterSchoolProgram"
                  placeholder="Enter After School Program Name"
                />
                <ErrorMessage
                  name="afterSchoolProgram"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="tripType"
                >
                  One Way or Round Trip
                </label>
                <Field
                  as="select"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="tripType"
                  name="tripType"
                >
                  <option value="round-trip">Round Trip</option>
                  <option value="one-way-morning">One Way (Morning)</option>
                  <option value="one-way-afternoon">One Way (Afternoon)</option>
                </Field>
              </div>
              
            </div>

            {/* 
            
            
            
            
            */}





            <div className="flex flex-wrap -mx-3 mb-6">
             
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="servicePeriod"
                >
                  Service Period
                </label>
                <Field
                  as="select"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="servicePeriod"
                  name="servicePeriod"
                >
                  <option value="entire-school-year">
                    Entire School Year (Current Month - May 2024)
                  </option>
                  <option value="fall-semester">
                    Fall Semester (August 2023 - December 2023)
                  </option>
                  <option value="spring-semester">
                    Spring Semester (January 2024 - May 2024)
                  </option>
                </Field>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="startDate"
                >
                  Start Date
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="startDate"
                  type="date"
                  name="startDate"
                />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="noofpassengers"
                >
                  # Of Passengers
                </label>
                <Field
                  as="select"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="passengerCount"
                  name="passengerCount"
                  defaultValue="01 passenger"
                >
                  <option value="1-passenger">1 passenger</option>
                  <option value="2-passenger">2 passenger</option>
                  <option value="3 passenger">3 passenger</option>
                  <option value="4 passenger">4 passenger</option>
                  <option value="5 passenger">5 passenger</option>
                  
                  
                </Field>
              </div>
            </div>

            <Field name="serviceDays">
              {({ field }) => (
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full  px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Service Days
                    </label>
                    <div className="lg:flex  items-center">
                      {[
                        "monday",
                        "tuesday",
                        "wednesday",
                        "thursday",
                        "friday",
                        "ALL(Monday-Friday",
                      ].map((day) => (
                        <div key={day} className="w-full ">
                          <input
                            type="checkbox"
                            id={day}
                            {...field}
                            value={day}
                            checked={field.value.includes(day)}
                            className="mr-2 leading-tight"
                          />
                          <label htmlFor={day} className="text-sm lg:text-base">
                            {day.charAt(0).toUpperCase() + day.slice(1)}
                          </label>
                        </div>
                      ))}
                    </div>
                    <ErrorMessage
                      name="serviceDays"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                </div>
              )}
            </Field>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="pickUpAddress"
                >
                  Pick Up Street Address
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="pickUpAddress"
                  type="text"
                  name="pickUpAddress"
                />
                <ErrorMessage
                  name="pickUpAddress"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="pickUpTime"
                >
                  Pick Up Time
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="pickUpTime"
                  type="time"
                  name="pickUpTime"
                  defaultValue="03/19/2024"
                />
                <ErrorMessage
                  name="pickUpTime"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="pickUpLocation"
                >
                  Pick Up Location
                </label>
                <Field
                  className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="pickUpLocation"
                  type="text"
                  name="pickUpLocation"
                />
                <ErrorMessage
                  name="pickUpLocation"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
            </div>

            {/* here */}

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="pickUpCity"
                >
                  Pick Up City
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="pickUpCity"
                  type="text"
                  name="pickUpCity"
                  defaultValue="Sugar Land"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="dropOffTime"
                >
                  Drop Off Time
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="dropOffTime"
                  type="time"
                  name="dropOffTime"
                />
                <ErrorMessage
                  name="dropOffTime"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="dropOffLocation"
                >
                  Drop Off Location
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="dropOffLocation"
                  type="text"
                  name="dropOffLocation"
                />
                <ErrorMessage
                  name="dropOffLocation"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="dropOffAddress"
                >
                  Drop Off Street Address
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="dropOffAddress"
                  type="text"
                  name="dropOffAddress"
                />
                <ErrorMessage
                  name="dropOffAddress"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="dropOffCity"
                >
                  Drop Off City
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="dropOffCity"
                  type="text"
                  name="dropOffCity"
                  defaultValue="Sugar Land"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="phone"
                  type="tel"
                  name="phone"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="w-full px-3">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Comments
                </label>
                <textarea
                  id="message"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between items-center flex-wrap   -mx-3 mb-2">
              <p className="px-6 text-slate-500">By clicking Submit you are agreeing that you have read and agree to our Terms of Service</p>
              <button
              className="mx-6 shadow bg-secondary hover:bg-secondary focus:shadow-outline-secondary focus:outline-none text-white font-bold py-2 px-6 rounded my-4"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
            </div>
           
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Cform;
