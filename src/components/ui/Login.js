import {Fragment, useEffect, useState} from "react";
//material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//components
import Separator from "../layout/Separator";
//actions
import {login} from "../../actions/auth";
//redux
import {useSelector, useDispatch} from "react-redux";


// Login.js module

const Login = ({signIn, signOut}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)


    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <Fragment>
            <div className={'login-box col center'}>
                    <Separator short/>
                    <h1 className={'orange'}>Login</h1>


                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className={'center col'}>

                        <TextField
                            label="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            label="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </Box>
                <div className={'col'}>
                    <Button type={'submit'} onClick={(e) => onSubmit(e)}>Connect</Button>
                    <Button onClick={() => signIn('github')}>Sign in with GitHub</Button>
                </div>
            </div>
        </Fragment>

    )
}

export default Login