const SingIn = () => {
    return (
        <div className="centrador w-75 border border-secondary rounded-2">
            <form className="row g-2 mt-3 mb-3 ms-3 me-3">
                <div className="col-md-6">
                    <label htmlFor="singInFirstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="singInFirstName" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="singInLastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="singInLastName" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="singInUsername" className="form-label">Username</label>
                    <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" className="form-control" id="singInUsername"  aria-describedby="inputGroupPrepend" required/>
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="singInEmail" className="form-label">Email</label>
                    <input type="text" className="form-control" id="singInEmail" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="singInPassword" className="form-label">Password</label>
                    <input type="text" className="form-control" id="singInPassword" required/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )
}

export default SingIn
