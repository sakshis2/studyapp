import React from 'react'
import BottomDashboard from './BottomDashboard'
import LeftDashboard from './LeftDashboard'
import RightDashboard from './RightDashboard'
import '../CSS/Dashboard.css'

function DashBoard({email}) {
  return (
    //baccha mai khana kha ke aata hu
    <>
      <div className='backgroundDashboard'>
        <div className='leftDashboard'>
            <LeftDashboard />
        </div>
        <div class="play-button-outer">
            <div class="play-button"></div>
        </div>
        <div className='rightDashboard'>
          <RightDashboard />
        </div>
        <div className='bottomDashboard'>
          <BottomDashboard email={email}/>
        </div>
      </div>
    </>
  )
}

export default DashBoard