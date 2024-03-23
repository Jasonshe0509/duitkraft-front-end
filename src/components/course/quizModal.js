import "../styles/popup.css";
import "../styles/main.css";
import bg from '../assets/bg4.png';
import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState } from "react";
import DoubleUpXp from "../assets/double up xp.png";
import SkipLvl from "../assets/skip lvl.png";

function QuizModal({setOpenModal}) {

    const handleSubmitQuiz = () => {
        setOpenModal(false);
        window.location.href = "/course";
    }

    return (
        <main>
            <img src={bg} className='background flex' alt='background' />
            <div className="quizModalContainer">
                <div className="header">
                    <h2 className="text-fontColor">Quiz</h2>
                    <XMarkIcon className="text-fontColor h-[20px] mt-3 cursor-pointer" onClick={() => { setOpenModal(false); }} />
                </div>
                <p className="text-fontColor ml-4">What is the correct saving strategies that you learn?</p>
                <div className="radio-container">
                    <div className="radio-wrapper">
                        <label className="radio-button">
                            <input id="option1" name="radio-group" type="radio" />
                            <span className="radio-checkmark" />
                            <span className="radio-label text-fontColor"> Saving all your money in a single savings account without any diversification.</span>
                        </label>
                    </div>
                    <div className="radio-wrapper">
                        <label className="radio-button">
                            <input id="option2" name="radio-group" type="radio" />
                            <span className="radio-checkmark" />
                            <span className="radio-label text-fontColor">Ignoring the importance of tracking your expenses and budgeting while focusing solely on saving.</span>
                        </label>
                    </div>
                    <div className="radio-wrapper">
                        <label className="radio-button">
                            <input id="option3" name="radio-group" type="radio" />
                            <span className="radio-checkmark" />
                            <span className="radio-label text-fontColor"> Explore strategies to automate your savings and make saving a habit.</span>
                        </label>
                    </div>
                    <div className="radio-wrapper">
                        <label className="radio-button">
                            <input id="option4" name="radio-group" type="radio" />
                            <span className="radio-checkmark" />
                            <span className="radio-label"> Believing that saving small amounts occasionally is enough to build substantial wealth over time.</span>
                        </label>
                    </div>
                </div>
                <button className={`submitBtn`} onClick={handleSubmitQuiz}>
                    <p className='text-fontColor'>Submit</p>
                </button>
            </div>
        </main>
    );
}

export default QuizModal;