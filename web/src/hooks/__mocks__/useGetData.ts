const MOCK_ARTICLE = {
  _id: '0',
  _raw: null,
  slug: 'foo',
  title: 'bar',
  type: null,
  publishDate: '02/11/2002',
  body: {
    raw: '',
    code: ''
  }
}

export const useGetData = () => {
  return [MOCK_ARTICLE]
}
