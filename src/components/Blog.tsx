import React from "react";
import { NavLink } from "react-router-dom";
import { PostType } from "../types/Post";
import Header from "./Header";

type PostTystProps = {
  posts: PostType[];
};
const Blog = ({ posts }: PostTystProps) => {
  return (
    <>
      <div className="container blog-page">
        <div className="row clearfix">
          <h2 className="text-lg-center mt-5 text-black">Blog Minics Phone</h2>
          {posts?.map((post, index) => {
            console.log(post);
            return (
              <div className="col-lg-4 col-md-12">
                <div className="card single_post">
                  <div className="header">
                    <h2>
                      <strong>Most</strong> View
                    </h2>
                  </div>
                  <div className="body">
                    <h3 className="m-t-0 m-b-5">
                      <a href="blog-details.html">{post.title}</a>
                    </h3>
                    <ul className="meta">
                      <li>
                        <a href="javascript:void(0);">
                          <i className="zmdi zmdi-account col-blue" />
                          Posted By: John Smith
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="zmdi zmdi-label col-amber" />
                          Technology
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="zmdi zmdi-comment-text col-blue" />
                          Comments: 3
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <div className="img-post m-b-15">
                      <NavLink
                        className="no-underline"
                        to={`/blog/${post._id}`}
                      >
                        <img
                          src={post.img}
                          alt="Awesome Image"
                          height={300}
                          width={350}
                        />
                      </NavLink>
                      <div className="social_share">
                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round">
                          <i className="zmdi zmdi-facebook" />
                        </button>
                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round">
                          <i className="zmdi zmdi-twitter" />
                        </button>
                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round">
                          <i className="zmdi zmdi-instagram" />
                        </button>
                      </div>
                    </div>
                    <p>{post.content}</p>
                    <NavLink className="no-underline" to={`/blog/${post._id}`}>
                      <a
                        href="blog-details.html"
                        title="read more"
                        className="btn btn-round btn-info"
                      >
                        Read More
                      </a>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
