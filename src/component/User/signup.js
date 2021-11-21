import React from "react";
import { useFormik } from "formik";
// import axios from 'axios'
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Action/UserAction";
import Swal from "sweetalert2";

export const SignUp = () => {
    const dispatch = useDispatch();
    const userSchema = Yup.object().shape({
        email: Yup.string().required("email is Required"),
        username: Yup.string().required("Name is Required"),
        password:Yup.string().required("Please Enter Password")
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: userSchema,
        onSubmit: ({ username,email,password }) => {
            Swal.fire({
                icon: 'success',
                title: 'Congrats!....',
                text: 'Your Account Is Created',
            })
            console.log("I am on submit for user")
            dispatch(registerUser({username,email,password}))
        }
    });
    return (
        <div className="h-50 w-50 ml-5 mt-5">
            <form onSubmit={formik.handleSubmit} className="d-block"  >
                <h3>Add User</h3>
                <div className="form-group ">
                    <label>User Name</label>
                    <input id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        className="form-control" placeholder="Enter User Name" />
                </div>
                {formik.errors.username && formik.touched.username ? (
                    <div>{formik.errors.username}</div>
                ) : null}

                <div className="form-group ">
                    <label>User email</label>
                    <input id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email} className="form-control" placeholder="Enter User email" />
                </div>
                {formik.errors.email && formik.touched.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <div className="form-group">
                    <label>User password</label><br/>
                    <input id="password" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} className="orm-control" placeholder="Enter User password" />
                    {formik.errors.password && formik.touched.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">AddUser</button>
            </form>
        </div>
    );
}