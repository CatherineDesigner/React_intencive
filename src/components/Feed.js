//  КОМПОНЕНТ (большой кусок), собирающий в себе ещё несколько компонентов(собирает в  себя левую часть с ПОСТАМИ и правую часть- с ПОЛЬЗОВАТЕЛЯМИ)и экспортируется в App.js 
import React from 'react';
import Post from './Posts';
import User from './Users';

export default function Feed(){
return(
 <div className="container feed">
 <Post/>
 <User/>
 </div>

)

}
//это КОМПОНЕНТ, собирающий в себе ещё несколько компонентов,собирает в  себя левую часть с ПОСТАМИ и правую часть- с ПОЛЬЗОВАТЕЛЯМИ

//Сюда экспортируются Юзерсы