import React, { useEffect } from "react";
import {Container, Grid, Typography, TextField, Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {signin} from "./api/api-login";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("ACCESS_TOKEN")) {
            if(localStorage.getItem("childId")) {
                navigate("/chatbot");
            } else {
                navigate("/addchild");
            }
        }
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");

        await signin({ email: email, password: password})
            .then((response) => {
                if( response ) {
                    localStorage.setItem("ACCESS_TOKEN", response.token);
                    navigate("/addchild");
                    //navigate("/chatbot"); // /chatbot으로 위치 변경하기
                }
            });
    };

    return (
        <Container component = "main" maxWidth="xs" style={{marginTop : "8%"}}>
            <Grid container spacing={2}>
                <Grid item xs = {12}>
                    <Typography component="h1" variant="h5">
                    <div> 안녕하세요! </div> 
                    <div> 부모클래스입니다 </div>
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit = {handleSubmit}>
                {" "}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label ="이메일"
                            name ="email"
                            autoComplete="username"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name ="password"
                            label ="패스워드"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs = {12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            로그인
                        </Button>
                    </Grid>
                    <Grid item xs = {12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            카카오톡으로 계속하기
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to="/signup" variant="body2">
                            계정이 없습니까? 여기서 가입하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Login;