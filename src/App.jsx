import { useState } from "react";
import { Tweet } from "./Tweet";
import { TweetForm } from "./Tweetform";
import { TweetList } from "./TweetList";

const DEFAULT_TWEET = [
    {
      id: 0,
      name: "Lionel",
      content: "Il fait froid dehors",
      like: 1000,
    },
    {
      id: 1,
      name: "Jessica",
      content: "J'adore la fête",
      like: 20,
    },
    {
      id: 2,
      name: "Norma",
      content: "J'adore ma ville",
      like: 0,
    },
    {
      id: 3,
      name: "Clément",
      content: "Enfin Fifa 23",
      like: 12,
    },
  ];

  const useTweets = () => {
    const [tweets, setTweets] = useState(DEFAULT_TWEET);
    
      const addTweet = (tweet) => {
        setTweets((curr) => {
          const newTweet = {
            id: curr[curr.length - 1]?.id + 1 ?? 0,
            name: tweet.name,
            content: tweet.content,
            like: 0,
          };

          return [...tweets, newTweet];
       });
      };  
  
      const onDelete = (tweetId) => {
        setTweets((curr) => curr.filter((tweet) => tweet.id !==tweetId));
      };
      
      const onLike = (tweetId) => {
        setTweets((curr) => {
          const copyTweet = [...curr];
  
          const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
          likedTweet.like += 1;
  
          return copyTweet;
        });
      };

      return { onLike, onDelete, addTweet, tweets };
  };

  function App() {
     const { onLike, onDelete, addTweet, tweets } = useTweets();  

    return (
      <div>
          <TweetForm onSubmit={addTweet} />
          <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} /> 
       </div>
     );
}

export default App;