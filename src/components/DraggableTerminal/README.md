# Integrated Website Terminal

A draggable, resizable front-end terminal interface built with React and Typescript.

## Description

This terminal can be modified to process many different commands, but currently supports basic Linux commands. Resize the terminal by draggin any edge or corner. The `DraggableTerminal` component is fully configurable with props.

## Dependencies

The draggable and resizable features are built on top of `react-draggable` and `react-resizable`. The `react-resizable` module is dependent on `react-draggable`, so all you need to do to get started is run:

`yarn add react-resizable @types/react-resizable` or `npm i --save react-resizable @types/react-resizable`
