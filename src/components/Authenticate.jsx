import React, {useState}from 'react'

const Authenticate = ({token}) => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick(click){
        try {
            
            //
        } 
        catch (error) {
        setError(error.message);
         }
         console.log(token);
    }
    return (
    <>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
    </>
    )
}

export default Authenticate;