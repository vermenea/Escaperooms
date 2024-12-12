import { useState } from 'react';
import './Reservations.css';
import '../../style/main.css';
import PlayerAmountButton from './PlayerAmountButton';
import SelectedOption from './SelectedOption';

const Reservations = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const handleSelect = (value: number | string) => {
    if (typeof value === 'number') {
      setSelectedAmount(value);
    } else if (timeSlots.includes(value)) {
      setSelectedTimeSlot(value);
    } else {
      setSelectedRoom(value);
    }
  };

  const timeSlots = [
    '10:00 - 11:00',
    '11:30 - 12:30',
    '13:00 - 14:00',
    '14:30 - 15:30',
    '16:00 - 17:00',
    '17:30 - 18:30',
    '19:00 - 20:00',
    '20:30 - 21:30',
  ];

  return (
    <main className='wrapper'>
      <section className='container'>
        {/* left panel - form */}
        <section className='side'>
          {/* credentials */}
          <div className='credentials'>
            <label htmlFor='name'>Twoje imię lub nazwa drużyny:</label>
            <input type='name' placeholder='np. Mistrzowie Gry' />
            <label htmlFor='email'>Email:</label>
            <input type='email' placeholder='example@email.com' />
            <label htmlFor='phone'>Telefon:</label>
            <input type='phone' placeholder='000-000-000' />
          </div>
          {/* people */}
          <div className='people'>
            <p>Liczba graczy:</p>
            <div className='button-container'>
              {[2, 3, 4, 5, 6].map((amount) => (
                <PlayerAmountButton
                  key={amount}
                  title={amount.toString()}
                  onSelect={() => handleSelect(amount)}
                  isSelected={selectedAmount === amount}
                />
              ))}
            </div>
          </div>
          {/* rooms */}
          <div className='rooms'>
            <p>Wybierz pokój zagadek:</p>
            <div className='rooms-buttons'>
              {[
                'Pracownia Eleonory',
                'Bursztynowa Komnata',
                'Biuro detektywa',
                'Pokój zaginionego dziecka',
                'Egzorcyzm',
                'Mistress',
              ].map((title) => (
                <SelectedOption
                  key={title}
                  title={title}
                  onSelect={() => handleSelect(title)}
                  isSelected={selectedRoom === title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* middle panel - calendar */}
        <section className='middle'></section>

        {/* right panel - form hours */}
        <section className='side'>
          <div className='time-slots'>
            <p className='hour'>Wybierz godzinę:</p>
            {timeSlots.map((slot) => (
              <SelectedOption
                key={slot}
                title={slot}
                onSelect={() => handleSelect(slot)}
                isSelected={selectedTimeSlot === slot}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Reservations;
