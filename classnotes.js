
// within html- include handlebars script!!!!
<script type="text/x-handlebars-template" id="template"></script>

<section>
  <p>{{ title }}</p>
  <ul>
    <li>{{ name }} </li>
    <li>{{ age }}</li>
    <li>{{{ favorite food }}}</li>//ignores any html tags that may exist



  <script type="text/javascript">
    var person ={
      name:'Bob',
      title: 'Ninja',
      age: 44,
      favorite food: 'beer'
    }

    var template = $('#template').html()
    var compile = Handlebars.compile(template)
    var newSection = compile(person)
    console.log(compile)

    //end of html
<script type="text/template" id="template">
Hello {{world}}, my name is {{maddy}}, and I am a {{dev}}.//in curly brackets there should be actual javascript expressions...?
</script>


<body>
  <div id="app"></div>


  <script type="text/javascript">
  //target the app div and append the contnet of our template
  $('#app').append($('#template').html())//getting templates content and appending it to whatever has an id of app


  function compile(tmpl, data){
    return template.replace(/{{(\d)}}/, function(match, number)) {
      console.log('match', match)
      console.log('number', number)
      return data[number]
    })
  }

  var template = $('template').html()
  var content = compile(template, ['world', 'maddy', 'dev'])//the array is the data
  $('app').append(content)

  var compile =


  </script>
