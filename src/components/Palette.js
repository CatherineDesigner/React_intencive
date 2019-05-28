import React, {Component}from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        error:false
    }
 // когда компонент создался на стр.в нём будет выполняться какая то операция
 componentDidMount() {
     this.updatePhotos();
 }
   updatePhotos() {
      this.InstaService.getAllPhotos()  //создать потом в instaservice
        .then(this.onPhotosLoaded)   // когда будет загружаться, будут меняться фотографии
        .catch(this.onError);
}

 onPhotosLoaded = (photos) => {
        this.setState({
            photos,   // новое фото?
            error: false
        })
    }

    onError = (err) => {
          this.setState({
              error: true  // ошибки
          })
      }

    renderItems(arr){
             return arr.map((item) => {
             const {src, alt, id} = item;
                return (
                  <img src={src} alt={alt} key={id}/>  //внутри здесь колбек функция
           )

           })
         }
            render(){
              const {error, photos} = this.state;
        if (error){
            return <ErrorMessage/>
        }

        const items = this.renderItems(photos);

        return (
            <div className="palette"> {/* отрендарили и помещаем на стр.*/}
                {items}
            </div>

              )
            }

        }

//импортирует палетку в профиль, чтобы все отрендарилось как надо
// рендарим всё,что приходит с БД
