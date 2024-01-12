//gets list of public Github repositories for a specific user

export default async function GetAllRepos() {
    const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
    const username = process.env.GITHUB_USERNAME
    if (!username) {
        throw new Error(`please enter Github username`);
    }
    return fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {headers: {
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
      }} )
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch README: ${response.status} ${response.statusText}`
                );
            }
            return response.json();
        })
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.error(error);
        });

    return
}