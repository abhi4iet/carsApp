import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import { Form } from './Form';

const filtrBtnsArr = [
    "Ford", "Volvo", "Audi", "BMW"
]

const generateQP = (filter) => {
    // &brand_like=filteritem
    // "Ford&brand_like=Volvo&brand_like=Audi&brand_like=BMW"
    return "&brand_like=" + [...filter].join("&brand_like=");
}

export const List = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState([])

    const fetchData = () => {
        if(!sort ){
            if(!filter.length){
                axios.get(`http://localhost:3004/cars?_page=${page}`)
                    .then(res => setData(res.data));
            }else{
                axios.get(`http://localhost:3004/cars?_page=${page}${generateQP(filter)}`)
                    .then(res => setData(res.data));
            }
        }else{
            if(!filter.length){
            axios.get(`http://localhost:3004/cars?_page=${page}&_sort=price&_order=${sort}`)
                .then(res => setData(res.data));
            }else{
                axios.get(`http://localhost:3004/cars?_page=${page}&_sort=price&_order=${sort}${generateQP(filter)}`)
                .then(res => setData(res.data));
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, [page, sort, filter]);

    const handleFilter = (item) => {
        if(filter.includes(item)){
            const updatedArr = filter.filter(el => el !== item);
            setFilter(updatedArr);
            // do something
        }else{
            const updatedArr = [...filter];
            updatedArr.push(item);
            setFilter(updatedArr);
        }
    }

    const postData = (body) => {
        axios.post("http://localhost:3004/cars", {...body}).then((res) => {
            console.log(res);
            fetchData();
        })
    }

    return (
        <div>
            <div>
                {data.map((el) => <Card {...el} />)}
            </div>
            <div>
                <button disabled={page === 1} onClick={() => setPage(prevState => prevState - 1)} >Prev</button>
                <button>{page}</button>
                <button disabled={page===10} onClick={() => setPage(prevState => prevState + 1)}  >Next</button>
            </div>
            <div>
                <button onClick={() => setSort("asc")} >Asc</button>
                <button onClick={() => setSort("desc")} >Desc</button>
                <button onClick={() => setSort("")}>Don't Sort</button>
            </div>
            <div>
                {filtrBtnsArr.map((el) =>  <button onClick={() => handleFilter(el)} >{el}</button> )}
            </div>
            <Form postData={postData} />
        </div>
    )
}

