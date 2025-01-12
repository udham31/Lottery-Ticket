import { useState } from 'react';
import './Lottery.css';
import { genTicket, isWinningTicket } from './helper';

export default function Lottery() {
  const [ticket, setTicket] = useState(genTicket(3));
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);

  const buyTicket = () => {
    const newTicket = genTicket(3);
    setTicket(newTicket);
    if (isWinningTicket(newTicket)) {
      setWinCount(winCount + 1);
    } else {
      setLoseCount(loseCount + 1);
    }
  };

  return (
    <div className="lottery-container">
      <h1>🎟️ Lottery Game 🎲</h1>
      <div className="ticket">
        {ticket.map((num, index) => (
          <span key={index} className="ticket-digit">
            {num}
          </span>
        ))}
      </div>
      <button onClick={buyTicket} className="btn-buy">
        🎫 Buy New Ticket
      </button>
      <h2 className={isWinningTicket(ticket) ? 'win' : 'lose'}>
        {isWinningTicket(ticket) ? '🎉 Congratulations, You Won! 🎉' : '😢 Better Luck Next Time! 😢'}
      </h2>
      <div className="stats">
        <p>✅ Wins: {winCount}</p>
        <p>❌ Losses: {loseCount}</p>
      </div>
    </div>
  );
}
