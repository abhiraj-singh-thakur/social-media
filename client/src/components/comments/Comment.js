import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() !== '') {
            setComments((prevComments) => [...prevComments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
            className="w-full border rounded p-2"
            placeholder="Write a comment..."
            value={newComment}
            onChange={handleCommentChange}
        />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                    Add Comment
                </button>
            </form>
            {comments.length > 0 ? (
                <ul className="space-y-4">
                    {comments.map((comment, index) => (
                        <li
                            key={index}
                            className="border p-4 rounded"
                        >
                            {comment}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
};

export default CommentSection;