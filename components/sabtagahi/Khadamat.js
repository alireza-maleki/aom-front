import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import classes from "./Khadamat.module.css";


import axios from 'axios';


const Khadamat = () => {

    const [selectData, setSelectData] = useState([]);

    const [postId, setPostId] = useState();

    const [getCategory, setGetCategory] = useState();


    // ### Get Data ###
    const getApiHandler = async () => {

        // console.log("ali");

        if (selectData.length == 0) {

            try {

                const { data } = await axios.get("http://192.168.0.206:1212/advert/v1/get-good-categorys/");
                setSelectData(data);

            } catch (error) {

                console.log(error.message)

            }
            console.log(selectData)

        }

    }


    useEffect(() => {

    }, [])

    // ### Post Data ###
    const OptionChangeHandler = async (e) => {

        if (e.target.value == '0') {

            setPostId("")

        } else {
            try {
                setPostId(e.target.value)
                const category = await axios.get(`http://192.168.0.206:1212/advert/v1/category-childs/${e.target.value}/`)

                console.log(category.data.products)

                setGetCategory(category.data.products)

            } catch (error) {

                // console.log(error.message)

            }

            console.log(postId)
        }

    }

    return (

        <div className={classes.khadamt}>

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
                <option> ------ </option>
                <option> کافی شاپ </option>
                <option> لاین گرم </option>
                <option> لاین سرد </option>
                <option> آماده سازی </option>
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

                            <select onClick={getApiHandler} onChange={(e) => OptionChangeHandler(e)} required>
                                <option> ------ </option>

                                {selectData ? (
                                    <>
                                        {selectData.map((item) => (
                                            <option value={item.id} key={item.id}> {item.name} </option>
                                        ))}
                                    </>
                                ) : ""}


                            </select>

                            <select required>
                                <option value="0">-----</option>

                                {getCategory ? (
                                    <>
                                        {getCategory.map((item) => (
                                            <option key={item.id}> {item.name} </option>
                                        ))}
                                    </>
                                ) : ""}

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
                                    <input type="text" placeholder="قیمت را ثبت نمایید" />
                                    <div className={classes.sel31}>
                                        <select>
                                            <option>توافقی</option>
                                            <option>تومان</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <select required>
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
                        <textarea rows="12" cols="120" placeholder="توضیحات خود را ثبت نمایید"></textarea>
                    </div>
                </div>

                <div className={classes.file}>
                    <label>عکس خود را وارد کنید</label>
                    <input type="file" />
                </div>
                <div className={classes.btn2}>
                    <button>تصویر فرعی اول </button></div>

                <div className={classes.btn3}><button >تصویر فرعی اول </button></div>
                <div className={classes.btn4}><button >تصویر فرعی اول </button></div>



            </div>
          </div>
        </div>
        <div className={classes.textarea}>
          <div>
            <label>
              توضیحات <span>*</span>
            </label>
          </div>
          <div className={classes.textarea2}>
            <textarea
              rows="12"
              cols="120"
              placeholder="توضیحات خود را ثبت نمایید"
            >
              {" "}
            </textarea>
          </div>
        </div>

        <div className={` ${classes.file}`}>
          <div className={`p-3 ${classes.file1}`}>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className={`p-3 ${classes.file2}`}>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className={`p-3 ${classes.file3}`}>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className={`p-3 ${classes.file4}`}>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className={classes.action}>
            <button>ذخیره اطلاعات</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Khadamat;

{
  /* <div>
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
</div> */
}
