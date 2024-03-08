"use client";

import { useState } from "react";
import { useAtom } from "jotai";
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
    console.log(name, age, email, count, userProfile);
  };
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
