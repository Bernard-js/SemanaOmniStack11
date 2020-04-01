import React, { useState } from 'react';

function App() {
    let [counter, setCounter] = useState(0)
    /*
     the method useCounter returns an array of two elements,
     with the parameter in key 0 and a setter method on key 1
    */
    function Increment(){
      setCounter(counter + 1) 
    }
}