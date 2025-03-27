
// import React, { useCallback, useContext, useEffect, useState } from 'react'
// import type { LookerEmbedDashboard, LookerEmbedFilterParams } from '@looker/embed-sdk'
// import { LookerEmbedSDK } from '@looker/embed-sdk'
// import type { ExtensionContextData40 } from '@looker/extension-sdk-react'
// import { ExtensionContext40 } from '@looker/extension-sdk-react'
// import { EmbedContainer } from './components/EmbedContainer'
// import type { EmbedProps } from './types'

// import styled from 'styled-components'
// import { Chip, FormControl, InputLabel, MenuItem, Select} from '@mui/material'

// import { fetchTableValues, getFieldName } from './utils'

// const DashboardCard = styled.div`
//   background-color: white;
//   padding: 1.5rem;
//   border-radius: 0.5rem;
//   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
// `;
// const DashboardContent = styled.div`
//   background-color: #f5f5f5;
//   border-radius: 0.25rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
 
//  const EmbedDashboard: React.FC<EmbedProps> = ({ id, filters , field }) => {
//    const [running, setRunning] = React.useState(true)
//    const [dashboard, setDashboard] = React.useState<LookerEmbedDashboard>()
//    const [localFilter, setlocalFilter] = useState('');
//    const [valuesData, setValuesData] = useState([]);

//    const extensionContext = useContext<ExtensionContextData40>(ExtensionContext40)
//    const { coreSDK } = useContext(ExtensionContext40)

//    const canceller = (event: any) => { return { cancel: !event.modal } } 
//    const updateRunButton = (running: boolean) => { setRunning(running) } 
//    const setupDashboard = (dashboard: LookerEmbedDashboard) => {
//     setRunning(false) 
//     setDashboard(dashboard)
//   }

//    // listen to changes and update update global filters in dashboard
//    useEffect(() => {
//     if (dashboard && filters) {
//       const filterParams = filters as LookerEmbedFilterParams
//       dashboard.updateFilters(filterParams)
//       dashboard.run()
//     }    
//   }, [filters]);

//   // listen to changes in localFilter and update the dashboard
//   useEffect(() => {
//     const updateLocalFilter = () => {
//       const filterField: { [key: string]: string } = {};
//       if (field) {
//         filterField[field] = localFilter;
//       }
//       if (dashboard) {
//         dashboard.updateFilters(filterField)
//         dashboard.run()
//       }
//     }
//     updateLocalFilter();
//   }, [localFilter]);

//   // get field name by passing filter name
//   const [fieldName, setFieldName] = useState('');
//   useEffect(() => {
//     const fetchFieldName = async () => {
//       if (field) {
//         const temp = getFieldName(field, coreSDK, id as string)
//         setFieldName(await temp)
//       }
//     }
//     fetchFieldName()
//   }, [])

//   // make the query and get the filter values from API call
//   const query = {
//     "model":"poc_venta_base",
//     "view":"dw_com_st_cons_vta_base_mc_mv_poc",
//     "fields": [fieldName]
//   } 
//   //  get filter values from API call
//   useEffect(() => {   
//     if (fieldName != ''){ 
//       fetchTableValues(coreSDK, query)
//       .then(response => {
//         //console.log('fetch table values',JSON.stringify(response));
//         // Do something with the retrieved data
//         setValuesData(response)
//       })
//       .catch(error => {
//         console.error('Error fetching table values:', error);
//       });
//     }
      
//   }, [fieldName]);
  
//   function handleChange(e: any) {
//     setlocalFilter(e.target.value);    
//   }

    
//    const embedCtrRef = useCallback( (el) => {
//        const hostUrl = extensionContext?.extensionSDK?.lookerHostData?.hostUrl
//        if (el && hostUrl) {
//          el.innerHTML = ''
//          LookerEmbedSDK.init(hostUrl) 
//          LookerEmbedSDK
//           .createDashboardWithId(id as number)
//           .withAllowAttr('fullscreen')
//           .withParams({ 
//             _theme: '{"show_filters_bar": false}'
//           })
//           .withFilters(filters as LookerEmbedFilterParams)
//           .withDynamicIFrameHeight()
//           .appendTo(el)
//           .on('dashboard:loaded', updateRunButton.bind(null, false))
//           .on('dashboard:run:start', updateRunButton.bind(null, true))
//           .on('dashboard:run:complete', updateRunButton.bind(null, false))
//           .on('drillmenu:click', canceller)
//           .on('drillmodal:explore', canceller)
//           .on('dashboard:tile:explore', canceller)
//           .on('dashboard:tile:view', canceller)
//           .build()
//           .connect()
//           .then(setupDashboard)
//           .catch((error: Error) => {
//             console.error('LookerEmbedSDK Error: Connection error', error)
//           })
//        }
//      },
//      // eslint-disable-next-line react-hooks/exhaustive-deps
//      []
//    )

//    return (
//      <>
//       <DashboardCard>
//         {/* <Typography variant="h6" gutterBottom>
//           Dashboard X
//         </Typography> */}
//         {field && (
//           <FormControl margin="normal" size="small">
//             <InputLabel id="localFilter-helper-label-autowidth">{field}</InputLabel>             
//             <Select
//               size="small"
//               label={field}
//               sx={{ width: 200 }}
//               value={localFilter}
//               onChange={handleChange}
//               MenuProps={{
//                 style: {
//                   maxHeight: 300,
//                       },
//                 }}
              
//             >
//               <MenuItem value=""> <em>Todos</em> </MenuItem>
//               {valuesData && valuesData.filter(nombre => nombre !== null).map((nombre, index) => (
//                 <MenuItem key={index} value={nombre}> {nombre} </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         )}
//         {localFilter && (
//           <Chip
//             label={localFilter}
//             onDelete={() => setlocalFilter('')}
//             variant="outlined"
//             style={{ marginBottom: '1rem', verticalAlign: 'bottom', marginLeft: '1rem' }}
//           />
//         )}
//         <DashboardContent>
//           <EmbedContainer ref={embedCtrRef} />
//         </DashboardContent>
//       </DashboardCard>

//      </>
//    )
//  }
 
//  export default EmbedDashboard