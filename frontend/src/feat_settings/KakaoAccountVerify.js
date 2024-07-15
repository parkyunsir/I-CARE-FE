import React, { useState } from "react";
import { Container, Grid, Typography, TextField, Button, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Header from "../Header";
// 추후 회원가입 버튼 누르면 자녀를 등록할 수 있도록 수정

function KakaoAccountVerify() {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="app-wrapper">
            <div className="app-container">
                <Header title="내 정보" type="back"> </Header>
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                    <Typography component="h4" variant="h6" style={{ fontWeight: "bold" }}>
                                        <div> kakao 로그인 계정입니다. </div>
                                    </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="flex-end">
                        </Grid>
                    </form>
            </div>
        </div>
    );
};

export default KakaoAccountVerify;
