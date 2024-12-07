function View({data}){
    console.log(data);
    return(
        <>
        {data.map((el)=>{
            return <div>
                <h1>User Name : {el.user}</h1>
                <h1>Email : {el.email}</h1>
                <h1>Password : {el.pass}</h1> <br /><br /><br />
            </div>
        })}
        </>
    )
}

export default View