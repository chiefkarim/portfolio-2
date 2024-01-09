const username = "chiefkarim";
const repoName = "Hiring-software-engineer-frontend";

const apiUrl = `https://api.github.com/repos/${username}/${repoName}/readme`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to fetch README: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  })
  .then((data) => {
    // Decode the content from base64
    const decodedContent = atob(data.content);
    console.log(decodedContent);
  })
  .catch((error) => {
    console.error(error);
  });
