import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "use-auth0-hooks";
import { REDIRECTURI } from "../utils";

export default function Home() {
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="">Logo</a>
          </li>

          <Link href="/items">
            <a>Go to Items</a>
          </Link>

          {!isLoading &&
            (isAuthenticated ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                <li className="rightAlignNavBar">
                  <button onClick={() => logout({ returnTo: { REDIRECTURI } })}>
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <li className="rightAlignNavBar">
                <button
                  onClick={() =>
                    login({ appState: { returnTo: { pathname, query } } })
                  }
                >
                  Log in
                </button>
              </li>
            ))}
        </ul>
      </div>

      <div className="hero">
        <h1 className="title">
          unbearlievable: Custom registries for everyone
        </h1>

        <div className="row">
          <a href="" className="card">
            <h3>Find a couple</h3>
            <p>Wedding guests, click above!</p>
          </a>
          <a href="" className="card">
            <h3>Sign up</h3>
            <p>Already a member? Login</p>
          </a>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
        @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

        body {
          font-size: 16px;
          line-heigt: 1.5;
          color: #47353a;
          font-family: Roboto;
        }

        header {
          padding: 10px 15px;
          background-color: white;
          overflow: hidden;
          font-family: Roboto;
        }

        header h1 {
          float: left;
        }

        header nav {
          float: right;
        }

        header nav a {
          color: #47353a;
          text-decoration: none;
          margin-left: 12px;
          text-transform: uppercase;
          font-weight: 700;
        }
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
          font-family: Roboto, sans-serif;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0px;
          overflow: hidden;
          background-color: #333;
          position: fixed;
          top: 0;
          width: 100%;
        }

        li {
          float: left;
        }

        li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-family: "Work Sans", sans-serif;
        }

        /* Change the link color to #111 (black) on hover */
        li a:hover {
          background-color: #111;
        }

        .rightAlignNavBar {
          float: right;
          color: white;
          padding: 1em;
        }

        #myVideo {
          position: fixed;
          right: 0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
        }
      `}</style>
    </div>
  );
}
