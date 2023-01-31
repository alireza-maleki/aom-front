import { ClassNames } from "@emotion/react";
import { collapseClasses } from "@mui/material";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiUserFill } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { GiVibratingSmartphone } from "react-icons/gi";
import { BiMap } from "react-icons/bi";
import { GrMap } from "react-icons/gr";
import { BiMapPin } from "react-icons/bi";

import classes from "./Estekhdam.module.css";

const estekhdam = () => {
  return (
    <div className={classes.estekhdam}>
      <div
        className={` h-25  pt-5 d-flex align-items-center justify-content-center flex-column  ${classes.container}`}
      >
        <div className={`w-50   ${classes.head}`}>
          <h5 className="text-center bg-info  p-2  rounded-1">
            ثبت اطلاعات استخدام نیرو
          </h5>
        </div>
        <div className={`row  w-50 rounded-1 ${classes.body}`}>
          <div className=" col-md-2 d-flex align-items-center justify-content-center fs-1">
            <FaUserAlt />
          </div>

          <div
            className={`card  w-75 h-75 m-4 flex-column flex-lg-row  ${classes.card}`}
          >
            <div className=" w-100 h-75 p-3 col-md-10 d-flex">
              <div className=" col-md-4 col-sm-6">
                <table className=" pt-2 w-100">
                  <tbody>
                    <tr>
                      <td className="W-25">
                        <RiUserFill />
                      </td>
                      <td className="w-75"> آقای محمدرضا آزادی</td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className=" w-25">
                        <GiRotaryPhone />
                      </td>
                      <td className="w-75">.....</td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className=" w-25">
                        <GiVibratingSmartphone />
                      </td>
                      <td className="w-75">09121234566</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className=" col-md-4 col-sm-6">
                <table className=" pt-2 w-100">
                  <tbody>
                    <tr>
                      <td className="W-25">
                        <GrMap />
                      </td>
                      <td className="w-75"> استان تهران </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className=" w-25">
                        <BiMapPin />
                      </td>
                      <td className="w-75">شهر تهران </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className=" w-25">
                        <BiMap />
                      </td>
                      <td className="w-75">تهران پیروزی</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`rounded-1 ${classes.middle}`}>
        <div className=" row">
          <label
            for="inputPassword"
            className={`col-lg-4 col-sm-2 col-form-label ${classes.forml}`}
          >
            موضوع آگهی
            <span>*</span>
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className={`form-control  ${classes.formi}`}
            ></input>
          </div>
        </div>
        <div className={` form-group row  ${classes.form1}`}>
          <label className={` control-label col-md-2   ${classes.label1}`}>
            {" "}
            گروه خدماتی <span>*</span>{" "}
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
          <label className={` control-label col-md-2   ${classes.label2}`}>
            {" "}
            نوع فعالیت{" "}
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
        </div>
        <div className={` form-group row  ${classes.form1}`}>
          <label className={` control-label col-md-2   ${classes.label1}`}>
            سابقه فعالیت
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
          <label className={` control-label col-md-2   ${classes.label2}`}>
            {" "}
            فعالیت
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
        </div>
        <div className={` form-group row  ${classes.form1}`}>
          <label className={` control-label col-md-2   ${classes.label1}`}>
            {" "}
            حوزه تخصصی{" "}
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
          <label className={` control-label col-md-2   ${classes.label2}`}>
            {" "}
            تخصص <span>*</span>
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
        </div>
        <div className={` form-group row  ${classes.form1}`}>
          <label className={` control-label col-md-2   ${classes.label1}`}>
            {" "}
            گارانتی/ضمانت{" "}
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
          <label className={` control-label col-md-2   ${classes.label2}`}>
            {" "}
            تحصیلات{" "}
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
        </div>
        <div className={` form-group row  ${classes.form1}`}>
          <label className={` control-label col-md-2   ${classes.label1}`}>
            {" "}
            استان
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
          <label className={` control-label col-md-2   ${classes.label2}`}>
            {" "}
            نوع قرارداد
          </label>
          <select className={` w-25  ${classes.select}`}>
            <option>.....</option>
            <option></option>
          </select>
        </div>

        <div className={`  ${classes.textarea}`}>
          <div className={`w-100 control-label col-md-2 d-flex  flex-row align-items-center justify-content-between ${classes.label3}`}>
            <label className={`  ${classes.label4}`}>
              توضیحات
            </label>
            <textarea className="w-100 rounded-1"
              rows="4"
              cols="60"
              placeholder="توضیحات خود را ثبت نمایید"
            ></textarea>
          </div>
        </div>

        <div className={classes.action}>
          <button>ذخیره اطلاعات</button>
        </div>
      </div>
    </div>
  );
};

export default estekhdam;
