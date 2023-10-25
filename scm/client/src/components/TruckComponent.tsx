import {useState, useEffect, FC } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Truck } from "../type/Truck";
import { getTruckData } from "../controllers/TruckController";

const columns: GridColDef[] = [
  {
    field: 'licencePlate',
    headerName: 'Licence plate',
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  }
];


const TruckComponent:FC=props=>{
  const [truckArray, setTruckArray] = useState<Array<Truck>>([]);
  useEffect(()=>{
      readTruckData();
  },[]);
  
  async function readTruckData(){
      await getTruckData()
      .catch(console.error)
      .then(response=>{
          setTruckArray(response);
          console.log(JSON.stringify(response));
      })
  }
    return(
      <div>
      {truckArray.length>0?(
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={truckArray}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
            </Box>
      ):(<h2>No data</h2>)}
      <p>{JSON.stringify(truckArray)}</p>
      </div>
    )
}
export default TruckComponent;