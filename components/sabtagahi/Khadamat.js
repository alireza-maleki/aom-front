import React from 'react';
import Link from 'next/link';

import { useS3Upload } from "next-s3-upload";
import classes from "./Khadamat.module.css";
import { Select } from '@mui/material';


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
                            محصول
                            <span>*</span>
                        </label>

                        <label>
                            ساخت
                            <span></span>
                        </label>


                        <label>
                            آدرس
                            <span></span>
                        </label>
                       

                    </div>

                    <div className={classes.control}>
                        <div className={classes.select1}>

                            <select>
                                <option>  ------ </option>
                                <option>  کافی شاپ  </option>
                                <option>  لاین گرم  </option>
                                <option>  لاین سرد  </option>
                                <option>  آماده سازی  </option>
                            </select>

                            <select>
                                <option>-----</option>
                            </select>

                            <select>
                                <option>-----</option>
                            </select>

                        </div>

                        <div className={classes.select24}>
                            <div>
                                <input type="text" />
                            </div>
                        </div>


                    </div>

                </div>

                <div className={classes.leftcontrol}>

                    <div className={classes.textleft} >
                        

                        <label>
                            برند
                            <span></span>
                        </label>

                        <label>
                            قیمت
                            <span></span>
                        </label>

                        <label>
                           وضعیت
                            <span>*</span>
                        </label>

                        <label>
                           استان
                            <span></span>
                        </label>


                    </div>
                    <div className={classes.controlleft}>
                        <div className={classes.selectleft}>
                            <div>
                                <select>
                                    <option>-----</option>
                                </select>
                            </div>

                           
                            <div>
                            <div className={classes.select30}>
                                <input type="text" placeholder="قیمت را ثبت نمایید"/>
                               <div className={classes.sel31}>
                                <select>
                                    <option>توافقی</option>
                                    <option>تومان</option>
                                </select>
                                </div>
                                </div>
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
                           <div></div>
                        </div>
                    </div>

                </div>
                <div className={classes.textarea} >
                    <div>
                        <label>
                            توضیحات <span>*</span>
                        </label>
                    </div>
                    <div className={classes.textarea2}>
                        <textarea rows="12" cols="120" placeholder="توضیحات خود را ثبت نمایید"> </textarea>
                    </div>
                </div>

                <div className={classes.file}>
                            <label>عکس خود را وارد کنید</label>
                            <input type="file" />
                        </div>  
                <div className={classes.btn2}>
                    <button class="btn2">تصویر فرعی اول </button></div>
                
                <div className={classes.btn3}><button class="btn3">تصویر فرعی اول </button></div>
                <div className={classes.btn4}><button class="btn4">تصویر فرعی اول </button></div>



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