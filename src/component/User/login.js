import React, { useEffect } from "react";
import { useFormik } from "formik";
// import axios from 'axios'
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Action/UserAction";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

export const Login = () => {
    const isLoggedIn = useSelector((state) => state.UserReducer.isLoggedIn);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate ();
    const userSchema = Yup.object().shape({
        username: Yup.string().required("Name is Required"),
        password: Yup.string().required("password is Required"),
    });
    
    const onSuccess = () =>{
        Swal.fire({
            icon: 'Success',
            title: 'Welcome!....',
            text: 'You are logged In',
        })
        console.log("Location is",location)
        if(location.pathname === '/login')
            navigate('/products')
        else
            navigate(location.pathname)
    }
    const onFailure =() =>{
        Swal.fire({
            icon: 'error',
            title: 'Oh No!....',
            text: 'Incorrect Username or Password',
        })
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {

            username: '',
            password: ''

        },
        validationSchema: userSchema,
        onSubmit: ({ username,password }) => {
            console.log("Login Submit is called")
            dispatch(userLogin({username,password},onSuccess,onFailure))
        }
    });
    useEffect(() => {
        if (isLoggedIn) {
          navigate("/products");
        }
      }, [isLoggedIn]);
    return (
        <div className="h-50 w-50 ml-5 mt-5">
            <form onSubmit={formik.handleSubmit} className="d-block"  >
                <h3>Login User</h3>
                <div className="form-group ">
                    <label>User Name </label>
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
                    <label>User Password </label>
                    <input id="password"
                        name="password"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="form-control" placeholder="Enter User Password" />
                </div>
                {formik.errors.username && formik.touched.username ? (
                    <div>{formik.errors.username}</div>
                ) : null}
                <button type="submit" className="btn btn-dark btn-lg btn-block">Login User</button>
            </form>
        </div>
    );
}









// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

// const FormPage = () => {
// return (
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6">
//       <form>
//         <p className="h5 text-center mb-4">Sign in</p>
//         <div className="grey-text">
//           <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
//             success="right" />
//           <MDBInput label="Type your password" icon="lock" group type="password" validate />
//         </div>
//         <div className="text-center">
//           <MDBBtn>Login</MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// );
// };

// export default FormPage;