let Navbar = (props) => {
    return (
        <div class="navbar-container">
            <p class="title">DataFlix</p>
            <button type="button" class="user-btn" onClick={() => {
                props.setloading(true);
                fetch('https://reqres.in/api/users?page=1').then((res) => {
                    return res.json();
                }).then((json) => {
                    console.log(json);
                    props.setusers(json.data);
                    props.setloading(false);
                })
            }}>Get Users</button>
        </div>
    )
}
export default Navbar;