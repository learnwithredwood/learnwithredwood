// import { fetch } from 'cross-undici-fetch'

export const legal = async ({ slug }) => {
  const url = `http://localhost:8910/.redwood/functions/mdx/legal`

  const response = await fetch(url)
  const json = await response.json()

  // const found = json.data.filter((elem) => elem.slug === slug)
  // console.log(found)

  return {
    title: json.data.default[0].title,
    slug: json.data.default[0].slug,
    body: json.data.default[0].body.code,
  }
}
