import { Low, JSONFile } from 'lowdb'

const adapter = new JSONFile('db.json')
const db = new Low(adapter)

await db.read();

export const getAllData = () => {
    const allData = db.data;
    return allData;
}

export const getAllFilms = () => {
    // Hier sollen alle Filme zurück gegeben werden.
}

export const addNewFilm = (film) => {
    // Hier soll ein neuer Film mit einer neuen, einzigartigen uid eingefügt werden.
}

export const getFilmById = (id) => {
    // Hier soll ein Film anhand einer id zurück gegeben werden.
}

export const getAllAlbums = () => {
    // Hier sollen alle Albums zurück gegeben werden.
}

export const addNewAlbum = (album) => { 
    // Hier soll ein neues Album mit einer neuen, einzigartigen uid eingefügt werden.
}

export const getAlbumById = (id) => {
    // Hier soll ein einziges Album anhand einer ID zurückgegeben werden.
}
