import { fetchAllMembers } from "../api";

import { useState, useEffect } from "react";
const Home = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    async function fetchUdata() {
      const members = await fetchAllMembers();
      setMembers(members);
    }
    fetchUdata();
  }, []);
  return (
    <div>
      <div>
        {members.map((member) => (
          <div key={member.id}>
            <p>
              {member.id},{member.name.firstname}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
