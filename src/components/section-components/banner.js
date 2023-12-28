import React, { useState } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import "react-range-slider-input/dist/style.css";
import Range from "./Range";
import BasicSlider from "./BasicSlider";
import { useFormik } from "formik";
import RangeSlider from "react-range-slider-input";

const Banner = () => {
  let data = sectiondata.banner;
  const [values, setValue] = useState([0, 12000]);

  let formik = useFormik({
    initialValues: {
      Apartment: "",
      Location: "",
      SupLocation: "",
      Bedrooms: "",
      MinsSize: "",
      MaxsSize: "",
      range: values,
    },
    onSubmit: Search,
  });
  async function Search(values) {
    console.log(values);
  }

  return (
    <div className="banner-area jarallax">
      <BasicSlider />
      <div className="container slider-text">
        <div className="banner-inner-wrap">
          <div className="row">
            <div className="col-12">
              <div className="banner-inner">
                <h1 className="title pt-5">
                  {data.title1} <br /> {data.title2}
                </h1>
              </div>
            </div>
            <div className="col-12">
              <div className="banner-search-wrap">
                <ul className="nav nav-tabs rld-banner-tab">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs_1"
                    >
                      For Buy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs_2">
                      For Rent
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs_1">
                    <div className="car-dealer-form-inner">
                      <form
                        className="ltn__car-dealer-form-box row"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <select
                            className=" nice-select"
                            onChange={formik.handleChange}
                            id="Apartment"
                          >
                            <option value="Apartment" className="select-name">
                              Apartment
                            </option>
                            <option value="Co-op" className="select-name">
                              Co-op
                            </option>
                            <option value="Condo" className="select-name">
                              Condo
                            </option>
                            <option
                              value="Single Family Home"
                              className="select-name"
                            >
                              Single Family Home
                            </option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <select
                            className=" nice-select"
                            onChange={formik.handleChange}
                            id="Location"
                          >
                            <option value="Location" className="select-name">
                              Location
                            </option>
                            <option value="Cairo" className="select-name">
                              Cairo
                            </option>
                            <option value="North Coast" className="select-name">
                              North Coast
                            </option>
                            <option
                              value="Sharm Elsheikh"
                              className="select-name"
                            >
                              Sharm Elsheikh
                            </option>
                            <option value="Alexandria" className="select-name">
                              Alexandria
                            </option>
                            <option value="Giza" className="select-name">
                              Giza
                            </option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <select
                            className="nice-select"
                            onChange={formik.handleChange}
                            id="SupLocation"
                          >
                            <option
                              value="Sup Location"
                              className="select-name"
                            >
                              Sup Location
                            </option>
                            <option value="Bayonne" className="select-name">
                              Bayonne
                            </option>
                            <option value="Greenville" className="select-name">
                              Greenville
                            </option>
                            <option value="Manhattan" className="select-name">
                              Manhattan
                            </option>
                            <option value="Queens" className="select-name">
                              Queens
                            </option>
                            <option value="The Heights" className="select-name">
                              The Heights
                            </option>
                            <option
                              value="Upper East Side"
                              className="select-name"
                            >
                              Upper East Side
                            </option>
                            <option value="West Side" className="select-name">
                              West Side
                            </option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <select
                            className="nice-select"
                            onChange={formik.handleChange}
                            id="Bedrooms"
                          >
                            <option value="Bedrooms" className="select-name">
                              Bedrooms
                            </option>
                            <option value="1" className="select-name">
                              1
                            </option>
                            <option value="2" className="select-name">
                              2
                            </option>
                            <option value="3" className="select-name">
                              3
                            </option>
                            <option value="4" className="select-name">
                              4
                            </option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <input
                            className="form-banner"
                            onChange={formik.handleChange}
                            name="MinsSize"
                            id="MinsSize"
                            value={formik.values.MinsSize}
                            placeholder="Min size (in sqft)"
                          />
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <input
                            className="form-banner"
                            onChange={formik.handleChange}
                            name="MaxsSize"
                            id="MaxsSize"
                            value={formik.values.MaxSize}
                            placeholder="Max size (in sqft)"
                          />
                        </div>
                        <div className="col-lg-12 col-md-6">
                          <span className="text-dark">
                            {parseInt(values[0])} LE - {parseInt(values[1])} LE
                          </span>
                          <div className="div">
                            <RangeSlider
                              onInput={(e) => {
                                console.log(e);
                                setValue([e[0], e[1]]);
                              }}
                              id="range-slider-ab"
                              className="margin-lg"
                              step={"any"}
                              rangeSlideDisabled={true}
                              max={30000}
                              defaultValue={[0, 12000]}
                            />
                          </div>{" "}
                        </div>

                        <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                          <Link className="btn btn-yellow" to="/search-list">
                            SEARCH NOW
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade show " id="tabs_2">
                    <div className="car-dealer-form-inner">
                      <form
                        className="ltn__car-dealer-form-box row"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <select
                            className=" nice-select"
                            onChange={formik.handleChange}
                            id="Apartment"
                          >
                            <option value="Apartment" className="select-name">
                              Apartment
                            </option>
                            <option value="Co-op" className="select-name">
                              Co-op
                            </option>
                            <option value="Condo" className="select-name">
                              Condo
                            </option>
                            <option
                              value="Single Family Home"
                              className="select-name"
                            >
                              Single Family Home
                            </option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <select
                            className=" nice-select"
                            onChange={formik.handleChange}
                            id="Location"
                          >
                            <option value="Location" className="select-name">
                              Location
                            </option>
                            <option value="Cairo" className="select-name">
                              Cairo
                            </option>
                            <option value="North Coast" className="select-name">
                              North Coast
                            </option>
                            <option
                              value="Sharm Elsheikh"
                              className="select-name"
                            >
                              Sharm Elsheikh
                            </option>
                            <option value="Alexandria" className="select-name">
                              Alexandria
                            </option>
                            <option value="Giza" className="select-name">
                              Giza
                            </option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <select
                            className="nice-select"
                            onChange={formik.handleChange}
                            id="SupLocation"
                          >
                            <option
                              value="Sup Location"
                              className="select-name"
                            >
                              Sup Location
                            </option>
                            <option value="Bayonne" className="select-name">
                              Bayonne
                            </option>
                            <option value="Greenville" className="select-name">
                              Greenville
                            </option>
                            <option value="Manhattan" className="select-name">
                              Manhattan
                            </option>
                            <option value="Queens" className="select-name">
                              Queens
                            </option>
                            <option value="The Heights" className="select-name">
                              The Heights
                            </option>
                            <option
                              value="Upper East Side"
                              className="select-name"
                            >
                              Upper East Side
                            </option>
                            <option value="West Side" className="select-name">
                              West Side
                            </option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <select
                            className="nice-select"
                            onChange={formik.handleChange}
                            id="Bedrooms"
                          >
                            <option value="Bedrooms" className="select-name">
                              Bedrooms
                            </option>
                            <option value="1" className="select-name">
                              1
                            </option>
                            <option value="2" className="select-name">
                              2
                            </option>
                            <option value="3" className="select-name">
                              3
                            </option>
                            <option value="4" className="select-name">
                              4
                            </option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <input
                            className="form-banner"
                            onChange={formik.handleChange}
                            name="MinsSize"
                            id="MinsSize"
                            value={formik.values.MinsSize}
                            placeholder="Min size (in sqft)"
                          />
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                          <input
                            className="form-banner"
                            onChange={formik.handleChange}
                            name="MaxsSize"
                            id="MaxsSize"
                            value={formik.values.MaxSize}
                            placeholder="Max size (in sqft)"
                          />
                        </div>
                        <div className="col-lg-12 col-md-6">
                          <span className="text-dark">
                            {parseInt(values[0])} LE - {parseInt(values[1])} LE
                          </span>
                          <div className="div">
                            <RangeSlider
                              onInput={setValue}
                              id="range-slider-ab"
                              className="margin-lg"
                              step={"any"}
                              rangeSlideDisabled={true}
                              max={30000}
                              defaultValue={[0, 12000]}
                            />
                          </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                          <Link
                            className="btn btn-yellow"
                            onClick={Search}
                            to="/search-list"
                          >
                            SEARCH NOW
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
