import React from 'react'
import useGithubList from '../../hooks/useGithubList'
import Github from '../Github/Github'
import './GithubList.css'

const GithubList = () => {
    const [githubListState, setGithubListState] = useGithubList(false)

    return (
        <div className='github-list-wrapper'>
            <div className='github-wrapper'>
                
                {
                    (githubListState.isLoading) ? 'Loading...' :
                    githubListState.githubList.map((p) => <Github name={p.name} image={p.image} key={p.id} id={p.name} />)
                    
                }
            </div>
        </div>
    )
}

export default GithubList