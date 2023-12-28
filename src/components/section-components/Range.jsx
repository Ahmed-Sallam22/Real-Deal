import React from 'react'
import { useState } from 'react';
import RangeSlider from "react-range-slider-input";


export default function Range(props) {
  const [values, setValue] = useState([0,12000]);
 



  return <>
<span className='text-dark'>{parseInt(values[0])} LE - {parseInt(values[1])} LE</span>
  <div className="div">

  <RangeSlider
  onInput={setValue}
        id="range-slider-ab"
        className="margin-lg"
        step={"any"}
        rangeSlideDisabled={true}
        max={30000}
        defaultValue={[0, 12000]}
/>
  </div>
  </>
}
