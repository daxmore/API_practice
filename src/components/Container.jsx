import axios from 'axios'
import React, { useState } from 'react'

const Container = () => {
    const [response, setResponse] = useState([])

    const getData = async () => {
        let answer = await axios.get("https://picsum.photos/v2/list?page=2&limit=6")
        setResponse(answer.data)
        console.log(answer.data)
    }

    return (
        <>
            <div className="container">
                <div className="w-full px-40 max-md:p-20 max-sm:px-1 py-10">

                    <button onClick={getData} className="bg-teal-600 text-white text-xl px-5 py-3 w-max rounded-md active:scale-95">
                        Get Data
                    </button>

                    <div className="cards grid grid-cols-3 max-sm:grid-cols-1 whitespace-pre-wrap max-md:grid-cols-2 gap-4 w-full p-6 rounded-md my-4">
                        {response.map(
                            (elem, idx) => (
                                <div key={idx} className="card bg-zinc-200 w-full sm:w-48 p-2 rounded-md text-black">
                                    <div className="photo">
                                        <img
                                            className="w-full h-52 sm:h-48 md:h-52 lg:h-56 object-cover rounded"
                                            src={elem.download_url}
                                            alt=""
                                        />
                                    </div>
                                    <div className="cardTitle font-semibold mt-1 text-sm sm:text-base md:text-lg lg:text-xl">
                                        {elem.author}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container