import { ClassNames } from "@emotion/react";
import React from "react";

import classes from "./Estekhdam.module.css";

const estekhdam = () => {
  return (
    <div className={classes.estekhdam}>
      <div className={` text-center    ${classes.head}`}>
        <h2 className="text-center">ثبت اطلاعات استخدام نیرو</h2>
      </div>
    </div>
  );
};

export default estekhdam;
