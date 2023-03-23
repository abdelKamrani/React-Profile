import React from 'react'
import { Link } from 'react-router-dom';

function Repo({repo}) {
    function formatDate(date){
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const dateFormated = new Date(date).toLocaleDateString('en-us',options);
        return dateFormated;
    }
  return (
    <Link to={repo.svn_url}>
    <div className='single-repo'>
        <div className='repo-name'>{repo.name}</div>
        <div className='create-date'><i>Created</i> :{formatDate(repo.created_at)}</div>
        <div className='update-date'><i>Updated </i>: {formatDate(repo.updated_at)}</div>
        <div className='language'><i>Languages</i>: {repo.language}</div>
        <div className='stares'><i>stares</i>: {repo.stargazers_count}</div>
    </div>
    </Link>
  )
}

export default Repo