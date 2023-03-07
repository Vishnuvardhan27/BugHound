import "./App.css";
import CreateBug from "./CreateBug1";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { userColumns } from "./columns";
import { useTableSearch } from "./useTableSearch";

const { Search } = Input;

const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:3005/bugs",{ crossDomain: true });
  return { data };
};

function App() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/createBug");
  };

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
