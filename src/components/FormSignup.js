import React from 'react';
import UseForm from './UseForm';

const FormSignUP = () => {
    const {handleChange,values,handleSubmit} =UseForm()
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get start with us today! create your account by filing out the information below.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                            Username
                    </label>
                    <input value={values.username} onChange={handleChange} id="name" className="form-input" type="text" name="username" placeholder="Enter your user name"/>

                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input value={values.email} onChange={handleChange} id="email" className="form-input" type="email" name="email" placeholder="Enter your Email"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input value={values.password} onChange={handleChange} id="password" className="form-input" type="password" name="password" placeholder="Enter your Password"/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="Password2" className="form-label">
                        Confirm Password
                    </label>
                    <input value={values.password2} onChange={handleChange} id="password2" className="form-input" type="password" name="password2" placeholder="Enter your Confirm password"/>
                </div>
                <button type="submit" className="form-input-btn">
                    Sign up
                </button>
                <span className="form-input-login">Already have an account? Login<a href="#">here</a></span>
            </form>
        </div>
    )
}

export default FormSignUP;
