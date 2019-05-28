//Сборная солянка собирает в себе все самые главные куски приложения
import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from  './components/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
     <Route path="/" component={Feed} exact/>
     <Route path="/profile" component={Profile} exact/>
    </div>
    </Router>
  );
}

export default App;
//Создаем 1 компонент, использующийся на 1 и 2 стр. это Шапка Хеадер (разместить логотип, и 2 ссылки: Лента и Профиль
 //Внутри приложения Маршрутизация
