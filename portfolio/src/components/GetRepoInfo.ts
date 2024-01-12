/*
how to use:
README file must have live preview keyword with the format:
live preveiw: https://subdomain.host.domain/path
or
[live preveiw](https://subdomain.host.domain/path)
if you have your read me in a different branch pass it in the parameters
pass in the branch name if the README file is not on the main branch
make sure the readme file is named README.md (case sensitive)

*/

export default async function GetRepoInfos({
  repoName,
  branch,
}: {
  repoName: string;
  branch?: string;
}) {
  const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
  const username = process.env.GITHUB_USERNAME
  let branchName ="main"
  if(branch){
    branchName = branch
  }
  console.log("username", username, repoName)
  let apiUrl = "";
  apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents`;
  if (branch) {
    apiUrl = apiUrl + `/README.md?ref=${branchName}`;
  } else {
    apiUrl = apiUrl + `/README.md?ref=${branchName}`;
  }

  if (!repoName || !username) {
    throw new Error(`please enter repository name and username`);
  }
  return fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
    }, cache: "no-store"
  })
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
      const result: any = {}
      //getting the livePREVIEW LINK
      if (decodedContent && typeof decodedContent === "string") {

        //getting live preview link
        const keyword = "live preview";
        const urlPattern = new RegExp(
          `(?:\\[${keyword}\\]\\((https?://\\S+)\\)|${keyword}\\s*:\\s*(https?://\\S+))`,
          "i"
        );
        let match = urlPattern.exec(decodedContent);
        if (match) {
          console.log("live preview: ", match[1] ? match[1] : match[2]);
          result.previewLink = match[1] ? match[1] : match[2]

         
        } else {
          console.error("no live preview found");
        }
        console.log(decodedContent)
        //getting preview image
        const imagePattern = /!\[preview image\s*\]\(([^)]+)\)/;
        match = imagePattern.exec(decodedContent)
        if (match) {
          console.log("preview  image:s ", match[1]);
          result.previewImage = `https://raw.githubusercontent.com/${username}/${repoName}/${branchName}/${match[1]}`
        } else {
          console.error("no live preview image found");
        }
        return result
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
