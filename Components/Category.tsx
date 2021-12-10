import IMovie from "../types/IMovie";
import MovieCard from "./MovieCard";
import '../styles/Home.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
    categoryMovies: IMovie[];
    name: string;
}

export default function Category(props: Props): JSX.Element {
    const { categoryMovies, name } = props;

// Slider not responding well to categories with only element so I commented it out

//     var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,    
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//          centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }   
//   ]
//   };

    return (
        <div className="flex flex-col gap-y-7 pt-10 pb-28">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">{name}</h2>
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 sm:grid-cols-3 max-w-screen-xl mx-auto">
                {categoryMovies.map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </div>
            {/* <Slider className="max-w-screen-xl mx-auto slider" {...settings}>
                {categoryMovies.map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </Slider> */}

        </div>
    );
}
