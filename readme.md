# Fabulous Grid

This app displays a "grid" of products, which can be dragged and dropped within that grid. The grid is not fixed, so items do not swap places with each other, nor is there a set number of items (additional items can be added). The grid is actually four vertical columns (which IS a set number that shouldn't be changed, for a good user experience), and the items can be dragged vertically to change places within a column, or horizontally to change column location.

The drag and drop functionality in this app was created using react-beautiful-dnd. To learn more, please consult the following resources:

[Tutorial for react-beautiful-dnd](https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd)

[Github Repo for react-beautiful-dnd:](https://github.com/atlassian/react-beautiful-dnd)

To install and run this project in development mode, run the following commands in your terminal:

`$ npm install`

`$ npm run hot`

---

## Issues with react-beautiful-dnd to be aware of

- The tutorials use `styled components` to create some nice interactivity for components being dragged (snapshot values). However, since that involves coupling logic to inline styling, I could not figure out a way to use this with .less files (yet).

- This library provides some good accessibility features for users of screen readers. However, I get warnings from React.strictmode that parts of this are deprecated.

---

## Some challenges I encountered (a.k.a. things I learned)

1. Getting file types to work with webpack (.less, .jsx)

2. Importing and exporting components properly using index.js

3. Determining whether examples used older versions of React (< v.16), when debugging

4. Using examples from react-beautiful-dnd tutorial in a modularized structure

5. Data structure, importing data, and passing via props

6. Dynamically rendering components from data

7. Applying `InnerRefs` correctly so that Draggable and Droppable would work

8. Ordering divs correctly for styles to be applied, without messing up the `InnerRefs`

9. Persisting changes to state -variable names!

10. Unexpected behaviors caused by initial layout (single horizontal column, with items wrapping)

11. Additional logic required for new layout, which uses multiple columns

12. Using `flex-direction` and `justify-content` to make items display as desired

---

## What I would do differently

- I would spend more time researching options for drag-and-drop functionality

- I would probably use a different library (not react-beautiful-dnd), with greater adoption and more documentation/examples

- I might generate an Ordered List of products, instead of individual Product components, depending on the level of complexity and purpose of the app

- If the desired behavior were something like my GitHub profile pinned repo list, I would make it a fixed grid

- I would like to learn how to make items that are not adjacent be able to swap/trade places with one another
