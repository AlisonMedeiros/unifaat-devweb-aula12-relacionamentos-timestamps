import ColaboradorModel from '../app/Models/ColaboradorModel.js';
import ColaboradorProjetoModel from '../app/Models/ColaboradorProjetoModel.js';
import ProjetoModel from '../app/Models/ProjetoModel.js';
import TodoModel from '../app/Models/TodoModel.js';

ColaboradorModel.hasMany(TodoModel, {
    foreignKey: 'id_colaborador',
    as: 'todos'
});

TodoModel.belongsTo(ColaboradorModel, {
    foreignKey: 'id_colaborador',
    as: 'colaborador'
});

ColaboradorModel.belongsToMany(ProjetoModel, {
    through: ColaboradorProjetoModel,
    foreignKey: 'id_colaborador',
    otherKey: 'id_projeto',
    as: 'projetos'
});

ProjetoModel.belongsToMany(ColaboradorModel, {
    through: ColaboradorProjetoModel,
    foreignKey: 'id_projeto',
    otherKey: 'id_colaborador',
    as: 'colaboradores'
});