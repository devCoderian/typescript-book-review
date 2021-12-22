import Layout from './Layout';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../redux/modules/auth';
import { Button, PageHeader, Table } from 'antd';

function List() {
    
    return (
        <Layout>
            <PageHeader title = {<div>Book List</div>}
            extra = {[
            <Button key ="1" type = "primary" onClick = {goAdd}>Add Book</Button>,
            <Button key ="2" type = "primary" onClick = {logout}>Logout</Button>
        ]}
        />
        <Table dataSource={[]} columns= {[
              {title :'Book',
              dataIndex: 'mmok,',
              key: "book",
              render: () => <div>book</div>,
        },
        ]}
          loading = {books === null || loading}
          showHeader = {false}
          rowKey ="bookId"
          pagination ={false}
        />
        </Layout>
    )
    function click(){
       
    }
    function goAdd(){
        
    }
}

export default List
