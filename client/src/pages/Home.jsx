import { useState } from "react";
import "../App.css";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((result) => {
        return result.json();
      })
      .then((value) => {
        console.log(value);
        setData(value);
      });
  };

  return (
    <>
      <div className="main-container">
        <form onSubmit={onSubmitHandler}>
          <div className="main-content">
            <div>
              <input
                type="text"
                placeholder="github username"
                value={username}
                onChange={onChangeHandler}
                className="input"
              />
            </div>
            <div className="search-btn">
              <button>Search</button>
            </div>
          </div>
        </form>
      </div>

      <div className="container">
        <div className="left">
          <img
            src={data.avatar_url}
            alt="a image with photo"
            className="img-container"
          />
          <div className="head">
            <h3>{data.name}</h3>
            <a href={data.html_url} target="_blank">
              Profile
            </a>
          </div>
        </div>
        <div className="right">
          <div className="card-header">
            <div>
              <a href={data.followers_url} target="_blank">
                <button>Followers</button>
              </a>
            </div>
            <div>
              <a href={data.following_url} target="_blank">
                <button>Following</button>
              </a>
            </div>
            <div>
              <a href={data.repos_url} target="_blank">
                <button>Repos</button>
              </a>
            </div>
            <div>
              <a href={data.gist_url} target="_blank">
                <button>Gist</button>
              </a>
            </div>
          </div>
          <div className="card-body">
            <p>username: {data.login}</p>
            <p>bio: {data.bio}</p>
            <p>location: {data.location}</p>
            <p>email: {data.email}</p>
            <p>blog: {data.blog}</p>
            <p>MemberSince: {data.created_at}</p>
          </div>
        </div>
      </div>
    </>
  );
};
