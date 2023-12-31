why to learn react?
 - hype,job,trend,build UI
 - makes easy to manage & build complex front end

 when should i learn react?
  - after js
  -most project dont need react in initial phase

  why react was created?
  - state - is managed by javascript
  - UI is managed by DOM

  react is a library

  - framework  - rules,naming convention , no any exception

- reacts give single page application


react library
   - react dom
      it is used for web application

   - react-native
       it is used for mobile applications


  scripts in package.json
   
   start - it is used for developement environment

   build - it is used for production application

   test - it is used for to test the appliaction

   eject -


   npx create foldername


       // steps

       cd foldername

       dir

       npm run start

       npm run build

// it is used for to create vite project

npm create vite@latest  

  npm install

  npm run dev

  - jsx provides through javascipt we add html element
  - it is same as html


  App -app.js
   - it is a function
   - it is returns html element
   - export this page


   - function name always start with capital letter

   - we can add multiple tags in one div only

   <> </> - this tag is called as fragment in react js

   - without export we cannot render react function or page in app.js

   - in react we declare variable in function above return and used in return  as in curly braces {}

   - evaluated expression {username}

   - all javascript code is written above return in any function

   - we cannot write if-else and for loop in object

  - in react behind the scene data will be stored as in app.js
 
  const reactelement=React.createElement(
   'tag name',
    {
      in object value is passed
      href:'https://google.com'
    },
    children means text which is print in web page

    'click me to visit google'
  )

  - react hooks 
    - it is a simple javascipt functions that we can update the reusable part in a functional component
    - hooks can be stateful and mange side effects

    - useState hooks
       - it is used for to add state to functional component
       - it is used for state mannagement

       const [counter,setCounter]=useState(5)

       - useState has two parameter
         1. variable - counter
         2. function - updated value -setCounter

         useState has some default value given

    - createRoot method creates dom structure like tree

    - main purpose of dom is page loading  

    virtual dom
      -React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM 

    react fiber
     - main goal is to increse the page updation like animation,layout and gestures

     reconcillation
       - the algorithm react uses to differentiate one tree with another to determine which parts needs to be changed

       - diffrence of lists is performed using keys. keys should be stable,predictable and unique

    fiber
     - it is a simple javascipt object
     - it represents the react element of the dom tree

     
    
