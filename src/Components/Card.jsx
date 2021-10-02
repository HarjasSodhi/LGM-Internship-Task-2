let Card = (props) => {
    return (
        <div className="card">
            <img src={props.el.avatar} class="card-img" />
            <div class="card-body">
                <div class="card-title">{props.el.first_name} {props.el.last_name}</div>
                <ul class="list">
                    <li class="list-group-item">Id : {props.el.id}</li>
                    <li class="list-group-item">email : {props.el.email}</li>
                </ul>
                <div className="link-container">
                <a href="#" class="card-link"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="#" class="card-link"><i class="fab fa-github-square fa-2x"></i></a>
                <a href="#" class="card-link"><i class="fab fa-twitter fa-2x"></i></a>
                </div>
            </div>
        </div>
    )
}
export default Card;