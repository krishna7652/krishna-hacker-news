import axios from "axios";

export const getTopStories = async (limit = 10) => {
    const response = await axios.get('topstories.json')
    if (response.status === 200) {
        return response.data.slice(0, limit);
    }
    return null;
}