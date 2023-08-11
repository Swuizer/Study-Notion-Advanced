import React from 'react'
import { connect } from 'react-redux';

const PathValue = (props) => {
    const pathName = props.value.replaceAll('/', ' / ');
    const lastPortion = pathName.substring(pathName.lastIndexOf('/') +1);

  return (
    <span className='bg-gradient-to-r from-richblack-600 via-richblack-600 to-yellow-100 text-transparent bg-clip-text capitalize'>
      {/* {pathName} */}
      {pathName.substring(0, pathName.lastIndexOf('/'))} / 
      <span className='text-yellow-50'>{lastPortion}</span>
    </span>
    
  )
}

export default PathValue