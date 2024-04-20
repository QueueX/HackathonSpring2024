import { Link } from "react-router-dom";
import { useState,useCallback } from "react";
import RegistrationForm from "./RegistrationForm";
import AddMemberForm from './AddMemberForm'

export default function Registration() {
    const [addMembActive,setAddMembActive] = useState(false);
    let [members,setMembers] = useState([]);
    
    
    const addMemberHandler = useCallback((obj) => {
        let tempMembers = members.slice(0);
        tempMembers.push(obj);
        setMembers(tempMembers);
        console.log(tempMembers);
    })
    return (
        <>  

            <RegistrationForm membersChange={(obj) => setMembers(obj)} members={members} addMember={(isActive) => setAddMembActive(isActive)}/>
            {addMembActive && <AddMemberForm addMembHandler={addMemberHandler} closeForm={(isActive) => setAddMembActive(isActive)}/>}
        </>
    )
}