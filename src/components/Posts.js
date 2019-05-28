import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';


export default class Posts extends Component {
  // новый синтаксис - classFields классовые поля  es10
  // *Создаои  сервис,заимпортировали, чтобы обращаться к БД, Создали состояние компонента: отслеживаем какие посты есть и состояние ошибки
   InstaService = new InstaService();
      // состояния описываем
      state = {
      posts: [],
      error: false
  }
  // когда он загрузится, тогда мы что то сделаем
  // *как только подстроился,то запускаем функцию this.updatePosts
  componentDidMount() {
      this.updatePosts()
  }
   // Получает посты и устанавливает состояние
   //* Функция эта запускает сервер, запускает getAllPosts, запускаем промис которая она возвращ.. если все ок, то запускаем функцию  onPostsLoaded
  updatePosts() {
     //получил промис
     this.InstaService.getAllPosts()
         .then(this.onPostsLoaded)
         .catch(this.onError)   // когда посты не загрузились

 }

 //* если все ок, то получаем посты с БД и устанавливает наши посты в наше состояние. Если вдруг что то пошло не так, то получаем ошибку  onError
  onPostsLoaded = (posts) => {
         this.setState({
             posts,   // новый пост
             error: false
         })
     }
     //*onError устанавливает состояние нашего компонента в true
     // когда посты не загрузились
     onError = (err) => {
           this.setState({
               error: true
           })
       }

// Колбек функция. Деструктуризация. Вытащили перменные из объекта
       renderItems(arr){
              return arr.map((item) => {
                  const {name, altname, photo, src, alt, descr, id} = item;
                 return (       // возвращает препроцессоры jsx

                   //базис верстка для построения каждого отдельного поста
                   <div key={id} className="post">
                   <User
                    src={photo} alt={altname} name={name} min/>
                       <img src={src} alt={alt}></img>
                       <div className="post__name">
                           {name}
                       </div>
                       <div className="post__descr">
                    {descr}
                       </div>
                   </div>
            )

            })
          }




 // рендарим всё,что приходит с БД
  render() {
    const{error, posts} = this.state;
          if(error){
              return <ErrorMessage/>
          }
    const items = this.renderItems(posts);

    return(
   <div className="left">
         {items}
  {/*}<Post alt="altay" src="https://img.lookmytrips.com/images/look6tmn/580f46baff936759c704aa1e-5b166611788a9-1dhcpgh-lbcvr.jpg" />
  <Post alt="altay" src="http://muz4in.net/2016/08/04/76.jpeg" />*/}
   </div>

    )
  }
}
//Этот КОМПОНЕНТ использует посты
// из базы данных посты
