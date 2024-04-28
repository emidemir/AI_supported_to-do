import { AppBar, IconButton, Toolbar, Typography, Box, Button, Tooltip, Menu, MenuItem } from "@mui/material";
import ListAltIcon from '@mui/icons-material/ListAlt';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
	setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
	setAnchorElUser(null);
	};
	return (
		<>
			<AppBar>
				<Toolbar>
					{/*LOGO AND THE SLOGAN*/}
					<IconButton size="large" edge="start" color="inherit" aria-label="logo"><ListAltIcon/></IconButton>
					<Typography variant="v6" component='div' sx={{flexGrow: 1}}>NOW IS THE RIGHT TIME</Typography>
					{/*BUTTONS FOR THE PAGES*/}
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , gap:10, justifyContent:"space-around"}}>
						<Button variant="text" color="inherit" size="large" component={Link} to={'/Todo'} >TO DO</Button>
						<Button variant="text" color="inherit" size="large" component={Link} to={'/Sofar'} >SO FAR</Button>
						<Button variant="text" color="inherit" size="large" component={Link} to={'/Statistics'} >Statistics</Button>
					</Box>
					{/*PROFILE OPERATIONS*/}
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
							</Tooltip>
							<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
							>
								<MenuItem onClick={handleCloseUserMenu}>
									<Typography textAlign="center">Profile</Typography>
								</MenuItem>
								<MenuItem onClick={handleCloseUserMenu}>
									<Typography textAlign="center">Account</Typography>
								</MenuItem>
								<MenuItem onClick={handleCloseUserMenu}>
									<Typography textAlign="center">Log Out</Typography>
								</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<Toolbar></Toolbar>
		</>
	);
}