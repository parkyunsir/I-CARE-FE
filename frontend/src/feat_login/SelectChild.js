import React, { useEffect, useState } from "react";
import { Container, Grid, Button, CircularProgress, Typography, Box } from "@mui/material";
import { selectchild } from "./api/api-login";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import AddIcon from '@mui/icons-material/Add';

function SelectChild() {
    const [childList, setChildList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchChildList();
    }, []);

    const fetchChildList = () => {
        setLoading(true);
        selectchild()
            .then((response) => {
                console.log(response);
                if (Array.isArray(response) && response.length > 0) {
                    const formattedChildList = response.map(child => ({
                        childId: child.childId,
                        nickname: child.nickname,
                        name: child.name,
                        gender: child.gender,
                        birth: child.birth,
                        profileState: child.profileState
                    }));
                    setChildList(formattedChildList);
                } else {
                    console.error("Invalid data format received from API or empty array");
                }
            })
            .catch((error) => {
                console.error("Error fetching child list:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleAddChild = () => {
        window.location.href = "/addchild";
    };

    const handleSelectChild = (childId) => {
        localStorage.setItem("childId", childId);
        navigate("/chatbot");
    }

    return (
        <div className="app-wrapper">
            <Header title="자녀 정보" type="back"></Header>
            <div className="app-container">
                <Box mt={7}></Box>
                <Grid container direction="column" alignItems="center" spacing={2}>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        childList.map((child) => (
                            <Grid item key={child.childId}>
                                <Button 
                                    variant="contained" 
                                    sx={{
                                        backgroundColor: "#F3F4FF",
                                        borderRadius: "50%", 
                                        width: 120, 
                                        height: 120,
                                        padding: 0, 
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "none", 
                                        '&:hover': {
                                            backgroundColor: "#E0E1FF", 
                                        },
                                        '&:active': {
                                            backgroundColor: "#454FAC", 
                                        }
                                    }}
                                >
                                    <img 
                                        src={`${process.env.PUBLIC_URL}/SelectChildButton.png`} 
                                        onClick={handleSelectChild}
                                        alt={child.name} 
                                        style={{ 
                                            width: "100%",  
                                            height: "100%", 
                                            borderRadius: "50%" 
                                        }}
                                    />
                                </Button>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        textAlign: 'center', 
                                        marginTop: 2
                                    }}
                                >
                                    {child.name}
                                </Typography>
                            </Grid>
                        ))
                    )}
                    <Grid item>
                        <Button 
                            variant="contained"  
                            color="secondary" 
                            sx={{
                                borderRadius: "50%", 
                                width: 120, 
                                height: 120,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#6271F5",
                                boxShadow: "none",
                                '&:hover': {
                                    backgroundColor: "#454FAC", 
                                },
                                '&:active': {
                                    backgroundColor: "#454FAC", 
                                }
                            }} 
                            onClick={handleAddChild}
                        >
                            <AddIcon fontSize="large" />
                        </Button>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                textAlign: 'center', 
                                marginTop: 2 
                            }}
                        >
                            자녀 계정 추가
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default SelectChild;
