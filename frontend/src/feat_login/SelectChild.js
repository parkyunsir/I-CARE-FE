import React from "react";
import {Container, Grid, Typography, TextField, Button} from "@mui/material";
import {addchild} from "./api/api-login";

// 추후 회원가입 버튼 누르면 자녀를 등록할 수 있도록 수정

function SelectChild() {

    const handleSubmit = (event) => {
        event.preventDefault();
        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
        const data = new FormData(event.target);
        const childname = data.get("childname");
        const birth = data.get("birth"); 
        const gender = data.get("gender");

        addchild({childname: childname, birth : birth, gender : gender}).then(
            (response) => {
                // 자녀 선택 성공 시 챗봇화면으로 이동
                window.location.href = "/chatbot";
            }
        );
    };

    return (
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}} >


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
                            name = "childname"
                            label="이름"
                            autoFocus
                            id="childname"
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

        // 등록된 아이 수 만큼 아이 선택버튼을 생성하기
        // 자녀 계정을 추가하는 버튼을 만들어 AddChild와 연결시키기

    );
};
export default SelectChild;