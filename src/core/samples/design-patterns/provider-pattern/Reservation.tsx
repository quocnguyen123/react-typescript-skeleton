import React, { createContext, ReactElement, useContext, useState } from 'react';

const ReservationContext = createContext({});

interface ReservationProviderProps {
  children: ReactElement;
}

interface IReservation {
  restaurant: string;
  time: string;
  person: string
}

// Component Provider
function ReservationProvider(props: ReservationProviderProps) {
  const [user, setUser] = useState(null);
  const [reservations, setReservations] = useState([]);

  const login = (_user: any) => setUser(_user);

  const logout = () => setUser(null);

  const addReservation = (reservation: IReservation) => {
    const newReservations = [...reservations, reservation] as any;
    setReservations(newReservations);
  };

  const removeReservations = () => setReservations([]);

  return (
    <ReservationContext.Provider
      value={{ user, login, logout, reservations, addReservation, removeReservations }}
    >
      {props.children}
    </ReservationContext.Provider>
  );
}


// Component using context
function ReservationList({ userInfo }: any) {
  const { user, login, logout, reservations, addReservation, removeReservations } = useContext(ReservationContext) as any;

  const handleAddReservation = () => {
    const reservation = { restaurant: 'Restaurant A', time: '7:00 PM', person: userInfo.name };
    addReservation(reservation);
  };

  const handleLogin = () => {
    login(userInfo);
  };

  const handleLogout = () => {
    logout();
    removeReservations();
  };

  return (
    <div>
      {user && <p>Welcome, {user.name}!</p>}
      <ul>
        {reservations.map((reservation: IReservation, index: number) => (
          <li key={index}>
            {reservation.restaurant} - {reservation.time} - {reservation.person}
          </li>
        ))}
      </ul>
      {user && <button onClick={handleAddReservation}>Add Reservation</button>}
      {user && <button onClick={handleLogout}>Logout</button>}
      {!user && <button onClick={handleLogin}>Login</button>}
    </div>
  );
}

function Main() {
  return (
    <ReservationProvider>
      <ReservationList userInfo={{ name: 'Quoc' }} />
    </ReservationProvider>
  );
}

export default Main;