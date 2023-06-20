const AlunoModel = require('../model/Aluno');

class AlunoController {
    async listAlunos(req, res) {
        let alunos = await AlunoModel.getAllAluno();

        res.json(alunos);
    }

    async createAluno(req, res) {
        let {
            name,
            aluno_id,
        } = req.body;

        let aluno = await AlunoModel.createAluno(name, aluno_id);

        res.json(aluno);
    }

    async updateAluno(req, res) {
        let { id, name } = req.body;

        let aluno = await AlunoModel.updateAluno(id, name);

        res.json(aluno);
    }

    async deleteAluno(req, res) {
        let { id } = req.body;

        let aluno = await AlunoModel.alunoEmployee(id);

        res.json(aluno);
    }

    async getAluno(req, res) {
        let { id } = req.body;

        let aluno = await AlunoModel.getAluno(id);

        res.json(aluno);
    }
}

module.exports = new AlunoController();