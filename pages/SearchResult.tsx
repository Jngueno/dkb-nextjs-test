import IMovie from "../types/IMovie";
import MovieCard from "../Components/MovieCard";

interface Props {
    results: IMovie[];
    searchTerm: string;
    setsearchTerm: any;
    setResults: any;
}

export default function SearchResult(props: Props): JSX.Element {
    const { results } = props;

    return (
        
        Object.keys(results).length < 1 ? <div className="flex flex-col gap-y-7 pt-10 px-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Search Results</h2>
                <button onClick={props.setsearchTerm} className="bg-black text-white rounded-2xl">Clear</button>
            </div>
            <div className="flex max-w-screen-xl mx-auto">
                <p className="text-lg text-center">There is no result for the for <span className="font-bold italic">{props.searchTerm}</span> </p>

            </div>
        </div> :
            <div className="flex flex-col gap-y-7 pt-10 px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Search Results</h2>
                    <button onClick={props.setsearchTerm} className="bg-black text-[#c2c2c2] py-1 px-1 rounded-2xl">Clear</button>
                </div>

                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 sm:grid-cols-3 max-w-screen-xl mx-auto">

                    {results.map((movie, index) => {
                        return <MovieCard movie={movie} key={index} />
                    })}

                </div>
            </div>

    )
}
