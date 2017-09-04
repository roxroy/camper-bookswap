import React from 'react';
//import Benefits from './Benefits';
//import Hero from './Hero';
//import Search from '../search/Search';

function Home() {
  return (
  <div>
    <div className="hero row">
      <div className="col s12 m12">
          <h2 className="center orange-text">Discover and share your favourite books.</h2>
      </div>
    </div>
    <div className="container section">
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
          <h2 className="center light-blue-text"><i className="material-icons medium">email</i></h2>
          <h5 className="center">Daily Digest</h5>

          <p className="light">Subscribe to this daily email which will deliver a list of all books posted into the system in the last 24 hours in your genres of interest. A great way to browse books with your morning coffee.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
          <h2 className="center light-blue-text"><i className="material-icons medium">group</i></h2>
          <h5 className="center">Friends</h5>

          <p className="light">Invite other members to be your Friends. You can even suggest books to each other easily, if you have the same reading tastes.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
          <h2 className="center light-blue-text"><i className="material-icons medium">local_library</i></h2>
          <h5 className="center">Wish List</h5>

          <p className="light">If you ever want a book that is not currently available in the system, just add it to your Wish List and we will notify you when it becomes available. You can even set your Wish List to automatically order them for you!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;
