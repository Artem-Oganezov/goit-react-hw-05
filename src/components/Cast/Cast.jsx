const Cast = ({ data }) => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : defaultImg
              }
              width={250}
              alt={item.original_name}
            />
            <p>
              {item.original_name}
              <br />
              Character:{item.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
