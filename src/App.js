import React, { useEffect, useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Menu from './components/Menu/Menu';
import Spinner from './components/spinner/Spinner';
import './App.css';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default function App() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState('');
    const [className, setClassName] = useState('');
    const app = document.querySelector('.app');
    const inputRef = useRef();

    useEffect(() => {
        getPhotos();
        // eslint-disable-next-line
    }, [page]);

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, [className]);

    function getPhotos() {
        let apiUrl = `https://api.unsplash.com/photos?`;
        if (query)
            apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;
        apiUrl += `&page=${page}`;
        apiUrl += `&client_id=${accessKey}`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const imagesFromApi = data.results ?? data;
                if (page === 1) setImages(imagesFromApi);
                setImages((images) => [...images, ...imagesFromApi]);
            });
    }

    function searchPhotos(e) {
        e.preventDefault();
        setPage(1);
        getPhotos();
        setClassName('');
    }

    function openComponent(e) {
        if (app.classList.contains('search')) {
            if (e.currentTarget.className === 'icon-search') setClassName('');
            else if (e.currentTarget.className === 'hamburguer') {
                setClassName('show-menu');
                setOpen(true);
            }
        } else if (app.classList.contains('show-menu')) {
            if (e.currentTarget.className === 'hamburguer open') {
                setClassName('');
                setOpen(false);
            } else if (e.currentTarget.className === 'icon-search') {
                setClassName('search');
                setOpen(false);
            }
        } else {
            console.log('no contains');
            if (e.currentTarget.className === 'icon-search') {
                setClassName('search');
            } else if (e.currentTarget.className === 'hamburguer') {
                setClassName('show-menu');
                setOpen(true);
            }
        }
    }

    function handleClick(e) {
        e.preventDefault();
        setQuery(e.target.innerText);
        setPage(1);
        getPhotos();
        setClassName('');
        setOpen(false);
    }

    return (
        <div className={`app ${className}`}>
            <Menu open={open} onHandleClick={handleClick} />

            <header>
                <span className="icon-search" onClick={openComponent}>
                    <svg
                        height="48"
                        viewBox="0 0 48 48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
                        <path d="M0 0h48v48h-48z" fill="none" />
                    </svg>
                </span>
                <h1>Imagesource Gallery</h1>
                <div
                    className={`hamburguer${open ? ' open' : ''}`}
                    onClick={openComponent}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <div className="wrapper-search">
                <form onSubmit={searchPhotos}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="input-search"
                        ref={inputRef}
                    />
                </form>
            </div>

            <div className="wrapper-image">
                <InfiniteScroll
                    dataLength={images.length} //This is important field to render the next data
                    next={() => setPage((page) => page + 1)}
                    hasMore={true}
                    loader={<Spinner />}
                >
                    <div className="image-grid">
                        {images.map((image, index) => (
                            <a
                                className="image"
                                key={index}
                                href={image.links.html}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={image.urls.regular}
                                    alt={image.alt_description}
                                />
                            </a>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
}
