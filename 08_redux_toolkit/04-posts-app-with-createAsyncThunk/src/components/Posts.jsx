import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";


const Posts = () => {

    const dispatch = useDispatch();

    const { posts, loading, error } = useSelector((state) => state.posts);

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 25; // Static because JSONPlaceholder has 100 posts. (100 posts / 4 = 25 pages)

    // Fetch posts whenever currentPage changes
    useEffect(() => {
        dispatch(fetchPosts(currentPage));
    }, [currentPage, dispatch]);

    // Next Page
    const handleNext = () => {
        setCurrentPage((prev) => prev + 1);
    };

    // Previous Page
    const handlePrevious = () => {
        setCurrentPage((prev) => prev - 1);
    };


    return (
        <div className="max-w-5xl mx-auto p-5">

            <h1 className="text-4xl font-bold text-center mb-6">
                Posts App
            </h1>

            {loading ? (

                <h2 className="text-center text-2xl mt-20">
                    Loading...
                </h2>

            ) : error ? (

                <h2 className="text-center text-red-500 mt-20">
                    {error}
                </h2>

            ) : (

                <>
                    <div className="grid gap-3 min-h-[75vh]">

                        {posts.map((post) => (

                            <div
                                key={post.id}
                                className="border rounded-xl p-4 shadow"
                            >
                                <h2 className="font-bold text-xl">
                                    {post.id}. {post.title}
                                </h2>

                                <p className="mt-3 text-gray-600">
                                    {post.body}
                                </p>

                            </div>

                        ))}

                    </div>

                    <div className="flex justify-center items-center gap-5 mt-6">

                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1 || loading}
                            className="bg-gray-700 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50 disabled:cursor-auto"
                        >
                            Previous
                        </button>

                        <span className="font-bold text-lg">
                            Page {currentPage}
                        </span>

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages || loading}
                            className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50 disabled:cursor-auto"
                        >
                            Next
                        </button>

                    </div>
                </>

            )}

        </div>
    );
};

export default Posts;