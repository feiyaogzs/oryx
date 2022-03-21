'use strict';

const { Worker } = require("worker_threads");

exports.run = async () => {
  // The DVR worker, for cloud storage.
  new Promise((resolve, reject) => {
    const worker = new Worker("./apiSecret.js");
    worker.on('error', reject);
    worker.on('exit', (code) => {
      console.log(`Thread #manager: exit with ${code}`);
      if (code !== 0) {
        return reject(new Error(`Thread #manager: stopped with exit code ${code}`));
      }
      resolve();
    });
  });

  new Promise((resolve, reject) => {
    const worker = new Worker("./crontab.js");
    worker.on('error', reject);
    worker.on('exit', (code) => {
      console.log(`Thread #crontab: exit with ${code}`);
      if (code !== 0) {
        return reject(new Error(`Thread #crontab: stopped with exit code ${code}`));
      }
      resolve();
    });
  });
};

