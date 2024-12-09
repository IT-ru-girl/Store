import {Link, SvgIcon, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {GridSocial, TypographyMain} from "./SocialLinks.styles";

export function SocialLink() {
    return (
        <div>
            <TypographyMain variant='h6' gutterBottom>
                Social
            </TypographyMain>
            <Typography variant='1' color='primary' display='block'>
                <Link underlineHover>
                    <GridSocial container spacing={1}>
                        <Grid item>
                            <SvgIcon focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                            </SvgIcon>
                        </Grid>
                        <Grid item>
                            GitHub
                        </Grid>
                    </GridSocial>
                </Link>
            </Typography>
            <Typography variant='1' color='primary' display='block'>
                <Link underlineHover>
                    <GridSocial container spacing={1}>
                        <Grid item>
                            <SvgIcon focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                            </SvgIcon>
                        </Grid>
                        <Grid item>
                            Twitter
                        </Grid>
                    </GridSocial>
                </Link>
            </Typography>
            <Typography variant='1' color='primary' display='block'>
                <Link underlineHover>
                    <GridSocial container spacing={1}>
                        <Grid item>
                            <SvgIcon focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                            </SvgIcon>
                        </Grid>
                        <Grid item>
                            Facebook
                        </Grid>
                    </GridSocial>
                </Link>
            </Typography>
        </div>

    )
}
