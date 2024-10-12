
const pet=()=>{
    return (
        <div>
        <h1>houssam is the best person in the world</h1>
        <h1>houssam is the best person in the world</h1>
        <pre>houssam is really working hard for his success</pre>
        </div>
     )
    }

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
           React.createElement(pet)  // Call pet() here to create its element
        ]
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
