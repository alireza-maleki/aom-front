import { useRouter } from "next/router";

const KhadamatKharidId = (props) => {

    const router = useRouter();
    console.log(router.query.id)

    console.log(props.eventDetail)

    return (
        <div>
            Item Detail
        </div>
    )
}

export default KhadamatKharidId;


// ### Get Data ###
export async function getStaticProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const eventDetail = await res.json();

    return {
        props: {
            eventDetail
        }
    }

}

export async function getStaticPaths() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const allEvents = await res.json();
    // const ids = allEvents.map((event) => event.id);
    const paths = allEvents.map((event) => { params: { id: event.id } });

    return {
        paths,
        fallback: false
    }

}


