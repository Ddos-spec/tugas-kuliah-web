import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('cafe and dimsum use separate layout systems', () => {
  assert.equal(existsSync(new URL('../src/layouts/CafeLayout.astro', import.meta.url)), true);
  assert.equal(existsSync(new URL('../src/layouts/DimsumLayout.astro', import.meta.url)), true);

  const cafe = read('src/pages/cafe/index.astro');
  const dimsum = read('src/pages/dimsum/index.astro');
  assert.match(cafe, /CafeLayout/);
  assert.match(cafe, /c-hero/);
  assert.doesNotMatch(cafe, /BrandLayout/);
  assert.match(dimsum, /DimsumLayout/);
  assert.match(dimsum, /d-hero/);
  assert.doesNotMatch(dimsum, /BrandLayout/);
});

test('brand styles are physically separated and use different palettes', () => {
  assert.equal(existsSync(new URL('../src/styles/cafe.css', import.meta.url)), true);
  assert.equal(existsSync(new URL('../src/styles/dimsum.css', import.meta.url)), true);
  const cafeCss = read('src/styles/cafe.css');
  const dimsumCss = read('src/styles/dimsum.css');
  assert.match(cafeCss, /--c-cream:\s*#f3ede1/i);
  assert.match(cafeCss, /--c-olive:\s*#68705a/i);
  assert.match(dimsumCss, /--d-red:\s*#b61f2e/i);
  assert.match(dimsumCss, /--d-jade:\s*#1f5a4a/i);
  assert.notEqual(cafeCss, dimsumCss);
});

test('product presentation differs by brand instead of sharing one grid', () => {
  const cafe = read('src/pages/cafe/produk.astro');
  const dimsum = read('src/pages/dimsum/produk.astro');
  assert.match(cafe, /c-menu-list/);
  assert.doesNotMatch(cafe, /ProductGrid/);
  assert.match(dimsum, /d-menu-grid/);
  assert.doesNotMatch(dimsum, /ProductGrid/);
});

test('latest refactor remains respected: no topbar switcher or marquee on brand pages', () => {
  for (const file of [
    'src/pages/cafe/index.astro',
    'src/pages/dimsum/index.astro',
    'src/layouts/CafeLayout.astro',
    'src/layouts/DimsumLayout.astro'
  ]) {
    if (!existsSync(new URL(`../${file}`, import.meta.url))) continue;
    const content = read(file);
    assert.doesNotMatch(content, /topbar|marquee/i);
  }
});
