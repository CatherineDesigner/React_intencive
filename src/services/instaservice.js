// тут всё хранится!
 // Учимся работать с сервером методами
 // Мы  собрали всё в один метод, оптимизировали
export default class InstaService {

    constructor() {
     this._apiBase = 'http://localhost:3000/' //базовый Api адрес
    }
    getResource = async (url) => {
        // будет записан рез запроса от сервера
        const res = await fetch(`${this._apiBase}${url}`);
        // await-ждём операцию...async и await работают только в паре!
        // если не ок то ошибка
        //res статус - статус ошибки (что за ошибка)
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        //возвращает промис - что нам придут данные в формате json
        return res.json()
    }

    // 2 метод Post, получает ВСЕ посты из нашей БД
    getAllPosts = async () => {
       const res = await this.getResource('posts/');
       return res;   // возвращаются все свойства
   }

  // тут вернуть картинки и альтернативный текст только самые нужные
    getAllPhotos = async () => {
        const res = await  this.getResource('posts/');
        return res.map(this._transformPosts); // возвращаются не все свойства, а тол ько самые нужные/трансформированные
    }
    _transformPosts = (post)=> {
       return {    // выбираем только действительно нужные/возвращаем
           src: post.src,
           alt: post.alt,
           id: post.id
   }
 }
}
// здесь можно было аналогично прописать дом. задание урока № 2 - возвратить только: картинку, имя и alt профиля
