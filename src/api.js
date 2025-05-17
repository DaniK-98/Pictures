import axios from "axios";
//HOLAAAAAAA GAYYY
const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=cSrQBFUpKF1kRSil19pADOwY7SupvdJ3QU6VN7JJ5LI'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages