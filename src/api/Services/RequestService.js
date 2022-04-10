import FetchService from './FetchService';

class RequestService {
    allCharacters() {
        const url = 'https://rickandmortyapi.com/api/character';
        return FetchService.getData(url);
    }
}

export default new RequestService();