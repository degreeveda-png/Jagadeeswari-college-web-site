import React from 'react'
import './aside.css'

function Aside() {
    return (
        <div id ="container">
                <form id="form">
                    <div class="box1">
                        <h1>VEDA DEGREEE COLLEGE</h1>
                        <div class="app">
                            <h1>APPLICATION FORM</h1>
                            <label for="firstname">First name:</label>
                            <input type="firstname" placeholder="Enter First name" id="firstname"></input>
                            <label for="lastname">Last name:</label>
                            <input type="lastname" placeholder="Enter last name" id="lastname"></input><br /><br />
                            <label for="fathername">Father  First name:</label>
                            <input type="fathername" placeholder="Enter father first  name" id="fathername"></input>
                            <label for="lastname">Father Last name:</label>
                            <input type="lastname" placeholder="Enter Father last name" id="lastname"></input><br /><br />
                            <label for="mothername">Mother First name:</label>
                            <input type="mothername" placeholder="Enter mother first name" id="mothername"></input>
                            <label for="lastname">Mother Last name:  </label>
                            <input type="lastname" placeholder="Enter Mother last name" id="lastname"></input><br /><br />
                            <label for="DOB">Date Of Birth:</label>
                            <input type="date" placeholder="DOB" id="DOB"></input><br /><br />
                            <label for="email">Email:</label>
                            <input type="Email" placeholder="Enter email" id="email"></input><br /><br />
                            <label for="phoneno">Phone no:</label>
                            <input type="tel" placeholder="Enter phone number" id="phoneno"></input><br /><br />
                            <button type="submit" id="submit">Sign Up</button>
                        </div>
                    </div>
                </form>
        </div>
    )
}
export default Aside
