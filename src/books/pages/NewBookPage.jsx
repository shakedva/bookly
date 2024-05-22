import { useState } from "react";
import { json } from "react-router-dom"
import BookForm from "../components/BookForm";
export default function NewBookPage() {
    const [isbn, setIsbn] = useState('');
    const [book, setBook] = useState(null);

    async function handleSearch() {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyCDBVpQz-Ifk7JFUrJzAdWB58k6FRHoXeQ`);
        const data = await response.json();
        console.log(JSON.stringify(data))
        if (response.ok && data.totalItems > 0) {
            const bookInfo = data.items[0].volumeInfo;
            setBook({
                title: bookInfo.title,
                authors: bookInfo.authors,
                description: bookInfo.description,
                pageCount: bookInfo.pageCount,
                image: bookInfo.imageLinks.thumbnail,
                creator: '6639eea727bba9a5ec056533'
            })
        }
        else {
            throw json({ message: 'Could not find the book.' }, { status: 500 })
        }
    }
    return (
        <div>
            <p>
                <label htmlFor="isbn">ISBN</label>
                <input
                    id="isbn"
                    type="text"
                    name="isbn"
                    required
                    onChange={(e) => setIsbn(e.target.value)}
                />
            </p>
            <button onClick={handleSearch}>Search</button>
            {book && <BookForm book={book} />}
        </div>
    )
}