import { Octokit } from 'octokit'
import { useEffect } from 'react'

const getComments = async () => {
  // TODO: Move this into the api layer
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  // get comments
  const comments = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{issue_number}/comments',
    {
      owner: 'learnwithredwood',
      repo: 'learnwithredwood',
      issue_number: 15,
    }
  )

  console.log({ comments })
}

const Comments = () => {
  useEffect(() => {
    getComments()
  }, [])

  // get the issue

  return (
    <div>
      <h2>{'Comments'}</h2>
      <p>{'Find me in ./web/src/components/Comments/Comments.tsx'}</p>
    </div>
  )
}

export { Comments }
