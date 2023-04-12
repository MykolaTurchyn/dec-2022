import {simpsons} from "../FakeData";
import React from "react";
import Simpson from "../simpson/Simpson";

export default function Simpsons() {
    return (
        <div>
            <h1>Simpson Family</h1>
            {
                simpsons.map((simpson, index) =>
                    <Simpson simpson={simpson} key={index}/>
                )
            }
        </div>
    );
}