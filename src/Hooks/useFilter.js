
import { useLocalStrorage } from "./useLocalStrorage";

export function useFilter(dataList, callback) {
     const [query, setQuery] = useLocalStrorage("query", "");

      const filteredData = dataList.filter((data) => {
        return callback(data).toLowerCase().includes(query);
      });
    

    return [filteredData, setQuery]
  
}
