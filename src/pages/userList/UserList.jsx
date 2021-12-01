import React from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import  {UserRows} from '../../dummyData';
import { Link } from 'react-router-dom';
import {useState} from "react"





function UserList() {

  const [data, setData] = useState(UserRows);

  const handleDelete =(id) => {
    setData(data.filter((item)=>item.id !== id)); //function to delete user
  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell: (params) => {
              return (
                  <div className="userListUser">
                      <img className="userListImg" src={params.row.avatar} alt=""/>
                      {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 140,
          editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
            editable: true,
          }, 
           {
            field: 'action',
            headerName: 'Action',
            width: 150, 
            renderCell:(params)=> {
                return (
                    <>
                    <Link to={"/user/"+params.row.id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }


        }
      ];
      
     
    return (
        <div className="userList">
              
              <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />


        </div>
    )
}

export default UserList
