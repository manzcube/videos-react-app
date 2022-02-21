# React app that makes a rquest and play youtube videos

This project was made with an Api from Google Developers, this one returns an array of videos related with a topic (query).
It basically takes the array and make a component for each one, then put every VideoItem into a VideoList, and this one into App component.
Has a loading file made with Semantic UI, using class components, making use of lifecycle methods and state.

Made few changes, so class-based components are no longer used and implementation of custom react hooks to make the App component cleaner.
Basically what I did was change the term piece of State to a hook named useVideos that takes the term and returns the array of videos form the API.

*hooks tip for me:
- Separate the different parts of my current component I want to make a cutom hook of.
- Identify the inputs.
- Identify the outputs.
- Make a function of every part.

## Available Scripts

![scsh_reactvideoapp](https://user-images.githubusercontent.com/88792194/154122715-a53f1fd4-9846-4e1e-9d2a-6cd9fe83fbc3.png)
