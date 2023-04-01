import "./App.css";
import CreateBug from "./CreateBug1";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { useTableSearch } from "./useTableSearch";


const { Search } = Input;

const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:3005/bugs",{ crossDomain: true });
  return { data };
};

function App() {
  const navigate = useNavigate();

  const userColumns = [
    {
      title: "Bug ID",
      dataIndex: "bug_id",
      key: "bug_id"
    },
    {
      title: "Problem Summary",
      dataIndex: "problem_summary",
      key: "problem_summary"
    },
    {
      title: "Severity",
      dataIndex: "severity",
      key: "severity"
    },
    {
      title: "Reported_by",
      dataIndex:"reported_by",
      key: "reported_by",
    },
    {
      title: "Assigned To",
      dataIndex: "assigned_to",
      key: "assigned_to"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Update",
      dataIndex: "update",
      key: "update",
      render: (text, record) => (
        <button onClick={()=>{
          console.log(record)
           navigate(`/updateBug/${record.bug_id}`,{state : {record}})
          // <Link to="/updateBug/"state={{ bug: record }} />
        }}>
          {"Update"}
        </button>
       ),
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "Delete",
      render: (text, record) => (
        <button onClick={()=>{
          console.log(record)
          axios.delete(`http://localhost:3005/bugs/${record.bug_id}`,{ crossDomain: true });
        }}>
          {"Delete"}
        </button>
       ),
    }
  ];

  const handleOnClick = () => {
    navigate("/createBug");
  };

  const handleLogout = () => {
    navigate("/");
  }

  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers,
  });

  return (
    <div className="App">
      <p className="App-header">
        <p>BUGHOUND</p>
      </p>
      <p className="app-header-search">
        <p className="create-bug-button">
          <Button  variant="contained" onClick={handleOnClick}>
          Create a bug
          </Button>
        </p>
        <Search
          onChange={(e) => setSearchVal(e.target.value)}  
          placeholder="Search"
          enterButton
          style={{ position: "sticky", top: "0", left: "0" }}
        />
        <Button  variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </p>
      <>
      
        <br /> <br />
        <Table
          rowKey="name"
          dataSource={filteredData}
          columns={userColumns}
          loading={loading}
          pagination={false}
        />
      </>
    </div>
  );
}

export default App;
