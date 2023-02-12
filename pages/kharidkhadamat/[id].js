
const KharidId = () => {

    return (
        <></>
    )

}

export default KharidId;

export async function getStaticProps(context) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts${context.params.id}`);
    const event = await res.json();

    return {
        props: {
            event
        }
    }

}


export async function getStaticPaths() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const events = await res.json();

    const ids = events.map(event => event.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }));

    return {
        paths: paths,
        fallback: false
    }

}