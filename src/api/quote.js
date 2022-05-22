import _axios from "@/api/axios";

export const randomQuote = () => {
  return _axios.get('/quote/random')
}
