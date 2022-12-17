import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {addNumbers, check, eraseOneSymbol} from "./pindodeReducer";

const Pincode = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector((state: RootState) => state.pinCode.value);
  const styleOutput = useSelector((state: RootState) => state.pinCode.style);
  console.log(styleOutput);
  let pincode: string = '';
  for (let i = 0; i < displayValue.length; i++) {
    pincode += '*';
  }

  const numbers = [];
  for (let i = 1; i <= 9; i++) {
    numbers.push(i.toString());
  }
  return (
    <div>
      <p style={{width: "112px", height: "50px"}}
         className={styleOutput + "ms-1 mt-2 border border-secondary"}>
        {pincode}
      </p>
      <div className="col-1 d-flex flex-wrap flex-row-reverse justify-content-around justify-content-evenly">
        {numbers.reverse().map((num) => (
          <button key={Math.random()} className="btn btn-light btn-outline-secondary mt-1"
                  onClick={() => dispatch(addNumbers(num))}>{num}</button>
        ))}
        <button className="btn btn-light btn-outline-secondary mt-1" onClick={() => dispatch(check())}>E</button>
        <button className="btn btn-light btn-outline-secondary mt-1" onClick={() => dispatch(addNumbers('0'))}>0
        </button>
        <button className="btn btn-light btn-outline-secondary mt-1"
                onClick={() => dispatch(eraseOneSymbol())}>{"<"}</button>
      </div>
    </div>
  );
};

export default Pincode;