import { Fragment } from "react";

import KharidKhadamat from "../../components/kharid-khadamat/KharidKhadamat";

const index = ({ allPost }) => {

  console.log(allPost);

  return (
    <Fragment>

      <KharidKhadamat allPost={allPost} />

    </Fragment>
  )
}

export default index;


export async function getStaticProps() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPost = await response.json();

  return {
    props: {
      allPost
    }
  }

}
