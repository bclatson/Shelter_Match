const Dogs = require('./Dogs');
const Owner = require('./Owner');
const PotentialOwner = require('./PotentialOwner');

PotentialOwner.hasMany(Dogs, {
    foreignKey: dog_id,
    onDelete: 'CASCADE'
});

Dogs.belongsTo(PotentialOwner, {
    foreignKey: 'dog_id'
});

Owner.belongsTo(PotentialOwner, {
    foreignKey: potentialOwner_id,
    onDelete: 'Cascade'
});