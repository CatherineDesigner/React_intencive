import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return(
            <div className="post">
            <User
             src="https://24smi.org/public/media/resize/800x-/2018/3/16/430050.jpg" alt="princess" name="Emmanuel_Bear"min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    Аккаунт пользователя
                </div>
                <div className="post__descr">
              Озеро Нижнее Шавлинское. Озеро находится в одном из самых живописных мест Республики Алтай - у истоков реки Шавла, берущей начало в ледниках Северо-Чуйского хребта, у горного массива Биш-Иирду. Озеро Нижнее Шавлинское расположено на высоте 1983м над уровнем моря. Размеры озера 1600 метров в длину и 500 метров в ширину, глубина озера - около 40 метров в летнее время.
                </div>
            </div>
        )
    }
}
