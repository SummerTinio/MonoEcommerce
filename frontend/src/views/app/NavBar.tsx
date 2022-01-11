import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { useEffect } from 'react';
//
// if sc doesnt work --> mui styles default
// restyle add new SCSS file , target elements using selectors .....
// !important ... (bad practice but temporary!!)
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setUser } from '../../store/userSlice';

// The `state` arg is correctly typed as `RootState` already

const pages = ['sfd', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface ITarget {}

const ResponsiveAppBar = () => {
  /**
   * Property 'user' does not exist on type '{ users: UserState; }'. Did you mean 'users'?
   * > state.users
   * users: userReducer
   */
  // TODO: dispatch actions
  const user = useAppSelector((state) => state.users.user);
  /** 
   useEffect(() => {
     console.log('working !!');
     //db communication
     // api calls
     // nothing else
   }, [user]);
   * 
   */

  // const state = useAppSelector(state => state); <<<---- console log this!!!

  //const user = useAppSelector((state) => state.users.user);
  // const user = useAppSelector((state) => state.user.user);
  // in future --> useAppSelector .. pass in selector!

  const dispatch = useAppDispatch();
  // const dispatch = useAppDispatch() based on actions and useEffect...
  // page loads, dispatch, ..
  //
  const onClick = () => {
    // data from API? <-- has to talk to db via useEffect then dispatch from there
    // problem is gotta look like the user with the id, email etc.

    /** 
     user: {
       id: 12,
       name: 'gdfdf',
       email: 'asdad',
       createdAt: 'sdfds',
       updatedAt: 'sdfs',
       posts: [{}, {}],
       orders: [{}, {}, {}],
       reviews: [{}],
     }
     * 
     */
    dispatch(
      setUser({
        id: 12,
        name: 'NEW',
        email: 'NEW',
        createdAt: 'NEW',
        updatedAt: 'sdfs',
        posts: [{}, {}],
        orders: [{}, {}, {}],
        reviews: [{}],
      }),
    );
  };

  // to see redux object, console log user variable <---------

  const [anchorElNav, setAnchorElNav] = React.useState<EventTarget | undefined>(
    undefined,
  );
  // 32 -> React synthetic event is entire evt obj
  // specific type under evt ... --> EventTarget
  const [anchorElUser, setAnchorElUser] = React.useState<
    EventTarget | undefined
  >(undefined);

  const handleOpenNavMenu = (event: React.SyntheticEvent<EventTarget>) => {
    dispatch(
      setUser({
        id: 12,
        name: 'NEW',
        email: 'NEW',
        createdAt: 'NEW',
        updatedAt: 'sdfs',
        posts: [{}, {}],
        orders: [{}, {}, {}],
        reviews: [{}],
      }),
    );
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.SyntheticEvent<EventTarget>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(undefined);
  };

  // set to undefined --> types
  const handleCloseUserMenu = () => {
    setAnchorElUser(undefined);
  };

  // note: add 'sticky' to position later
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Zapp Concepts
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Zapp Concepts
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
