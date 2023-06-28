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

  const movies = [
    {title: "Only Yesterday"},
    {title: "Castle in the Sky"},
    {title: "The Tale of the Princess Kaguya"}
  ]
  const orderedMovies = [
    {title: "Castle in the Sky"},
    {title: "Only Yesterday"},
    {title: "The Tale of the Princess Kaguya"}
  ]

  describe('sortMovies', () => {
    it('Should return movies in alphabetical order & from A to Z', () => {
      expect(sortMovies.sortOrder(movies, "title", "asc")).toEqual(orderedMovies);
    })
  })
})