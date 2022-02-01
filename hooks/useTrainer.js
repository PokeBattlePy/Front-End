import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function useTrainer() {
  const { data, error } = useSWR("", fetcher);

  return {
    trainer: data,
    isLoading: !error && !data,
    isError: error
  };
}
