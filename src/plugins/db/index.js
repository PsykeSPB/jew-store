const sqlite3 = require('sqlite3').verbose();

export default {
  path: '',
  mode: '',
  database: {},
  open(path) {
    this.path = path;
    this.mode = sqlite3.OPEN_READWRITE;
    this.database = new sqlite3.Database(this.path, this.mode, (err) => {
      if (err) console.error(err);
    });
    return this;
  },
  create(path) {
    this.path = path;
    this.mode = sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE;
    this.database = new sqlite3.Database(this.path, this.mode, (err) => {
      if (err) console.error(err);
    });
    return this;
  },
  close() {
    this.path = null;
    this.mode = null;
    this.database.close();
  },
};
