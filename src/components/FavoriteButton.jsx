"use client";
import { useState, useEffect } from 'react';
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

const FavoriteButton = ({ movieId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const userId = "current_user_id";

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorite/${userId}/${movieId}`)
      .then(res => res.json())
      .then(data => setIsLiked(data.isLiked))
      .catch(err => console.error(err));
  }, [movieId]);

  const toggleLike = async () => {
    console.log("Sending to server:", { userId, movieId });
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorite`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, movieId })
    });
    const data = await res.json();
    setIsLiked(data.isLiked);
  };

  return (
    <button onClick={toggleLike} className="p-3 hover:text-red-600 rounded-lg transition">
      {isLiked ? <HiHeart size={24} className="text-red-600" /> : <HiOutlineHeart size={24} />}
    </button>
  );
};

export default FavoriteButton;