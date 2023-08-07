// Here i created simple arrow function in javascipt 


const App = () => {
 
    const temp = <div>React is not that hard.</div>

    const ramesh = true;
    return (
        // everything written inside return is not html but it's JSX 
        <div>

            {/* Lets Know more about jsx in detail.

                Jsx is javascipt XML  */}
                {/* Jsx is the html code written in JavaScript file. and this file is complied using babel before executing on browser. */}

            <h3>Hello World</h3>
            {temp} 
            {/* Like this we can also call javascipt function and variables inside the components. */}

            {console.log("tingo")} 
            {/* this above expresion will work  */}
            {/* {
                if(true){
                    console.log('Ramesh')
                }

                This whole piece of code will throw an error because we can not use condition in jsx.
            } */}
            

            {/* But we can do conditional rendering */}
            <br />
            {/* That's we can render things based on some conditons using ternary operator but we can't use if conditions. */}
            { ramesh ? "ramesh" : "suresh" }

        </div>
    );

}

export default App;




// Limitaions of JSX 
/*

1. No Conditionals Outside of JSX:

You can use conditionals within JSX using curly braces, but you can't use them for deciding whether to render JSX components or not outside of JSX. For example, you can't use if statements to conditionally render components directly in the render method.

2. Single Root Element:

JSX requires that you return a single root element from your component's render method. This means you can't return multiple sibling elements directly without wrapping them in a parent element.

3. JavaScript Expressions Only:

JSX allows embedding JavaScript expressions within curly braces, but not statements or blocks. You can't use things like if statements, for loops, or variable declarations directly inside JSX.

4. HTML-Like Syntax:
JSX looks like HTML, but there are a few differences. For instance, you must use className instead of class for adding CSS classes, and you must use htmlFor instead of for for labels associated with form elements.

5. Custom Components Must Be Capitalized:
Custom components must start with an uppercase letter. If you create a component with a lowercase name, React will treat it as a built-in HTML element.

6. No Built-In Event Listeners:
JSX doesn't support adding event listeners directly in the markup. Instead, you should attach event listeners using React's synthetic event system within your component logic.

7. No Inline Styles by Default:
While you can use inline styles in JSX, inline styles don't support pseudo-selectors or media queries. You might consider using CSS-in-JS libraries or separate CSS files for more complex styling needs.

8. No HTML Entities:
In JSX, you can't use HTML entities like &nbsp; or &lt;. Instead, use Unicode characters or string literals for special characters.

9. Limited Comments:
You can include comments within JSX using curly braces, but they'll become part of the rendered output. If you want to add comments that don't appear in the rendered HTML, you'll need to use JavaScript-style comments outside the JSX.

10. Property Naming Conventions:
While JSX properties use camelCase naming conventions (e.g., className instead of class), HTML attributes use lowercase and kebab-case (e.g., class="my-class").

*/