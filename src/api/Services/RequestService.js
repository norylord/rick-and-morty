import FetchService from './FetchService';

class RequestService {
    allCharacters(reqType) {
        const url = `https://rickandmortyapi.com/api/${reqType}`;
        return FetchService.getData(url);
    }
}

export default new RequestService();