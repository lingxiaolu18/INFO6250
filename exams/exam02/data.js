//jshint esversion:6
const users = {};
const recipes = {};
recipes[1] = {
  userName: 'Admin',
  recipeName: 'Noodles🍜',
  ingredients: '🍜',
  instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nunc ipsum. In eget lorem dui. Maecenas pretium non enim et blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu lectus interdum, mollis metus ut, laoreet purus. Sed ultricies accumsan lacus vitae porttitor. Cras tempor lectus non auctor imperdiet. Phasellus ut consectetur nisl.'
};
recipes[2] = {
  userName: 'Admin',
  recipeName: 'Fried 🥚 with 🍅',
  ingredients: '🍅 🥚',
  instructions: 'Suspendisse at finibus quam. Nam posuere eleifend metus, sit amet posuere magna tristique et. Integer vulputate dui non ante dignissim volutpat. Maecenas maximus pharetra quam et fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ligula neque, tempor a massa vel, suscipit consectetur mauris. In fermentum fringilla dui eu suscipit. Praesent lorem purus, tempus fermentum laoreet nec, dictum eu erat. Pellentesque id efficitur lacus. Etiam cursus urna nec quam venenatis, at semper urna molestie. Fusce nec scelerisque nunc.'
};
recipes[3] = {
  userName: 'Admin',
  recipeName: 'Fried🐟',
  ingredients: '🐟',
  instructions: 'Duis quis tincidunt est, consectetur pharetra lectus. Donec eu vehicula turpis. Etiam luctus nunc eu sem elementum, non placerat libero dictum. In vel luctus dolor. Nunc vel tortor felis. Cras tristique vulputate viverra. Pellentesque vitae ante lectus. Phasellus in orci efficitur, malesuada elit nec, mattis augue. Vivamus dolor diam, consectetur vitae diam sit amet, tempor mollis nulla. Sed dapibus ex dui, et egestas metus porta vel.'
};
recipes[4] = {
  userName: 'Admin',
  recipeName: 'Fried🍗',
  ingredients: '🍗',
  instructions: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent condimentum sollicitudin nisl vel cursus. Morbi iaculis ultrices porttitor. Aliquam erat volutpat. Aliquam nec velit tristique, blandit erat et, imperdiet turpis. Sed gravida placerat rutrum. Pellentesque iaculis nunc ex, et gravida dui tincidunt id. Suspendisse imperdiet magna at dignissim pellentesque. Suspendisse a justo pharetra, laoreet felis sodales, pulvinar nibh. Vestibulum felis velit, fermentum in massa tincidunt, hendrerit feugiat lectus.'
};
recipes[5] = {
  userName: 'Admin',
  recipeName: 'Fries🍟',
  ingredients: '🥔',
  instructions: 'Cras neque lacus, finibus et leo a, dapibus dignissim ex. Aliquam erat volutpat. Curabitur nec elit vel odio molestie auctor ac id nibh. Vestibulum lobortis, enim sed vestibulum pharetra, erat eros fringilla mi, eget congue nisi sapien eu odio. Aenean ullamcorper tortor et dui feugiat dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam fringilla sapien ac ligula placerat bibendum. Duis congue, tellus id varius aliquam, turpis est porta sapien, a suscipit lacus neque eget diam. Ut sagittis nulla lobortis ornare luctus. Fusce in dolor auctor, dictum tortor ac, convallis nisl. Etiam nibh enim, aliquet ut neque vitae, lobortis tristique turpis. Proin a nunc tincidunt, pellentesque quam vel, pretium lacus. Duis libero risus, pellentesque eget lectus a, sagittis auctor tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae'
};
module.exports = {
  users,
  recipes,
};
