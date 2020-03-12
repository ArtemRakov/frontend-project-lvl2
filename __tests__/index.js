import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('get difference between 2 JSON files in tree format', () => {
  const beforeFilePath = getFixturePath('before.json');
  const afterFilePath = getFixturePath('after.json');
  const expectedResult = readFile('results/tree.txt');

  const result = gendiff(beforeFilePath, afterFilePath);

  expect(result).toEqual(expectedResult);
});

test('get difference between 2 YAML files in tree format', () => {
  const beforeFilePath = getFixturePath('before.yml');
  const afterFilePath = getFixturePath('after.yml');
  const expectedResult = readFile('results/tree.txt');

  const result = gendiff(beforeFilePath, afterFilePath);

  expect(result).toEqual(expectedResult);
});

test('get difference between 2 INI files in tree format', () => {
  const beforeFilePath = getFixturePath('before.ini');
  const afterFilePath = getFixturePath('after.ini');
  const expectedResult = readFile('results/tree.txt');

  const result = gendiff(beforeFilePath, afterFilePath);

  expect(result).toEqual(expectedResult);
});

test('get difference between 2 JSON files in plain format', () => {
  const beforeFilePath = getFixturePath('before.json');
  const afterFilePath = getFixturePath('after.json');
  const expectedResult = readFile('results/plain.txt');

  const result = gendiff(beforeFilePath, afterFilePath, 'plain');

  expect(result).toEqual(expectedResult);
});

test('get difference between 2 YAML files in plain format', () => {
  const beforeFilePath = getFixturePath('before.yml');
  const afterFilePath = getFixturePath('after.yml');
  const expectedResult = readFile('results/plain.txt');

  const result = gendiff(beforeFilePath, afterFilePath, 'plain');

  expect(result).toEqual(expectedResult);
});

test('get difference between 2 INI files in plain format', () => {
  const beforeFilePath = getFixturePath('before.ini');
  const afterFilePath = getFixturePath('after.ini');
  const expectedResult = readFile('results/plain.txt');

  const result = gendiff(beforeFilePath, afterFilePath, 'plain');

  expect(result).toEqual(expectedResult);
});
