import './Login.css';

const Login = () => {
    return(
        <>
            <div className='admin-login-card-container'>
                <div className = 'admin-login-card'>
                    <div className='admin-login-card-inside'>
                        <div className='login-admin-heading'>
                            <h1>Admin</h1>
                            <hr/>
                        </div>
                        
                        <div>
                            <form>
                                <input type = 'text' name = 'username' placeholder = 'Username'  className='login-input' require/>
                                <input type = 'password' name = 'password' placeholder = 'password' className='login-input' require/>
                            </form>
                        </div>

                        <div className='login-button'>
                            <a href='/Dashboard'>
                                <button type='submit'>
                                    Login
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;