const LogIn = () => {
    return (
        <div className="centrador w-75 border border-secondary rounded-2">
            <form className="row mt-4 mb-4 ms-4 me-4">
                <div className="col-md-12 mb-3">
                    <label htmlFor="LogInEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="LogInEmail" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="LogInPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="LogInPassword"/>
                </div>
                <button type="submit" className="btn btn-primary w-25">Submit</button>
            </form>
        </div>
    )
}

export default LogIn
