import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Stack, Box, Typography, Grid, Paper } from '@mui/material';


export default function Home() {
    return (
        <>
            <Navbar />
            <Box sx={{ margin:"auto", flexGrow: 1 }}>
                <Typography variant="h3" sx={{ mt: 2, mb: 4, textAlign: 'flex-start' }}>WHY USE THIS APP?</Typography>
                <Grid container spacing={2} sx={{ p: 2 }}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h5">
                            This app is designed to make your life easier by providing a simple and intuitive interface to manage your daily tasks.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img src={require("../Images/RightTime-HomePage.jpg")} alt="Placeholder" style={{ width: '100%', maxHeight: '300px' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h5">
                            With features designed to enhance your productivity, you'll find managing projects to be more seamless than ever.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
}
