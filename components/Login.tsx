import React from "react";
import Licon from "./Licon";
import Gbutton from "./Gbutton";

import Connect from "./Connect";
import Input from "./Input";
import InputBox from "./InputBox";
import Continue from "./Continue";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full px-2 py-2 space-y-6 ">
            <Licon />
            <Gbutton
                imgSrc="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                text="continue with Google"
            />
            <Gbutton
                imgSrc="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png"
                text="continue with Facebook"
            ></Gbutton>
            <Connect />
            <InputBox />
            <Continue />
        </div>
    );
};

export default Login;