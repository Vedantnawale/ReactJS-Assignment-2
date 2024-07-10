import { useEffect, useState } from "react";
import axios from "axios"


function useGithubList(githubName) {

    const [githubListState, setGithubListState] = useState({
        githubList: [],
        isLoading: true,
        githubUrl: 'https://api.github.com/users',
        nextUrl: '',
        prevUrl: ''
    })

    async function downloadProfiles() {
        
        setGithubListState((state) => ({ ...state, isLoading: true }))
        
        const response = await axios.get(githubListState.githubUrl)
        
        console.log(response);

        const githubResults = response.data

        console.log(githubResults);

        const githubListResults = githubResults.map((githuData) => {
            const github = githuData
            return {
                id: github.id,
                name: github.login,
                image: github.avatar_url,
            }
        })

        // console.log(githubListResults);

        setGithubListState((state) => ({
            ...state,
            githubList: githubListResults,
            isLoading: false
        }))

    }

    useEffect(() => {
        setGithubListState({ ...githubListState, isLoading: true })
        downloadProfiles();
    }, [githubListState.githubUrl])

    return [githubListState, setGithubListState]
}


export default useGithubList;