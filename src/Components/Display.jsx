

export default function Display(data) {

  function getCurrentDate(){
    return new Date().toLocaleString('en-us', {
      weekday: 'long',
      month: 'long',
    day: "numeric",
    year: 'numeric'})
  }

  return (
      <>
        <div className="display">
          <h2>{data?.data?.name}, {data?.data?.sys?.country}</h2>
          <span>{getCurrentDate()}</span>
          <p>{data?.data?.main?.temp}</p>
          <h4>{data?.data?.weather[0]?.description}</h4>
        </div>
        <div className="desc">
          <span>
            {data?.data?.wind?.speed} <br /> Wind speed
          </span>
          <span>
          {data?.data?.main?.humidity}% <br /> Humidity
          </span>
        </div>
      </>
  );
}
