import { BOOKS_URL } from "./constants"

export const apiBookCall =async (id, setBook)=>{
    const res = await fetch(BOOKS_URL+'/'+id);
    const data = await res.json();
    setBook(data);
};

export const apiCall =async (setLoading, setBooks)=>{
    const res = await fetch(BOOKS_URL);
    const data = await res.json();
    setBooks(data);
    setLoading(false);
};
