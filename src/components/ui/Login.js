import {Fragment} from "react";

//components
import Separator from "../layout/Separator";


// Login.js module

const Login = ({signIn, data}) => {

    return (
        <Fragment>
            <div className={'login-box col center'}>
                    <h1>{data.login}</h1>
                <Separator short/>

                <div className={'col center'}>
                    <button className={'github-button'} onClick={() => signIn('github')}>{data.github}</button>
                    <button className={'facebook-button'} onClick={() => signIn('facebook')}>{data.facebook}</button>
                    <button className={'google-button'} onClick={() => signIn('google')}>{data.google}</button>
                </div>
            </div>
        </Fragment>

    )
}

export default Login