// import React, { useState, Suspense } from 'react'
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { ExtensionProvider40 } from '@looker/extension-sdk-react'
// // Components loaded using code splitting
// //import { AsyncCcuExtension as CcuExtension } from './CcuExtension.async'

// // If the Looker server does not support code splitting (version 7.20 and below) replace the above
// // imports with the imports below:
// import { CcuExtension } from './CcuExtension'

// export const App: React.FC = () => {
//   const [route, setRoute] = useState('')
//   const [routeState, setRouteState] = useState()
//   const theme = createTheme(
//     {
//       palette: {
//         primary: {
//           main: '#64a70b',
//         },
//         secondary: {
//           main: '#205c40',
//         },
//       },
//     }
//   );

//   const onRouteChange = (route: string, routeState?: any) => {
//     setRoute(route)
//     setRouteState(routeState)
//   }

//   return (
//     <Suspense fallback={<></>}>
//       <ThemeProvider theme={theme}>
//         <ExtensionProvider40 onRouteChange={onRouteChange}>
//           <CcuExtension route={route} routeState={routeState} />
//         </ExtensionProvider40>
//       </ThemeProvider>
//     </Suspense>
//   )
// }
