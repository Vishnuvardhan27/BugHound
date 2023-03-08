import axios from "axios";

const handleDeletebug = async (record) => {
  const { data } = await axios.delete(`http://localhost:3005/bugs/${record.bug_id}`,{ crossDomain: true });
  return { data };
};

export const userColumns = [
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
        <button onClick={handleDeletebug(record)}>
          {"Update"}
        </button>
       ),
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "Delete",
      render: (text, record) => (
        <button onClick={handleDeletebug(record)}>
          {"Delete"}
        </button>
       ),
    }
  ];
  