const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const localPath = process.argv[3];

const download = function(url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const content = body;

    fs.writeFile(localPath, content, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Downloaded and saved ${content.length} bytes to ${localPath}`);
    });
  });


};


download(url, localPath);