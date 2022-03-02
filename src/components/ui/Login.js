import {Fragment, useEffect, useState} from "react";
//material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//components
import Separator from "../layout/Separator";
//actions
import {login} from "../../redux/actions/auth";
//redux
import {useSelector, useDispatch} from "react-redux";


// Login.js module

const Login = ({signIn}) => {
    //
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: ''
    // });
    // const { email, password } = formData;

    // const dispatch = useDispatch()

    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // const onSubmit = e => {
    //     e.preventDefault();
    //     dispatch(login(email, password));
    // };

    return (
        <Fragment>
            <div className={'login-box col center'}>
                    <h1>Login</h1>
                <Separator short/>

                {/*<Box*/}
                {/*    component="form"*/}
                {/*    sx={{*/}
                {/*        '& .MuiTextField-root': { m: 1, width: '25ch' },*/}
                {/*    }}*/}
                {/*    noValidate*/}
                {/*    autoComplete="off"*/}
                {/*>*/}
                {/*    <div className={'center col'}>*/}

                {/*        <TextField*/}
                {/*            label="email"*/}
                {/*            type="email"*/}
                {/*            name="email"*/}
                {/*            value={email}*/}
                {/*            onChange={e => onChange(e)}*/}
                {/*        />*/}
                {/*        <TextField*/}
                {/*            label="password"*/}
                {/*            type="password"*/}
                {/*            name="password"*/}
                {/*            value={password}*/}
                {/*            onChange={e => onChange(e)}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</Box>*/}
                <div className={'col center'}>
                    {/*<Button type={'submit'} onClick={(e) => onSubmit(e)}>Connect</Button>*/}
                    <button className={'github-button'} onClick={() => signIn('github')}>Sign in with GitHub</button>
                    <button className={'facebook-button'} onClick={() => signIn('facebook')}>Sign in with Facebook</button>
                    <button className={'google-button'} onClick={() => signIn('google')}>Sign in with Google</button>
                </div>
            </div>
        </Fragment>

    )
}

export default Login