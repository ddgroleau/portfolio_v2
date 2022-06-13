import Link from 'next/link';
import React from 'react';
import styles from './Blog.module.css';

const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>
                    I enjoy teaching others what I have learned about programming, 
                    computer science, and growing a software engineering career.
                </h2>
                <p>
                    <strong>
                        You can find my blog <Link href="http://fullstackdan.com">
                            <a target="_blank" style={{textDecoration: "underline"}}>here</a>
                        </Link>. 
                    </strong> I write articles on academic computer science concepts, 
                   programming concepts and tutorials, and book and product recommendations.
                </p>
                <p>
                    I also have a guide series for aspiring self-taught developers, which compiles
                    lessons learned and best practices from my own self taught journey. The series
                    aims to help new developers land their first software engineering role.
                </p>
            </div>
        </div>
    );
};

export default Blog;