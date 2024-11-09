import React from "react";

const BookCard = ({ book }) => {
    const coverURL = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "default_cover.jpg"; // Add a default cover image in your public folder or specify a URL

    return (
        <div className="book-card">
            <img src={coverURL} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author_name ? `Author: ${book.author_name[0]}` : 'Unknown Author'}</p>
            <p>Published: {book.first_publish_year || 'N/A'}</p>
        </div>
    );
};

export default BookCard;