import React, { useState, useEffect } from 'react';


const CrowdfundingStatus = () => {
  const [totalBacked, setTotalBacked] = useState(0);
  const [totalBackers, setTotalBackers] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const goalValue = 100000; // Set the campaign goal value (static for now)

  // Simulate the animation effect
  useEffect(() => {
    const duration = 2000;
    const startTimestamp = performance.now();

    const animateValue = (start, end, setter) => {
      const step = (timestamp) => {
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const animatedValue = Math.floor(progress * (end - start) + start);
        setter(animatedValue);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    // Set your actual values here
    const startBacked = 0;
    const endBacked = 89914;
    const startBackers = 0;
    const endBackers = 99;
    const startDays = 0;
    const endDays = 24;

    animateValue(startBacked, endBacked, setTotalBacked);
    animateValue(startBackers, endBackers, setTotalBackers);
    animateValue(startDays, endDays, setDaysLeft);
  }, []);

  return (
    <section className="num p-7">
      <div className=" holder">
        <div className="basis-1/3 num1">
          <h2 className="text1">${totalBacked}</h2>
          <p className="text2 men">Cleared airdrop today </p>
        </div>
        <div className="basis-1/3 num1">
          <h2 className="text1 total-backers">{totalBackers}</h2>
          <p className="text2 men">successful wallet connect</p>
        </div>
        <div className="basis-1/3 num2">
          <h2 className="text1 days-left">{daysLeft}</h2>
          <p className="text2">Wallet available</p>
        </div>
      </div>
      {/* Add your loader component here */}
    </section>
  );
};

export default CrowdfundingStatus;
