
import MovieCard from "../../Components/MovieCard";
import Header from "../../Components/Header"
import { moviesApi } from "../../services/api";
import IMovie from "../../types/IMovie";

export default function MovieDetail( movies } ): JSX.Element {   
        
    return (
        <>
            <Header />
            <div className="container pt-20">
                <div className="flex flex-col gap-y-7 pt-10 px-4 bg-[#acacac] pb-32">
                    <h2 className="text-xl font-bold">Movies</h2>
                    <div className="grid grid-flow-row grid-cols-4 max-w-screen-xl mx-auto">

                        {movies.map((movie, index) => {
                            return <MovieCard movie={movie} key={index} />
                        })}

                    </div>
                </div>
            </div>

        </>
    )
}

export async function getStaticProps() {
   const movies: IMovie[] = await moviesApi.then(res => {return res.data.movies})
    return {
        props: {
           movies
        }
    }    
}

