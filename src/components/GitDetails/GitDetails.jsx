import React from 'react'
import { useParams } from 'react-router-dom'
import useGitDetails from '../../hooks/useGitDetails';
import './GitDetails.css'

const GitDetails = ({ githubName }) => {

    const { id } = useParams();
    const [github] = useGitDetails(id, githubName)

    return (
        <div className='github-details-wrapper'>
            <img className='github-details-image' src={github.image} />
            <div className='github-details-name'><span>{github.name}</span></div>
            <p className='github-details-bio'><span>Bio:</span> {github.bio}</p>
            <div className='github-numbers'>
                <h3 className='github-details-folllowers'>Followers: {github.followers}</h3>
                <h3 className='github-details-following'>Following: {github.following}</h3>
                <h3 className='github-details-repo'>Public Repository : {github.repo}</h3>
            </div>
        </div>
    )
}

export default GitDetails