
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('footnotes').del() // delete all footnotes
    .then(() => knex('papers').del()) // delete all papers
    .then(function () {
      // Inserts seed entries
      return knex('papers').insert({
          title: 'Fooo', author: 'Bob', publisher: 'Minnesota'
        }, 'id')
        .then(paper => {
          return knex('footnotes').insert([
            { note: 'Lorem', paper_id: paper[0] },
            { note: 'Dolor', paper_id: paper[0] }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`));
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
