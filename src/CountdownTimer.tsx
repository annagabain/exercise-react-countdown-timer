import { useState, useRef, useEffect } from "react";

export default function CountdownTimer() {

    const initialTimeValue = 90;
    const [initialTime, setInitialTime] = useState<number>(initialTimeValue);
    const [error, setError] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState<number>(initialTimeValue);
    const [isActive, setIsActive] = useState<boolean>(false);
    const timeRef = useRef<number | null>(null);

    useEffect(() => {
        isActive && timeLeft > 0 ? (timeRef.current = window.setInterval(() => {
            setTimeLeft((previousTimeleft) => previousTimeleft - 1);
            console.log('hej from time ref');
            
        }, 1000)) : (timeRef.current && clearInterval(timeRef.current));

        return () => {
            if (timeRef.current !== null) {
                clearInterval(timeRef.current);
                timeRef.current = null;
            }
        };
    }, [isActive, timeLeft]);

    const handleInitialTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userInputValue = parseInt(event.target.value);

        if (isNaN(userInputValue) || userInputValue < 1 || userInputValue > 3600) {
            setError('Värdet måste vara mellan 1 och 3600 sekunder.');
            return;
        }
        setError(null);
        setInitialTime(userInputValue);
        if (!isActive) {
            setTimeLeft(userInputValue);
        }
    };

    const handleStartandPause = () => {
        if (timeLeft === 0) {
            setTimeLeft(initialTime);
        }
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setTimeLeft(initialTime);
        setIsActive(false);
    };

    return (
        <div id="timer-frame">
            <h1>Nedräkningstimer</h1>
            <label>
                <p>Ange en anpassad starttid:</p>
                <input
                    id="user-time-input"
                    name="usersInput"
                    type="number"
                    value={initialTime}
                    min="1"
                    max="3600"
                    onChange={handleInitialTimeChange}
                    disabled={isActive}
                />
            </label>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h2>{timeLeft > 0 ? `${timeLeft} sekunder kvar` : `Tidens slut!`} </h2>

            <div className="button-container">
                <button 
                    onClick={handleStartandPause} 
                    className="icon-button"
                >
                    <i className={`fas ${isActive && timeLeft > 0 ? "fa-pause" : "fa-play"}`}></i>
                </button>
                <span className="hover-text">
                    {isActive && timeLeft > 0 ? "Pausa" : "Starta"}
                </span>
            </div>

            <div className="button-container">
                <button 
                    onClick={handleReset} 
                    className="icon-button"
                >
                    <i className="fas fa-redo"></i>
                </button>
                <span className="hover-text">Återställ</span>
            </div>
        </div>
    );
}
