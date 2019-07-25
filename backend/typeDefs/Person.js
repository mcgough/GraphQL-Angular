const Person = `
  type Person {
    id: Int,
    name: String,
    birthday: String,
    known_for_department: String,
    deathday: String,
    gender: Int,
    biography: String,
    place_of_birth: String,
    profile_path: String,
    credits: Credits,
    images: [Image],
  }
`;

const Image = `
  type Image {
    file_path: String,
  }
`;

module.exports = { Person, Image };