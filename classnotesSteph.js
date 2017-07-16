
var view = {
  var entries = [];
  var quotes = [
    'akdjkajklj', 'alkjfljalj',
],
data: [
    {
      title: 'I hate justin' ,
      date: ,
      category: 'Pining',
      mood: 'Depressed' ,
      text: 'Oh no, he got a new girlfriend' ,
      author: 'Stephanie'
    },
    {
      title:
      date:
      category:
      mood:
      text:
      author:
    }
  ]
};

//constructor function
function Entry (entryObject) {
  this.title = entryObject.title;
  this.date = entryObject.date;
  this.category = entryObject.category;
  this.mood = entryObject.mood;
  this.text = entryObject.text;
  this.author = entryObject.author || 'stephanie';
}

Entry.prototype.templateAndDomify = function () {
  var template = $('#entryTemplate').html();
  var compiled = Handlebars.compile(template);
  console.log($template)

};

//want to loop through the array of objects
view.init = function (){
  //loop through array and feed the data to the constructor
  view.data.forEach (function (entry) {
    // and feed the data to the constructor to make an entry object
    var existingEntry = new Entry({
      title: entry.title,
      date: entry.date,
      cateogry: entry.category,
      mood: entry.mood,
      text: entry.text,
      author: entry.author,
    });
    //then call the templateAndDomify function for that object
    existingEntry.templateAndDomify();
  });
};

to do: render existing entries to the dom
template!!!!
//make one...somwhere inthe html
//get the template
//compile it
//insert the data
//append
