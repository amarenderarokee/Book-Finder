import axios from 'axios';

/**
 * Fetch books from Open Library API based on search query.
 * Filters books to match the query string in the title.
 * @param {string} query - Search term.
 * @returns {Array} Array of books that match the search term.
 */
export const fetchBooks = async (query) => {
    try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
        const filteredResults = response.data.docs.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
        return filteredResults;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};