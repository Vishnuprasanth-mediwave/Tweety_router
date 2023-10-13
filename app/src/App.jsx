import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
const Form = lazy(() => import("./pages/form"));

function Loading() {
  return <p>Loading ...</p>;
}

function App() {
  const [getValue, setGetValue] = useState(getFromLocalstorage());
  function handleAddTweetToApp(tweet) {
    const updatedTweets = [...getValue, tweet].sort(
      (a, b) => b.datetime - a.datetime
    );
    setGetValue(updatedTweets);
    localStorage.setItem("tweets", JSON.stringify(updatedTweets));
  }

  function getFromLocalstorage() {
    const initialtweets = JSON.parse(localStorage.getItem("tweets"));
    if (initialtweets) {
      return initialtweets;
    } else {
      return [];
    }
  }
  useEffect(() => {
    if (!getValue) {
      const getStorage = getFromLocalstorage();
      setGetValue(getStorage);
      setIsNotfound({ msg: "", error: false });
    }
  }, [getValue]);

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home sendValue={getFromLocalstorage()} />}
          />
          <Route
            path="/Form"
            element={<Form addTweet={handleAddTweetToApp} />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
