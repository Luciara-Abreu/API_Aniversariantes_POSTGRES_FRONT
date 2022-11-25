import AccountKey from './accountKey.json' assert { type: "json" }
const key = AccountKey


admin.initializeApp({
  credential: admin.credential.cert(key),
  databaseURL: "https://agenda-aniversariantes-51185-default-rtdb.firebaseio.com"
});

