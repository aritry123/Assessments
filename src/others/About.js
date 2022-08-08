function About() {
    return(
        <>
        <h2 style={{marginLeft: "20px", padding: "10px", border: '5px solid #4682B4', width: "200px", textAlign: "center"}}>About</h2>
        <p style={{margin: '10px', border: '1px solid black', backgroundColor: '#ADD8E6', padding: '10px'}}>
            ReactJS is an open-source, component based front end library responsible only for the view layer of the application. It is maintained by Facebook. ReactJS uses virtual DOM based mechanism to fill in data (views) in HTML DOM. The virtual DOM works fast owning to the fact that it only changes individual DOM elements instead of reloading complete DOM every time. A React application is made up of multiple components, each responsible for outputting a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain internal state – for example, a TabList component may store a variable corresponding to the currently open tab. React allows us to write components using a domain-specific language called JSX. JSX allows us to write our components using HTML, whilst mixing in JavaScript events. React will internally convert this into a virtual DOM, and will ultimately output our HTML for us. React "reacts" to state changes in your components quickly and automatically to rerender the components in the HTML DOM by utilizing the virtual DOM. The virtual DOM is an in-memory representation of an actual DOM. By doing most of the processing inside the virtual DOM rather than directly in the browser's DOM, React can act quickly and only add, update, and remove components which have changed since the last render cycle occurred.
        </p>
        </>
    )
}
export default About