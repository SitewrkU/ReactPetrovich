import React from 'react'
import '../styles/Profile.css'

const Profile = () => {
  return (
    <>
      <div className="profilecard"> 
        <img src="src\pics\petrovich.png" alt="Petrovich" />
        <div className='profile-content'>
          <h1>Петрович</h1>
          <p className='status'>Грибний гуру з 33-річним стажем</p>
          <p>Вітаю, мені 53 роки. Я люблю збирати гриби і сидіти в фесебаці. Телефон: Samsung Galaxy J1 <br />Де мене знайти: біля хати, на лавці<br />Пригласити на п'янку можна в суботу і неділю. <br /> Щодо грибів читайте в статті #1</p>
        </div>
      </div>
    </>
  )
}

export default Profile