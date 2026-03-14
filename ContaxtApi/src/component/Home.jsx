import React from 'react'
import About from './about'
function home(props) {
  return (<>
    <div>home value={props.count}</div>
    <About count= {props.count}/>
    </>
  )
}

export default home