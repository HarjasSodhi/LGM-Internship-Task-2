import Card from './Card'
import Loader from './Loader';

let CardArea = (props) => {
    return (
        <div className='card-area'>
            {props.loading ? <Loader /> :
                props.users.map((el) => {
                    return <Card key={el.id} el={el} />
                })
            }
        </div>
    )
}
export default CardArea;