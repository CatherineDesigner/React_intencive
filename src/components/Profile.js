//в профиле показываем пользователя, которому надо залогиниться
import React from 'react';
import User from './User';
import Palette from './Palette'; // импортируем шаблон сюда, связанные с данными  из БД

const Profile = () => {
    return (
      <div className='container profile'>
                <User
                    src="https://s5.cdn.teleprogramma.pro/wp-content/uploads/2019/03/2d2b9151a77fcc58afbc0850a6556629.jpg"
                    alt="Female"
                    name="some_cool_name"/>
                 <Palette/>  
            </div>
    )
}

export default Profile;
