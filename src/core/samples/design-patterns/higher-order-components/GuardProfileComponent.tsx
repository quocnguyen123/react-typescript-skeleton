import React, { FC, useEffect, useState }  from 'react';

// HOC
function guard(Component: FC) {
  return React.memo(function HigherOrderComponent(props: any) {
    const [userInfo, setUserInfo] = useState(null);
    
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('users') as string);
      console.log(userInfo);
      if (user) {
        setUserInfo(user);
      }
    }, []);
    return userInfo ? <Component {...props} userInfo={userInfo}  /> : null;
  });
}

// Component using HOC
function ProfileComponent(props: any) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>Name: {props.userInfo.name}</p>
      <p>Age: {props.userInfo.age}</p>
      <p>Phone: {props.userInfo.phone}</p>
    </div>
  );
}

const GuardProfileComponent = guard(ProfileComponent);

export default GuardProfileComponent;