"use client"
import React, { useState } from 'react';
import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Application No.',
    dataIndex: 'no',
    key: 'no',
    className: 'hidden md:table-cell',
  },
  {
    title: 'Applied On',
    dataIndex: 'date',
    key: 'date',
    className: 'hidden md:table-cell',
  },
  {
    title: 'Application Title',
    dataIndex: 'title',
    key: 'title',
    className: 'w-full md:w-auto',
  },{
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    className: 'w-full md:w-auto',
  },
  {
    title: 'Option',
    key: 'actions',
    dataIndex:'status',
    render: (text, record, index) => (
      <div className="flex justify-end">
        <Button.Group>
          <Button type="primary" onClick={() => handleEdit(record)} className="bg-blue-500 text-white">
            Edit
          </Button>
          <Button type="primary" onClick={() => handleDelete(record)} className="bg-yellow-500 text-white hover:bg-black-800 ">
            Delete
          </Button>
        </Button.Group>
      </div>
    ),
    className: 'w-32 md:w-auto',
  },
];

const data = [
  {
    key: '1',
    no: '2682762876',
    date: '27/9/23',
    title: 'Loan for task 1',
    status:'Partners consent'
  },
  {
    key: '2',
    no: '2826782899',
    date: '27/6/22',
    title: 'Loan for task 2',
    status:'MOA/AOA requested'
  },
  {
    key: '3',
    no: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEdit = (record) => {
    console.log('Editing record:', record);
  };

  const handleDelete = (record) => {
    console.log('Deleting record:', record);
  };

  return (
    <div className="bg-white p-8">
      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: data.length,
            onChange: handlePageChange,
            className: 'mt-4 md:mt-0 md:text-right',
          }}
        
          className="w-full border-gray border-2 divide-y divide-gray-200"
        />
      </div>
    </div>
  );
};

export default TableComponent;