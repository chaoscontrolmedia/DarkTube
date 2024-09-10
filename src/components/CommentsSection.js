import{useState} from "react";
import {Container } from "react-bootstrap";






export const Comments = () => {

    const [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };


    const addComment = () => {
        if(comment.trim()){
            setCommentsList([...commentsList, comment.trim()]);
            setComment("");
        }
    };


const deleteComment =(indexToDelete) => {
    setCommentsList(commentsList.filter((_, index) => index !== indexToDelete));
};


    return (

        <Container>
            <h1>Comments</h1>
            <div className="comment-input">
                    <textarea 
                        placeholder="Add a public comment..."
                        value = {comment}
                        onChange={handleCommentChange}
                    ></textarea>

                    <div className = "comment-actions">
                        <button
                        className = "submit-btn"
                        onClick = {addComment}
                        disabled = {!comment.trim()}>
                            Comment
                        </button>


                    </div>
        
                </div>


                <div className="commments-list">
                        {commentsList.map((c,index) => (
                            <div key = {index} className = "comment">
                                {c}
                                <button onClick={() => deleteComment(index)}>
                            Delete
                        </button>
                            </div>
                        ))}
                       

                    </div>
        </Container>
    );
};

