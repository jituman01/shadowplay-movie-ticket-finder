import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]

const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyMoviesData =
    
    [
  {
    "_id": "324544",
    "id": 324544,
    "title": "In the Lost Lands",
    "overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power.",
    "poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
    "genres": ["Action", "Fantasy", "Adventure"],
    "release_date": "2025-02-27",
    "original_language": "en",
    "tagline": "She seeks the power to free her people.",
    "vote_average": 6.4,
    "vote_count": 15000,
    "runtime": 102
  },
  {
    "_id": "1232546",
    "id": 1232546,
    "title": "Until Dawn",
    "overview": "One year after her sister mysteriously disappeared, Clover and her friends search for answers.",
    "poster_path": "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    "genres": ["Horror", "Mystery"],
    "release_date": "2025-04-23",
    "original_language": "en",
    "tagline": "Every night a different nightmare.",
    "vote_average": 6.4,
    "vote_count": 18000,
    "runtime": 103
  },
  {
    "_id": "552524",
    "id": 552524,
    "title": "Lilo & Stitch",
    "overview": "The touching story of a lonely Hawaiian girl and the fugitive alien who helps mend her family.",
    "poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    "genres": ["Family", "Comedy", "Science Fiction"],
    "release_date": "2025-05-17",
    "original_language": "en",
    "tagline": "Hold on to your coconuts.",
    "vote_average": 7.1,
    "vote_count": 27500,
    "runtime": 108
  },
  {
    "_id": "668489",
    "id": 668489,
    "title": "Havoc",
    "overview": "A jaded cop fights through a corrupt city's criminal underworld to save a politician's son.",
    "poster_path": "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
    "genres": ["Action", "Crime", "Thriller"],
    "release_date": "2025-04-25",
    "original_language": "en",
    "tagline": "No law. Only disorder.",
    "vote_average": 6.5,
    "vote_count": 35960,
    "runtime": 107
  },
  {
    "_id": "950387",
    "id": 950387,
    "title": "A Minecraft Movie",
    "overview": "Four misfits are pulled into the Overworld and must master its mysteries to get home.",
    "poster_path": "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    "genres": ["Family", "Comedy", "Adventure", "Fantasy"],
    "release_date": "2025-03-31",
    "original_language": "en",
    "tagline": "Be there and be square.",
    "vote_average": 6.5,
    "vote_count": 15225,
    "runtime": 101
  },
  {
    "_id": "575265",
    "id": 575265,
    "title": "Mission: Impossible - The Final Reckoning",
    "overview": "Ethan Hunt races against time to stop a powerful AI threatening the world.",
    "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
    "genres": ["Action", "Adventure", "Thriller"],
    "release_date": "2025-05-17",
    "original_language": "en",
    "tagline": "Our lives are the sum of our choices.",
    "vote_average": 7.0,
    "vote_count": 19885,
    "runtime": 170
  },
  {
    "_id": "986056",
    "id": 986056,
    "title": "Thunderbolts*",
    "overview": "A group of disillusioned antiheroes embark on a dangerous mission that forces them to confront their pasts.",
    "poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
    "genres": ["Action", "Science Fiction", "Adventure"],
    "release_date": "2025-04-30",
    "original_language": "en",
    "tagline": "Everyone deserves a second shot.",
    "vote_average": 7.4,
    "vote_count": 23569,
    "runtime": 127
  },
  {
    "_id": "1011985",
    "id": 1011985,
    "title": "Kung Fu Panda 4",
    "overview": "Po faces his biggest challenge yet as he searches for a successor while battling a powerful new villain.",
    "poster_path": "https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/zBG5Mg29NH9xxpWMMG7BIvKwYhL.jpg",
    "genres": ["Animation", "Action", "Comedy"],
    "release_date": "2024-03-02",
    "original_language": "en",
    "tagline": "The Dragon Warrior returns.",
    "vote_average": 7.2,
    "vote_count": 12450,
    "runtime": 94
  },
  {
    "_id": "693134",
    "id": 693134,
    "title": "Dune: Part Two",
    "overview": "Paul Atreides unites with the Fremen while seeking revenge against those who destroyed his family.",
    "poster_path": "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    "genres": ["Science Fiction", "Adventure", "Drama"],
    "release_date": "2024-02-28",
    "original_language": "en",
    "tagline": "Long live the fighters.",
    "vote_average": 8.4,
    "vote_count": 38500,
    "runtime": 166
  },
  {
    "_id": "872585",
    "id": 872585,
    "title": "Oppenheimer",
    "overview": "The story of J. Robert Oppenheimer and the creation of the atomic bomb during World War II.",
    "poster_path": "https://image.tmdb.org/t/p/original/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    "genres": ["Drama", "History"],
    "release_date": "2023-07-19",
    "original_language": "en",
    "tagline": "The world forever changes.",
    "vote_average": 8.1,
    "vote_count": 45200,
    "runtime": 180
  },
  {
    "_id": "438631",
    "id": 438631,
    "title": "Dune",
    "overview": "Paul Atreides, a gifted young man, must travel to the most dangerous planet in the universe.",
    "poster_path": "https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/iopYFB1b6Bh7FWZh3onQhph1sih.jpg",
    "genres": ["Science Fiction", "Adventure"],
    "release_date": "2021-09-15",
    "original_language": "en",
    "tagline": "Beyond fear, destiny awaits.",
    "vote_average": 7.8,
    "vote_count": 32100,
    "runtime": 155
  },
  {
    "_id": "603692",
    "id": 603692,
    "title": "John Wick: Chapter 4",
    "overview": "John Wick uncovers a path to defeating The High Table, but powerful enemies stand in his way.",
    "poster_path": "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    "genres": ["Action", "Thriller", "Crime"],
    "release_date": "2023-03-22",
    "original_language": "en",
    "tagline": "No way back, one way out.",
    "vote_average": 7.9,
    "vote_count": 27500,
    "runtime": 169
  },
  {
    "_id": "299536",
    "id": 299536,
    "title": "Avengers: Infinity War",
    "overview": "The Avengers and their allies must stop Thanos before he destroys half of all life in the universe.",
    "poster_path": "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    "genres": ["Action", "Adventure", "Science Fiction"],
    "release_date": "2018-04-25",
    "original_language": "en",
    "tagline": "An entire universe. Once and for all.",
    "vote_average": 8.2,
    "vote_count": 42000,
    "runtime": 149
  },
  {
    "_id": "299534",
    "id": 299534,
    "title": "Avengers: Endgame",
    "overview": "After the devastating events of Infinity War, the Avengers assemble once more.",
    "poster_path": "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "genres": ["Action", "Adventure", "Science Fiction"],
    "release_date": "2019-04-24",
    "original_language": "en",
    "tagline": "Part of the journey is the end.",
    "vote_average": 8.3,
    "vote_count": 39000,
    "runtime": 181
  },
  {
    "_id": "155",
    "id": 155,
    "title": "The Dark Knight",
    "overview": "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    "poster_path": "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    "genres": ["Action", "Crime", "Drama"],
    "release_date": "2008-07-16",
    "original_language": "en",
    "tagline": "Why so serious?",
    "vote_average": 8.5,
    "vote_count": 41000,
    "runtime": 152
  }
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]