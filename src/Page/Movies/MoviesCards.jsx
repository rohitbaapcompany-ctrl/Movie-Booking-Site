import React, { useRef } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MoviesCards = () => {
  const movies = [
    {
      genre: "Action",
      movies: [
        {
          id: "action-1",
          title: "Avengers: Endgame",
          image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
          rating: "⭐ 8.4",
          year: 2019,
          price: 350,
          duration: "3h 1m",
          director: "Russo Brothers",
          cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
          description: "The epic conclusion to the Infinity Saga that became a defining moment in cinema history."
        },
        {
          id: "action-2",
          title: "John Wick 4",
          image: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
          rating: "⭐ 7.7",
          year: 2023,
          price: 320,
          duration: "2h 49m",
          director: "Chad Stahelski",
          cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
          description: "John Wick uncovers a path to defeating The High Table, but must face off against a new enemy."
        },
        {
          id: "action-3",
          title: "Top Gun: Maverick",
          image: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
          rating: "⭐ 8.2",
          year: 2022,
          price: 300,
          duration: "2h 11m",
          director: "Joseph Kosinski",
          cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
          description: "Maverick returns as a flight instructor, training a new generation of pilots for a dangerous mission."
        },
        {
          id: "action-4",
          title: "Mad Max: Fury Road",
          image: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: "⭐ 8.1",
          year: 2015,
          price: 250,
          duration: "2h",
          director: "George Miller",
          cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
          description: "A post-apocalyptic action film that redefined the genre with stunning practical effects."
        },
        {
          id: "action-5",
          title: "Mission: Impossible",
          image: "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE0LWJmZGQtNzg5ZjQ4OWZhMzVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: "⭐ 7.9",
          year: 2023,
          price: 310,
          duration: "2h 43m",
          director: "Christopher McQuarrie",
          cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames"],
          description: "Ethan Hunt faces his most personal mission yet in this explosive seventh installment."
        },
        {
          id: "action-6",
          title: "Spider-Man: No Way Home",
          image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
          rating: "⭐ 8.2",
          year: 2021,
          price: 330,
          duration: "2h 28m",
          director: "Jon Watts",
          cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
          description: "Peter Parker's secret identity is revealed, bringing together villains from across the multiverse."
        }
      ]
    },
    {
      genre: "Romance",
      movies: [
        {
          id: "romance-1",
          title: "The Notebook",
          image: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
          rating: "⭐ 7.8",
          year: 2004,
          price: 200,
          duration: "2h 3m",
          director: "Nick Cassavetes",
          cast: ["Ryan Gosling", "Rachel McAdams", "Gena Rowlands"],
          description: "A timeless love story about passion, loss, and the enduring power of true love."
        },
        {
          id: "romance-2",
          title: "La La Land",
          image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
          rating: "⭐ 8.0",
          year: 2016,
          price: 280,
          duration: "2h 8m",
          director: "Damien Chazelle",
          cast: ["Emma Stone", "Ryan Gosling", "John Legend"],
          description: "A modern musical romance about love, dreams, and the sacrifices we make for our passions."
        },
        {
          id: "romance-3",
          title: "Titanic",
          image: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
          rating: "⭐ 7.9",
          year: 1997,
          price: 250,
          duration: "3h 14m",
          director: "James Cameron",
          cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
          description: "An epic romance set against the tragic sinking of the RMS Titanic."
        },
        {
          id: "romance-4",
          title: "Before Sunrise",
          image: "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          rating: "⭐ 8.1",
          year: 1995,
          price: 180,
          duration: "1h 41m",
          director: "Richard Linklater",
          cast: ["Ethan Hawke", "Julie Delpy"],
          description: "Two strangers meet on a train and spend one magical night walking through Vienna."
        },
        {
          id: "romance-5",
          title: "Pride and Prejudice",
          image: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
          rating: "⭐ 7.8",
          year: 2005,
          price: 220,
          duration: "2h 9m",
          director: "Joe Wright",
          cast: ["Keira Knightley", "Matthew Macfadyen", "Brenda Blethyn"],
          description: "A gorgeous adaptation of Jane Austen's beloved novel about love and social class."
        },
        {
          id: "romance-6",
          title: "Call Me by Your Name",
          image: "https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_.jpg",
          rating: "⭐ 7.9",
          year: 2017,
          price: 260,
          duration: "2h 12m",
          director: "Luca Guadagnino",
          cast: ["Timothée Chalamet", "Armie Hammer", "Michael Stuhlbarg"],
          description: "A beautiful coming-of-age romance set in 1980s Italy about first love and self-discovery."
        }
      ]
    },
    {
      genre: "Horror",
      movies: [
        {
          id: "horror-1",
          title: "Hereditary",
          image: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZDlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
          rating: "⭐ 7.3",
          year: 2018,
          price: 280,
          duration: "2h 7m",
          director: "Ari Aster",
          cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
          description: "A psychological horror masterpiece that explores family trauma and the supernatural."
        },
        {
          id: "horror-2",
          title: "The Conjuring",
          image: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
          rating: "⭐ 7.5",
          year: 2013,
          price: 250,
          duration: "1h 52m",
          director: "James Wan",
          cast: ["Patrick Wilson", "Vera Farmiga", "Lili Taylor"],
          description: "Based on true events, paranormal investigators help a family terrorized by a dark presence."
        },
        {
          id: "horror-3",
          title: "Get Out",
          image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
          rating: "⭐ 7.7",
          year: 2017,
          price: 270,
          duration: "1h 44m",
          director: "Jordan Peele",
          cast: ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"],
          description: "A groundbreaking social thriller that uses horror to explore racism in modern America."
        },
        {
          id: "horror-4",
          title: "A Quiet Place",
          image: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg",
          rating: "⭐ 7.5",
          year: 2018,
          price: 260,
          duration: "1h 30m",
          director: "John Krasinski",
          cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
          description: "A family lives in silence while hiding from creatures that hunt by sound."
        },
        {
          id: "horror-5",
          title: "Midsommar",
          image: "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg",
          rating: "⭐ 7.1",
          year: 2019,
          price: 290,
          duration: "2h 28m",
          director: "Ari Aster",
          cast: ["Florence Pugh", "Jack Reynor", "William Jackson Harper"],
          description: "A disturbing folk horror about a Swedish midsummer festival with dark traditions."
        },
        {
          id: "horror-6",
          title: "The Babadook",
          image: "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_.jpg",
          rating: "⭐ 6.8",
          year: 2014,
          price: 240,
          duration: "1h 34m",
          director: "Jennifer Kent",
          cast: ["Essie Davis", "Noah Wiseman", "Daniel Henshall"],
          description: "A psychological horror about motherhood, grief, and a sinister presence in a pop-up book."
        }
      ]
    },
    {
      genre: "Comedy",
      movies: [
        {
          id: "comedy-1",
          title: "The Grand Budapest Hotel",
          image: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
          rating: "⭐ 8.1",
          year: 2014,
          price: 230,
          duration: "1h 39m",
          director: "Wes Anderson",
          cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
          description: "A whimsical comedy about the adventures of a legendary concierge and his protégé."
        },
        {
          id: "comedy-2",
          title: "Superbad",
          image: "https://m.media-amazon.com/images/M/MV5BYTVkMTVhZmYtZWRiZC00NjEwLWFkZTAtOWRmNDBjNGE0MmUxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: "⭐ 7.6",
          year: 2007,
          price: 200,
          duration: "1h 53m",
          director: "Greg Mottola",
          cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
          description: "Two co-dependent high school seniors are forced to deal with separation anxiety."
        },
        {
          id: "comedy-3",
          title: "Knives Out",
          image: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg",
          rating: "⭐ 7.9",
          year: 2019,
          price: 270,
          duration: "2h 10m",
          director: "Rian Johnson",
          cast: ["Daniel Craig", "Ana de Armas", "Chris Evans"],
          description: "A modern murder mystery with wit, charm, and a brilliant ensemble cast."
        },
        {
          id: "comedy-4",
          title: "Parasite",
          image: "https://m.media-amazon.com/images/M/MV5BYWZjMjFhM2EtY2Q4ZS00YWRkLWE3YzctNjUyYTRjN2VjN2Y0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
          rating: "⭐ 8.5",
          year: 2019,
          price: 300,
          duration: "2h 12m",
          director: "Bong Joon-ho",
          cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
          description: "A dark comedy thriller about class conflict and social inequality in modern Korea."
        },
        {
          id: "comedy-5",
          title: "The Hangover",
          image: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          rating: "⭐ 7.7",
          year: 2009,
          price: 220,
          duration: "1h 40m",
          director: "Todd Phillips",
          cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
          description: "Three groomsmen wake up from a bachelor party in Vegas with no memory of the previous night."
        },
        {
          id: "comedy-6",
          title: "Jojo Rabbit",
          image: "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
          rating: "⭐ 7.9",
          year: 2019,
          price: 250,
          duration: "1h 48m",
          director: "Taika Waititi",
          cast: ["Roman Griffin Davis", "Thomasin McKenzie", "Taika Waititi"],
          description: "A satirical comedy-drama about a young German boy whose imaginary friend is Hitler."
        }
      ]
    },
    {
      genre: "Thriller",
      movies: [
        {
          id: "thriller-1",
          title: "Inception",
          image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
          rating: "⭐ 8.8",
          year: 2010,
          price: 320,
          duration: "2h 28m",
          director: "Christopher Nolan",
          cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
          description: "A mind-bending thriller about entering people's dreams to steal or plant ideas."
        },
        {
          id: "thriller-2",
          title: "The Dark Knight",
          image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
          rating: "⭐ 9.0",
          year: 2008,
          price: 350,
          duration: "2h 32m",
          director: "Christopher Nolan",
          cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
          description: "Batman faces his greatest challenge yet in the form of the chaotic Joker."
        },
        {
          id: "thriller-3",
          title: "Zodiac",
          image: "https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          rating: "⭐ 7.7",
          year: 2007,
          price: 280,
          duration: "2h 37m",
          director: "David Fincher",
          cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Anthony Edwards"],
          description: "The true story of the hunt for the infamous Zodiac killer in San Francisco."
        },
        {
          id: "thriller-4",
          title: "Gone Girl",
          image: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg",
          rating: "⭐ 8.1",
          year: 2014,
          price: 290,
          duration: "2h 29m",
          director: "David Fincher",
          cast: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris"],
          description: "A psychological thriller about a man whose wife disappears under mysterious circumstances."
        },
        {
          id: "thriller-5",
          title: "Shutter Island",
          image: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: "⭐ 8.2",
          year: 2010,
          price: 270,
          duration: "2h 18m",
          director: "Martin Scorsese",
          cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
          description: "A US Marshal investigates the disappearance of a patient from a psychiatric facility."
        },
        {
          id: "thriller-6",
          title: "Se7en",
          image: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          rating: "⭐ 8.6",
          year: 1995,
          price: 260,
          duration: "2h 7m",
          director: "David Fincher",
          cast: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
          description: "Two detectives hunt for a serial killer who uses the seven deadly sins as his modus operandi."
        }
      ]
    }
  ];

  // Scroll handler
  const scrollRef = useRef({});

  const scroll = (genre, direction) => {
    const container = scrollRef.current[genre];
    if (container) {
      const scrollAmount = 250; // move by card width
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen text-white">
      <style jsx>{`
        /* Custom Scrollbar Styling - Red & White Theme */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(220, 38, 38, 0.8) rgba(255, 255, 255, 0.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
          border-radius: 12px;
          margin: 0 50px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #dc2626, #ef4444, #ffffff);
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #ef4444, #f87171, #ffffff);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.6),
                      inset 0 2px 0 rgba(255, 255, 255, 0.4);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .movie-card {
          position: relative;
          background: linear-gradient(145deg, #1f2937, #111827);
          border: 1px solid rgba(55, 65, 81, 0.3);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          width: 260px;
          height: auto;
          flex-shrink: 0;
          scroll-snap-align: start;
        }

        .movie-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.6s;
          z-index: 1;
        }
        
        .movie-card:hover::before {
          left: 100%;
        }
        
        .movie-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6),
            0 0 25px rgba(239, 68, 68, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
        }
        
        .movie-image {
          position: relative;
          overflow: hidden;
        }
        
        .movie-image::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30%;
          background: linear-gradient(
            to top,
            rgba(31, 41, 55, 0.9) 0%,
            rgba(31, 41, 55, 0.4) 50%,
            transparent 100%
          );
          pointer-events: none;
        }
        
        .movie-image img {
          transition: all 0.4s ease;
        }
        
        .movie-card:hover .movie-image img {
          transform: scale(1.1);
          filter: brightness(1.1) contrast(1.1);
        }
        
        .movie-button {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .movie-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.3s;
        }
        
        .movie-button:hover::before {
          left: 100%;
        }
        
        .movie-button:hover {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .price-text {
          display: block;
          transition: opacity 0.3s ease;
        }
        
        .book-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }
        
        .movie-button:hover .price-text {
          opacity: 0;
        }
        
        .movie-button:hover .book-text {
          opacity: 1;
        }
        
        .rating-badge {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .fade-in {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Red & White Navigation Buttons */
        .nav-button {
          background: linear-gradient(135deg, #dc2626, #ffffff);
          color: #dc2626;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }
        
        .nav-button:hover {
          background: linear-gradient(135deg, #ffffff, #dc2626);
          color: #ffffff;
          transform: scale(1.15);
          box-shadow: 0 6px 25px rgba(220, 38, 38, 0.5),
                      inset 0 2px 0 rgba(255, 255, 255, 0.6);
        }

        /* Enhanced Title Styling */
        .section-title {
          background: linear-gradient(135deg, #dc2626, #ffffff, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(220, 38, 38, 0.3);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {movies.map((section) => (
          <div key={section.genre} className="mb-16 relative">
            {/* Section Title - Red & White Gradient */}
            <h2 className="section-title text-3xl font-bold mb-6 tracking-wide">
              {section.genre} Movies
            </h2>

            {/* Prev Button - Red & White Theme */}
            <button
              onClick={() => scroll(section.genre, "left")}
              className="nav-button absolute left-2 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full shadow-lg"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Next Button - Red & White Theme */}
            <button
              onClick={() => scroll(section.genre, "right")}
              className="nav-button absolute right-2 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full shadow-lg"
            >
              <FaChevronRight size={20} />
            </button>

            {/* Scrollable Container - Enhanced */}
            <div
              ref={(el) => (scrollRef.current[section.genre] = el)}
              className="custom-scrollbar flex gap-5 overflow-x-auto px-12 snap-x snap-mandatory pb-3"
              style={{ 
                scrollBehavior: "smooth",
                overflowY: "hidden"
              }}
            >
              {section.movies.map((movie, index) => (
                <div
                  key={movie.id}
                  className="movie-card rounded-2xl fade-in relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Movie Image */}
                  <div className="movie-image relative">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-72 object-cover"
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450"%3E%3Crect width="300" height="450" fill="%231f2937"/%3E%3Ctext x="150" y="225" text-anchor="middle" fill="%23dc2626" font-size="16" font-family="Arial"%3ENo Image%3C/text%3E%3C/svg%3E';
                      }}
                    />

                    {/* Rating Badge */}
                    <div className="absolute top-3 left-3 rating-badge text-white text-xs font-bold px-2 py-1 rounded-full">
                      {movie.rating}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 relative z-10">
                    <h3
                      className="text-lg font-semibold text-white truncate mb-1"
                      title={movie.title}
                    >
                      {movie.title}
                    </h3>

                    <div className="flex flex-wrap gap-1 mt-1 text-gray-300 text-xs mb-2">
                      <span className="truncate">{movie.duration}</span>
                      <span>•</span>
                      <span>{movie.year}</span>
                      <span>•</span>
                      <span className="truncate">{section.genre}</span>
                    </div>
                    
                    <div className="text-gray-400 text-xs mb-3">
                      <div className="truncate">Dir: {movie.director}</div>
                      <div className="truncate">Cast: {movie.cast.slice(0, 2).join(", ")}</div>
                    </div>
                    
                    <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3">
                      {movie.description}
                    </p>

                    {/* Button */}
                    <button
                      className="movie-button w-full py-2 text-white font-semibold rounded-lg relative"
                      onClick={() =>
                        alert(`🎬 Booking "${movie.title}" for ₹${movie.price}!`)
                      }
                    >
                      <span className="price-text">₹{movie.price}</span>
                      <span className="book-text flex items-center gap-1">
                        <RiMovie2Fill size={20} /> Book Now
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesCards;