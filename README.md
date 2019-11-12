# Land Tech Test

This test completed by Mark Kellett as per the request from Land Tech. 

## Requirements

You have been given a set of data points, with each item taking the following form:

X Y P
Where:

0 <= X < 100
0 <= Y < 100
10000 < P < 10000000
X and Y represent the coordinates of a house which has been sold, and P is the price in which it was sold. For example, the point "5 10 100000" would be interpreted as a house sold for £100,000 at the point (5, 10).

Using this data plot each point on a grid. The points should be filled with a colour representing how expensive a house was in relation to other houses. The choice of colour is up to you, however, you should use a different colour for each of the following groups:

0% - 5%
5% - 25%
25% - 75%
75% - 95%
95% - 100%
For back-end or terminal solutions, how you represent colour for each point is up to you.


## Technical Architecture

To run this project please use Node 12 and latest version of Chrome / Safari.

```
nvm use 12
```

### Install Node Modules

```
npm i
```

### Server

```
npm run start:server
```

### Client

```
npm run start
```

## Tests

```
npm run test
```

## General Approach

I considered this task and decided to get a decent simple grid working for one viewport type (that most likely used) and to get a simple server working which formats the data as given. I wanted just enough UI to make it useful and also to give a solution that would work well due to the sheer number of items in it (2000+!!). 

Where I could I used TDD (for simple modules and the server) and limited myself to testing the parts which I deemed the most pertinent. In production obviously I go for full coverage. 

I did have an issue with testing my useFetch function due to a dodgy version of react locally, so I omitted these tests in this case and ran out of time. 

I spend approx 3.5 - 4 hours on this task as I have a cold and needed frequent lemsip :-).

## Server Approach

I wanted with this test to get a simple grid working based off the required data sent for sold properties. It was clear that I needed a simple Node Server which could simple return me the data points in a JSON format with a simple response envelope. 

The response envelope is a standard approach which means we can attach metadata to the response and also gives us options to further improve later with pagination or with grid max and min values. 

I have simple walked the data from a file read and kept it in memory. This is fine for a single dataset but obviously this is less optimal for production.

### Client Approach

The bare minimum requirement here I figured was to get it rendering with some information useful for you to be able to understand the data. I opted for a css-grid approach which gives you the ability to setup a grid and then append grid items by just specifying the x and y coordinates. Grid support is good, and this makes for a much simpler solution. I also went straight for desktop rendering as mobile would struggle for a number of reasons

1. Size of the dataset would cripple older devices
2. Screen realestate is limited for data this large (100 x 100)

I have made the grid work at 1200 x 1200 as any smaller and the data would be really squashed together. I have also calculated a background to show the dots on the grid. With some more tweaking you could use css-variables to recalculate the sizes per grid data set and make it look great irrespective number of data items (something restricted with pre-calculated styles previously). 

With regards to the structure of the client I have opted for SoldProperties as being a stateful component, and the others all being (where applicable) stateless (dumb) components. SoldProperties is therefore composite and we could easily create a different one for different use cases as it has very little of it's own specific markup. 

This approach allows us to keep the responsibility of data fetching and event handlers bound the most suitable Higher Order Component which in my opinion is a sensible pattern.

Testing others therefore becomes easy and makes for the formation of a component library a worthwhile abstraction for various reasons.

I also didn't really use any React libraries here. The reason for which is that you can achieve decent results for most components with a little css. I love the approach of _Do as much as you can with css and then use JS_. 

I also decided when filtering that the filters overlapped, meaning that it was possible for one item to be in two categories as the boundaries were the same i.e. 0-5% 5%-25%. So I made an adjustment to that it actually represented 0-5% > 6%-25% etc. 

Normally I would have gained clarity on this but decided to make an executive decision. 

## Styling

I have used BEM for the styling, purely because it was create-reat-app supports it out of the box and it works well. The css modules also deduplicate the css making it more normalised. However I am a fan of atomic css and think it offers by convention the ability to make css more dry. 

## Enhancements

1. I would like to make the grid resize according the data set size for max X and max Y. 
2. Filtering of items by making the categories clickable. 
3. Some nice animations.
4. Lazy loading components that are not in the viewport.
5. Memoization of selector based on URL
6. Refactoring combing css classes
7. Use of Typescript or PropTypes for typesafety etc...


