const User = require('./User');
const Organization = require('./Organizations');


User.hasMany(Organization, {
  foreignKey: 'organization_id',
});

Organization.belongsTo(User, {
  primaryKey: 'User_id',
});

module.exports = { User, Organization };
