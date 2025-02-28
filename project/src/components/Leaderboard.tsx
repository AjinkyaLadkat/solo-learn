import React from "react";
import sololearnIcon from "../assests/sololearn.png";
import menuIcon from "../assests/menu-icon-svg-29.jpg";
import awardGif from "../assests/award.gif";
import lionIcon from "../assests/lion-icon.png";
import lockedIcon from "../assests/locked-icon.png";
import playIcon from "../assests/play.jpg";
import "../components/Leaderboard.css"; // Ensure styles are imported
import Navbar from "./Navbar";

export default function Leaderboard() {
    return (
        <div className="leaderboard-container">
            <Navbar />

            {/* Background Shape */}
            <div className="background-shape">


            {/* Header Section */}
            <header>
                <div className="header-left">
                    <img src={sololearnIcon} alt="Sololearn Icon" className="sololearn-icon" />
                    <span>Sololearn</span>
                </div>
                <div className="header-right">
                    <span className="menu-text">Menu</span>
                    <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
                </div>
            </header>
            </div>

            {/* Leaderboard Title */}
            <h1 className="text-4xl">Leaderboard</h1>

            {/* Content Section */}
            <div className="content">
                {/* Leaderboard Box */}
                <div className="leaderboard px-8">
                    <img src={awardGif} alt="Leaderboard GIF" className="leaderboard-gif" />
                    <p className="step-by-step">Earn 10 XP more to</p>
                    <p className="step-by-step">unlock</p>
                    <p className="step-by-step">the Leaderboard!</p>
                </div>

                {/* Sidebar Section */}
                <div className="sidebar">
                    {/* Mercury League */}
                    <div className="section mercury-league">
                        <h2>Mercury League</h2>
                        <div className="league-icons">
                            <img src={lionIcon} alt="Lion Icon" className="league-icon" />
                            <img src={lockedIcon} alt="Locked Icon" className="league-icon locked" />
                            <img src={lockedIcon} alt="Locked Icon" className="league-icon locked" />
                            <img src={lockedIcon} alt="Locked Icon" className="league-icon locked" />
                            <img src={lockedIcon} alt="Locked Icon" className="league-icon locked" />
                        </div>
                    </div>

                    {/* Earn XP Section */}
                    <div className="section earn-xp">
                        <h2 className="earn-xp-title pl-3">Earn XP</h2>
                        <button className="xp-button">
                            <div className="flex flex-col text-left">

                            <span>Complete a lesson</span>
                            <span className="xp-text">+10 XP</span>
                            </div>

                            <img src={playIcon} alt="Play Icon" className="play-icon rounded-2xl h-8 w-8" />
                        </button>

                        <button className="xp-button">
                            <div className="flex flex-col text-left">

                            <span>Achieve your daily goal</span>
                            <span className="xp-text">+10 XP</span>
                            </div>

                            <img src={playIcon} alt="Play Icon" className="play-icon rounded-2xl h-8 w-8" />
                        </button>
                        
                        <button className="xp-button">
                            <div className="flex flex-col text-left">

                            <span>Solve a code coach</span>
                            <span className="xp-text">+10 XP</span>
                            </div>

                            <img src={playIcon} alt="Play Icon" className="play-icon rounded-2xl h-8 w-8" />
                        </button>

                       

                        
                    </div>
                </div>
            </div>
        </div>
    );
}
