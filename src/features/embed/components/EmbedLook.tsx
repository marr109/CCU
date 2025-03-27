
// import React, { useCallback, useContext, useState, useEffect } from 'react'
// import type { LookerEmbedLook } from '@looker/embed-sdk'
// import { LookerEmbedSDK } from '@looker/embed-sdk'
// import type { ExtensionContextData40 } from '@looker/extension-sdk-react'
// import { ExtensionContext40 } from '@looker/extension-sdk-react'
// import { EmbedContainer } from './components/EmbedContainer'
// import type { EmbedProps } from './types'
// import { fetchTableValues } from './utils'
// import { FormControl, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@mui/material'
// import styled from 'styled-components'

// const DashboardContent = styled(Paper)`
//   padding: 16px;
//   overflow: auto;
// `

// const EmbedLook: React.FC<EmbedProps> = ({ id, filters, field }) => {

//   const extensionContext = useContext<ExtensionContextData40>(ExtensionContext40);
//   const [look, setLook] = React.useState<LookerEmbedLook>();
//   const [selectedFiltros, setFiltros] = useState('');
//   const [valuesData, setValuesData] = useState([]);
//   const { coreSDK } = useContext(ExtensionContext40);

//   //listen global filter from props and update embed dashboard
//   useEffect(() => {
//     if (look && filters) {
//       const upFilter = filters
//       // const upFilter = {
//       //   "dw_com_st_cons_vta_base_mc_mv_poc.descr_zona_venta": "CENTRO COSTA",
//       //   "dw_com_st_cons_vta_base_mc_mv_poc.descr_distrito_venta": "COSTA",
//       //   "dw_com_st_cons_vta_base_mc_mv_poc.descr_oficina_comercial": ''
//       // }
//       //console.log(upFilter)
//       look.updateFilters(upFilter)
//       look.run()
//     }


//   }, [filters]);

//   // get query and field to filter from props

//   // PM: Extraer los datos directamente de Looker -r
//   const query = {
//     "model": "poc_venta_base",
//     "view": "dw_com_st_cons_vta_base_mc_mv_poc",
//     "fields": [field],
//   }

//   //  get filter values from api call
//   useEffect(() => {
//     fetchTableValues(coreSDK, query)
//       .then(response => {
//         //console.log(JSON.stringify(response));
//         // Do something with the retrieved data
//         setValuesData(response)
//       })
//       .catch(error => {
//         console.error('Error fetching table values:', error);
//       });

//   }, []);

//   // handle change event in selected filter
//   function handleChange(e) {
//     setFiltrosVenta(e.target.value);
//   }
//   // call Looker Api for emded a Dashboard with id
//   const embedCtrRef = useCallback((el) => {
//     const hostUrl = extensionContext?.extensionSDK?.lookerHostData?.hostUrl
//     if (el && hostUrl) {
//       LookerEmbedSDK.init(hostUrl)
//       LookerEmbedSDK.createLookWithId(id as number)
//         .withParams({
//           // theme: "dev_theme", // When you want to preview a different theme, this should match with a theme in Looker > Admin > Themes
//           _theme: JSON.stringify({
//             show_filters_bar: false,
//           }),
//         })
//         .appendTo(el)
//         .withDynamicIFrameHeight()
//         .build()
//         .connect()
//         .then(setLook)
//         .catch((error: Error) => {
//           console.error('Connection error', error)
//         })
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   // listen to changes in selectFiltros and update the dashboard
//   useEffect(() => {
//     const runLook = () => {
//       const filterField: object = {}
//       filterField[field] = selectedFiltros
//       if (look) {
//         look.updateFilters(filterField)
//         look.run()
//       }
//     }
//     runLook();
//   }, [selectedFiltros]);

//   return (
//     <>
//       <Typography variant="h6" gutterBottom>Look {id}</Typography>
//       {/* Select*/}
//       {valuesData && (
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel id="localFilter-helper-standard-label-autowidth">Filtro</InputLabel>
//           <Select
//             //defaultValue={selectFiltros}
//             labelId="localFilter-label"
//             id="localFilter"
//             name="localFilter"
//             value={selectFiltros}
//             label="Filtro"
//             onChange={handleChange}
//           >
//             <MenuItem value=""> <em>NINGUNO</em> </MenuItem>
//             {valuesData && valuesData.filter(nombre => nombre !== null).map((nombre, index) => (
//               <MenuItem key={index} value={nombre}> {nombre} </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       )}
//       <DashboardContent>
//         <EmbedContainer ref={embedCtrRef} />
//       </DashboardContent>
//       <Toolbar />
//       <Typography variant="subtitle3" gutterBottom>datos filtrados</Typography>
//       <Typography paragraph>{selectFiltros}</Typography>
//     </>
//   )
// }

// export default EmbedLook
