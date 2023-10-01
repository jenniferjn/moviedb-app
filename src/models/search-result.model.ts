import { SearchResultResponse } from "../schema/search-result.schema";

export interface SearchResultOutput {
  page: number;
  totalPages: number;
  totalResults: number;
  results: Result[];
}

interface Result {
  id: number;
  type: string;
  title: string;
  poster: string;
  rate: number;
}

export function transformSearchResult(response: SearchResultResponse): SearchResultOutput {
  let output: SearchResultOutput;

  output = {
    page: response.page,
    totalPages: response.total_pages,
    totalResults: response.total_results,
    results: response.results.map((result) => {
      if (result.media_type === 'movie' || result.media_type === 'tv') {
        return {
          id: result.id,
          type: result.media_type,
          title: result.title,
          poster: result.poster_path,
          rate: result.vote_average
        }
      } else {
        return {
          id: 0,
          type: '',
          title: '',
          poster: '',
          rate: 0
        }
      }
    })
  }

  return output;
}