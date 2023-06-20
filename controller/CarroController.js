const CarroModel = require('../model/Carro');

class CarroController {
    async listCarrp(req, res) {
        let carros = await CarrosModel.getAllCarros();

        res.json(carros);
    }

    async createCarro(req, res) {
        let {
            placa,
            carro_id,
            modelo
        } = req.body;

        let carro = await CarroModel.createCarro(placa, carro_id, modelo);

        res.json(carro);
    }

    async updateCarro(req, res) {
        let { placa, carro_id, modelo } = req.body;

        let carro = await CarroModel.updateAula(placa, carro_id, modelo);

        res.json(carro);
    }

    async deleteCarro(req, res) {
        let { id } = req.body;

        let carro = await CarroModel.deleteCarro(id);

        res.json(carro);
    }

    async getCarro(req, res) {
        let { id } = req.body;

        let carro = await CarroModel.getCarro(id);

        res.json(carro);
    }
}

module.exports = new CarroController();