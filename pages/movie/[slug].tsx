
import MovieCard from "../../Components/MovieCard";
import Header from "../../Components/Header"
import { moviesApi, searchApi } from "../../services/api";
import IMovie from "../../types/IMovie";
import Image from 'next/Image'

export default function MovieDetail(movie: IMovie ): JSX.Element {   
    
    return (
        <>
            <Header />
            <div className="bg-[#acacac]">
                <div className="customHeight container mx-auto pt-20 px-4 min-h-screen pb-28">
                    <div className="flex flex-col pt-10">
                    <div className="relative image-container aspect-h-1 aspect-w-1 sm:aspect-h-16 sm:aspect-w-9 md:h-40">
                        <Image layout="fill" objectFit="cover" alt={movie.slug} src={movie.poster} className="poster-image" />
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl">{movie.title}</h1>
                        <div className="flex gap-2 mt-2">
                        {movie.cast.map((e, index) => <p key={index} className="inline">{e}</p>)}
                        </div>
                        <div> <p>{movie.released_on}</p> <p>{movie.length}</p> <p>{movie.director}</p></div>
                        <div className="max-w-md mt-2">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export async function getStaticProps(params: any) {   
    const movie = await searchApi(params.slug).then(res => res.data.movies[0]);
    console.log(movie);
    return {props:  movie}
    
}


export async function getStaticPaths() {
    const movies = await moviesApi.then(res => res.data.movies);
    const paths = movies.map((movie: IMovie) => {
        return {
                params:
                    {
                    slug: movie.slug
                }
            }
        })                
    return {
        paths , fallback: false
    }
}
