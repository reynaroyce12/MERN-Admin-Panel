import React from 'react'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Avatar from '@mui/material/Avatar';

import FlexBetween from './flexBetween';
import { padding } from '@mui/system';

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
]

const Sidebar = ({drawerWidth, isSideBarOpen, setIsSideBarOpen, isNonMobile}) => {
    const { pathname } = useLocation()
    const [active, setActive] = useState(' ')
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])

    return (
        <Box component='nav' >
            {isSideBarOpen && (
                <Drawer 
                    open={isSideBarOpen}
                    onClose={() => setIsSideBarOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: 'border-box',
                            borderWidth: isNonMobile ? 0 : '2px',
                            width: drawerWidth,
                            paddingBottom: '7rem'
                        }
                    }}>
                    <Box width='100%'>
                        <Box m='1.5rem 2rem 2rem 3rem'>
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display='flex' alignItems='center' gap='0.5rem'>
                                    <Typography variant='h4' fontwweight='bold'>
                                        VISIONEY
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                                    <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem'}}>
                                            {text}
                                        </Typography>
                                    )
                                }
                                const lcText = text.toLowerCase()
                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`)
                                                setActive(lcText)
                                            }}
                                            sx={{
                                                backgroundColor: active === lcText ? theme.palette.secondary[300] : 'transparent',
                                                color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100],
                                            }}
                                        >
                                        <ListItemIcon
                                        sx={{
                                            ml: '2rem',
                                            color:
                                            active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200],
                                        }}>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                        {active === lcText && (
                                            <ChevronRightOutlined sx={{ ml: 'auto'}} />
                                        )}
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>

       {/* <Box position='absolute' top='55rem'>
            <Divider/>
            <FlexBetween textTransform="none" gap="1.3rem" m="1.5rem 2.5rem 0 3rem">
              <Avatar><SupervisorAccountIcon/></Avatar>
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  Jhon
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  Admin
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box> */}
                </Drawer>
            )}
        </Box>
  )
}

export default Sidebar