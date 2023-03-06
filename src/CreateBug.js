import React, { useState } from 'react';
import './CreateBug.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Send } from '@mui/icons-material';
import ReactDOM from 'react-dom/client';
function CreateBug() {
    const [newBugDescription,setNewBugDescription] = useState("");
    const [newProgram,setNewProgram] = useState("");
    const [reporttype, setreporttype] = useState(["Coding Error", "Design Issue", "Suggestion", "Documentation", "Hardware", "Query"]);
    const [severity, setSeverity] = useState(["Blocker","Critical","Major","Minor"]);
    const [reported, setReported] = useState(["Mike","Namrata","Vishnu","Tharni"]);
    const [area, setArea] = useState(["Login Module","Landing Page","Static Page","Api Issues"]);
    const [assigned, setAssigned] = useState(["Sangeetha","Namrata","Tharni","Vishnu"]);
    const [stat, setStat] = useState(["Open","Closed","In progress"]);
    const [testBy, setTestBy] = useState(["Vishnu","Tharni","Namrata"]);
    const [comments,setComments] = useState([""])
    const [newProblem,setNewProblem] = useState("");
    const [newSuggested, setNewSuggested] = useState("")
    const [newDate, setNewDate] = useState("")


    const test = testBy.map(test=> test
      )
      const handleTest = (e) => (testBy[e.target.value])
    
    const assign = assigned.map(assign => assign
      )
      const handleAssignedBy = (e) => (assigned[e.target.value])
    const status = stat.map(status => status
      )
      const handleStatus = (e) => (stat[e.target.value])
    const funcArea = area.map(funcArea => funcArea
      )
      const handleArea = (e) => (area[e.target.value])

    const reportedBy = reported.map(reportedBy => reportedBy
      )
      const handleReportedBy = (e) => (reported[e.target.value])

    const Add = reporttype.map(Add => Add
      )
      const handleReport = (e) => (reporttype[e.target.value])

    const issue = severity.map(issue => issue
      )
      const handleSeverity = (e) => (severity[e.target.value])
    
    const navigate = useNavigate();

    const handleOnClick = () => {
      navigate('/');
    };
  return (
    
    <form>
      <div className="formBox flex">
    <span className='header'>CREATE A BUG</span>
    <Button  className='back' startIcon={<ChevronLeft/>} onClick={handleOnClick}>Back</Button>
    <div className='body'>
    <div className="flex flex-row max-width">
          <div className="flex-50 max-width">
            <div>
              <label>Program</label>
            </div>
            <div>
              <input
                className="inputButtons"
                type="text"
                value={newProgram}
                onChange={(e) => setNewProgram(e.target.value)}
              />
            </div>
          </div>

          <div className="inputSpace flex-50 max-width">
            <div>
              <label>Report Type</label>
            </div>
            <div>
              <select
                onChange={(e) => handleReport(e)}
                className="inputButtons"
              >
                {Add.map((address, key) => (
                  <option value={key}>{address}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* <div>
        <div className="flex-50 max-width">
            <div>
              <label>Severity</label>
            </div>
            <div>

              <select
                onChange={e => handleSeverity(e)}
                className='inputButtons' >
                {
                  issue.map((address, key) => <option value={key}>{address}</option>)
                }
              </select >
            </div>
          </div>
        </div> */}
       

        <div className="flex flex-row max-width">
          <div className="flex-50 max-width">
            <div>
              <label>Problem Summary</label>
            </div>
            <div>
              <input
                className="inputButtons"
                type="text"
                value={newBugDescription}
                onChange={(e) => setNewBugDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="inputSpace flex-50 max-width">
            <div>
              <label>Severity</label>
            </div>
            <div>

              <select
                onChange={e => handleSeverity(e)}
                className='inputButtons' >
                {
                  issue.map((address, key) => <option value={key}>{address}</option>)
                }
              </select >
            </div>
          </div>
          
        </div>

        <div className="flex flex-row max-width">
          <div className="flex-50 max-width">
            <div>
              <label>Suggested Fix</label>
            </div>
            <div>
              <input
                className="inputButtons"
                type="text"
                value={newSuggested}
                onChange={(e) => setNewSuggested(e.target.value)}
              />
            </div>
          </div>

          <div className=" inputSpace flex-50 max-width">
            <div>
              <label>Reported By</label>
            </div>
            <div>
              <select
                onChange={(e) => handleReportedBy(e)}
                className="inputButtons"
              >
                {reportedBy.map((address, key) => (
                  <option value={key}>{address}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-row max-width">
          <div className="flex-50 max-width">
            <div>
              <label>Date</label>
            </div>
            <div>
              <input
                className="inputButtons"
                type="text"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
              />
            </div>
          </div>

          <div className=" inputSpace flex-50 max-width">
            <div>
              <label>Functional Area</label>
            </div>
            <div>
              <select onChange={(e) => handleArea(e)} className="inputButtons">
                {funcArea.map((address, key) => (
                  <option value={key}>{address}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-row max-width">
          <div className="flex-50 max-width">
            <div>
              <label>Assigned By</label>
            </div>
            <div>
              <select
                onChange={(e) => handleAssignedBy(e)}
                className="inputButtons"
              >
                {assign.map((address, key) => (
                  <option value={key}>{address}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="inputSpace flex-50 max-width">
            <div>
              <label>Comments</label>
            </div>
            <div>
              <input
                className="inputButtons"
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row max-width">
          <div className="flex-50 max-width">
            <div>
              <label>Status</label>
            </div>
            <div>
              <select
                onChange={(e) => handleStatus(e)}
                className="inputButtons"
              >
                {status.map((address, key) => (
                  <option value={key}>{address}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="inputSpace flex-50 max-width">
            <div>
              <label>Tested By</label>
            </div>
            <div>
              <select onChange={(e) => handleTest(e)} className="inputButtons">
                {test.map((address, key) => (
                  <option value={key}>{address}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="buttons">
    <Button variant="contained"className='createbutton' endIcon={<Send/>} >Create</Button>
    </div>
  </form>
  )
}

export default CreateBug