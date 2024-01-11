/*
how to use:
README file must have live preview keyword with the format:
live preveiw: https://subdomain.host.domain/path
or
[live preveiw](https://subdomain.host.domain/path)
if you have your read me in a different branch pass it in the parameters

*/

export default async function getData({
  repoName,
  username,
  branch,
}: {
  repoName: string;
  username: string;
  branch?: string;
}) {
  let apiUrl = "";
  apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents`;
  if (branch) {
    apiUrl = apiUrl + `/README.md?ref=${branch}`;
  } else {
    apiUrl = apiUrl + "/README.md?ref=main";
  }

  if (!repoName || !username) {
    throw new Error(`please enter repository name and username`);
  }
  return fetch(apiUrl, { cache: "no-store" })
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
      //getting the livePREVIEW LINK
      if (decodedContent && typeof decodedContent === "string") {
        console.log("content", decodedContent);
        //getting live preview link
        const keyword = "live preview";
        const urlPattern = new RegExp(
          `(?:\\[${keyword}\\]\\((https?://\\S+)\\)|${keyword}\\s*:\\s*(https?://\\S+))`,
          "i"
        );

        const match = urlPattern.exec(decodedContent);
        if (match) {
          console.log("live preview: ", match[1] ? match[1] : match[2]);
        } else {
          console.error("no live preview found");
        }
      }
      return decodedContent;
    })
    .catch((error) => {
      console.error(error);
    });
}
