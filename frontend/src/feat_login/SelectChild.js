import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Button, CircularProgress } from "@mui/material";
import { selectchild } from "./api/api-login";
import Header from "../Header";
import PageFirst from "../PageFirst";

function SelectChild() {
    const [childList, setChildList] = useState([]); 
    const [loading, setLoading] = useState(true);

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

    return (
        <div className="app-wrapper">
            <div className="app-container">
            <Header title="자녀 정보" type="back"> </Header>
            <Grid container direction="column" alignItems="center" spacing={2}>
                {loading ? (
                    <CircularProgress />
                ) : (
                    childList.map((child) => (
                        <Grid item key={child.childId}>
                            <Button variant="contained" color="primary">
                                {child.name}
                            </Button>
                        </Grid>
                    ))
                )}
                <Grid item>
                    <Button variant="contained"  color="secondary" backgroundColor = "#6271F5" onClick={handleAddChild}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </div>
    </div>
    );
}

export default SelectChild;
