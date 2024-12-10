import { useState } from "react"

    function Product (){

        let [form,setform] = useState ({
                name : "",
                price : "",
                des : "",
                img : ""
        })

        let [nameerr,setnamerr] = useState(false)
        let [priceerr,setpriceerr] = useState(false)
        let [deserr,setdeserr] = useState(false)

        function handleC(H){
            let [name,value] = H.target
            setform({...form, [name] : value})
        }

        function handleB(h) {
            var { name, value } = h.target
            if (name == "name" && value.length < 3) {
                setnamerr(true)
            }
            
            if (name == "price" && value < 1 ) {
                setpriceerr(true)
            }
    
            if (name == "des" && value.length >=200) {
                setdeserr(true)
            }
        }

        function handleF(h) {
            var { name, value } = h.target
    
            if (name == "name") {
                setnamerr(false)
            }
    
            if (name == "price") {
                setpriceerr(false)
            }
            if (name == "des") {
                setdeserr(false)
            }
    
        }

        function handleS(h) {
            h.preventDefault()
    
            if(nameerr == false && priceerr == false && deserr == false){
                setform(form)
                alert("Form Submited ✅")
            }
            else{
                alert("Full Fill All Form ❌")
            }
        }


        return(
            <div id="main">
                <form action="" onSubmit={handleS}>
                <h1>Form Validation</h1>
                <input type="text" name="name" placeholder=" Enter Product Name" onBlur={handleB} onFocus={handleF}  onChange={handleC} /><br />
                {nameerr == true ? <p>Required Must be at least 3 characters long.</p> : ""} 
                <input type="number" name="price" placeholder="Enter Product Price" onBlur={handleB} onFocus={handleF}  onChange={handleC} /><br />
                {priceerr == true ? <p>Required Must be a positive number.</p> : ""}
                <select  name="" onChange={handleC} id="s">
                    <option value="Category">Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Books">Books</option>
                </select><br />
                <input type="text" name="des" placeholder="Enter Description" onBlur={handleB} onFocus={handleF} onChange={handleC} /><br />
                <input type="text" name="img" placeholder="Enter image url"/><br />
                <input id="btn" type="submit" placeholder="Submit" />
                </form>
            </div>
        )
    }

    export default Product