import React, { useState } from "react";
import "./CreateBug.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Send } from "@mui/icons-material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function CreateBug() {
  const [problem, setProblem] = useState("");
  const [problemSummary, setProblemSummary] = useState("");
  const [severity, setSeverity] = useState("");
  const [reportType, setReportType] = useState("");
  const [suggestedFix, setSuggestedFix] = useState("");
  const [reproducible, setReproducible] = useState(false);
  const [reportedDate, setReportedDate] = useState("");
  const [reportedBy, setReportedBy] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [functionalArea, setFunctionalArea] = useState("");
  const [comments, setComments] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [resolution, setResolution] = useState("");
  const [resolutionVersion, setResolutionVersion] = useState("");
  const [resolvedBy, setResolvedBy] = useState("");
  const [resolvedDate, setResolvedDate] = useState("");
  const [testedDate, setTestedDate] = useState("");
  const [testedBy, setTestedBy] = useState("");
  const [program, setProgram] = useState("");
  const [treatedAsDeferred, setTreatedAsDeferred] = useState(false);

  function handleTreatedAsDeferredChange(e) {
    setTreatedAsDeferred(e.target.Checked);
  }

  function handleTestedByChange(e) {
    setTestedBy(e.target.value);
  }

  function handleResolvedByChange(e) {
    setResolvedBy(e.target.value);
  }

  function handleResolutionVersionChange(e) {
    setResolutionVersion(e.target.value);
  }

  function handleResolutionChange(e) {
    setResolution(e.target.value);
  }

  function handlePriorityChange(e) {
    setPriority(e.target.value);
  }

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function handleFunctionalAreaChange(e) {
    setFunctionalArea(e.target.value);
  }

  function handleReproducibleChange(e) {
    setReproducible(e.target.Checked);
  }

  function handleAssignedToChange(e) {
    setAssignedTo(e.target.value);
  }

  function handleReportedByChange(e) {
    setReportedBy(e.target.value);
  }

  function handleReportTypeChange(e) {
    setReportType(e.target.value);
  }
  function handleSeverityChange(e) {
    setSeverity(e.target.value);
  }

  function handleProgramChange(e) {
    setProgram(e.target.value);
  }

  function handleReset() {
    setProblem("");
    setProblemSummary("");
    setSeverity("");
    setReportType("");
    setSuggestedFix("");
    setReproducible(false);
    setReportedDate("");
    setReportedBy("");
    setAssignedTo("");
    setFunctionalArea("");
    setComments("");
    setStatus("");
    setPriority("");
    setResolution("");
    setResolutionVersion("");
    setResolvedBy("");
    setResolvedDate("");
    setTestedDate("");
    setTestedBy("");
    setProgram("");
    setTreatedAsDeferred(false);
  }

  function handleCreateBug(e) {
    e.preventDefault();

    // Construct the data object with the form values
    const data = {
      program: program,
      problem: problem,
      problemSummary: problemSummary,
      severity: severity,
      reportType: reportType,
      suggestedFix: suggestedFix,
      reproducible: reproducible ? true : false,
      reportedDate: reportedDate,
      reportedBy: reportedBy,
      assignedTo: assignedTo,
      functionalArea: functionalArea,
      comments: comments,
      status: status,
      priority: priority,
      resolvedDate: resolvedDate,
      resolution: resolution,
      resolutionVersion: resolutionVersion,
      resolvedBy: resolvedBy,
      testedDate: testedDate,
      testedBy: testedBy,
      treatedAsDeferred: treatedAsDeferred ? true : false,
    };
    console.log(data);
    // Call the API with the data
    fetch(
      "http://localhost:3005/bugs/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Bug created successfully:", data);
        handleReset();
      })
      .catch((error) => {
        console.error("Error creating bug:", error);
      });
  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          New Bug Report Entry Page
        </h1>
        <div className="createbugform">
          <FormControl fullWidth>
            <div className="row1">
              <label>Program</label>
              <Select
                labelId="program"
                className="program-select"
                id="program-select"
                value={program}
                label="Program"
                onChange={handleProgramChange}
                size="small"
                style={{ width: "25%" }}
              >
                <MenuItem value={"CodeSnap"}>CodeSnap</MenuItem>
                <MenuItem value={"CodeFlow"}>CodeFlow</MenuItem>
                <MenuItem value={"CodeCompass"}>CodeCompass</MenuItem>
                <MenuItem value={"CodeTracker"}>CodeTracker</MenuItem>
                <MenuItem value={"CodeGuard"}>CodeGuard</MenuItem>
                <MenuItem value={"CodeLens"}>CodeLens</MenuItem>
                <MenuItem value={"CodeShield"}>CodeShield</MenuItem>
                <MenuItem value={"CodeMentor"}>CodeMentor</MenuItem>
              </Select>
              <label>Report Type</label>
              <Select
                labelId="Report Type"
                className="report-type-select"
                id="report-type-select"
                value={reportType}
                label="Report Type"
                onChange={handleReportTypeChange}
                size="small"
                style={{ width: "25%" }}
              >
                <MenuItem value={"Functional Bugs"}>Functional Bugs</MenuItem>
                <MenuItem value={"Usability Bugs"}>Usability Bugs</MenuItem>
                <MenuItem value={"Performance Bugs"}>Performance Bugs</MenuItem>
                <MenuItem value={"Compatibility Bugs"}>
                  Compatibility Bugs
                </MenuItem>
                <MenuItem value={"Security Bugs"}>Security Bugs</MenuItem>
                <MenuItem value={"Documentation Bugs"}>
                  Documentation Bugs
                </MenuItem>
                <MenuItem value={"Localization Bugs"}>
                  Localization Bugs
                </MenuItem>
                <MenuItem value={"Integration Bugs"}>Integration Bugs</MenuItem>
              </Select>
              <label>Severity</label>
              <Select
                labelId="Severity"
                id="severity-select"
                value={severity}
                label="Severity"
                onChange={handleSeverityChange}
                size="small"
                style={{ width: "25%" }}
              >
                <MenuItem value={"Minor"}>Minor</MenuItem>
                <MenuItem value={"Major"}>Major</MenuItem>
                <MenuItem value={"Serious"}>Serious</MenuItem>
              </Select>
            </div>
            <div className="problem-summary-textfeild">
              <TextField
                required
                id="outlined-required"
                label="Problem Summary"
                value={problemSummary}
                onChange={(event) => {
                  setProblemSummary(event.target.value);
                }}
                style={{ width: "80%" }}
                defaultValue=""
              />
              <input
                type="checkbox"
                value={reproducible}
                onChange={handleReproducibleChange}
                lable="Reproducible"
              />
              Reproducible
            </div>
            <div className="problem-description-textfeild">
              <TextField
                placeholder="Problem Description"
                multiline
                rows={2}
                value={problem}
                onChange={(event) => {
                  setProblem(event.target.value);
                }}
                style={{ width: "100%" }}
              />
            </div>
            <div className="suggested-fix-textfeild">
              <TextField
                placeholder="Suggested Fix"
                multiline
                value={suggestedFix}
                rows={2}
                onChange={(event) => {
                  setSuggestedFix(event.target.value);
                }}
                style={{ width: "100%" }}
              />
            </div>
            <label>Reported By</label>
            <div className="reportanddate">
              <Select
                labelId="Reported By"
                className="reported-by-select"
                id="report-by-select"
                value={reportedBy}
                label="Reported by"
                onChange={handleReportedByChange}
                size="small"
                style={{ width: "30%" }}
              >
                <MenuItem value={"Mia"}>Mia</MenuItem>
                <MenuItem value={"William"}>William</MenuItem>
                <MenuItem value={"Lucas"}>Lucas</MenuItem>
                <MenuItem value={"Ava"}>Ava</MenuItem>
                <MenuItem value={"Emma"}>Emma</MenuItem>
                <MenuItem value={"James"}>James</MenuItem>
              </Select>
              <div className="date">
                <DatePicker
                  label="Reported Date"
                  value={reportedDate}
                  onChange={(newValue) => {
                    setReportedDate(newValue);
                  }}
                  inputFormat="dd-MM-yyyy"
                  style={{ width: "30%" }}
                />
              </div>
            </div>
            <div className="row2">
              <div className="funcArea">
                <label>Functional Area</label>
                <Select
                  labelId="Functional Area"
                  className="functional-area-select"
                  id="functional-area-select"
                  value={functionalArea}
                  label="Functional Area"
                  onChange={handleFunctionalAreaChange}
                  size="small"
                  style={{ width: "100%" }}
                >
                  <MenuItem value={"Development"}>Development</MenuItem>
                  <MenuItem value={"Testing"}>Testing</MenuItem>
                  <MenuItem value={"Deployment"}>Deployment</MenuItem>
                  <MenuItem value={"Maintenance"}>Maintenance</MenuItem>
                  <MenuItem value={"Planning"}>Planning</MenuItem>
                  <MenuItem value={"Architecture"}>architecture</MenuItem>
                </Select>
              </div>

              <div className="assignedTo">
                <label>Assigned To</label>

                <Select
                  labelId="Assigned To"
                  className="assigned-to-select"
                  id="assigned-to-select"
                  value={assignedTo}
                  label="Assigned To"
                  onChange={handleAssignedToChange}
                  size="small"
                  style={{ width: "100%" }}
                >
                  <MenuItem value={"Mia"}>Mia</MenuItem>
                  <MenuItem value={"William"}>William</MenuItem>
                  <MenuItem value={"Lucas"}>Lucas</MenuItem>
                  <MenuItem value={"Ava"}>Ava</MenuItem>
                  <MenuItem value={"Emma"}>Emma</MenuItem>
                  <MenuItem value={"James"}>James</MenuItem>
                </Select>
              </div>
            </div>
            <TextField
              style={{ marginBottom: "10px" }}
              placeholder="Comments"
              multiline
              rows={2}
              value={comments}
              onChange={(event) => {
                setComments(event.target.value);
              }}
            />

            <div className="row3">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "23%",
                }}
              >
                <label>Status</label>
                <Select
                  labelId="Status"
                  className="status-select"
                  id="status-select"
                  value={status}
                  label="Status"
                  onChange={handleStatusChange}
                  size="small"
                >
                  <MenuItem value={"Open"}>Open</MenuItem>
                  <MenuItem value={"Close"}>Close</MenuItem>
                  <MenuItem value={"Blocked"}>Blocked</MenuItem>
                </Select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "23%",
                }}
              >
                <label>Priority</label>
                <Select
                  labelId="Priority"
                  className="priority-select"
                  id="priority-select"
                  value={priority}
                  label="{Priority"
                  onChange={handlePriorityChange}
                  size="small"
                >
                  <MenuItem value={"High"}>High</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Low"}>Low</MenuItem>
                </Select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "23%",
                }}
              >
                <label>Resolution</label>
                <Select
                  labelId="Resolution"
                  className="resolution-select"
                  id="resolution-select"
                  value={resolution}
                  label="{Resolution"
                  onChange={handleResolutionChange}
                  size="small"
                >
                  <MenuItem value={"High"}>High</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Low"}>Low</MenuItem>
                </Select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "23%",
                }}
              >
                <label>Resolution-verison</label>
                <Select
                  labelId="Resolution-verison"
                  className="resolution-version-select"
                  id="resolution-version-select"
                  value={resolutionVersion}
                  label="Resolution Version"
                  onChange={handleResolutionVersionChange}
                  size="small"
                >
                  <MenuItem value={"V1"}>V1</MenuItem>
                  <MenuItem value={"V2"}>V2</MenuItem>
                  <MenuItem value={"V3"}>V3</MenuItem>
                </Select>
              </div>
            </div>

            <div className="row4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "23%",
                }}
              >
                <label>Resolved By</label>
                <Select
                  labelId="Resolved By"
                  className="resolved-by-select"
                  id="resolved-by-select"
                  value={resolvedBy}
                  label="Resolved By"
                  onChange={handleResolvedByChange}
                  size="small"
                  style={{ width: "100%", height: "80px" }}
                >
                  <MenuItem value={"Mia"}>Mia</MenuItem>
                  <MenuItem value={"William"}>William</MenuItem>
                  <MenuItem value={"Lucas"}>Lucas</MenuItem>
                  <MenuItem value={"Ava"}>Ava</MenuItem>
                  <MenuItem value={"Emma"}>Emma</MenuItem>
                  <MenuItem value={"James"}>James</MenuItem>
                </Select>
              </div>
              <DatePicker
                label="Resolved Date"
                className="dateRT"
                value={resolvedDate}
                onChange={(newValue) => {
                  setResolvedDate(newValue);
                }}
                inputFormat="dd-MM-yyyy"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "23%",
                }}
              >
                <label>Tested By</label>
                <Select
                  labelId="Tested By"
                  className="tested-by-select"
                  id="tested-by-select"
                  value={testedBy}
                  label="tested By"
                  onChange={handleTestedByChange}
                  size="small"
                  style={{ width: "100%", height: "80px" }}
                >
                  <MenuItem value={"Mia"}>Mia</MenuItem>
                  <MenuItem value={"William"}>William</MenuItem>
                  <MenuItem value={"Lucas"}>Lucas</MenuItem>
                  <MenuItem value={"Ava"}>Ava</MenuItem>
                  <MenuItem value={"Emma"}>Emma</MenuItem>
                  <MenuItem value={"James"}>James</MenuItem>
                </Select>
              </div>
              <DatePicker
                label="Tested Date"
                className="dateRT"
                value={testedDate}
                onChange={(newValue) => {
                  setTestedDate(newValue);
                }}
                inputFormat="dd-MM-yyyy"
              />
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                value={treatedAsDeferred}
                onChange={handleTreatedAsDeferredChange}
                lable="Treated as Deferred"
              />
              <span>Treated as Deferred</span>
            </div>
            <div className="submitType">
              <Button variant="contained" onClick={handleCreateBug}>
                Create Bug
              </Button>
              <Button variant="contained" onClick={handleReset}>
                Reset Bug
              </Button>
            </div>
          </FormControl>
        </div>
      </LocalizationProvider>
    </>
  );
}

export default CreateBug;
