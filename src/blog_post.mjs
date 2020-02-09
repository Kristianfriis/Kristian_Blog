const blogPost = [
  {
    id: 1,
    title: 'First Course: Simple Programming',
    text: 'The first course I took was called programming. I call the blog post for simple programming because it would be more fitting. The course itself is just called “Programming”, but I suspect it is called that because it looks better than “Simple Programming” or “Programming Fundamentals”.'
          + '<br>' + '<br>' +
          'It was a 7 week course where we were taught taught fundamental programming in Javascript, which makes a lot of sense considering it is really easy to get started with Javascript. You only need a browser and a text editor then you are good to go.'
           + '<br>' + '<br>' +
          'Having already finished almost all of FreeCodeCamps Javascript section, I did not find the course hard or difficult. I did learn some new things which was nice and finally got my head wrapped around multi dimensional arrays.'
          +'<br>' + '<br>' +
          'For my exam project I made a simple website that would take the length, width, height and weight of up to 10 different parcels/pallets and would output which carrier service had surcharges on the input and what kind of surcharges. The main things I took away from this project was:'
          + '<br>' + '<br>' +
          'Loops: Before this project I used to just hardcode things instead of creating a loop and loop through them. This was a huge timesaver, and cleared up all the many lines of code that did the same thing. It also helped with the readability of my code. So I learned how DRY should be a part of your mindset when programming.'
          + '<br>' + '<br>' +
          'Multidimensional Arrays: Really simple actually, I just learned and understood how multidimensional arrays work.'
          + '<br>' + '<br>' +
          'Structure: The way I structured this project, which was my first larger project, was just in one .js file which is a horrible way to do it. Since then I have reminded myself over and over to separate files and code in a module like way. This has helped a lot when reading my code later and not get super confused.',
    date: '01-01-2020'
  },
  {
    id: 2,
    title: 'Second Course: Databases',
    text: 'The Second course was a 10 week course in databases. We had our focus on Microsoft SQL server and the thoughts that go into designing and building a database.' + '<br>' +
          'The course was estimated to take 10 weeks to complete, but you had 6 months to complete these 10 weeks.'  + '<br>' +
          'That proved to be hard for me, as I did literally nothing the first 10 weeks of the course. I learned that I need a close deadline to complete a project otherwise I will procrastinate.But hey, It is good to learn these things about one self. For instance, I now know I have to set small deadlines within a big project, else I will procrastinate.'
           + '<br>' + '<br>' +
          'The topic I found the hardest to understand in the course was ER diagrams. It was to abstract and designy (though it is not a word). So this way of designing a database is not my favourite kind.'  + '<br>' +
          'But Database Normalization on the other hand, that I do get, and I like it. It is more tangible than ER diagrams.'
           + '<br>' + '<br>' +
          'Database Normalization is the process of taking a database and testing it against some parameters. There are originally only 3 levels, well 4 if you count the starting point of database.'
           + '<br>' + '<br>' +
          'I have not got more interesting to say about this course. It felt more introductory than anything else.',
    date: '09-01-2020'
  },
  {
    id: 3,
    title: 'Third Course: Client Side Programming',
    text: 'This time it was client side programming. This included HTML, CSS and Javascript. So I was right at home, having completed all of the frontend portion of FreeCodeCamp I felt confident that I would ace this course.<br><br>And I did, nothing more to say than that. I created a website for my dad’s fictional company, where he might sell custom grips made for pistols. It went pretty well if I say so myself. I am no designer and my website suffers from that, but technically it is           proficient.<br><br> From this I got more confidence in making websites and tried some new things like creating modals and picture carousels. This is something I can use in my future endeavours.<br><br> I have some projects lined up for a client. It is a hairdresser who do not have a website at the moment. So it is gonna be a simple one page application, with a future time booking feature since the next course I am gonna take is server side programming.',
    date: '12-01-2020'
  },
  {
    id: 4,
    title: 'Fourth Course: Server side Programming',
    text: '<p>In the fourth course I took we were taught server side programming. More precise we were developing the interface between the client and the backend logic. So what we were developing was API’s in the .NET Core Framework.</p><p>The exam for this was a presentation of an API that could take GET, GET{ID}, POST, PUT and DELETE. All the minimum for a CRUD application. I build a website for mountain biking and added a section for seeing MTB tracks and the score, which is the user that uploaded gave it. This defined that I needed at least GET and POST. but I would like the user to be able to update his record or delete it. I used entity framework core for the database communication because of its simplicity.</p><p>I also want to protect the data, and control who can upload data to the database. For that I needed both Authentication and Authorization. With this I hit a wall.<br> I understood that the user and password had to be included in the header at every request since it was going to be a RESTful API and thus being stateless. Or I could use JSON Web Tokens to create a session that would expire. But that seemed excessive.</p><p>I opted for the basic Authentication, where the credentials should be included in the header every time. But even a few days before my exam I could not get authentication to work. I tried just about everything but it would not work. I followed along with tutorials, I read the documentation but nothing would click for me. I even removed the database and hard coded a login, to see if that was the problem. I then thought I would see how you would go about implementing it in NodeJS instead and found it to easier than .NET Core. .NET Core is for me to filled with features and bells and whistles. I need something more simple when learning a new language or any skill for that matter.<br>But for this project I am stuck with .NET Core as it is the framework I need to use in my exam.</p><p>In the end I did succeed in getting Authentication to work before my exam, but I still managed to score the grade 10(or b if you are in the states).</p>',
    date: '09-02-2020'
  }
];

export default blogPost
