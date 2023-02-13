
import DataItem from "./DataItem";


const ListData = ({ allData }) => {

    return (

        <ul className="container my-5 list-unstyled">

            {
                allData.map(data =>
                    <DataItem
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        description={data.description}
                        image={data.image0}
                    />)
            }

        </ul>

    )

}

export default ListData;