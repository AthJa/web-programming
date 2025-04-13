import React from "react";

// Profile Image Component
const ProfileImage = ({ imageUrl }) => (
  <div className="flex justify-center">
    <img
      src={imageUrl}
      alt="Profile"
      className="w-32 h-32 rounded-full border-4 border-blue-500"
    />
  </div>
);

// User Info Component
const UserInfo = ({ name, email, bio }) => (
  <div className="text-center mt-4">
    <h2 className="text-xl font-bold">{name}</h2>
    <p className="text-gray-600">{email}</p>
    <p className="mt-2 text-gray-700">{bio}</p>
  </div>
);

// User Posts Component
const UserPosts = ({ posts }) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold">User Posts</h3>
    <ul className="mt-2 space-y-2">
      {posts.map((post, index) => (
        <li key={index} className="p-2 bg-gray-100 rounded-md">
          {post}
        </li>
      ))}
    </ul>
  </div>
);

// Profile Page Component
const ProfilePage = () => {
  const user = {
    imageUrl: "https://via.placeholder.com/150",
    name: "Atharva",
    email: "Atharva@example.com",
    bio: "A passionate developer who loves coding.",
    posts: [
      "Learning React is fun!",
      "Started working on a new project today!"
    ],
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

const Index=()=>{
  return <ProfilePage/>;
}
// App.js - Main Application Component
const App = () => {
  return <Index />;
};

export default App;
