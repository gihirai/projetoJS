const AulaModel = require('../model/Aula');

class AulaController {
    async listAula(req, res) {
        let aulas = await AulasModel.getAllaulas();

        res.json(aulas);
    }

    async createAula(req, res) {
        let {
            professor_id,
            has_hour_base,
            carro
        } = req.body;

        let aula = await AulaModel.createAula(professor_id, has_hour_base, carro);

        res.json(aula);
    }

    async updateAula(req, res) {
        let { professor_id, has_hour_base, carro } = req.body;

        let aula = await AulaModel.updateAula(professor_id, has_hour_base, carro);

        res.json(aula);
    }

    async deleteAula(req, res) {
        let { id } = req.body;

        let aula = await AulaModel.deleteAula(id);

        res.json(aula);
    }

    async getAula(req, res) {
        let { id } = req.body;

        let aula = await AulaModel.getAula(id);

        res.json(aula);
    }
}

module.exports = new AulaController();