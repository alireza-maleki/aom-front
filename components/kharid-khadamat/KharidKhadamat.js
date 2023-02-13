import { useState, useEffect } from 'react';
import axios from 'axios';


import PostList from '../allpost/PostList';
import NavbarFixed from '../navbar fixed/NavbarFixed';
import classes from './KharidKhadamat.module.css';

import ListData from "../listdata/ListData";

import PaginationPage from '../paginate/Pagination';

const KharidKhadamat = ({ allData }) => {

    const [currentPage, setCurrentPage] = useState(1);

    
    const pageSize = 10;
    
    const handelPageChange = (page) => {
        setCurrentPage(page);
    }
    
    
    // ### Scroll
    let offset = 1;
    const [scrollData, setScrollData] = useState([]);


    const loadMorePokemon = () => {

        axios.get(`http://192.168.0.112:1313/search/v1/goods-search/${offset}/`).then(({ data }) => {

            const newData = [];
            data.forEach((item) => newData.push(item));
            setScrollData(newData);

        });

        offset += 1;

    };


    // ### Scroll Control
    const handelScroll = (e) => {

        if (
            window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight
        ) {
            loadMorePokemon(window.innerHeight);
        }

        console.log()

    }


    // ### Window Scroll ###
    useEffect(() => {
        
        loadMorePokemon();

        window.addEventListener('scroll', handelScroll)

    }, []);


const KharidKhadamat = ({ allPost }) => {

    return (
        <div className={` ${classes.kharid} `}>

            <div className="container">

                <div className="row">

                    <div className="col-3 ">
                        {/* <div className={` pt-5 container`}>

                            <div className='container p-3  bg-secondary border rounded'>

                                <div className='row mb-3'>

                                    <label className={` col-md-1 col-sm-1 col-xs-2 ${classes.label} `}>استان</label>
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


                            </div>

                            <div className='contanier text-center my-3'>
                                <div className='row'>

                                    <div className='col-6'>

                                        <div className='row'>

                                            <div className='col-1'>
                                                <label className='form-label'>جستجو</label>
                                            </div>

                                            <div className='col-11'>
                                                <input type='text' className={classes.iuput} id='kharid_khadamt' />
                                            </div>

                                        </div>

                                </div>
                            </div>

                        </div> */}

                        <div className={`row my-5 rounded shadow ${classes['form-control']} `}>


                            <div className="p-4">

                                <div className="my-4">
                                    <lable>استان</lable>
                                    <div>
                                        <select>
                                            <option value="0">-----</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="my-4">
                                    <lable>برند</lable>
                                    <div>
                                        <select>
                                            <option value="0">-----</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="my-4">
                                    <lable>ساخت</lable>
                                    <div>
                                        <select>
                                            <option value="0">-----</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="my-4">
                                    <lable>گروه</lable>
                                    <div>
                                        <select>
                                            <option value="0">-----</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="my-4">
                                    <lable>وضعیت</lable>
                                    <div>
                                        <select>
                                            <option value="0">-----</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="my-4">
                                    <lable>محصول</lable>
                                    <div>
                                        <select>
                                            <option value="0">-----</option>
                                        </select>
                                    </div>
                                </div>



                            </div>

                            <div className={` px-4 ${classes.filtered} `}>

                                <div>
                                    <label>جستجو</label>
                                    <input type="text" />
                                </div>

                                <div className="mt-5 py-3">
                                    <button>فیلتر</button>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-9">

                        {/* <ListData allData={allData} />

                        <div className='row'>

                            <PaginationPage
                                items={allData.length}
                                currentPage={currentPage}
                                pageSize={pageSize}
                                onPageChange={handelPageChange}
                            />

                        </div> */}

                        <ListData allData={scrollData} />

                    </div>

                </div>

            </div>


        </div>
    )
}

export default KharidKhadamat;