#Server Side Rendering
Express contains a rendering engine
This works with ejs - Embedded JavaScript
Set the views directory
`app.set('views', path.join(__dirname, 'views'))`
Load the template engine
`app.set('view engine', 'ejs')`
`Create a route and pass in an obect. The object properties will be varialbes in the ejs template file`
app.get('/pokemon', (req, res) => {
  `index is the name of the .ejs file in the views directory`
  res.render('index', {
      pokedex: pokemon
  });
});

syntax in .ejs: <% %> to embed direct javascript
syntax in .ejs: <%= %> to embed variables (escaped html format)
syntax in .ejs: <%- %> to embed variables (raw format)

Used to make the initial page load really quickly, then the client side rending takes over to provide further functionality.
