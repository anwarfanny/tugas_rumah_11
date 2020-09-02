import React from "react";
import "./input.css";
import onClick from "./index.js";

function Input() {
    return (
        <div>
            <div className="judul">
                <h1>ini to do list</h1>
            </div>
            <div className="container">
                <div className="row">
                    <form action="" id="addList" className="form">
                        <div className="input-group mb-4">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Create Your List..."
                            aria-label="Reaction's username"
                            aria-labelledby="button-addon2"
                            id="inputList"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary"
                                id="button-addone2"
                                onClick={onClick}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Input;