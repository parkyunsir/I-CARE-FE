import React, { useState } from "react";
import { Container, Grid, Typography, TextField, Button, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { addchild } from "./api/api-login";

// 추후 회원가입 버튼 누르면 자녀를 등록할 수 있도록 수정

function AddChild() {
    const [gender, setGender] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const name = data.get("name");
        const birth = data.get("birth"); 
        const nickname = data.get("nickname");

        addchild({ name: name, birth: birth, gender: gender, nickname: nickname }).then(
            (response) => {
                // 자녀 등록 성공시 챗봇으로 이동
                //window.location.href = "/chatbot";

                // 자녀 등록 성공시 자녀 선택으로 이동
                window.location.href = "/selectchild";
            }
        );
    };

    const handleGenderChange = (event, newGender) => {
        setGender(newGender);
    };

    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box mt={7}>
                            <Typography component="h2" variant="h5" style={{ fontWeight: "bold" }}>
                                <div> 자녀를 </div>
                                <div> 등록해주세요 </div>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                            닉네임
                        </Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="nickname"
                            placeholder="닉네임을 입력하세요"
                            autoFocus
                            id="nickname"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                            이름
                        </Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="name"
                            placeholder="이름을 입력하세요"
                            autoFocus
                            id="name"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                            생년월일
                        </Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="birth"
                            placeholder="생년월일을 입력하세요"
                            autoFocus
                            id="birth"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                            성별
                        </Typography>
                        <ToggleButtonGroup
                            value={gender}
                            exclusive
                            onChange={handleGenderChange}
                            fullWidth
                        >
                            <ToggleButton value="남" aria-label="male">
                                남
                            </ToggleButton>
                            <ToggleButton value="여" aria-label="female">
                                여
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={5}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{ fontWeight: "bold" }}
                                sx={{ height: "56px", fontSize: "1rem", backgroundColor: "#D9D9D9", color: "white", boxShadow: 'none' }}
                                color="primary"
                            >
                                자녀 등록 하기
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                </Grid>
            </form>
        </Container>
    );
};

export default AddChild;
