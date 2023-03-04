import React, { useState } from 'react';
function CreateBug() {
    const [newBugDescription,setNewBugDescription] = useState;
  return (
    <div>New Bug Report Entry Page
    <form>
        <label htmlFor="newBugDescription">
            New Bug Description:
        </label>
        <input type="text" id="newBugDescription" value={newBugDescription} onChange={event =>setNewBugDescription(event.target.value)}></input>
    </form>
    </div>
  )
}

export default CreateBug