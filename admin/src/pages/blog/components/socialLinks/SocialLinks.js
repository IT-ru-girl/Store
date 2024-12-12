import {Link,Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {GridSocial, TypographyMain} from "./SocialLinks.styles";
import { TwitterIcon} from "../../../../icons/Twitter.icon";
import {GithubIcon} from "../../../../icons/Github.icon";
import {FacebookIcon} from "../../../../icons/Facebook.icon";

export const SocialLink=()=> {
    return (
        <div>
            <TypographyMain variant='h6' gutterBottom>
                Social
            </TypographyMain>
            <Typography variant='1' color='primary' display='block'>
                <Link underlineHover>
                    <GridSocial container spacing={1}>
                        <Grid item>
                            {/*иконки*/}
                        <GithubIcon/>
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
                            {/*иконки*/}
                            <TwitterIcon/>
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
                            {/*иконки*/}
                         <FacebookIcon/>
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
