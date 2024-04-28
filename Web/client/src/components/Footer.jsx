import { AppBar, Toolbar, Typography, Box, Button, IconButton } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <AppBar color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                {/* Social Media Icons */}
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit" aria-label="Twitter">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton color="inherit" aria-label="Facebook">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton color="inherit" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </IconButton>
                </Box>

                {/* Copyright Notice */}
                <Typography variant="body1" sx={{ flexGrow: 2, textAlign: 'center' }}>
                    © {new Date().getFullYear()} NOW IS THE RIGHT TIME
                </Typography>

                {/* Privacy and Legal Links */}
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button color="inherit">Privacy Policy</Button>
                    <Button color="inherit">Terms of Use</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
