import { Box, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import PrimaryButton from '../components/button/PrimaryButton'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NextImage from '../components/NextImage'

const Login = () => {
    const router = useRouter()
    const [user, setUser] = React.useState({
        username:"",
        password:""
    })

    function handleUser(event: React.ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }

    function handleClickLogin(){
        router.push("/admin")
    }

    return <Grid container style={{height:"calc(100vh - 104px)"}}>
        <Grid item xs={1} sm={2} md={3}></Grid>
        <Grid item xs={10} sm={8} md={6} style={{display:'flex'}}>
            <Paper style={{margin:"auto 0",width:"100%"}} elevation={3}>
                <Grid container>
                    <Grid item xs={12} md={6} style={{display:"flex", backgroundImage: "url('/images/mountain.jpg')", backgroundSize:"cover",backgroundPosition:"bottom",height:"auto", minHeight:"200px"}}>
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding:30}}>
                        <Typography variant="h5">
                            <strong>LOGIN</strong>
                        </Typography>
                        <div style={{marginBottom:15}}>
                            <TextField onChange={handleUser} name="username" label="username" placeholder="username" style={{width:"100%"}} />
                        </div>
                        <div style={{marginBottom:15}}>
                            <TextField onChange={handleUser} name="password" label="password" type="password" placeholder="password" style={{width:"100%"}} />
                        </div>
                        <PrimaryButton onClick={handleClickLogin}>LOGIN</PrimaryButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        <Grid item xs={1} sm={2} md={3}></Grid>
    </Grid>
}

export default Login