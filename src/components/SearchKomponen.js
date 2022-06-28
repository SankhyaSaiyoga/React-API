import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=2bdbbbf11bb94bb392bc2e0fdda09d86"
const token = "2bdbbbf11bb94bb392bc2e0fdda09d86"
export default function SearchKomponen(){
    const [search, setSearch] = useState("")
    const [news, setNews] = useState([])

    useEffect(() => {
        console.log("terminated 2min!")
        axios({
            method: "GET",
            url: `${baseUrl}Kris Holt`,
            headers: {
                'Authorization': `Basic ${token}` 
            }
        }).then((result, i) => {
            setNews(result.data.articles)
        })
    })

    return (
        <div>
            <h1>NEWS KOMPONEN</h1>
            <div>News List :
            {news.map((data, i) => {
                return (
                    <span key={i}>{data.author}</span>
                )
            })}
            </div>
        </div>
    )

}