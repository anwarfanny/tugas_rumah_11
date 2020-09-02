import React from "react";
import axios from "../../node_modules/axios/dist/axios.js";

function onClick(event) {
    event.preventDefault();
    
    const llist = document.getElementById("inputlist").value;

    const data = {
        list,
    };
    axios 
      .post("http://localhost:3000/list", data)
      .then((response) => {
          alert("data berhasil masuk");
      })
      .cetch((error) =>{
          alert("error");
      });
}