
import PostList from '../allpost/PostList';
import NavbarFixed from '../navbar fixed/NavbarFixed';
import classes from './KharidKhadamat.module.css';



const KharidKhadamat = ({ allPost }) => {
    return (
        <section className={classes.kharid}>

            <div className={` pt-5 ${classes.khadamat} `}>

                <div className='container'>

                    <div className='container p-2  bg-secondary border rounded'>

                        <div className='row mb-1'>

                            <label className={` px-5 col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>استان</label>
                            <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                                <select className={classes.selection}>
                                    <option value='1'>-----</option>
                                </select>
                            </div>

                            <label className={` px-5 col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>گروه</label>
                            <div className={` col-md-2 col-sm-3 col-xs-4  `}>
                                <select className={classes.selection}>
                                    <option value='1'>-----</option>

                                </select>
                            </div>

                            <label className={` px-5 col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>سابقه</label>
                            <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                                <select className={classes.selection}>
                                    <option value='1'>-----</option>
                                </select>
                            </div>

                            <label className={` px-5 col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>فعالیت</label>
                            <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                                <select className={classes.selection}>
                                    <option value='1'>-----</option>
                                </select>
                            </div>

                        </div>

                        <div className='row'>

                            <label className={` px-5 col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>شهر</label>
                            <div className={` col-md-2 col-sm-3 col-xs-4  `}>
                                <select className={classes.selection}>
                                    <option value='1'>-----</option>
                                </select>
                            </div>

                            <label className={` px-5 col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>حوزه</label>
                            <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                                <select className={classes.selection}>
                                    <option value='1'>-----</option>
                                </select>
                            </div>

                            <label className={` px-5 col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>تخصص</label>
                            <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                                <select className={classes.selection}>
                                    <option value='1'>-----</option>
                                </select>
                            </div>

                            <label className={`px-5 col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>گارانتی</label>
                            <div className={` col-md-2 col-sm-3 col-xs-4 `}>
                                <select className={classes.selection}>
                                    <option value='1'>-----</option>
                                </select>
                            </div>

                        </div>

                    </div>

                    <div className=' my-3 contanier'>

                        <div className='row gy-3  text-center'>

                            <div className={` col-md-5 ${classes.input} `}>

                                <div className='row d-flex align-items-center'>

                                    <div className='col-md-1'>
                                        <label>جستجو</label>
                                    </div>

                                    <div className='col-md-11'>
                                        <input type="text" />
                                    </div>

                                </div>

                            </div>

                            <div className={` col-md-7 ${classes.action} `}>
                                <button className='btn'>فیلتر</button>
                            </div>

                        </div>

                    </div>

                </div>

                <PostList allPost={allPost} />


            </div>

        </section>
    )
}

export default KharidKhadamat;