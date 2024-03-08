"use client";

import { useState } from "react";
import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  countAtom,
  userProfileAtom,
} from "/Users/air/Desktop/NextJS/firstnext/component/jotaiAtoms.js";

function addNewUser() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);
  const [count, setCount] = useAtom(countAtom);
  const [userProfile, setUserProfile] = useAtom(userProfileAtom);
  const addNewUserHandler = async () => {
    setCount(count + 5);
    console.log(name, age, email, userProfile);
  };
  useEffect(() => {
    console.log(`Current count is: ${count}`);
  }, [count]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addNewUserHandler}> AddBtn </button>
    </div>
  );
}
export default addNewUser;
