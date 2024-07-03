import React from "react";
import {Container, Grid, Typography, TextField, Button} from "@mui/material";
import {Link} from "react-router-dom";
import {addchild} from "./api/api-login";

// 추후 회원가입 버튼 누르면 자녀를 등록할 수 있도록 수정

function AddChild() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
        const data = new FormData(event.target);
        const name = data.get("name");
        const birth = data.get("birth"); 
        const gender = data.get("gender");
        const nickname = data.get("nickname");

        addchild({name: name, birth : birth, gender : gender, nickname : nickname}).then(
            (response) => {
                // 자녀 등록 성공시 챗봇으로 이동
                //window.location.href = "/login";
                window.location.href = "/chatbot";
                //window.location.href = "/selectchild";
            }
        );
    };

    return (
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                        <div> 자녀를 </div> 
                        <div> 등록해주세요 </div>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            name = "nickname"
                            label="닉네임"
                            autoFocus
                            id="nickname"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            name = "name"
                            label="이름"
                            autoFocus
                            id="name"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            name = "birth"
                            label="생년월일"
                            autoFocus
                            id="birth"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            name = "gender"
                            label="성별"
                            autoFocus
                            id="gender"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            자녀 등록 하기
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                </Grid>
            </form>
        </Container>
    );
};
export default AddChild;