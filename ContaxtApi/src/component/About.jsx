import React from 'react'
import File from './file'
function about(props) {
  return (<>
    <div>about value={props.count}</div>
    <File count={props.count}/>
    </>
  )
}

export default about