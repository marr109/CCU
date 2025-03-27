// import React, { useState } from 'react'
// import { Switch, Route } from 'react-router-dom'
// import {
//   ComponentsProvider,
//   Layout,
// } from '@looker/components'
// import { Sidebar } from './components/Sidebar'
// import { SidebarFilter } from './components/SidebarFilter/SidebarFilter'
// import type { CcuExtensionProps } from './types'

// // Components loaded using code splitting
// //import { AsyncHome as Home } from './components/Home/Home.async'
// //import { AsyncEmbedDashboard as EmbedDashboard } from './components/Embed/EmbedDashboard.async'
// //import { AsyncEmbedLook as EmbedLook } from './components/Embed/EmbedLook.async'

// // Without code splitting
// import { Dashboard as DashboardIcon, Home as HomeIcon } from '@mui/icons-material';

// import styled from 'styled-components'
// import ResumenMensual from './components/Embed/ResumenMensual'

// const Container = styled.div`
//   display: flex;
//   overflow: hidden;
// `

// const MainContent = styled.main`
//   flex-grow: 1;
//   padding: 24px;
//   background-color: #f3f4f6;
//   min-height: 100vh;
// `

// // Rutas estáticas, volver dinámicas generar constantes y crear la ruta.
// export enum ROUTES {
//   HOME_ROUTE = '/',
//   RESUMEN_MENSUAL = '/resumen-mensual',
//   VENTAS_CONSOLIDADAS = '/ventas-consolidadas',
//   TEST_ZONE = '/test-zone',
//   NUEVO_DASHBOARD = '/nuevo-dashboard',
// }

// // Rutas estáticas, volver dinámicas.
// // Define an array of route names
// const routeNames = [
//   {
//     name: '',
//     icon: <DashboardIcon fontSize="small" />
//   },
//   {
//     name: 'Nuevo Dashboard',
//     icon: <DashboardIcon fontSize="small" />
//   },
//   // Add new route names here if needed
// ];


// // Generate routesConfig based on routeNames
// const routesConfig = [
//   { name: 'Home', component: ResumenMensual, path: '/' }, // Static Home route
//   ...routeNames.map(({ name }) => ({
//     name,
//     component: require(`./components/Embed/${name.replace(/\s+/g, '')}`).default, // Import component dynamically
//     path: `/${name.replace(/\s+/g, '-').toLowerCase()}` // Generate path from name
//   })),
// ];


// export const CcuExtension: React.FC<CcuExtensionProps> = ({ route, routeState, }) => {

//   const [globalFilters, setGlobalFilters] = useState('');

//   return (
//     <>
//       <ComponentsProvider>
//         {/* SideBars */}
//         <Layout hasAside>
//           <Sidebar route={route} routeState={routeState} config={routeNames} />
//           <SidebarFilter handleValue={setGlobalFilters} />
//           {/* Main */}
//           <MainContent>
//             <Container>
//               <Switch>
//                 {routesConfig.map(({ component: Component, path }) => (
//                   <Route key={path} path={path} exact>
//                     <Component filters={globalFilters} />
//                   </Route>
//                 ))}
//               </Switch>
//             </Container>
//           </MainContent>
//         </Layout>
//       </ComponentsProvider>
//     </>
//   )
// }

// export default CcuExtension


