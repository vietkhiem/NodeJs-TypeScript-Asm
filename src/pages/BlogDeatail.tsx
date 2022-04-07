import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readPost } from "../api/post";
import Header from "../components/Header";
import { PostType } from "../types/Post";

type Props = {};

const BlogDetail = (props: Props) => {
  const { id } = useParams();

  const [post, setProduct] = useState<PostType>();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await readPost(id);
      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <>
      <Header />
      <main className="mt-4 mb-5">
        <div className="container">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-8 mb-4">
              <h2>{post?.title}</h2>
              <section className="border-bottom mb-4">
                <img
                  src={post?.img}
                  className="img-fluid shadow-2-strong rounded-5 mb-4"
                  alt=""
                />
                <div className="row align-items-center mb-4">
                  <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
                      className="rounded-5 shadow-1-strong me-2"
                      height={35}
                      alt=""
                      loading="lazy"
                    />
                    <span>
                      {" "}
                      Published <u>15.07.2020</u> by
                    </span>
                    <a href="" className="text-dark">
                      Anna
                    </a>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end">
                    <button
                      type="button"
                      className="btn btn-primary px-3 me-1"
                      style={{ backgroundColor: "#3b5998" }}
                    >
                      <i className="fab fa-facebook-f" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary px-3 me-1"
                      style={{ backgroundColor: "#55acee" }}
                    >
                      <i className="fab fa-twitter" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary px-3 me-1"
                      style={{ backgroundColor: "#0082ca" }}
                    >
                      <i className="fab fa-linkedin" />
                    </button>
                    <button type="button" className="btn btn-primary px-3 me-1">
                      <i className="fas fa-comments" />
                    </button>
                  </div>
                </div>
              </section>
              {/*Section: Post data-mdb*/}
              {/*Section: Text*/}
              <section>
                <p>{post?.content}</p>
                <img
                  src="https://mdbootstrap.com/img/new/slides/041.jpg"
                  className="img-fluid shadow-1-strong rounded-5 mb-4"
                  alt=""
                />
                <ul>
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>Dolor</li>
                  <li>Sit</li>
                  <li>Amet</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  temporibus nulla voluptatibus accusantium sapiente doloremque.
                  Doloribus ratione laboriosam culpa. Ab officiis quidem,
                  debitis nostrum in accusantium dolore veritatis eius est?
                </p>
              </section>
              {/*Section: Text*/}
              {/*Section: Share buttons*/}
              <section className="text-center border-top border-bottom py-4 mb-4">
                <p>
                  <strong>Share with your friends:</strong>
                </p>
                <button
                  type="button"
                  className="btn btn-primary me-1"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <i className="fab fa-facebook-f" />
                </button>
                <button
                  type="button"
                  className="btn btn-primary me-1"
                  style={{ backgroundColor: "#55acee" }}
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  type="button"
                  className="btn btn-primary me-1"
                  style={{ backgroundColor: "#0082ca" }}
                >
                  <i className="fab fa-linkedin" />
                </button>
                <button type="button" className="btn btn-primary me-1">
                  <i className="fas fa-comments me-2" />
                  Add comment
                </button>
              </section>
              {/*Section: Share buttons*/}
              {/*Section: Author*/}
              <section className="border-bottom mb-4 pb-4">
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                      className="img-fluid shadow-1-strong rounded-5"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="mb-2">
                      <strong>Anna Maria Doe</strong>
                    </p>
                    <a href="" className="text-dark">
                      <i className="fab fa-facebook-f me-1" />
                    </a>
                    <a href="" className="text-dark">
                      <i className="fab fa-twitter me-1" />
                    </a>
                    <a href="" className="text-dark">
                      <i className="fab fa-linkedin me-1" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio est ab iure inventore dolorum consectetur?
                      Molestiae aperiam atque quasi consequatur aut? Repellendus
                      alias dolor ad nam, soluta distinctio quis accusantium!
                    </p>
                  </div>
                </div>
              </section>
              {/*Section: Author*/}
              {/*Section: Comments*/}
              <section className="border-bottom mb-3">
                <p className="text-center">
                  <strong>Comments: 3</strong>
                </p>
                {/* Comment */}
                <div className="row mb-4">
                  <div className="col-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                      className="img-fluid shadow-1-strong rounded-5"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <p className="mb-2">
                      <strong>Marta Dolores</strong>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio est ab iure inventore dolorum consectetur?
                      Molestiae aperiam atque quasi consequatur aut? Repellendus
                      alias dolor ad nam, soluta distinctio quis accusantium!
                    </p>
                  </div>
                </div>
                {/* Comment */}
                <div className="row mb-4">
                  <div className="col-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                      className="img-fluid shadow-1-strong rounded-5"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <p className="mb-2">
                      <strong>Valeria Groove</strong>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio est ab iure inventore dolorum consectetur?
                      Molestiae aperiam atque quasi consequatur aut? Repellendus
                      alias dolor ad nam, soluta distinctio quis accusantium!
                    </p>
                  </div>
                </div>
                {/* Comment */}
                <div className="row mb-4">
                  <div className="col-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                      className="img-fluid shadow-1-strong rounded-5"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <p className="mb-2">
                      <strong>Antonia Velez</strong>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio est ab iure inventore dolorum consectetur?
                      Molestiae aperiam atque quasi consequatur aut? Repellendus
                      alias dolor ad nam, soluta distinctio quis accusantium!
                    </p>
                  </div>
                </div>
              </section>
              {/*Section: Comments*/}
              {/*Section: Reply*/}
              <section>
                <p className="text-center">
                  <strong>Leave a reply</strong>
                </p>
                <form>
                  {/* Name input */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form4Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form4Example1">
                      Name
                    </label>
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form4Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form4Example2">
                      Email address
                    </label>
                  </div>
                  {/* Message input */}
                  <div className="form-outline mb-4">
                    <textarea
                      className="form-control"
                      id="form4Example3"
                      rows={4}
                      defaultValue={""}
                    />
                    <label className="form-label" htmlFor="form4Example3">
                      Text
                    </label>
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <label className="form-check-label" htmlFor="form4Example4">
                      Send me a copy of this comment
                    </label>
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Publish
                  </button>
                </form>
              </section>
              {/*Section: Reply*/}
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-4 mb-4">
              {/*Section: Sidebar*/}
              <section className="sticky-top" style={{ top: 80 }}>
                {/*Section: Ad*/}
                <section className="text-center border-bottom pb-4 mb-4">
                  <div className="bg-image hover-overlay ripple mb-4">
                    <img
                      src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/about/assets/mdb5-about.webp"
                      className="img-fluid"
                    />
                    <a
                      href="https://mdbootstrap.com/docs/standard/"
                      target="_blank"
                    >
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                      />
                    </a>
                  </div>
                  <h5>Material Design for Bootstrap 5</h5>
                  <p>
                    500+ components, free templates, 1-min installation,
                    extensive tutorial, huge community. MIT license - free for
                    personal &amp; commercial use
                  </p>
                  <a
                    role="button"
                    className="btn btn-primary"
                    href="https://mdbootstrap.com/docs/standard/"
                    target="_blank"
                  >
                    Download for free
                    <i className="fas fa-download ms-2" />
                  </a>
                </section>
                {/*Section: Ad*/}
                {/*Section: Video*/}
                <section className="text-center">
                  <h5 className="mb-4">Learn the newest Bootstrap 5</h5>
                  <div className="embed-responsive embed-responsive-16by9 shadow-4-strong">
                    <iframe
                      className="embed-responsive-item rounded-5"
                      src="https://www.youtube.com/embed/c9B4TPnak1A"
                    />
                  </div>
                </section>
                {/*Section: Video*/}
              </section>
              {/*Section: Sidebar*/}
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
      </main>
      {/*Main layout*/}
      {/*Footer*/}
      <footer className="bg-light text-lg-start">
        <div className="py-4 text-center">
          <a
            role="button"
            className="btn btn-primary btn-lg m-2"
            href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
            rel="nofollow"
            target="_blank"
          >
            Learn Bootstrap 5
          </a>
          <a
            role="button"
            className="btn btn-primary btn-lg m-2"
            href="https://mdbootstrap.com/docs/standard/"
            target="_blank"
          >
            Download MDB UI KIT
          </a>
        </div>
        <hr className="m-0" />
        <div className="text-center py-4 align-items-center">
          <p>Follow MDB on social media</p>
          <a
            href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://www.facebook.com/mdbootstrap"
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://twitter.com/MDBootstrap"
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/mdbootstrap/mdb-ui-kit"
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/*Footer*/}
    </>
  );
};

export default BlogDetail;
