import React,{useState} from 'react'

function Search(props) {
    const [input , SetInput] = useState(" ");

    const handlechange = (e) => {
        SetInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmitData(input)
    }


  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-10 col-lg-10'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div class="mb-12">
                            <input 
                                type="text" 
                                class="form-control"
                                value={input}
                                placeholder="Enter your Search"
                                onChange={(e) => handlechange(e)}
                                />
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    </>
  )
}

export default Search