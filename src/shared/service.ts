import axios from "axios";

export const getTopStories = async (limit = 10) => {
    const response = await axios.get('topstories.json')
    if (response.status === 200) {
        return response.data.slice(0, limit);
    }
    return null;
}

export const getItemDetails = async (itemId: number) => {
    const response = await axios.get(`item/${itemId}.json`)
    if (response.status === 200) {
        return response.data;
    }
    return null;
}