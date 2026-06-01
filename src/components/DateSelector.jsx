'use client';
import { useState, useEffect } from 'react';
import { Button } from '@heroui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const DateSelector = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const today = new Date();
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      nextSevenDays.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        fullDate: date.toISOString().split('T')[0]
      });
    }
    setDates(nextSevenDays);
    setSelectedDate(nextSevenDays[0].date);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#1a0f12] to-red-950/30 p-6 rounded-2xl border border-red-600/20 my-8 shadow-2xl">
          <div className="mb-6 text-white font-bold text-lg min-w-[120px]">Choose Date</div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-4 w-full">
          
          <button className="text-red-500 hover:text-white transition"><HiChevronLeft size={24} /></button>
          
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {dates.map((item) => (
              <button
                key={item.fullDate}
                onClick={() => setSelectedDate(item.date)}
                className={`flex flex-col items-center p-3 rounded-xl border transition duration-300 min-w-[60px]
                  ${selectedDate === item.date 
                    ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/20' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-red-500/50'}`}
              >
                <span className="text-xs uppercase">{item.day}</span>
                <span className="font-bold text-lg">{item.date}</span>
              </button>
            ))}
          </div>
          
          <button className="text-red-500 hover:text-white transition"><HiChevronRight size={24} /></button>
        </div>

        <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl w-full md:w-auto shadow-lg shadow-red-600/30 transition-all hover:scale-105">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default DateSelector;