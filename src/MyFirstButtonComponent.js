


function MyButton({student}){
    const countofWelcome =10;
    return(
    <>
    {Array.from({ length: countofWelcome }).map((_, index) => (
      <h1 key={index}>Hello</h1>
    ))}

    <button onClick={handleOnClick}>{student.name}</button>
  </>)
}
function handleOnClick(){
    alert('Welcome Abdelsattar')
}

export default MyButton;