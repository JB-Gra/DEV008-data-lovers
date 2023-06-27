// =============================
// Import of 'data.js' functions
// =============================

import { ghibliData, filterMovies, sortMovies } from '../src/data';

// =============================
// 'filterMovies' function tests
// =============================

describe('filterMovies', () => {
  it('Should be an object', () => {
    expect(typeof filterMovies).toBe('object');
  });

  // ============================================
  // 'filterMovies.filterDirectors' function test
  // ============================================

  describe('filterMovies.filterDirectors', () => {
    it('Should be a function', () => {
      expect(typeof filterMovies.filterDirectors).toBe('function');
    });

    const movies = ghibliData();
    // const moviesByDirector = movies.includes(movies.director);

    it('Should filter movies directed by Hayao Miyazaki', () => {
      expect(filterMovies.filterDirectors('Hayao Miyazaki', movies).length).toBe(9);
    });

    it('Should filter movies directed by Isao Takahata', () => {
      expect(filterMovies.filterDirectors('Isao Takahata', movies).length).toBe(5);
    });
  })
})

// ===========================
// 'sortMovies' function tests
// ===========================

describe('sortMovies', () => {
  it('Should be an object', () => {
    expect(typeof sortMovies).toBe('object');
  });

  // ====================================
  // 'sortMovies.sortOrder' function test
  // ====================================

  describe('sortMovies', () => {
    it('Should be a function', () => {
      expect(typeof sortMovies.sortOrder).toBe('function');
    });
  })

  const movies = ghibliData();
  const movieTitles = [
    "Castle in the Sky",
    "From Up on Poppy Hill",
    "Grave of the Fireflies",
    "Howl's Moving Castle",
    "Kiki's Delivery Service",
    "My Neighbor Totoro",
    "My Neighbors the Yamadas",
    "Only Yesterday",
    "Pom Poko",
    "Ponyo on the Cliff by the Sea",
    "Porco Rosso",
    "Princess Mononoke",
    "Spirited Away",
    "Tales from Earthsea",
    "The Cat Returns",
    "The Secret World of Arrietty",
    "The Tale of the Princess Kaguya",
    "The Wind Rises",
    "When Marnie Was There",
    "Whisper of the Heart"
  ]

  describe('sortMovies', () => {
    it('Should return movies in alphabetical order & from A to Z', () => {
      expect(sortMovies.sortOrder(movies.title, "title", "asc")).toEqual(movieTitles);
    })
  })
})