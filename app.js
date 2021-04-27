const express = require ('express');
const path = require ('path');
const app = express();
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('How are you?')
});

app.get('/test-ejs', (req, res) => {
  res.render('/test-ejs', {title: 'Hey'});
});

app.get('/test-ejs2', (req, res) => {
  const users = [
    { name: 'Bob'}, 
    {name: 'John'},
    {name: 'Jane'} ];
});

app.get('/home', (req, res) =>
  res.sendFile('homepage.html', {root: publicDir})
);

app.put('/home', (req, res) => 
  res.jsonp('homepage.html', {good: 'yep'})
);

 



app.listen(5000, () => console.log(`Server running on port 5000`));
