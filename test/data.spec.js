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

    it('Should filter movies directed by Hayao Miyazaki', () => {
      console.log('checking', movies);
      // expect(filterMovies.filterDirectors('Hayao Miyazaki', movies)).toBe('Hayao Miyazaki');
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
})