import { Fragment } from "react";

import KharidKhadamat from "../../components/kharid-khadamat/KharidKhadamat";


const Kharid = ({ allData }) => {

  console.log(allData)


  return (
    <Fragment>

      <KharidKhadamat allPost={allPost} />


    </Fragment>
  )
}


export default Kharid;

export async function getStaticProps() {

  // http://192.168.0.112:1313/search/v1/goods-search/1/

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=11");
  const allData = await response.json();

  return {
    props: {
      allData
    }
  }

}

