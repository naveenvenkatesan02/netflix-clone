import Main from './Main'
import NowPlaying from './Rows/NowPlaying';
import Populor from './Rows/Populor';
import TopRated from './Rows/TopRated';
import Upcoming from './Rows/Upcoming';

function Netflix(){
    return(
        <>
            <Main/>
            
            <NowPlaying title={'Now Playing'}/>
            <Populor title={'Populor'}/>
            <TopRated title={'Top Rated'}/>
            <Upcoming title={'Upcoming'}/>
        
        </>

    )
}

export default Netflix;