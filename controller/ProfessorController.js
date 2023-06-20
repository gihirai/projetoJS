const ProfessorModel = require('../model/Professor');

class ProfessorController {
    async listProfessor(req, res) {
        let professores = await ProfessorModel.getAllProfessores();

        res.json(professores);
    }

    async createProfessor(req, res) {
        let {
            name,
            professor_id,
        } = req.body;

        let professor = await ProfessorModel.createProfessor(name, professor_id);

        res.json(professor);
    }

    async updateProfessor(req, res) {
        let { id, name } = req.body;

        let professor = await ProfessorModel.updateProfessor(name, id);

        res.json(professor);
    }

    async deleteProfessor(req, res) {
        let { id } = req.body;

        let professor = await ProfessorModel.deleteProfessor(id);

        res.json(professor);
    }

    async getProfessor(req, res) {
        let { id } = req.body;

        let professor = await ProfessorModel.getProfessor(id);

        res.json(professor);
    }
}

module.exports = new ProfessorController();