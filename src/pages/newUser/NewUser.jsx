import './newUser.css'

function NewUser() {
    return (
        <div className="newUser">
<h1 className="newUserTil">New User</h1>   
     <form className="newUserForm">
        <div className="newUserItem">
            <label>username:</label>
            <input type="text" placeholder="Jon" className="" />
        </div>
        <div className="newUserItem">
            <label>Full Name:</label>
            <input type="text" placeholder="Jon Doe" className="" />
        </div>
        <div className="newUserItem">
            <label>Email:</label>
            <input type="email" placeholder="Jondoe@gmail.com" />
        </div>
        <div className="newUserItem">
            <label>Password:</label>
            <input type="password" placeholder="Jon Doe" className="" />
        </div>
        <div className="newUserItem">
            <label>Phone:</label>
            <input type="text" placeholder="+1 123 456 789" className="" />
        </div>
        <div className="newUserItem">
            <label>Address:</label>
            <input type="text" placeholder="New York, NY, USA" className="" />
        </div>
        <div className="newUserItem">
            <label>Gender:</label>
            <div className="newUserGender">
            <input type="radio" id="Male" name="gender" value="Male" className="" />
            <label for="male">Male</label>
            <input type="radio" id="Female" name="gender" value="Female" className="" />
            <label for="female">Female</label>
            <input type="radio" id="others" name="gender" value="other" className="" />
            <label for="others">Other</label>
            </div>
        </div>
        <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
         </form>     
</div>
    )
}

 export default NewUser
