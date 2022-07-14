import React, { useRef } from 'react'

export const Form = ({postData}) => {
    const brandRef = useRef(null);
    const modelRef = useRef(null);
    const yearRef = useRef(null);
    const ratingRef = useRef(null);
    const priceRef = useRef(null);
    console.log(brandRef);

    const handleAdd = () => {
        if(brandRef.current.value === "" || modelRef.current.value === "" || yearRef.current.value === "" || ratingRef.current.value === "" || priceRef.current.value === ""){
            alert("Please provide all values")
            return;
        }else if(isNaN(ratingRef.current.value) || isNaN(priceRef.current.value)){
            alert("Please provide rating / price as a number")
            return;
        }
        const body = {
            brand: brandRef.current.value,
            model: modelRef.current.value,
            year: yearRef.current.value,
            rating: ratingRef.current.value,
            price: priceRef.current.value
        }
        postData(body);
    }


    return (
        <div>
            <div>
                <label htmlFor="brand">Brand</label>
                <input id="brand" ref={brandRef} type="text" />
            </div>
            <div>
                <label htmlFor="model">Model</label>
                <input id="model" ref={modelRef} type="text" />
            </div>
            <div>
                <label htmlFor="year">year</label>
                <input id="year" ref={yearRef} type="text" />
            </div>
            <div>
                <label htmlFor="rating">rating</label>
                <input price="rating" ref={ratingRef} type="text" />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input id='price' ref={priceRef} type="text" />
            </div>
            <button onClick={handleAdd}>Submit</button>
        </div>
    )
}
