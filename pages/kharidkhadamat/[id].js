
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




