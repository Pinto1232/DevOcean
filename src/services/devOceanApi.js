import  {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 



/* Create header */
const devOnceHeader = { 
    'Content-Type': 'application/json',
}; 

/* Base url */
const baseUrl = 'https://api.jsonbin.io/b/6231abada703bb67492d2b8f'

const createRequest = (url) => ({url, headers: devOnceHeader}) 

export const devOceanApi = createApi({
    reducerPath: 'devOcenaApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({ 
        getDevOceanData: builder.query({
            query: () => createRequest(baseUrl)
        })
    })

})

export const {
    useGetDevOceanDataQuery,
} = devOceanApi;