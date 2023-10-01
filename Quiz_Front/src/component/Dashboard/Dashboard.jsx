import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUserAction, getUserAction } from '../../Action/UserAction';
import './Dashboard.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.getUser.data);
  useEffect(() => {
    dispatch(allUserAction())
  }, [dispatch, allUserAction])
  const { loading, data } = useSelector((state) => state.Users);
  // console.log(user)
  return (
    <>
      {loading ? <h1>Loading...</h1> : <>
        {data.success ? <>
          <div className='heading'>
            <h1>Rank</h1>
            <h1>Name</h1>
            <h1>Score</h1>
          </div >
          {data.rankUser.map((value, index) => (
            <div key={index} className={user._id === value._id ? 'user-row' : 'dashboard-user'}>
              <h3>{value.rank}</h3>
              <h3>{value.name}</h3>
              <h3>{value.score}</h3>
            </div>
          ))}
        </> :
          <></>}


      </>}

    </>
  )
}

export default Dashboard