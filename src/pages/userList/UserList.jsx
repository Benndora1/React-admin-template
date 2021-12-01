import React from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'





function UserList() {

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
            width: 150,
            editable: true,
          }, 
           {
            field: 'action',
            headerName: 'Action',
            width: 150, 
            renderCell:(params)=> {
                return (
                    <>
                        <button className="userListEdit">Edit</button>
                         <DeleteOutline className="userListDelete"/>
                    </>
                )
            }


        }
      ];
      
      const rows = [
        { id: 1, username: 'Jon Snow',
         avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
         email: "hon@gmail.com",
         status: 'active',
         transaction: "$120"
          },
          { id: 2, username: 'Jon Snow',
          avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          email: "hon@gmail.com",
          status: 'active',
          transaction: "$120"
           },
           { id: 3, username: 'Jon Snow',
           avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
           email: "hon@gmail.com",
           status: 'active',
           transaction: "$120"
            },
            { id: 4, username: 'Jon Snow',
            avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            email: "hon@gmail.com",
            status: 'active',
            transaction: "$120"
             },
             { id: 5, username: 'Jon Snow',
             avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
             email: "hon@gmail.com",
             status: 'active',
             transaction: "$120"
              },
              { id: 6, username: 'Jon Snow',
              avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              email: "hon@gmail.com",
              status: 'active',
              transaction: "$120"
               },
              { id: 7, username: 'Jon Snow',
               avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
               email: "hon@gmail.com",
               status: 'active',
               transaction: "$120"
                },
                { id: 8, username: 'Jon Snow',
                avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                email: "hon@gmail.com",
                status: 'active',
                transaction: "$120"
                 },
                 { id: 9, username: 'Jon Snow',
                 avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                 email: "hon@gmail.com",
                 status: 'active',
                 transaction: "$120"
                  },
                  { id: 10, username: 'Jon Snow',
                  avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                  email: "hon@gmail.com",
                  status: 'active',
                  transaction: "$120"
                   }

             
    
      ];
    return (
        <div className="userList">
              
              <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />


        </div>
    )
}

export default UserList
