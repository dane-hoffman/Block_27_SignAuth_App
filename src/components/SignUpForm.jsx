import React, {useState}from 'react'


const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    // const handleSubmit = async (event) => {

    // }

    return(
    <>
        <h2>Sign Up!</h2>
        <form>
    <label>
        Username: <input value={username} onChange={(event)=> setUsername(event.target.value)}/>
    </label>
    <label>
        Password: <input value={password} onChange={(even)=> setPassword(event.target.value)}/>
    </label>
    <button type='submit'>Submit</button>
    </form>
    </>
    )

}

export default SignUpForm;