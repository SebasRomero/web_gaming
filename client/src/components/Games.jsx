import React, { useEffect } from 'react'
import { useState } from 'react'

const Games = (props) => {

    const [games, setGames] = useState([])
    //Here we received the data from our backend in Golang
    useEffect(() => {
        async function response() {
            const data = await fetch('http://localhost:3000/games')
            const dataJson = await data.json()
            setGames(dataJson)
        }
        response()
    }, [])

    return (
        //Here we loop the games array to be able to show the values inside.
        <div className=''>{
            games.map((valueGame) => {
                return (
                    <div key={`${valueGame.Id}`}>
                        {valueGame.Id == props.Id ? 
                            <div>
                            <p className='text-2xl pt-10 text-center font-bold
                             text-black text-elipsis overflow-hidden'>{valueGame.Description}</p>
                             <button className='p-4 mb-4 mt-4' onClick={() => {//This sends you to the official game page
                                 window.location.href = valueGame.Game_url;
                             }}>Try!</button>
                            </div> :null}
                    </div>
                );
            })
        }
        </div>
    )
}

export default Games