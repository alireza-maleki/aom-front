
import classes from './KharidKhadamt.module.css';



const KharidKhadamt = () => {
    return (
        <div className={classes.kharid}>

            <div className='container'>
                <hr className='h-25 color-danger' />
            </div>

            <div className='container p-2  bg-secondary border rounded'>

                <div className='row mb-1'>

                    <label className={` col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>یشسیسیسی</label>
                    <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                        <select className={classes.selection}>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                    <label className={` col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>گروه</label>
                    <div className={` col-md-2 col-sm-3 col-xs-4  `}>
                        <select className={classes.selection}>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                    <label className={` col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>سابقه</label>
                    <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                        <select className={classes.selection}>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                    <label className={` col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>فعالیت</label>
                    <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                        <select className={classes.selection}>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                </div>

                <div className='row'>

                    <label className={` col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>شهر</label>
                    <div className={` col-md-2 col-sm-3 col-xs-4  `}>
                        <select className={classes.selection}>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                    <label className={` col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>حوزه</label>
                    <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                        <select className={classes.selection}>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                    <label className={` col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>تخصص</label>
                    <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                        <select className={classes.selection}>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                    <label className={` col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>گارانتی</label>
                    <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                        <select className={classes.selection}>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                </div>


                {/* <div className='col-lg-3 col-md-6 col-sm-6 '>
                        <label className={classes.label}>استان</label>
                        <select className={classes.selection} id='kharid_khadamt_select'>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <label className={classes.label} >گروه</label>
                        <select className={classes.selection} id='kharid_khadamt_select'>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <label className={classes.label} >سابقه</label>
                        <select className={classes.selection}  id='kharid_khadamt_select'>
                            <option value='1'>-----</option>
                            <option value='2'>زیر یکسال</option>
                        </select>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <label className={classes.label} >فعالیت</label>
                        <select className={classes.selection}  id='kharid_khadamt_select'>
                            <option value='1'>-----</option>
                            <option value='2'>رسمی</option>
                            <option value='3'>غیر رسمی</option>
                        </select>
                    </div> */}





                {/* <div className='col-lg-3 col-md-6 col-sm-6'>
                        <label className={classes.label}>شهر</label>
                        <select className={classes.selection} id='kharid_khadamt_select'>
                            <option value='1'>-----</option>
                        </select>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <label className={classes.label}>حوزه</label>
                        <select className={classes.selection} id='kharid_khadamt_select'>
                            <option value='1'>-----</option>
                            <option value='2'>رستوران</option>
                            <option value='3'>کافی شاپ</option>
                            <option value='4'>فست فود</option>
                            <option value='5'>کترینگ</option>
                            <option value='6'>هتل</option>
                            <option value='7'>بیمارستان</option>
                        </select>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <label className={classes.label}>تخصص</label>
                        <select className={classes.selection} id='kharid_khadamt_select'>
                            <option value='1'>-----</option>
                            <option value='2'>نصاب حرفه ای</option>
                            <option value='3'>تعمیرکار حرفه ای</option>
                            <option value='4'>نصب و تعمیرات حرفه ای</option>
                        </select>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <label className={classes.label}>گارانتی</label>
                        <select className={classes.selection} id='kharid_khadamt_select'>
                            <option value='1'>-----</option>
                            <option value='2'>دارد</option>
                            <option value='3'>ندارد</option>
                        </select>
                    </div>
                </div> */}


                {/* <div className='contanier'>
                <div className='row'>

                    <div className='col-6'>
                        <label className='form-label'>جستجو</label>
                        <input type='text' className='form-control' id='kharid_khadamt' />
                    </div>

                    <div className='col-6'>
                        <button type='submit' className='btn btn-primary'>فیلتر</button>
                    </div>

                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <img src="/images/banner-khadamat.jpg" className='img-fluid' />
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    )
}

export default KharidKhadamt