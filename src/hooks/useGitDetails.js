import axios from "axios";
import { useEffect, useState } from "react";


function useGitDetails(id, githubName) {

    const [github, setGithub] = useState({})

    async function downloadGithub() {

        try {
            let response;
            console.log(id);

            if (githubName) {
                response = await axios.get(`https://api.github.com/users/${githubName}`)
            } else {
                response = await axios.get(`https://api.github.com/users/${id}`)
            }

            

            // console.log(response);

            console.log(response.data);

            setGithub({
                name: response.data.login,
                image: response.data.avatar_url,
                bio: response.data.bio,
                followers: response.data.followers,
                following: response.data.following,
                repo: response.data.public_repos
            })
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        downloadGithub()
    }, [])

    return [github]
}

export default useGitDetails;