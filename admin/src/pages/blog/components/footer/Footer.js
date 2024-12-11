import {Container, Link, Typography} from "@mui/material";
import {FooterMain} from "./Footer.styles";


export const Footer=() =>{
    return (
        <FooterMain>
            <Container maxWidth='lg'>
                <Typography variant='h6' gutterBottom align='center'>
                    Footer
                </Typography>
                <Typography subtitle='1' align='center' color='textSecondary'>
                    Something here to give the footer a purpose!
                </Typography>
                <Typography variant='body2' subtitle='1' align='center' color='textSecondary'>
                    Copyright ©
                    <Link underline='hover' color='inherit'>
                        Your Website
                    </Link>
                    2024.
                </Typography>
            </Container>
        </FooterMain>

    )

}
