import tag from './location.png';

function MainContent(props) {
  return (
    <section>
      <div className='py-10 px-20 w-full h-[55vh] flex gap-4'>
        <img src={`./${props.img}`} className="w-[396px] rounded-md " alt="mountain"/>
        <div>
        <div className='flex items-center gap-1 pt-4'>
          <img src={tag} alt='location' />
          <p className='text-[#2b283a] text-xs'>{props.location}</p>
          <a href={props.googleMapsUrl} className='text-[#918e9b] text-[10.24px]'>View on Google Maps</a>
        </div>
        <div>
          <h1 className='text-[#2b283a] text-2xl font-bold pb-5'>{props.title}</h1>
          <div className='text-[#2b283a] text-[10.24px] font-bold flex items-center gap-1'>
          <span>{props.startDate}</span>
          <span> -</span>
          <span>{props.endDate}</span>
          </div>
          <p className='text-[#2b283a] text-[10.24px] pt-2 max-w-md'>{props.description}</p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;

