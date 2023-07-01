import axios from "axios";
import { useEffect, useState } from "react";
import { requests } from "../request";

type movieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.result);

      // api からランダムで値を取得している
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  // descriptinoの切り捨て用関数
  function truncate(str: any, n: number) {
    // undefined を弾く
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + "..." : str;
    }
  }
};