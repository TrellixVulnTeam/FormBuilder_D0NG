import { useState } from "react";

const useMembers = (initial) => {
  const [members, setMembers] = useState(initial);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name + "a" + e.target.value);
    setMembers({
      ...members,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setMembers(initial);
  };

  return [members, handleChange, reset];
};

export default useMembers;
