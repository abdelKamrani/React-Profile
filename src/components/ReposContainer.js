import React from 'react'
import Repo from './Repo'

function ReposContainer({repos}) {
  return (
    <div className='repos-container'>
        {repos?.map((repo)=>{
            return(
                <Repo repo={repo}/>
            )
        })}
    </div>
  )
}

export default ReposContainer