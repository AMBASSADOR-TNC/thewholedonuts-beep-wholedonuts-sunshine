'use strict';

/**
 * routes/gateway.js — Landing / wenevergonnaclose.com routes.
 */

const path   = require('path');
const express = require('express');

const router = express.Router();
const LANDING_DIR = path.join(__dirname, '..', '..', '..', 'apps', 'public-site');
const REPOSITORY_DIR = path.join(__dirname, '..', '..', '..');
const ARCHIVE_DIRECTORIES = [
  'brain',
  'counter-estore',
  'counter-foundation',
  'counter',
  'dashboard',
  'effort',
  'entry',
  'movement-engine',
  'protocol-engine',
  'table-estore',
  'table-systems',
  'table',
  'vault'
];
const ARCHIVE_FILES = [
  'description-28.csv',
  'donor.html',
  'ecosystem.html',
  'identity-law.html',
  'motion.js',
  'pol-cin.html',
  'pol-mot.html',
  'story.html',
  'style.css'
];

router.use(express.static(LANDING_DIR));
ARCHIVE_DIRECTORIES.forEach(function (directory) {
  router.use(`/${directory}`, express.static(path.join(REPOSITORY_DIR, directory)));
});
ARCHIVE_FILES.forEach(function (file) {
  router.get(`/${file}`, function (req, res) {
    res.sendFile(path.join(REPOSITORY_DIR, file));
  });
});

module.exports = router;
