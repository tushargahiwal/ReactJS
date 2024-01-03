 Tailwind 
   - it is a utility first css framework
   
   steps to install tailwind in vite 
    npm install -D tailwindcss postcss autoprefixer

    -d means it is save in dependencies

    npx tailwindcss init -p

props
  - main purpose of props is reusable the component
  - it is a argument passed into react components
  - props are passed to component via html attributes

  - the value send to the function through app.js 

  useCallback hooks
  - usecallback is a react hook that lets you cache a function definition between re-renders

  - onChange event
    - it is occurs when the value of an html element is changed
    - when the user changes the value of an element,the onchange event will be triggered

  - useEffect hook
     - it is used for when component needs to do something after render

    useRef hook
      - it is used for to persist value between renders
      - it can be used to store a mutable value that does not cause a re-render when updated
     
     custom hooks
     - it is also function and return a value

     -useId hook 
       - it is used for generating unique ids that can be passed to accessibility attributes
       - if we generate the key so useId is not used
