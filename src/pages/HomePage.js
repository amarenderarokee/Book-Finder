import React, { useState } from "react";
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import { fetchBooks } from "../utils/api";

const HomePage = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) {
            setError("Please enter a search term."); // Display error if query is empty
            return;
        }
        
        setLoading(true); // Start loading
        setError(''); // Reset any previous error
        try {
            const results = await fetchBooks(query);
            setBooks(results);
            setError(results.length ? '' : 'No books found.');
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
        setLoading(false); // Stop loading
    };

    return (
        <div className="home">
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
            {error && <p className="error">{error}</p>}
            {loading ? (
                <p className="loading">Loading...</p> // Show loading text while fetching data
            ) : (
                <div className="book-list">
                    {books.map((book) => (
                        <BookCard key={book.key} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
