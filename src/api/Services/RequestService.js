import FetchService from './FetchService';

class RequestService {
    allCharacters(cfg) {
        let url = new URL(`https://rickandmortyapi.com/api/character`)
        const params = {
            name: cfg.name || '',
            status: cfg.status || ''
        }
        url.search = new URLSearchParams(params)
        return FetchService.getData(url);
    }
}

export default new RequestService();