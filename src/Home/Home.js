import { useState } from "react";
import "./home.css";

const Home = () => {
    const [temp, setTemp] = useState("");
    const [result, setResult] = useState("0°C \t 32°F \t 273.15°K");

    const handleTempType = (e) => {
        const activeTempType = document.querySelector(".temp-type-active");
        activeTempType.classList.toggle("temp-type-active");
        e.target.classList.toggle("temp-type-active");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempType = document.querySelector(".temp-type-active");
        handleTemperatureConvention(tempType.textContent, Number(temp));
    };

    const handleTemperatureConvention = (tempType, val) => {
        switch (tempType) {
            case "Fahrenheit": {
                const celsius = ((val - 32) * 5) / 9;
                const kelvin = 273.15 + celsius;
                return setResult(
                    `${celsius.toFixed(2)}°C \t ${val.toFixed(
                        2
                    )}°F \t ${kelvin.toFixed(2)}°K`
                );
            }

            case "Celsius": {
                const kelvin = 273.15 + val;
                const fahrenheit = val * 1.8 + 32;
                return setResult(
                    `${val.toFixed(2)}°C \t ${fahrenheit.toFixed(
                        2
                    )}°F \t ${kelvin.toFixed(2)}°K`
                );
            }

            case "Kelvin": {
                const celsius = val - 273.15;
                const fahrenheit = celsius * 1.8 + 32;
                return setResult(
                    `${celsius.toFixed(2)}°C \t ${fahrenheit.toFixed(
                        2
                    )}°F \t ${val.toFixed(2)}°K`
                );
            }

            default:
                return `0°C \t 32°F \t 273.15°K`;
        }
    };

    return (
        <>
            <header>
                <div className="logo-wrapper">
                    <a href="/" className="logo">
                        Temp conv
                    </a>
                </div>
                <div>
                    <a href="#footer" className="more">
                        About
                    </a>
                </div>
            </header>
            <main>
                <div className="input-wrapper">
                    <p className="temp-type-header">{`Celsius \t Fahrenheit \t Kelvin`}</p>
                    <p className="result">{result}</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            value={temp}
                            type="number"
                            name="temp"
                            id="temp"
                            className="temp-input"
                            placeholder="Temperature"
                            onChange={(e) => {
                                setTemp(e.target.value);
                            }}
                            required
                        />
                        <div className="temp-wrapper">
                            <p
                                className="temp-type temp-type-active"
                                onClick={handleTempType}
                            >
                                Fahrenheit
                            </p>
                            <button
                                className="temp-type temp-type"
                                onClick={handleTempType}
                            >
                                Kelvin
                            </button>
                            <button
                                className="temp-type temp-type"
                                onClick={handleTempType}
                            >
                                Celsius
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="temp-submit"
                            onClick={handleSubmit}
                        >
                            Convert
                        </button>
                    </form>
                </div>
            </main>
            <footer id="footer">
                <div className="footer-intro">
                    <p className="find-me">Find me across the Web</p>
                    <p className="made-with-love">
                        Made with ❤️ by Rahul Palamarthi
                    </p>
                </div>
                <div className="social-wrapper">
                    <a
                        className="social-links"
                        href="https://github.com/Rahul-Palamarthi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                    <a
                        className="social-links"
                        href="https://discord.com/users/733645557989376011"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Discord
                    </a>
                    <a
                        className="social-links"
                        href="mailto:rahulpalamarthi@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Gmail
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Home;
