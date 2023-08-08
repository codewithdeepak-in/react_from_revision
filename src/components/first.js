// Here we can get props as parameters.
// We can pass values in as a props and functions too. 

const First = (props) => {


    function handleClick(){
        window.alert("Hey It's working")

    }

    return(
        <>
            <h4>Hello World {props.name}</h4>
            <Second  profession="Full-Stack Web Developer." handleClick={handleClick}/>
        </>
    )

}


export default First;


function Second({profession, handleClick}){
    return(
        <>
            I want to be an {profession} 
            <br />
            <button onClick={handleClick} style={{marginTop: '1rem', }}>Click</button>
        </>
    )
}