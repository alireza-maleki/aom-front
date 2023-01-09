import React from 'react';
import Link from 'next/link';

import classes from "./Khadamat.module.css";


const Khadamat = () => {
    return (

        <div className={classes.khadamt}>

            <div className={classes.head}>
                <h5>ثبت مشخصات کالا و خدمات</h5>
                <p>خواهشمنداست،اطلاعات مورد نظر خود را متناسب با گروه انتخابی آگهی با ذکر جزئیات ثبت نمائید . </p>
            </div>

            <div className={classes.link}>
                <Link href="/khadamat">
                    درج آگهی جدید
                    <span>+</span>
                </Link>
            </div>

            <div className={classes.container}>

                <div className={classes.mozo}>

                    <label>
                        موضوع
                        <span>*</span>
                    </label>

                    <input type='text' placeholder='موضوع آگهی را ثبت نمایید' />
                </div>

                <div className={classes.rightcontrol}>

                    <div className={classes.text}>

                        <label>
                            گروه کالایی
                            <span>*</span>
                        </label>

                        <label>
                            زیر گروه
                            <span>*</span>
                        </label>

                        <label>
                            ساخت
                            <span>*</span>
                        </label>

                        <label>
                            فنی
                            <span>*</span>
                        </label>

                        <label>
                            پرداخت
                            <span>*</span>
                        </label>

                        <label>
                            استان درج آگهی
                            <span>*</span>
                        </label>

                        <label>
                            آدرس
                            <span>*</span>
                        </label>

                    </div>

                    <div className={classes.control}>

                        <div>
                            <select>
                                <option>-----</option>
                            </select>
                        </div>

                        <div>
                            <select>
                                <option>-----</option>
                            </select>
                        </div>


                        <div>
                            <select>
                                <option>-----</option>
                            </select>
                        </div>


                        <div>
                            <select>
                                <option>-----</option>
                            </select>
                        </div>


                        <div>
                            <select>
                                <option>-----</option>
                            </select>
                        </div>



                        <div>
                            <input type="text" />
                        </div>

                    </div>

                </div>

            </div>

        </div>


    )
}

export default Khadamat;


{/* <div>
<label>گروه کالایی</label>
<select>
    <option>-----</option>
    <option>کافی شاپ</option>
    <option>لاین سرد</option>
    <option>لاین گرم</option>
    <option>آماده سازی</option>
    <option>خدمات مرتبط</option>
</select>
</div>

<div>
<label disabled>زیر گروه</label>
<select>
    <option></option>
</select>
</div>

<div>
<label>ساخت</label>
<select>
    <option>-----</option>
    <option>ایران</option>
    <option>آمریکا</option>
    <option>فرانسه</option>
</select>
</div>

<div>
<label>فنی</label>
<select>
    <option>-----</option>
    <option>آکبند / کارنکرده</option>
    <option>سالم</option>
    <option>کاملا سالم</option>
    <option>نیاز به تعمیر</option>
</select>
</div>

<div>
<label>پرداخت</label>
<select>
    <option>-----</option>
    <option>نقدی</option>
    <option>اقساط</option>
    <option>توافقی</option>
</select>
</div>

<div>
<label>استان درج آگهی</label>
<select>
    <option>-----</option>
    <option>تهران</option>
    <option>مشهد</option>
    <option>شیراز</option>
</select>
</div>

<div>
<label>آدرس</label>
<input type="text" disabled />
</div> */}