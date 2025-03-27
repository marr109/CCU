// import React, {useState, useEffect} from 'react'
// import { Link as RouterLink } from 'react-router-dom'
// import type { LinkProps } from 'react-router-dom'
// import styled from 'styled-components'
// import { ROUTES } from '../../CcuExtension'
// import { 
//   MenuItem, 
//   MenuItemProps, 
//   IconButton,
// } from '@mui/material'
// import { 
//   Dashboard as DashboardIcon, 
//   Home as HomeIcon,
//   ChevronLeft,
//   ChevronRight,
// } from '@mui/icons-material'
// import { motion } from 'framer-motion';
// import { SidebarProps } from './types'
// import { omit } from 'lodash'

// const AnimatedSidebar = styled(motion.div)`
//   background-color: #64A70B;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
// `;


// const StyledRouterLinkInner: React.FC<LinkProps & MenuItemProps> = (props) => (
//   <RouterLink {...omit(props, 'customizationProps')} />
// )

// const StyledRouterLink = styled(StyledRouterLinkInner)`
//   text-decoration: none;
//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//   }
//   &:hover {
//     background-color: rgba(255, 255, 255, 0.1);    
//   }
// `

// // Add this interface above the component
// interface MenuItem {
//   path: string;
//   name: string;
//   icon?: React.ReactNode;
// }

// export const Sidebar: React.FC<SidebarProps> = ({ route }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [menuAlign, setMenuAlign] = useState('flex-start');

//   // Automatically collapse sidebar on mobile devices
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setIsOpen(false);
//         setMenuAlign('center');
//       } else {
//         setIsOpen(true);
//         setMenuAlign('flex-start');
//       }
//     };

//     handleResize(); // Set initial state based on current window size
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // menu items array
//   const menuItems: MenuItem[] = [
//     {
//       path: ROUTES.VENTAS_CONSOLIDADAS, -- mod
//       name: 'Ventas Consolidadas', -- mod
//       icon: <DashboardIcon fontSize="small" />
//     },
//     {
//       path: ROUTES.NUEVO_DASHBOARD,
//       name: 'Nuevo Dashboard',
//       icon: <DashboardIcon fontSize="small" />
//     }
//   ];

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//     if (isOpen) {
//       setMenuAlign('center');
//     } else {
//       setMenuAlign('flex-start');
//     }

//   }
//   return (
//     <>
//         <AnimatedSidebar
//           initial={{ width: 60 }}
//           animate={{ width: isOpen ? 150 : 60 }}
//           transition={{ duration: 0.3 }}
//           isOpen={isOpen}
//         >
          
//           {/* Sidebar Collapse arrow */}
//           <IconButton
//             onClick={handleToggle}
//             style={{ marginBottom: '1rem', color: 'white', alignSelf: 'flex-end' }}
//           >
//             {isOpen ? <ChevronLeft /> : <ChevronRight />}
//           </IconButton>

//           {/* Sidebar Menu Items */}
//           {/* Resumen Mensual */}
//           {menuItems.map((item) => (
//             <StyledRouterLink to={item.path} key={item.path}>
//               <MenuItem
//                 style={{ padding: '0.5rem', color: 'white', textWrap: 'wrap', justifyContent: menuAlign}}
//                 selected={route === item.path || (item.path === ROUTES.VENTAS_TEST && route === ROUTES.HOME_ROUTE)}
//               >
//                 {item.icon}
//                 {isOpen && <span style={{ marginLeft: '0.5rem'}}>{item.name}</span>}
//               </MenuItem>
//             </StyledRouterLink>
//           ))}
//         </AnimatedSidebar>
//       </>
//   ) 
// }