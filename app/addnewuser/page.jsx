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

  //   const [count, setCount] = useAtom(countAtom);
  //   const [userProfile, setUserProfile] = useAtom(userProfileAtom);
  const addNewUserHandler = async () => {
    // setCount(count + 5);
    // console.log(name, age, email, userProfile);
    let response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    console.log(response);
    if (response.res === "User validation was successful") {
      alert("User added successfully");
    } else [alert("User not added")];
  };
  //   useEffect(() => {
  //     console.log(`Current count is: ${count}`);
  //   }, [count]);
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
