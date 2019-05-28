// каждый отдельный пользователь
import React, {Component} from 'react';

export default class Post extends Component {
    render() {
        return(
          <a href="localhost:3000" className={this.props.min ? "user min" : "user"}>
           <img src={this.props.src} alt={this.props.alt}></img> {/*ФОТОграфия и описание имени аккаунта*/}
           <div>{this.props.name}</div> {/* Имя пользователя*/}
           </a>
        )
    }
}

//Верстка простая: ссылка, картинка, блог
// фотография каждого отдельного пользователя
